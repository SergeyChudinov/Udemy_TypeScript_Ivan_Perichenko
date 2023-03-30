"use strict";
const serverConfig = {
    protocol: 'https',
    port: 3000,
    role: 'admin',
};
const backupConfig = {
    protocol: 'http',
    port: 3001,
};
const startServer = (protocol, port) => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);
const serverConfig2 = {
    protocol: 'http',
    port: 3001,
    role: 'admin',
    test: 'test',
    log: (msg) => console.log(msg),
};
const startServer2 = (protocol, port, log // можно- log: Function
) => {
    log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer2(serverConfig2.protocol, serverConfig2.port, serverConfig2.log);
const styles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
};
const serverNewConfig = {
    //похожий пример , но по другомк реализован!
    protocol: 'https',
    port: 3001,
};
const backupNewConfig = {
    protocol: 'http',
    port: 3000,
};
const startServer3 = (config) => {
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
let movement = false; //аннотация
if (isOkay) {
    movement = 'moving';
}
const salary = 500; // тип- number
const salary2 = 500; // тип- 500
const arr = ['abc', 5]; // тип- (string | number)[]
const reviews = ['Sergey', 5]; // тип- [string, number]
const user = {
    login: 'first',
    password: 'qwerty',
    age: 37,
    addr: undefined,
};
const dbName = '12345';
function sendUserData(obj, db) {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase()); //?. ставится само!
}
sendUserData(user);
sendUserData(user, dbName);
const user2 = {
    login: 'first',
    password: 'qwerty',
    age: 37,
    addr: undefined,
    parents: {
        mother: 'Mother',
        father: 'Father',
    },
};
let dbName2;
sendUserData2(user2, 'ajbahsgvb'); // функция задаст значение dbName2
console.log(dbName2); // TS не знает что мы уже задали значение dbName2 выше
function sendUserData2(obj, db) {
    dbName2 = '12345';
    console.log(obj.parents.father?.toLowerCase(), db.toLowerCase()); //?. ставится само!
}
const user3 = {
    login: 'first',
    password: 'qwerty',
    age: 37,
    addr: undefined,
};
// user3.login = '123'; // ошибка!
const basicPorts = [3000, 3001, 5555];
const basicPorts2 = [3000, '3001', '5555'];
const userFreeze = {
    login: 'first',
    password: 'qwerty',
    age: 50,
};
// userFreeze.age = 30; // ошибка!
const basicPorts3 = [3000, 3001, 5555]; // для массива!
// basicPorts[0] = 9999; // нельзя именять!
// basicPorts.push(567); // Тоже нельзя!
//31. Enums
var Direction;
(function (Direction) {
    Direction[Direction["TOP"] = 0] = "TOP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["BOTTOM"] = 3] = "BOTTOM";
})(Direction || (Direction = {}));
function frame(elem, dir, tFunc) {
    if (dir === Direction.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Direction.RIGHT, "linear" /* TimingFunc.LINEAR */); // frame("id", Direction.RIGHT, "linear" /* TimingFunc.LINEAR */);
//32. Тип Unknown. Unknown - безопасная альтернатива any
let smth; // если any , то ниже не покажет ошибку!
smth = 'str';
// let data: string[] = smth;
// data.find(e => e);
const someValue = 10; // если any , то ниже не покажет ошибку!
// someValue.forEach();
function fetchData(data) {
    if (typeof data === 'string') {
        data.toLowerCase();
    }
}
const userData = '{"isBirthdayData": 50, "ageData": 40, "userNameData": "John"}';
function safeParse(s) {
    return JSON.parse(s);
}
const data = safeParse(userData);
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
        //условие (d instanceof Object)
    }
    else if (typeof d === 'object' && d) {
        console.log(d);
    }
    else {
        console.error('Some error');
    }
}
transferData(data);
//33. Запросы типов
const dataFromControl = {
    water: 200,
    el: 350,
};
function checkReadings(data) {
    const dataFromUser = {
        water: 200,
        el: 350,
    };
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkReadings(dataFromControl));
const PI = 3.14;
let PIClone; // можно присвоить только 3.14
//35. Утверждение типов (Type Assertions)// as 'GET'
const fetchData2 = (url, method) => {
    console.log(method);
};
const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET', // as 'GET' 2-ый способ
}; // as const 'GET' 3-ый способ
fetchData2('qqq', 'GET');
fetchData2(reqOptions.url, reqOptions.method); // as 'GET' 1-ый способ
fetchData2(reqOptions.url, reqOptions.method); // as 'GET' 5-ый способ
const box = document.querySelector('.box');
const input = document.querySelector('input'); // => Element | null
const box2 = document.querySelector('.box');
const input2 = document.querySelector('input');
box.style; // без HTMLElement будет ошибка!
box?.classList;
const someNumber = parseFloat(input.value);
const someNumber2 = input.value; // 2-у преобразование
console.log(someNumber);
console.log(someNumber2 * 2);
// console.log(someNumber2.toFixed());// будет ошибка в браузере, так как это string
let a1 = 'value'; // a1: "value"
let obj = { f: 100 }; // readonly f: 100
let c = []; // c: readonly []
// let bb = obj as const; // так нельзя!
// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; //TS не знает что будет!
//36. Немного про “внутренние” типы и приведение типов
let num = new Number(5);
let num2 = 5;
let num3 = Number(5);
let num4 = 5;
num = num2;
// num2 = num;
const str = '5a3';
const numStr = parseFloat(str);
console.log(numStr);
const department = {
    name: 'web-dev',
    budget: 50000,
};
const mainProject = {
    //если мы так создадим объект, то будет лишнее поле budget
    ...department,
    projectBudget: 5000,
};
function transformDepartment(department, amount) {
    return {
        name: department.name,
        projectBudget: amount,
    };
}
const newObj = transformDepartment(department, 49999);
console.log(newObj);
//37. Type Guard - Защитники типа
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    }
    else if (isNumber(msg)) {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
printMsg(4);
function isNumber(n) {
    return typeof n === 'number';
}
function isNumber2(n) {
    return typeof n === 'number';
}
function repairVehicle(vehicle) {
    if (isCar(vehicle)) {
        console.log(vehicle);
    }
    else if (isShip(vehicle)) {
        console.log(vehicle);
    }
    else {
        console.log(vehicle); // never
    }
}
function isCar(car) {
    return 'wheels' in car;
}
// function isCar(car: Car | Ship): car is Car {
//   return (car as Car).wheels.number !== undefined; //(car as Car).wheels.number
// }
function isShip(ship) {
    return 'sail' in ship;
}
function repairVehicle2(vehicle) {
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
            const smth = vehicle;
            console.log('Ouuuups!');
    }
}
function calculateArea(a, b) {
    if (b) {
        const rect = {
            a,
            b,
            area: a * b,
        };
        return rect;
    }
    else {
        const square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
console.log(calculateArea(4));
console.log(calculateArea(2, 5));
// type Vehicle3 = Car3 | Ship3 | Airplane3;
function repairVehicle3(vehicle) {
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels * 2); // !- это not null, not undefined
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
const car = {
    name: 'car',
    engine: 'abc',
}; // нет свойства wheels, но лшибку не покажет так как у нас общий интерфейс!
repairVehicle3(car);
//42. Работа с DOM. Element =>HTMLElement =>HTMLAnchorElement
const box3 = document.querySelector('.box');
const input3 = document.querySelector('input'); //Ts сам пойймет тип, потому что указали селектор!
const link = document.querySelector('a'); // HTMLAnchorElement
const p = document.querySelector('.paragraph');
const links = document.querySelectorAll('.a');
// box3?.textContent = 'sdasdasd';
input3?.value; //сам поставит ?
// box3.val // не бужет подсказки value, так как input более спец-й элемент
if (link) {
    link.href = 'dasd';
}
const elem = document.createElement('a'); //подставил сам HTMLAnchorElement
link?.addEventListener(' ', (e) => {
    e.preventDefault();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsTUFBTSxZQUFZLEdBQW1CO0lBQ25DLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLE9BQU87Q0FDZCxDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQVc7SUFDM0IsUUFBUSxFQUFFLE1BQU07SUFDaEIsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCLENBQ2pDLFFBQTBCLEVBQzFCLElBQWlCLEVBQ0MsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixRQUFRLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RCxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUMsQ0FBQztBQUNGLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQWN0RCxNQUFNLGFBQWEsR0FBb0I7SUFDckMsUUFBUSxFQUFFLE1BQU07SUFDaEIsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztDQUM3QyxDQUFDO0FBTUYsTUFBTSxZQUFZLEdBQW1CLENBQ25DLFFBQTBCLEVBQzFCLElBQWlCLEVBQ2pCLEdBQTBCLENBQUMsdUJBQXVCO0VBQ2hDLEVBQUU7SUFDcEIsR0FBRyxDQUFDLHFCQUFxQixRQUFRLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RCxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUMsQ0FBQztBQUNGLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLEdB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