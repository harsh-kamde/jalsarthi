# JalSaarthi - Water Supply Management System

Welcome to the JalSaarthi project! This README provides instructions for setting up and running the project in both development and production environments.
We are always ready to serve you! Visit: www.nirogsathi.in


![image](https://github.com/user-attachments/assets/3aecc7b9-c668-4d06-ac3f-93489b6e9217)


## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Development Setup](#development-setup)
   - [Production Setup](#production-setup)
5. [Branches](#branches)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

JalSaarthi is a comprehensive web application designed to manage and monitor water supply and usage for municipal corporations. It allows for efficient tracking and management of water resources, ensuring optimized distribution and reducing waste.

## Features

- **Dashboard** for water usage and distribution management
- **ManageUsage** for tracking water usage
- **ManageDistribution** for optimizing water distribution
- **ManageLeakages** for detecting and managing water leakages
- **ManageUsers** for user management
- **ManageContactMessages** for handling user queries and contact messages
- **Automated notifications** for maintenance and usage metrics
- **Real-time data visualization** and reporting
- **Leak detection** with smart valves and predictive analytics
- **User rewards system** for water conservation
- **Monthly and yearly reports** on water distribution and usage
- **Contact Us** feature integrated with the backend
- **Point redemption system** for users
- **Instant leakages Reporting** visible to specific users
- **Low Cost Implementation** NodeMCU+Relay+Waterflow-sensor for real-time data

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **IoT Programming**: Arduino IDE
- **Deployment**: Vercel, GitHub
- **CI/CD**: GitHub Actions

## Getting Started

### Development Setup

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/jalsaarthi.git
   cd jalsaarthi
   ```

2. Checkout the Development Branch:
   ```bash
   git checkout development
   ```

3. Install Dependencies:
   ```bash
   npm install
   ```

4. Set Environment Variables:
   - Create a `.env` file in the root directory and add the necessary environment variables.

5. Run the Development Server:
   ```bash
   npm run dev
   ```

6. Access the Application:
   - Open your browser and navigate to `http://localhost:3000`

### Production Setup

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/jalsaarthi.git
   cd jalsaarthi
   ```

2. Checkout the Main Branch:
   ```bash
   git checkout main
   ```

3. Install Dependencies:
   ```bash
   npm install
   ```

4. Set Environment Variables:
   - Create a `.env` file in the root directory and add the necessary environment variables.

5. Build the Application:
   ```bash
   npm run build
   ```

6. Start the Production Server:
   ```bash
   npm start
   ```

## Branches

- `main`: Production-ready code.
- `development`: Development and testing of new features.
- `feature/<feature-name>`: Individual feature branches.

## Deployment

### Continuous Deployment with Vercel

1. Connect GitHub Repository to Vercel:
   - In Vercel, create a new project and link it to your GitHub repository.
   - Vercel will automatically deploy branches.

2. Environment Variables:
   - Set environment variables in Vercel for both development and production branches.

3. Custom Domains:
   - Assign custom domains to the production branch in Vercel settings.

## Contributing

We welcome contributions from the community. Please follow these steps:

1. Fork the repository.
2. Create a new branch from `development`.
3. Make your changes.
4. Open a pull request to the `development` branch.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to adjust any details specific to your project!
