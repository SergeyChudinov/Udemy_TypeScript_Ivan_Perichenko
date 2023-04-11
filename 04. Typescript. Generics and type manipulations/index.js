"use strict";
//46. Generics (Обобщения), что это и зачем нужно. --type, interf, func, method, class
function processingData(data, options) {
    data.length;
    switch (typeof data) {
        case 'string':
            return `${data}, speed: ${options}`;
        case 'number':
            return `${data}, speed: ${options}`;
        default:
            return 'Not valid';
    }
}
const res1 = processingData([1], 'fast');
let res2 = processingData(['1'], 'slow');
const num = 10; // если возмьмем '10' - ошибка
const res3 = processingData([num], 'slow');
const somePrint = {
    design: 'string',
};
const somePrint2 = {
    design: 10,
};
//47. Generics functions и аннотации
function processong(data) {
    //аннотация, смотреть 3 вариант
    return data;
}
let newFunc = processong;
let newFunc2 = processong;
const saver = {
    processing(data) {
        console.log(data);
        return data;
    }, // или processing<T>(data: T): T {
}; // -1
const saver2 = {
    processing: (data) => {
        return data;
    },
    processing2: (data) => {
        return data;
    },
}; // -2 альтернативный вариант!
const saver3 = {
    processing: processong,
}; // -3 альтернативный вариант! С аннотацией
//48. Generics types and interfaces, constraints-ограничения
function processong3(data) {
    return data;
}
let newFunc3 = processong3;
const num3 = 5;
const user = {
    login: 'str',
    age: 1,
}; // User<'str'> - можем через литерал
const user3 = {
    login: 'str',
    age: 1,
    parents: {
        mother: 'Mother',
        father: 'Father',
        married: true,
    },
};
// const user32: IUser3<string> = {
//   login: 'str',
//   age: 1,
//   parents: ''
// };
const depositMoney = (amount) => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
}; // ограничения с примитивами
depositMoney(500);
depositMoney('500');
const data = [5];
//50. Generics classes
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayMyFullName(surname) {
        if (typeof surname !== 'string') {
            return `I have only name: ${this.name}`;
        }
        else {
            return `${this.name} ${surname}`;
        }
    }
}
class AdminUser3 extends User3 {
    constructor(name, age, reles) {
        super(name, age);
        this.reles = reles;
    }
}
const ivan = new User3('Ivan', 30);
console.log(ivan.sayMyFullName('Smith'));
const nameData = 'Alex';
const ageData = 30;
const alex = new User3(nameData, ageData);
const admin = new AdminUser3('Sergey', 37, 'all');
const admin2 = new AdminUser3('Sergey', 37, 3);
//51. Встроенные обобщения (Readonly, Partial, Required)
const arr = [1, 2, 3];
const arr2 = [1, 2, 3];
const rearr = ['asdas'];
// Partial делает свойства не обязательеыми (все!, будто добовляет ?), tag можно не писать!
// можно использовать если хотим сузить свойства {}
const state = {
    data: {
        name: 'ansd',
    },
};
//Required делает все необязательные свойства обязательными!
const strictState = {
    data: {
        name: 'dasd',
    },
    tag: 'ascas',
};
//Readonly распространяется только на верхний уровень, на data, tag, а нва влож-ю нет- это name!!
function action(state) {
    // state.data = 'abc'; //тут будет ошибка изза Readonly
    state.data.name = 'abc';
}
const keys = 'debts'; // 'debts' или 'name'
function printDebts(company, name, debts) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}
const google = {
    name: 'Google',
    debts: 500000,
};
printDebts(google, 'name', 'debts'); // аргументы №2 и №3 строго ограничены свойствами -Company Google, debts: 500000
const hh = {
    name: 'HH',
    open: 'true',
};
printDebts(hh, 'name', 'open'); // -Company HH, debts: true
const keys2 = 'name';
const google2 = {
    name: 'Google',
    debts: 500000,
    departments: [
        {
            sales: 'sales',
            developer: 'dev',
        },
        {
            sales: 'sales',
        },
    ],
    managment: {
        owner: 'John',
    },
};
const debts = 'debts'; // если let , то ниже будет ошибка!
const obj = [
    {
        bac: 'a',
    },
];
const str = 'Hello';
const test = {
    calories: 1,
};
const user4 = {
    created: 'created',
};
const user5 = {
    created: new Date(),
};
function calculateDailyCalories(numOrStr) {
    if (typeof numOrStr === 'string') {
        const obj = {
            weight: numOrStr,
        };
        return obj;
    }
    else {
        const obj = {
            calories: numOrStr,
        };
        return obj;
    }
}
// function calculateDailyCalories2(str: string): IDataFromUser; // через дженерики
// function calculateDailyCalories2(num: number): IDataFromBase;
function calculateDailyCalories2(numOrStr) {
    // с такой записью можно убрать перегрузку!
    if (typeof numOrStr === 'string') {
        const obj = {
            weight: numOrStr,
        };
        return obj;
    }
    else {
        const obj = {
            calories: numOrStr,
        };
        return obj; // так лучше
    }
}
const examp = 'sadsadas';
const toArray = [1, 2, 3];
const toArray2 = ['1', '2', '3'];
const customCurr = {
    usa: 'string',
    china: 'string',
    ukraine: 'string',
    kz: 'string',
};
const alex2 = {
    name: 'Alex',
    age: '25',
    role: 'xz',
};
const gameData = {
    alex: {
        customUsa: 'string',
        customChina: 'string',
        customUkraine: 'string',
        customKz: 'string',
    },
    john: {
        customUsa: 'string',
        customChina: 'string',
        customUkraine: 'string',
        customKz: 'string',
    },
};
//63. Дополнительные вспомогательные типы (Utility types)
function calculate(a, b) {
    return a * b;
}
class Example3 {
    constructor(a) { }
}
//64. Работа с запросами на сервер, Promise и JSON
const jsonTest = '{"name": "Test", "data": "dsada"}';
const objFromJson = JSON.parse(jsonTest);
const userData = '{"isBirthdayData": "true", "ageData": "40", "userNameData": "John"}';
function safeParse(s) {
    return JSON.parse(s);
}
const data2 = safeParse(userData);
console.log(typeof data2);
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    }
    else if (typeof d === 'object' && d) {
        console.log(data2);
    }
    else {
        console.error('Some error');
    }
}
transferData(data2);
let toDoList = [];
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
    if ('id' in json) {
        toDoList.push(json);
    }
    console.log(toDoList);
});
// fetch возвращает  Promise<Response>!
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
    if ('id' in json && 'userId' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log(`${json} is a string`);
    }
    console.log(toDoList);
});
const promise = new Promise((resolve, reject) => {
    resolve('Test');
});
promise.then((value) => {
    console.log(value.toLowerCase()); // value - string
});
async function fetchUsers() {
    const users = [
        {
            name: 'Alex',
        },
    ];
    return users;
}
const users = fetchUsers();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0ZBQXNGO0FBQ3RGLFNBQVMsY0FBYyxDQUFPLElBQVMsRUFBRSxPQUFVO0lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUM7SUFDWixRQUFRLE9BQU8sSUFBSSxFQUFFO1FBQ25CLEtBQUssUUFBUTtZQUNYLE9BQU8sR0FBRyxJQUFJLFlBQVksT0FBTyxFQUFFLENBQUM7UUFDdEMsS0FBSyxRQUFRO1lBQ1gsT0FBTyxHQUFHLElBQUksWUFBWSxPQUFPLEVBQUUsQ0FBQztRQUN0QztZQUNFLE9BQU8sV0FBVyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQztBQUNELE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtBQUM5QyxNQUFNLElBQUksR0FBRyxjQUFjLENBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFXM0QsTUFBTSxTQUFTLEdBQWtCO0lBQy9CLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFDRixNQUFNLFVBQVUsR0FBa0I7SUFDaEMsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRUYsb0NBQW9DO0FBQ3BDLFNBQVMsVUFBVSxDQUFJLElBQU87SUFDNUIsK0JBQStCO0lBQy9CLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUlELElBQUksT0FBTyxHQUFzQixVQUFVLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQWlCLFVBQVUsQ0FBQztBQU94QyxNQUFNLEtBQUssR0FBYztJQUN2QixVQUFVLENBQUMsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFH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