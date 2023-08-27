//promise
// const PlaceOrder = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("order placed");
//             resolve();
//         }, 2000);
//     });
// };

// const productName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Product name");
//             resolve();
//         }, 5000);
//     });
// };

// const printId = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Id printed");
//             resolve();
//         }, 5000);
//     });
// };

// console.log("order is now going to take");
// PlaceOrder()
//     .then(() => {
//         console.log("Product is in production...");
//         return startProduction();
//     })
//     .then(() => {
//         console.log("Id printing is started...");
//         return PrintId();
//     })
//     .then(() => {
//         console.log("product name is start printing...");
//         return productionName();
//     })
//     .then(() => {
//         console.log("Description started printing...");
//         return productionDes();
//     })



async function fetchData() {

    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/todos/1") 

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        } 
    catch (error) {
        console.error("Error fetching data: ", error);
    }
}
fetchData();