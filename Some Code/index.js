// let title = "Rush Hour";
// console.log(title);
// title = "Rush Hour 2";
// console.log(title);

// const ip_address_server_1415 = "192.168.0.1/255.255.255.0";
// console.log(ip_address_server_1415);

// let array = [
//     title,
//     ip_address_server_1415,
//     true
// ]
// console.log(array);

// let object = {
//     title: "Borat",
//     ip_address_server_1415: "192.168.0.11/255.255.255.0"
// }
// console.log(object);
//
// for (let i = 0; i <array.length; i++) {
//     console.log(array[i]);
// }
//
// for (let element of array) {
//     console.log(element);
// }

// let i = 0;
// while(i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// function func() {
//     console.log("Executed the function");
// }
// func();
//
// const secondFunction = () => {
//     console.log("Executed the function");
// }
// secondFunction();

let data = [
    14,
    3,
    27,
    14,
    24
]

const modifiedArray = data.map((element) => {
    if (element === 3){
        element = 13
    }
    return element
})
// console.log(modifiedArray)

const filteredData = data.filter((element) => {
    if (element >= 20){
        return element
    }
})
// console.log(filteredData)

const foundElement = data.find((element) =>{
    if (element === 14) {
        return element;
    }
})
// console.log(foundElement)

const result = data.filter((element) => {
    if (element < 25){
        return element;
    }
})
// console.log(result)

const ElementFinder = data.find((element) => {
    if (element === 54){
        return element;
    }
})
console.log(ElementFinder)