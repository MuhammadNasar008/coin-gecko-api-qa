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
    let response = http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin');
    
    // Check if the response is valid
    check(response, {
        'Status is 200': (r) => r.status === 200,
    });

    // Parse the response body
    let marketData = JSON.parse(response.body);

    // Check if the response is an array and contains Bitcoin market data
    check(marketData, {
        'Response is an array': (data) => Array.isArray(data),
        'Response contains Bitcoin market data': (data) => Array.isArray(data) && data.some(coin => coin.id === 'bitcoin'),
    });

    sleep(1); // Simulate user think time
}