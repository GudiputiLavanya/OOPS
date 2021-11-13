let delay = 3000;
const printnumbers = async() => {
    await promise1;
}
let promise1 = new Promise((resolve) => {
    function getNumber() {
        let i = 0;
        const Id = setInterval(() => {
            console.log(i);
            i++;
            if (i === 11)
                clearInterval(Id);
        }, delay);
    }
    getNumber()
});
printnumbers();