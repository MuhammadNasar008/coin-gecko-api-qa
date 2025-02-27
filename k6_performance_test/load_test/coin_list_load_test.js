import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 50 },  // Ramp up to 50 users over 30 seconds
        { duration: '1m', target: 50 },   // Stay at 50 users for 1 minute
        { duration: '30s', target: 0 },   // Ramp down to 0 users over 30 seconds
    ],
};

export default function () {
    let response = http.get('https://api.coingecko.com/api/v3/coins/list');
    
    // Check if the response is valid
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });

    // Parse the response body
    let coins = JSON.parse(response.body);

    // Check if the response is an array and contains Bitcoin
    check(coins, {
        'Response is an array': (c) => Array.isArray(c),
        'Response contains Bitcoin': (c) => Array.isArray(c) && c.some(coin => coin.id === 'bitcoin'),
    });

    sleep(1); // Simulate user think time
}