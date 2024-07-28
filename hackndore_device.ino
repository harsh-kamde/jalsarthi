#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

// Replace with your network credentials
const char *ssid = "OPPO";
const char *password = "0987654321";

// Server URL
const char *serverUrl = "http://localhost:5008/api/v1/water-usage";

// Pin definitions
#define RELAY_PIN D1
#define FLOW_SENSOR_PIN D2

volatile int flowPulseCount = 0;
float flowRate;
unsigned long currentTime;
unsigned long cloopTime;

void IRAM_ATTR pulseCounter()
{
    flowPulseCount++;
}

void setup()
{
    Serial.begin(115200);

    // Initialize the relay pin as output
    pinMode(RELAY_PIN, OUTPUT);
    digitalWrite(RELAY_PIN, LOW); // Turn off the relay

    // Initialize the flow sensor pin
    pinMode(FLOW_SENSOR_PIN, INPUT);
    attachInterrupt(digitalPinToInterrupt(FLOW_SENSOR_PIN), pulseCounter, FALLING);

    // Connect to WiFi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
}

void loop()
{
    currentTime = millis();
    // Calculate flow rate every second
    if (currentTime - cloopTime > 1000)
    {
        cloopTime = currentTime;

        // Calculate the flow rate in liters/minute
        flowRate = (flowPulseCount / 7.5); 
        flowPulseCount = 0;                
        Serial.print("Flow rate: ");
        Serial.print(flowRate);
        Serial.println(" L/min");

        // Send data to server
        if (WiFi.status() == WL_CONNECTED)
        {
            HTTPClient http;
            http.begin(serverUrl);
            http.addHeader("Content-Type", "application/json");

            StaticJsonDocument<200> jsonDoc;
            jsonDoc["household"] = "66a3e395635458082456b2d4"; 
            jsonDoc["usage"] = flowRate;

            String requestBody;
            serializeJson(jsonDoc, requestBody);

            int httpResponseCode = http.POST(requestBody);

            if (httpResponseCode > 0)
            {
                String response = http.getString();
                Serial.println(httpResponseCode);
                Serial.println(response);
            }
            else
            {
                Serial.print("Error on sending POST: ");
                Serial.println(httpResponseCode);
            }
            http.end();
        }
    }
}
