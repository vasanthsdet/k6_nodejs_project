# k6_nodejs_project

k6 is a modern, open-source load testing tool that is designed for testing the performance of APIs, including REST and gRPC services. It is developer-centric and allows writing test scripts in JavaScript, making it highly extensible and easy to use.

## Getting Started for Developers

If you are a developer who wants to contribute to the project, please follow the steps in this section.

### Pre-Requisites

- [Download] (https://nodejs.org/en/download/package-manager) Install Node.js and setup the path
- Install [VScode] (https://code.visualstudio.com/download)
- Install k6 
   ```
   wget https://github.com/k6io/k6/releases/download/v0.42.0/k6-v0.42.0-linux-amd64.tar.gz
   tar -xvf k6-v0.42.0-linux-amd64.tar.gz
   sudo mv k6-v0.42.0-linux-amd64/k6 /usr/local/bin/

   ```
- Verify Installation

   ```
    k6 version

   ```