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
   k6 stdout: 
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: scripts/test-script.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m01.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   3% ] 10 VUs  01.0s/30s

running (0m02.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   7% ] 10 VUs  02.0s/30s

running (0m03.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  10% ] 10 VUs  03.0s/30s

running (0m04.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  13% ] 10 VUs  04.0s/30s

running (0m05.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  17% ] 10 VUs  05.0s/30s

running (0m06.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  20% ] 10 VUs  06.0s/30s

running (0m07.0s), 10/10 VUs, 10 complete and 0 interrupted iterations
default   [  23% ] 10 VUs  07.0s/30s

running (0m08.0s), 10/10 VUs, 18 complete and 0 interrupted iterations
default   [  27% ] 10 VUs  08.0s/30s

running (0m09.0s), 10/10 VUs, 20 complete and 0 interrupted iterations
default   [  30% ] 10 VUs  09.0s/30s

running (0m10.0s), 10/10 VUs, 30 complete and 0 interrupted iterations
default   [  33% ] 10 VUs  10.0s/30s

running (0m11.0s), 10/10 VUs, 40 complete and 0 interrupted iterations
default   [  37% ] 10 VUs  11.0s/30s

running (0m12.0s), 10/10 VUs, 50 complete and 0 interrupted iterations
default   [  40% ] 10 VUs  12.0s/30s

running (0m13.0s), 10/10 VUs, 58 complete and 0 interrupted iterations
default   [  43% ] 10 VUs  13.0s/30s

running (0m14.0s), 10/10 VUs, 60 complete and 0 interrupted iterations
default   [  47% ] 10 VUs  14.0s/30s

running (0m15.0s), 10/10 VUs, 70 complete and 0 interrupted iterations
default   [  50% ] 10 VUs  15.0s/30s

running (0m16.0s), 10/10 VUs, 80 complete and 0 interrupted iterations
default   [  53% ] 10 VUs  16.0s/30s

running (0m17.0s), 10/10 VUs, 90 complete and 0 interrupted iterations
default   [  57% ] 10 VUs  17.0s/30s

running (0m18.0s), 10/10 VUs, 98 complete and 0 interrupted iterations
default   [  60% ] 10 VUs  18.0s/30s

running (0m19.0s), 10/10 VUs, 105 complete and 0 interrupted iterations
default   [  63% ] 10 VUs  19.0s/30s

running (0m20.0s), 10/10 VUs, 110 complete and 0 interrupted iterations
default   [  67% ] 10 VUs  20.0s/30s

running (0m21.0s), 10/10 VUs, 120 complete and 0 interrupted iterations
default   [  70% ] 10 VUs  21.0s/30s

running (0m22.0s), 10/10 VUs, 130 complete and 0 interrupted iterations
default   [  73% ] 10 VUs  22.0s/30s

running (0m23.0s), 10/10 VUs, 138 complete and 0 interrupted iterations
default   [  77% ] 10 VUs  23.0s/30s

running (0m24.0s), 10/10 VUs, 147 complete and 0 interrupted iterations
default   [  80% ] 10 VUs  24.0s/30s

running (0m25.0s), 10/10 VUs, 150 complete and 0 interrupted iterations
default   [  83% ] 10 VUs  25.0s/30s

running (0m26.0s), 10/10 VUs, 160 complete and 0 interrupted iterations
default   [  87% ] 10 VUs  26.0s/30s

running (0m27.0s), 10/10 VUs, 170 complete and 0 interrupted iterations
default   [  90% ] 10 VUs  27.0s/30s

running (0m28.0s), 10/10 VUs, 178 complete and 0 interrupted iterations
default   [  93% ] 10 VUs  28.0s/30s

running (0m29.0s), 10/10 VUs, 187 complete and 0 interrupted iterations
default   [  97% ] 10 VUs  29.0s/30s

running (0m30.0s), 10/10 VUs, 191 complete and 0 interrupted iterations
default   [ 100% ] 10 VUs  30.0s/30s

running (0m31.0s), 01/10 VUs, 200 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  30s

running (0m31.2s), 00/10 VUs, 201 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  30s

     ✗ status is 200
      ↳  99% — ✓ 200 / ✗ 1

     checks.........................: 99.50% ✓ 200      ✗ 1   
     data_received..................: 114 kB 3.6 kB/s
     data_sent......................: 28 kB  896 B/s
   ✓ errors.........................: 0.49%  ✓ 1        ✗ 200 
     http_req_blocked...............: avg=271.35ms min=4.52µs   med=15.35µs  max=5.48s    p(90)=24.78µs  p(95)=96.26µs 
     http_req_connecting............: avg=10.84ms  min=0s       med=0s       max=234.09ms p(90)=0s       p(95)=0s      
   ✓ http_req_duration..............: avg=236.13ms min=215.17ms med=230.39ms max=385.55ms p(90)=248.57ms p(95)=255.53ms
       { expected_response:true }...: avg=236.23ms min=218.65ms med=230.57ms max=385.55ms p(90)=248.58ms p(95)=255.56ms
     http_req_failed................: 0.49%  ✓ 1        ✗ 200 
     http_req_receiving.............: avg=225.82µs min=65.05µs  med=215.07µs max=447.26µs p(90)=302.77µs p(95)=323.97µs
     http_req_sending...............: avg=79.38µs  min=17.76µs  med=75.27µs  max=242.93µs p(90)=108.74µs p(95)=128.06µs
     http_req_tls_handshaking.......: avg=11.02ms  min=0s       med=0s       max=236.35ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=235.82ms min=214.83ms med=229.93ms max=385.15ms p(90)=248.25ms p(95)=255.19ms
     http_reqs......................: 201    6.439503/s
     iteration_duration.............: avg=1.5s     min=1.21s    med=1.23s    max=6.85s    p(90)=1.25s    p(95)=1.35s   
     iterations.....................: 201    6.439503/s
     vus............................: 1      min=1      max=10
     vus_max........................: 10     min=10     max=10


k6 stderr: 
   ```