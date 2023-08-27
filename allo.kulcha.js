// function getallo(callback) {
//     setTimeout(() => {
//         const allo = "🥔";
//         console.log("here we get the allo", allo);
//         callback(allo);
//     }, 500);
// }
// function makedough(allo, callback) {
//     setTimeout(() => {
//         const dough = allo + "🍩";
//         console.log("dough is ready and here is the raw dough", dough);
//         callback(dough);
//     }, 1000);
// }

// function makeAlloKulcha(allo, dough, callback) {
//     setTimeout(() => {
//         const kulcha = allo + dough + "🍞";
//         console.log("Kulcha is ready", kulcha);
//         callback(kulcha);
//     }, 150);
// }

// getallo((allo)=> {
//     makedough(allo, (dough) => {
//         makeAlloKulcha(allo, dough, (kulcha) => {
//             console.log("Kulcha is served");
//         });
//     });
// });


function getpatila(callback) {
    setTimeout(() => {
        const patila = "🍵";
        console.log("here we get the patila", patila);
        callback(patila);
    }, 500);
}

function addwater(patila, callback) {
    setTimeout(() => {
        const water = patila + "💧";
        console.log("add water to patila", water);
        callback(water);
    }, 1000);
}

function addtealeaf(patila, water, callback) {
    setTimeout(() => {
        const tealeaf = patila + water + "🍃";
        console.log("now add tealeaf to patila", tealeaf);
        callback(tealeaf);
    }, 1000);
}

function addsugar(patila, water, tealeaf, callback) {
    setTimeout(() => {
        const sugar = patila + water + tealeaf + "🧂";
        console.log("sugar added to patila", sugar);
        callback(sugar);
    }, 500);
}

function addboil(patila, water, tealeaf, sugar, callback) {
    setTimeout(() => {
        const boil = patila + water + tealeaf + sugar + "🔥";
        console.log("Boiling time!", boil);
        callback(boil);
    }, 1000);
}

function addinCup(patila, water, tealeaf, sugar, boil, callback) {
    setTimeout(() => {
        const inCup = patila + water + tealeaf + sugar + boil + "☕";
        console.log('serve in cup', inCup );
        callback (inCup);
    }, 1000);
}

getpatila((patila)=> {
    addwater(patila, (water) => {
        addtealeaf(patila, water, (tealeaf) => {
            addsugar(patila, water, tealeaf, (sugar) => {
                addboil(patila, water, tealeaf, sugar, (boil) => {
                    addinCup(patila, water, tealeaf, sugar, boil, (cup) => {
                        console.log(`Tea is Ready ☕`);
                    });
                });
            });
        });
    });
});