export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // You can resolve with any value you deem appropriate
        // For example, resolving with a simple object or string
        resolve({ data: 'This is a mock response' });
    });
}

// The function can be used as follows:
const response = getResponseFromAPI();
console.log(response instanceof Promise); // This will log 'true'

