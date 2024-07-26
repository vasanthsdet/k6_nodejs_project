import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

// Define custom metrics
let errorRate = new Rate('errors');


export let options = {
    vus: 2, // Number of virtual users
    duration: '90s', // Duration of the test
    thresholds: {
        'http_req_duration': ['p(95)<200'], // 95% of requests should be below 500ms
        'errors': ['rate<0.01'], // Error rate should be less than 1%
    },
};

export default function () {
    // Define the URL of the API endpoint
    const url = `https://rahulshettyacademy.com/maps/api/place/add/json?key=qaclick${Math.random(2)}`;
    
    // Define the payload for the POST request
    const payload = JSON.stringify({
        location: {
          lat: -38.383494,
          lng: 33.427362
        },
        accuracy: 50,
        name: "VBR",
        phone_number: "(+91) 983 893 3937",
        address: "address",
        types: [
          "shoe park",
          "shop"
        ],
        website: "http://google.com",
        language: "French-IN"
      }
      );
    
    // Define the headers for the POST request
    const params = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    // Make the POST request
    const response = http.post(url, payload, params);
    
    // Check the response status
    check(response, {
      'is status 200': (r) => r.status === 200,
      'response time is less than 200ms': (r) => r.timings.duration < 200
    });
    // Track errors
    errorRate.add(!response);
    
    // Sleep for a short duration to simulate a real user
    sleep(1);
  }