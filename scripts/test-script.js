import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

// Define custom metrics
let errorRate = new Rate('errors');

export let options = {
    vus: 5, // Number of virtual users
    duration: '20s', // Duration of the test
    thresholds: {
        'http_req_duration': ['p(95)<400'], // 95% of requests should be below 500ms
        'errors': ['rate<0.01'], // Error rate should be less than 1%
    },
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/1/');
    
    // Check for successful response
    let success = check(res, {
        'status is 200': (r) => r.status === 200,
    });

    // Track errors
    errorRate.add(!success);

    sleep(1);
}

