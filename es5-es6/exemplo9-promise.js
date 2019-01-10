let booleanValue = true;

const myPromise = new Promise((resolve, reject) => {
    if (booleanValue) {
        resolve('Promise TRUE!');
    }
    reject('Promise not true');
});

myPromise.then(result => {
    console.log(result)
})