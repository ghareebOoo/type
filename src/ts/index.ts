let a:number = 10;
console.log(a)


let b:string = "ali"
console.log(b)


const names:string[] = ["ali" , "hassan" , "hany"]
console.log(names)
names.push("nour")
console.log(names)


const numbers:number[] = [1,2,3,4,5]
console.log(numbers)


const arr:(string | number  | boolean)[] = [ 4 , "ali" , "osama" , true , 3]
console.log(arr);


const myArray:[string , string , number] = [ "hany" , "car" , 2]
console.log(myArray)
myArray.push("ali")
console.log(myArray)


const newArrray: (number | string | string[])[] = [1,2,3,4 , "ali" , "hany" ,["mohamed" , "hassan"]]


const myClass:readonly(string | number | boolean)[] = ["mona" , 1 , true]
console.log(myClass)


type mix = (string | number | boolean)[]
const one:mix = ["ali" , 2 , false]
console.log(one)
const two:mix = ["mohamed" , 3 , true]
console.log(two)


// type newValue = 1 | -1
// Array.prototype.findElement = function(element) :newValue {
//     return 1
// }


const car:{
    color: string;
    price: number;
    modal: string;
} = {
    color: "red",
    price: 300,
    modal: "bmw",
}
console.log(car)

type mo = {
    color: string;
    price: number;
    modal: string;
}
type no = {
    year: number;
}
type mixed = mo & no;
const my: mixed = {
    color: "red",
    price: 20,
    modal: "bmw",
    year: 2024
}
console.log(my)


type modals = {
    color: string;
    price: number;
    modal: string;
    sayHello(): string;
    calcNum(num: number): number;
}
type modalInfo = modals & {
    year: number;
}
const myCar:modalInfo = {
    color: "red",
    price: 500,
    modal: "fiat",
    year: 2002,
    sayHello() {
    return (`hello , ${this.color}`)
    },
    calcNum(n){
        return n * 5
    } 
}
console.log(myCar)




interface car{
    color : string;
    price: number;
}
interface carInfo extends car{
    modal: string
}
interface carDetails extends carInfo{
    year: number
}
const mine:carDetails = {
    color: "red",
    price: 300,
    modal: "lancer",
    year: 2002
}
console.log(mine)



interface fiat{
    color : string;
    price: number;
}
interface lancer{
    modal: string
}
interface opp extends fiat , lancer{
    year: number
}
const iam:opp = {
    color: "red",
    price: 300,
    modal: "lancer",
    year: 2002
}
console.log(iam)




interface settings {
    name: string;
    color: string;
}
interface settings {
    year: number
}
const mySet : settings ={
    name: "mohamed",
    color : "red",
    year: 2024
}

function calcSum(num1:number , num2:number):number{
    return num1 + num2;
}
console.log(calcSum(4,5))


function calcNumber(num1:number = 5 , num2:number):string{

    // الرقم اللي مكتوب ده ديفولت فاليو لو ماكتبتش هو اللي هيظهر

    return `${num1 + num2}`
}
console.log(calcNumber(4,5))


function addAll(...nums: number[]):number {
    let result = 0;
    // for(let i = 0 ; i < nums.length; i++){
    //     result += nums[i]
    // }
    nums.forEach((num)=>{
        result += num;
    })
    return result;
}
console.log(addAll(1,2,3,4,5 , +true))

function showError(msg:string = "un"):never{
    throw new Error(msg)
}
try {
    showError("hello");
} catch (error) {
    console.log(error);
}


let str1:unknown = "hello"
if(typeof str1 == "string"){
    let newStr = str1.toUpperCase()
    console.log(newStr)
}


function reverse<type>(arr:type[]):type[]{
    let result:type[] = []
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i])
    }
    return result;
}
console.log(reverse<string>(["ali" , "hany" , "mohamed"]))



function multipleTypes<t , s>(valueOne: t , valueTwo: s):string{

    return `the first value is ${valueOne} , and the second value is ${valueTwo}`;
}
console.log(multipleTypes<string , number>("ali" , 100))

function myumber() :number{
    return 3;
}


class Instagram <t = string>{
    // هنا كده <t = string> بقوله الديفولت فاليو سترينج
    constructor(public value: t){}
    show(msg: t):void{
        console.log(`${msg} ${this.value}`)
    }
}
let insOne = new Instagram("Ghareeb");
console.log(insOne.value)
insOne.show("hany")
let insTwo = new Instagram<number | string>(100);
console.log(insTwo.value)
insTwo.show("play")



enum kids {
    one = 10,
    two = 15,
    three = 20
}
enum level {
    // Insane,
    Kids = 15,
    Easy = kids.one,
    // ممكن كده بردو 
    // Medium = Easy-3,
    Medium = 6,
    Hard = myumber(),
    Insane = 100 
    // علشان هيا تحت في الاخر لازم اديها قيمة مثلا لو كاتبها فوق اول حاجه ممكن اسيبها من غير قيمة وهو هيديها فرضا قيمة صفر
}
let lv1 = "Easy";
if(lv1 === "Easy"){
    console.log(`the level is ${lv1} and number of seconds is ${level.Easy}`)
}

// // let myImage = document.getElementById("#my-img") as HTMLImageElement;
// let myImage = <HTMLImageElement>document.getElementById("#my-img");
// console.log(myImage.src)


let data: any = "1000"
console.log((data as string).repeat(3))



class User{
    u:string
    s:number
    msg: ()=> string 
    constructor(username: string , salary:number){
        this.u = username,
        this.s = salary
        this.msg = function(){
            return `hello ${this.u} your salary is ${this.s}`
        }
    }

    sayMsg(){
        return `hello ${this.u} your salary is ${this.s}`
    }
}
let useOne = new User("ali" , 5000);
console.log(useOne.u)
console.log(useOne.s)
console.log(useOne.msg())
console.log(useOne.sayMsg())



class Admin{
    msg: ()=> string 
    constructor(private username: string , protected salary:number , public address: string){
        this.msg = function(){
            return `hello ${this.username} your salary is ${this.salary}`
        }
    }
    sayMsg(){
        return `hello ${this.username} your salary is ${this.salary}`
    }

    get name():string {
        return this.username
    }

    set name(value:string){
        this.username = value
    }
}
let adminOne = new Admin("ali" , 5000 , "cairo");
console.log(adminOne.name)
adminOne.name = "ali"
console.log(adminOne.address)
// مقدرشي اعمل نفس الشيء لل username و salay علشان هما واخدين private و protected
console.log(adminOne.msg())
console.log(adminOne.sayMsg())


class Loog{
    private static created: number = 0
    static getCount(): void{
       console.log(`${this.created} objects created`)
    }
    constructor(public username: string){
        Loog.created++
    }
}
let u1 = new Loog("ali");
let u2 = new Loog("hany");
let u3 = new Loog("hassan");
Loog.getCount()


interface social {
    theme: boolean;
    font?: string;
    save(): void;
}
class Facebook implements social {
    constructor(public username: string , public theme: boolean){
    }
    save(): void {
        console.log("saved");
    }
    update(): void {
        console.log("update");
    }
}
let f1 = new Facebook("mohamed" , true)
console.log(f1.username)
f1.save();


abstract class Food{
    constructor(public title: string){}

    abstract getCookingTime():void
    
}
class Pizza extends Food {
    constructor(title: string ,  public price:number){
        super(title)
    }
    getCookingTime():void{
        console.log("cooking pizza")
    }
}
class Burger extends Food {
    constructor(title: string ,  public price:number){
        super(title)
    }
    getCookingTime():void{
        console.log("cooking burger")
    }
}
let pizzaOne = new Pizza("mushrom" , 100)
console.log(pizzaOne.title)


class Player{
    constructor(public name:string){}
    attack() : void{
        console.log("iam attacking now")
    }
}
class Amozan extends Player {
    constructor(name: string , public spears: number){
        super(name)
    }
    override attack(): void {
        super.attack();
        console.log("attacking with spears");
        this.spears -=1;
    }
}
class Barbearn extends Player {
    constructor(name: string , public axeDurabilty: number){
        super(name)
    }
    override attack(): void {
        super.attack();
        console.log("attacking with axe");
        this.axeDurabilty -=1;
    }
}
let barOne = new Barbearn("hassan" , 100)
console.log(barOne.name)

// اللي جاي عباره عن انترفيس مع استخدام الجيميرك

interface storey{
    itemType : string;
    title: string;
    isbn: number;
}
interface game{
    itemType : string;
    title: string;
    style: string;
    price: number
}
class Collection <T>{
    public data: T[] = []
    add(item : T): void{
        this.data.push(item)
    }
}
let itemOne = new Collection<storey>();
itemOne.add({itemType: "book" , title: "spider" , isbn: 2})
itemOne.add({itemType: "book" , title: "follow your heart" , isbn: 3})
console.log(itemOne)
let itemTwo = new Collection<game>();
itemTwo.add({itemType: "book" , title: "spider" , style: "wavy" , price: 500})