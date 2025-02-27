# CoinGecko API QA Testing

This repository contains the test scripts, reports, and documentation for the **QA Testing of CoinGecko APIs**. The project focuses on testing the **functionality**, **performance**, **data accuracy**, **error handling**, and **security** of the CoinGecko APIs.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setup and Installation](#setup-and-installation)
4. [Running Tests](#running-tests)
   - [Manual Testing](#manual-testing)
   - [Automated Testing](#automated-testing)
   - [Performance Testing](#performance-testing)
5. [CI/CD Integration](#cicd-integration)
6. [Repository Structure](#repository-structure)

---

## Introduction
This project tests the following CoinGecko API endpoints:
- **Simple Price**: `GET /simple/price`
- **Coin List**: `GET /coins/list`
- **Coin Markets**: `GET /coins/markets`

The testing process includes:
- **Manual Testing**: Using Postman.
- **Automated Testing**: Using Newman.
- **Performance Testing**: Using K6.
- **Security Testing**: SQL injection, access control, and data encryption.

---

## Prerequisites
Before setting up the project, ensure you have the following installed:
1. **Node.js** (v18 or higher): [Download Node.js](https://nodejs.org/)
2. **Postman**: [Download Postman](https://www.postman.com/downloads/)
3. **K6**: [Install K6](https://k6.io/docs/get-started/installation/)
4. **Git**: [Install Git](https://git-scm.com/downloads)

---

## Setup and Installation
### 1. Clone the Repository
1. Open **Command Prompt** or **Git Bash**.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/coin-gecko-api-qa.git
   cd coin-gecko-api-qa
### 2. Install Newman
1. Open Command Prompt or Git Bash.
2. Run the following command to install Newman globally:
    `npm install -g newman`
### 3. Set Up Postman Environment
1. Open Postman.
2. Click on Import and import the following files:
    - Environment file: `CoinGeeko_API_Environment.json`
    - Collection file: `CoinGeeko_API_Collection.json`
3. Select the imported environment from the dropdown menu in Postman.
### 4. Install K6
1. Download the K6 installer for Windows from the [official K6 website](https://grafana.com/docs/k6/latest/set-up/install-k6/).
2. Run the installer and follow the on-screen instructions.
3. Verify the installation by opening Command Prompt and running: 
    `k6 version`

---

## Running Tests
### Manual Testing
1. Open Postman.
2. Select the imported collection: `CoinGeeko_API_Collection.json`
3. Select the environment: `CoinGeeko_API_Environment.json`
4. Click Send to run the requests manually.
### Automated Testing
1. Open Command Prompt or Git Bash.
2. Run the following command to execute the Postman collection using Newman:
    `newman run CoinGeeko_API_Collection.json -e CoinGeeko_API_Environment.json`
3. Analyze the results in the terminal.    
### Performance Testing
1. Open Command Prompt or Git Bash. 
2. Navigate to the 'k6_performance_test/' directory:
    `cd k6_performance_test`
3. Run the load tests:
    `k6 run load_test/simple_price_load_test.js`
    `k6 run load_test/coin_list_load_test.js`
    `k6 run load_test/coin_markets_load_test.js` 
4. Run the stress tests:
    `k6 run stress_test/simple_price_stress_test.js`
    `k6 run stress_test/coin_list_stress_test.js`
    `k6 run stress_test/coin_markets_stress_test.js` 
5. Analyze the results in the terminal.    

---

## CI/CD Integration
This project includes a CI/CD pipeline using GitHub Actions to automate API testing with Newman.

### How It Works
1. The workflow is triggered on push and pull_request events to the main branch.
2. The pipeline:

    - Checks out the repository.
    - Sets up Node.js.
    - Installs Newman.
    - Runs the Postman collection using Newman.

### View CI/CD Results
- Go to the Actions tab in your GitHub repository.
- Check the workflow runs for detailed logs and test results.

---

## Repository Structure

![image](https://github.com/user-attachments/assets/2521055b-9018-473a-af81-be9b891601b3)


coin-gecko-api-qa/
├── .github/
│   └── workflows/
│       └── newman-ci.yml
├── CoinGeeko_API_Collection.json
├── CoinGeeko_API_Environment.json
├── k6_performance_test/
│   ├── load_test/
│   │   ├── coin_list_load_test.js
│   │   ├── coin_markets_load_test.js
│   │   └── simple_price_load_test.js
│   └── stress_test/
│       ├── coin_list_stress_test.js
│       ├── coin_markets_stress_test.js
│       └── simple_price_stress_test.js
├── Performance Testing Report for CoinGeeko...
├── README.md
