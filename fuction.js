// function calculator(a,b,operation)
// {
//     return operation(a,b);
// }
// function sub(a,b)
// {
//     return a-b;
// }
// let res = calculator(5,4,sub);
// console.log(res)

const printID = (callback) => {
    setTimeout(()=> {
        console.log("ID printed");
        callback();
    }, 5000);
};
const productName = (callback) => {
    setTimeout (()=> {
        console.log("product")
    })
}

console.log("order is now going to take");
placeorder(()=>{
    console.log('pass to production');
    startProduction(()=>{
        console.log('passing to ID');
        printID(()=>{
            console.log('pasing to product name');
            productName(()=>{
                console.log('pass to product desc');
                productDesc(()=>{
                    console.log('All task are done');
                })
            })

        })
    })
})