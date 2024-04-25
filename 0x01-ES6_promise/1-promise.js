export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}

// The function can be used as follows:
console.log(getFullResponseFromAPI(true)); // This will log a Promise that resolves to { status: 200, body: 'Success' }
console.log(getFullResponseFromAPI(false)); // This will log a Promise that gets rejected with an Error

