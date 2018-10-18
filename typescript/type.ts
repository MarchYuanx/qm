let isDone:boolean = false;
isDone = true;
isDone = !true;

let decLiteral: number = 6;
decLiteral = 7;
let hexLiteral:number = 0xf00d;
let binaryLiteral:number = 0b1010;
let octalLiteral:number = 0o744;

let nickname:string="bob";
let age:number = 37;
let sentence:string =`Hello, my name is ${nickname} I'll be ${age++} years old next month`;

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3,];


let notSure:any = 4;
notSure ="four";
notSure = 222;
notSure = null;
notSure = undefined;