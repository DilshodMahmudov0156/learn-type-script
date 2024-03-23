// array -----------


const colors: string = ["yellow", "green", "white"];
const number: number = [1, 2, 3, 4];


// any -------------


const smth: any = 1;
console.log(smth);

smth = "Sm";
console.log(smth);

smth = ["black", "white"];
console.log(smth);

smth = {
    name: "bmw",
    color: "black"
};
console.log(smth);


// Function -----------

// case 1
function logger(a: number): number {
    return a * 2;
};

// case 2
function logger(a: number): string {
    return `${a * 2}`;
};

// case 3
function logger(a: number | string): void {
    if (typeof a === "number"){
        console.log(a.toFixed())
    }else if(typeof a === "string"){
        console.log(a.toLowerCase())
    }
}