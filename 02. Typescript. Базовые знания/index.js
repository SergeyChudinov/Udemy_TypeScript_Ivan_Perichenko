"use strict";
//08. Использование системы типов в функциях
function log(isBirthday, userName, age) {
    return "Error";
}
const log2 = (isBirthday, userName, age) => {
    return "Error";
};
//09. Специальный тип any
const userData = '{"isBirthdayData": 50, "ageData": 40, "userNameData": "John"}';
const userObj = JSON.parse(userData); //.smt()
//13. (Доп) Редкие примитивные типы bigint, symbol
let id = Symbol("id");
const data = {
    [id]: 1,
};
console.log(data);
const num1 = 1n; //"target": "es2020"
const num2 = 2n;
console.log(num1 + num2); // typeof bigint
//14. Типизация объектов и деструктуризация
const userData2 = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "Sergey",
    messages: {
        error: "Error",
    },
};
const createError = (msg) => {
    throw new Error(msg);
}; //без диструкториз было бы просто data
function logBrtMsg({ isBirthdayData, userNameData, ageData, messages: { error }, }) {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData}`;
    }
    else {
        return createError(error);
    }
}
console.log(logBrtMsg(userData2));
//15. Типизация массивов
const nums = [
    [1, 2, 3],
    [4, 5, 6],
]; //матрица
const arr = ["dev", "design", "marketing"];
const [first, b] = arr; //диструкторизация массива
console.log(first, b);
//17. Tuples (Кортежи)
const userDataTuple = [true, 1, "a", "b", "c"];
//19. Сужение типов (Narrowing)
function printMsg(msg) {
    if (typeof msg === "string" || typeof msg === "number") {
        console.log(msg.toString());
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
function printMsg2(msg) {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
printMsg2(4);
const printReadings = (a, b) => {
    if (a === b) {
        console.log(a, b);
    }
};
const printReadings2 = (a) => {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.trim());
    }
}
//20. Примитивные литеральные типы (Literal types)
let msg = "Hello";
msg = "Hello";
const port3000 = 3000;
const port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3001);
// function createAnimation(
//   id: string | number,
//   animName: string,
//   timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
//   duration: number,
//   iterCount: "infinite" | number
// ): void {
//   const elem = document.querySelector(`#${id}`) as HTMLElement;
//   if (elem) {
//     console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
//     elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iterCount}`;
//   }
// }
// createAnimation("id", "heartbeat", "ease-in", 5, "infinite");
function createAnimation2(//мой пример создал анимацию + html
id, animName, timingFunc = "ease", duration, iterCount, fillMmode) {
    const elem = document.querySelector(`#${id}`);
    if (elem) {
        console.log(`${animName} ${duration}s ${timingFunc} ${iterCount} ${fillMmode}`);
        elem.style.animation = `${animName} ${duration}s ${timingFunc} ${iterCount} ${fillMmode}`;
    }
}
createAnimation2("id", "heartbeat", "ease-in-out", 1.5, "infinite", "both");
function createAnimation3(id, animName, timingFunc, duration, iterCount, fillMmode) {
    //логика
}
//22. Объектные литералы и аннотации функций
const serverConfig = {
    protocol: "http",
    port: 3001,
};
const startServer2 = (protocol, port) => {
    return "Server started";
};
startServer2(serverConfig.protocol, serverConfig.port); //без {}на 171 - ошибка!
