import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 50 },  // Ramp up to 50 users over 30 seconds
        { duration: '1m', target: 100 },  // Ramp up to 100 users over 1 minute
        { duration: '1m', target: 150 },  // Ramp up to 150 users over 1 minute
        { duration: '30s', target: 0 },   // Ramp down to 0 users over 30 seconds
    ],
};

export default function () {
    let response = http.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response time < 500ms': (r) => r.timings.duration < 500,
    });
    sleep(1); // Simulate user think time
}