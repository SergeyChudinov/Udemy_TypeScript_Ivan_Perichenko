//23. Более продвинутый Type и пересечение типов (Intersection) &
type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;
const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3000,
  role: 'admin',
};
const backupConfig: Config = {
  protocol: 'http',
  port: 3001,
};
type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;
const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);
//24. Интерфейсы (Interfaces)
interface IConfig {
  // Можно через type!
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}
interface IRole {
  role: string; // "Server started"
}
interface IConfigWithRole extends IConfig, IRole {
  test: string;
}
const serverConfig2: IConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'admin',
  test: 'test',
  log: (msg: string): void => console.log(msg),
};
type StartFunction2 = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void // можно- log: Function
) => string; // Нельзя через interface! так-как тут-() , а нужно {}, что нельзя!
const startServer2: StartFunction2 = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void // можно- log: Function
): 'Server started' => {
  log(`Server started on ${protocol}://server:${port}`);
  return 'Server started';
};
startServer2(serverConfig2.protocol, serverConfig2.port, serverConfig2.log);

interface Styles {
  // position: string;
  // top: string;
  // left: string;
  [key: string]: string; //индексные свойства! вместо 3 позиций!
}
const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px',
};

const serverNewConfig: IBasicConfig = {
  //похожий пример , но по другомк реализован!
  protocol: 'https',
  port: 3001,
};
const backupNewConfig: IBasicConfig = {
  protocol: 'http',
  port: 3000,
};
interface IBasicConfig {
  protocol: string; // "http" | "https"
  port: number; // 3000 | 3001
}
const startServer3 = (config: IBasicConfig) => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return 'Server started';
};
startServer3(serverNewConfig);
startServer3(backupNewConfig);
//25. Type или Interface отдельные 2 файла
//27. Механизм вывода типов (Type Inference)
let a; // тут лучше указать тип!
a = 5; // тип- any!
let isOkay = true;
let movement: boolean | string = false; //аннотация
if (isOkay) {
  movement = 'moving';
}
const salary: number = 500; // тип- number
const salary2 = 500; // тип- 500
const arr = ['abc', 5]; // тип- (string | number)[]
const reviews: [string, number] = ['Sergey', 5]; // тип- [string, number]
//28. Модификаторы свойств - optional (Property Modifiers)
interface IUser {
  login: string;
  password: string;
  age: number;
  // addr?: string; //свойство не обязательно!
  addr: string | undefined; //свойство обязательно, но может быть undefined!
  parents?: {
    mother?: string;
    father?: string;
  };
}
const user: IUser = {
  login: 'first',
  password: 'qwerty',
  age: 37,
  addr: undefined,
};
const dbName = '12345';
function sendUserData(obj: IUser, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase()); //?. ставится само!
}
sendUserData(user);
sendUserData(user, dbName);
//29. (Доп) Оператор Non-Null and Non-Undefined - ! когда уверенны в свойстве
interface IUser2 {
  login: string;
  password: string;
  age: number;
  // addr?: string; //свойство не обязательно!
  addr: string | undefined; //свойство обязательно, но может быть undefined!
  parents?: {
    mother?: string;
    father?: string;
  };
}
const user2: IUser2 = {
  login: 'first',
  password: 'qwerty',
  age: 37,
  addr: undefined,
  parents: {
    mother: 'Mother',
    father: 'Father',
  },
};
let dbName2: string;
sendUserData2(user2, 'ajbahsgvb'); // функция задаст значение dbName2
console.log(dbName2!); // TS не знает что мы уже задали значение dbName2 выше
function sendUserData2(obj: IUser2, db?: string): void {
  dbName2 = '12345';
  console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase()); //?. ставится само!
}
//30. Модификаторы свойств - readonly (Property Modifiers)
interface IUser3 {
  readonly login: string; // readonly
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}
const user3: IUser3 = {
  login: 'first',
  password: 'qwerty',
  age: 37,
  addr: undefined,
};
// user3.login = '123'; // ошибка!
const basicPorts: readonly number[] = [3000, 3001, 5555];
const basicPorts2: readonly [number, ...string[]] = [3000, '3001', '5555'];
// readonly и дженерики!
interface User {
  login: string;
  password: string;
  age: number;
} // для обьекта!
const userFreeze: Readonly<User> = {
  login: 'first',
  password: 'qwerty',
  age: 50,
};
// userFreeze.age = 30; // ошибка!
const basicPorts3: ReadonlyArray<number> = [3000, 3001, 5555]; // для массива!
// basicPorts[0] = 9999; // нельзя именять!
// basicPorts.push(567); // Тоже нельзя!
//31. Enums
enum Direction { //enum компилируются в функцию!
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}
const enum TimingFunc { // если const, то компиляции инама не будет, а будет просто ссылка! Могут быть проблемы!
  EASE = 'ease',
  EASE_IN = 'ease-in',
  LINEAR = 'linear',
  // ERROR = 5, // гетерогенный enum, смесь строк и чисел, лучше так не делать!
}
const enum TimingFuncNum { // если const, то компиляции инама не будет, а будет просто ссылка! Могут быть проблемы!
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 3, // в чеслов энамах можно выаолнять алгоритмы!
}
function frame(elem: string, dir: Direction, tFunc: TimingFunc): void {
  if (dir === Direction.RIGHT) {
    console.log(tFunc);
  }
}
frame('id', Direction.RIGHT, TimingFunc.LINEAR); // frame("id", Direction.RIGHT, "linear" /* TimingFunc.LINEAR */);
//32. Тип Unknown. Unknown - безопасная альтернатива any
let smth: unknown; // если any , то ниже не покажет ошибку!
smth = 'str';
// let data: string[] = smth;
// data.find(e => e);
const someValue: unknown = 10; // если any , то ниже не покажет ошибку!
// someValue.forEach();

function fetchData(data: unknown): void {
  if (typeof data === 'string') {
    data.toLowerCase();
  }
}

const userData =
  '{"isBirthdayData": 50, "ageData": 40, "userNameData": "John"}';
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const data = safeParse(userData);
function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase());
    //условие (d instanceof Object)
  } else if (typeof d === 'object' && d) {
    console.log(d);
  } else {
    console.error('Some error');
  }
}
transferData(data);

type T0 = any | unknown; // => any
type T1 = number | unknown; // => unknown
type T2 = any & unknown; // => any
type T3 = number & unknown; // => number
//33. Запросы типов  // data: typeof dataFromControl
const dataFromControl = {
  water: 200,
  el: 350,
};
function checkReadings(data: typeof dataFromControl): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  };
  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    return true;
  } else {
    return false;
  }
}
console.log(checkReadings(dataFromControl));

const PI = 3.14;
let PIClone: typeof PI; // можно присвоить только 3.14
//35. Утверждение типов (Type Assertions)// as 'GET'
const fetchData2 = (url: string, method: 'GET' | 'POST'): void => {
  console.log(method);
};
type ReqOptions = {
  url: string;
  method: 'GET' | 'POST';
}; // 4-ый способ просто использ type или interfecse
const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET', // as 'GET' 2-ый способ
}; // as const 'GET' 3-ый способ
fetchData2('qqq', 'GET');
fetchData2(reqOptions.url, reqOptions.method as 'GET'); // as 'GET' 1-ый способ
fetchData2(reqOptions.url, <'GET'>reqOptions.method); // as 'GET' 5-ый способ

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement; // => Element | null
const box2 = <HTMLElement>document.querySelector('.box');
const input2 = <HTMLInputElement>document.querySelector('input');
box.style; // без HTMLElement будет ошибка!
box?.classList;
const someNumber: number = parseFloat(input.value);
const someNumber2: number = input.value as any as number; // 2-у преобразование
console.log(someNumber);
console.log(someNumber2 * 2);
// console.log(someNumber2.toFixed());// будет ошибка в браузере, так как это string

let a1 = 'value' as const; // a1: "value"
let obj = { f: 100 } as const; // readonly f: 100
let c = [] as const; // c: readonly []
// let bb = obj as const; // так нельзя!
// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; //TS не знает что будет!

//36. Немного про “внутренние” типы и приведение типов
let num: Number = new Number(5);
let num2: number = 5;
let num3 = Number(5);
let num4 = 5;
num = num2;
// num2 = num;

const str = '5a3';
const numStr: number = parseFloat(str);
console.log(numStr);

interface Department {
  name: string;
  budget: number;
}
const department: Department = {
  name: 'web-dev',
  budget: 50000,
};
interface Project {
  name: string;
  projectBudget: number;
}
const mainProject: Project = {
  //если мы так создадим объект, то будет лишнее поле budget
  ...department,
  projectBudget: 5000,
};
function transformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount,
  };
}
const newObj = transformDepartment(department, 49999);
console.log(newObj);

//37. Type Guard - Защитники типа
function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
  console.log(msg);
}
printMsg(4);
function isNumber(n: string[] | number | boolean): n is number {
  return typeof n === 'number';
}
function isNumber2(n: unknown): n is number {
  return typeof n === 'number';
}

interface Car {
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}
interface Ship {
  engine: string;
  sail: string;
}
function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    console.log(vehicle);
  } else if (isShip(vehicle)) {
    console.log(vehicle);
  } else {
    console.log(vehicle); // never
  }
}
function isCar(car: Car | Ship): car is Car {
  return 'wheels' in car;
}
// function isCar(car: Car | Ship): car is Car {
//   return (car as Car).wheels.number !== undefined; //(car as Car).wheels.number
// }
function isShip(ship: Car | Ship): ship is Ship {
  return 'sail' in ship;
}

//38. Кейс использования never
interface Car2 {
  name: 'car';
  engine: string;
  wheels: number;
}
interface Ship2 {
  name: 'ship';
  engine: string;
  sail: string;
}
interface Airplane2 {
  name: 'airplane';
  engine: string;
  wings: string;
}
interface SuperAirplane2 {
  name: 'smth';
  engine: string;
  wings: string;
}
type Vehicle2 = Car2 | Ship2 | Airplane2 | SuperAirplane2;
function repairVehicle2(vehicle: Vehicle2) {
  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels);
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    case 'smth':
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log('Ouuuups!');
  }
}

//39. Перегрузка функций, без нее будет меньше подсказок
interface Square {
  side: number;
  area: number;
}
interface Rect {
  a: number;
  b: number;
  area: number;
}
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;
function calculateArea(a: number, b?: number): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}
console.log(calculateArea(4));
console.log(calculateArea(2, 5));

//40. Разделение интерфейсов на правильные части
interface Car3 {
  name: 'car';
  engine: string;
  wheels: number;
}
interface Ship3 {
  name: 'ship';
  engine: string;
  sail: string;
}
interface Airplane3 {
  name: 'airplane';
  engine: string;
  wings: string;
}
interface ComplexVehicle {
  name: 'car' | 'ship' | 'airplane';
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
} //лучше не создавать один общий интерфей а испоользовать несколько , как написано выше
// type Vehicle3 = Car3 | Ship3 | Airplane3;
function repairVehicle3(vehicle: ComplexVehicle) {
  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels! * 2); // !- это not null, not undefined
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    default:
      // const smth: never = vehicle; // исчерпывающая проверка не будет работать!
      console.log('Ouuuups!');
  }
}
const car: ComplexVehicle = {
  name: 'car',
  engine: 'abc',
}; // нет свойства wheels, но лшибку не покажет так как у нас общий интерфейс!
repairVehicle3(car);

//42. Работа с DOM. Element =>HTMLElement =>HTMLAnchorElement
const box3 = document.querySelector('.box') as HTMLElement;
const input3 = document.querySelector('input'); //Ts сам пойймет тип, потому что указали селектор!
const link = document.querySelector('a'); // HTMLAnchorElement
const p = document.querySelector('.paragraph') as HTMLParagraphElement;
const links = document.querySelectorAll('.a') as NodeListOf<HTMLElement>;
// box3?.textContent = 'sdasdasd';
input3?.value; //сам поставит ?
// box3.val // не бужет подсказки value, так как input более спец-й элемент
if (link) {
  link.href = 'dasd';
}

const elem = document.createElement('a'); //подставил сам HTMLAnchorElement

link?.addEventListener(' ', (e) => {
  e.preventDefault()
});

//44. (Доп) Использование void внутри TS //void- это еще то , что мы хотим проигнорировать тип возвр. знач!
type voidFunc = () => void;
const retString: voidFunc = () => {
  // ...some magic
  return 'string';
}
const s = retString();  
console.log(s);
const retNum: voidFunc = () => {
  // ...some magic
  return 5;
};
const n = retNum();
console.log(n);
// const retNum2: void = () => { // так будет ошибка!
//   return 5;
// };

const names = ['Anna', 'John'];
const newArr = names.slice() 
names.forEach((name, i , arr) => arr.push('Hey!'));
console.log(names)