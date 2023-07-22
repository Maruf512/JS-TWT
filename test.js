// function
function func1() {
    console.log("This is a Function.");
}

// arrow function
const name = () => {
    return "hello";
};

// veriables
const name1 = "ghost";
const age = 20;
let number = 1;

// conditional veriable
const statement = age > 15 ? name1 : "Shadow";
console.log(statement);

// anonimus function
() => {
    console.log("This is an anonimus Function.");
};

// usage of .map function
const anArray = ["Motherboard", "Processor", "RAM", "SSD"];
anArray.filter((parts) => {
    return parts + "-1";
});
console.log(anArray);

// forEach loop
anArray.forEach((parts) => {
    console.log(parts);
});

// while loop
while (true) {
    console.log(number);
    number = number + 1;
    if (number > 10) {
        break;
    }
}
