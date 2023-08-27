//synchronous coding
// function main()
// {
//     placeorder();
//     startProduction();
//     printId();
//     productionName();
//     productDesc();
// }


// asynchronous coding
function delay(time)
{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve();
        }, time)
    })
}
async function placeOrder()
{
    await delay(2000);
    console.log('Placed order');
}
async function startProduction()
{
    await delay(2000);
    console.log('Placed order');
}
async function printId()
{
    await delay(2000);
    console.log('Id printed');
}
async function productionName()
{
    await delay(2000);
    console.log('name taken');
}
async function productDesc()
{
    await delay(2000);
    console.log('description taken');
}
async function main()
{
    console.log("Product is now going to be place");
    await placeOrder();
    console.log("Product is in the production...");
    await startProduction();
    console.log("Production is started...");
    await printId();
    console.log("Product Id is printed..");
    await productionName();
    console.log("Name of production");
    await productDesc();
    console.log("Product description");    
}
main();