// // array -----------
//
//
// const colors: string[] = ["yellow", "green", "white"];
// const number: number[] = [1, 2, 3, 4];
//
//
// // any -------------
//
//
// const smth: any = 1;
// console.log(smth);
//
// smth = "Sm";
// console.log(smth);
//
// smth = ["black", "white"];
// console.log(smth);
//
// smth = {
//     name: "bmw",
//     color: "black"
// };
// console.log(smth);
//
//
// // Function -----------
//
// // case 1
// function FirstLogger(a: number): number {
//     return a * 2;
// };
//
// // case 2
// function secondLogger(a: number): string {
//     return `${a * 2}`;
// };
//
// // case 3
//
// function thirdLogger (a: number): number | string {
//     return a;
// };
//
// // case 4
// function fourthLogger (a: number): void {
//     console.log(a);
// }
//
// // case 5
// function fifthLogger(a: number | string): void {
//     if (typeof a === "number"){
//         console.log(a.toFixed())
//     }else if(typeof a === "string"){
//         console.log(a.toLowerCase())
//     }
// };
//
// // year?: null === nomajburiy
//
// const logCar = (car: {name: string; year?: number}): string => {
//     return `name of car - ${car.name}, created year - ${car.year}`
// }
//
// console.log(logCar({name: "BMW"}));
//
//
//
//
//
// type CarType = {
//     name: string;
//     year?: number;
// };
//
//
// type numberOrString = number | string;
//
//
//
//
//
// const logCar = (car: iCar): string => {
//     return `name of car - ${car.name}, created year - ${car.year}`
// }
//
// console.log(logCar({name: "BMW"}));
//
//
//
// // case 1
// interface iCar {
//     name: string;
//     year?: number;
// }
// interface iBmw extends iCar{
//     color: string;
//     extrabaloon: boolean;
// }
//
// const logIcar = (data: iBmw): void => {
//     console.log(data)
// }
//
//
//
//
//
// // case 2
// type typeCar = {
//     name: string;
//     year: number;
// }
//
// type typeBmw = typeCar & {
//     color: string;
//     extrabaloon: boolean;
// }
//
// const logTypeBmw = (data: typeBmw): void => {
//     console.log(data)
// }
//
//
// interface IPoint {
//     x: number;
//     y: number;
// }
//
// interface I3DPoint extends IPoint {
//     z: number;
// }
//
// function logIPoint(point: IPoint): void {
//     const d3: I3DPointi = point as I3DPoint;
//
// }
//
//
// // literal type
// const something: "mers" = "mers";
//
//
//
// // literal type with function
// type action = "show" | "hide";
//
// function logger(actionType: action): 1 | -1 {
//     switch (actionType) {
//         case "hide":
//             return -1;
//         case "show":
//             return 1;
//     }
// }
//
//
// // ENUM
//
// enum Dictionary {
//     Uzb,
//     Rus,
//     Eng,
// }
//
// const numIndex = Dictionary.Rus;
// const valueOfIndex = Dictionary[numIndex];
// console.log(valueOfIndex);
//
//
//
// enum Numbers {
//     One,
//     Two,
//     Three,
//     Four,
// }
//
// function getNumber(number: Numbers) {
//     switch (number) {
//         case Numbers.One:
//             return "Uzb";
//         case Numbers.Two:
//             return "Rus";
//         case Numbers.Three:
//             return "Eng";
//         case Numbers.Four:
//             return "French"
//         default:
//             const a: never = number;
//     }
// }
//
//
//
//
// // Tuples ----in this case you have to use only limeted datas!
//
// const array: [number, number, string] = [1, 2, "a"];
//
//
// // Generics
//
// function loggerTime<T>(data: T): T {
//     console.log(new Date());
//     return data;
// };
//
// loggerTime<number>(9);
// loggerTime<string>("Dilshod");
//
// interface ICar {
//     name: string;
//     color: string;
// };
//
// const car = {
//     name: "Bmw",
//     color: "black"
// };
//
// const myCar = loggerTime<ICar>(car);
//
//
//
//
//
//  Generics
// class Car<T>{
//     data: T;
// }
//
// const a = new Car<number>();
//
//
//
//

// Generics --- connecting extended data
//
// interface ICar {
//     name: string;
// }
//
// function logger<T extends ICar>(data: T): T {
//     return data.name;
// }
//
// logger<string>();

