let title = "Rush Hour";
// console.log(title);
title = "Rush Hour 2";
// console.log(title);

const ip_address_server_1415 = "192.168.0.1/255.255.255.0";
// console.log(ip_address_server_1415);

let array = [
    title,
    ip_address_server_1415,
    true
]
console.log(array);

let object = {
    title: "Borat",
    ip_address_server_1415: "192.168.0.11/255.255.255.0"
}
console.log(object);

for (let i = 0; i <array.length; i++) {
    console.log(array[i]);
}

for (let element of array) {
    console.log(element);
}

// let i = 0;
// while(i < array.length) {
//     console.log(array[i]);
//     i++;
// }

function func() {
    console.log("Executed the function");
}
func();

const secondFunction = () => {
    console.log("Executed the function");
}
secondFunction();