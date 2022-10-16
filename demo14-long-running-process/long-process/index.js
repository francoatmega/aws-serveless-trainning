const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    console.log('Starting process... ')
    await sleep(10000);
    console.log('Finising process... ')
})();