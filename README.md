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

### Clone the Repo (first time only)

- Clone the repo by:

** If you are using git from the terminal **

  ```
  git clone https://github.com/vasanthsdet/k6_nodejs_project.git
  cd k6_nodejs_project
  ```

  ### Project Setup

  - Open the code in VSCode

    ```

    code .
    ```
 
 - Install dependencies

    ```

    npm install
    ```

 - Your Node.js k6 Script

   ```
   node run-k6.js
   ```

 - Analyze the results

    ```
     data_received..................: 253 kB 8.3 kB/s
     data_sent......................: 17 kB  560 B/s
     http_req_blocked...............: avg=1.31ms   min=0s       med=0s       max=137.82ms p(90)=0s      p(95)=0s     
     http_req_connecting............: avg=169.5µs  min=0s       med=0s       max=16.86ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=115.94ms min=98.9ms   med=108.66ms max=223.19ms p(90)=130.88ms p(95)=141.18ms
       { expected_response:true }...: avg=115.94ms min=98.9ms   med=108.66ms max=223.19ms p(90)=130.88ms p(95)=141.18ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 171  
     http_req_receiving.............: avg=375.94µs min=204µs    med=354µs    max=873µs    p(90)=490.2µs p(95)=512.3µs 
     http_req_sending...............: avg=138.87µs min=76µs     med=125µs    max=651µs    p(90)=208.8µs p(95)=247.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=115.43ms min=98.51ms  med=108.2ms  max=222.91ms p(90)=130.35ms p(95)=140.64ms
     http_reqs......................: 171    5.628928/s
     iteration_duration.............: avg=1.7s     min=1.54s    med=1.61s    max=2.13s    p(90)=1.79s   p(95)=1.87s  
     iterations.....................: 171    5.628928/s
     vus............................: 10     min=10     max=10
     vus_max........................: 10     min=10     max=10

   ```