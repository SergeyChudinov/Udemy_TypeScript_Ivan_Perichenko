//08. Использование системы типов в функциях
function log(isBirthday: boolean, userName: string, age: number): string {
  return "Error";
}
const log2 = (isBirthday: boolean, userName: string, age: number): string => {
  return "Error";
};
//09. Специальный тип any
const userData =
  '{"isBirthdayData": 50, "ageData": 40, "userNameData": "John"}';
const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData); //.smt()
//13. (Доп) Редкие примитивные типы bigint, symbol
let id: symbol = Symbol("id");
const data = {
  [id]: 1,
};
console.log(data);
const num1: bigint = 1n; //"target": "es2020"
const num2: bigint = 2n;
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
const createError = (msg: string): never => {
  throw new Error(msg);
}; //без диструкториз было бы просто data
function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: {
    error: string;
  };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData}`;
  } else {
    return createError(error);
  }
}
console.log(logBrtMsg(userData2));
//15. Типизация массивов
const nums: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]; //матрица
const arr: string[] = ["dev", "design", "marketing"];
const [first, b] = arr; //диструкторизация массива
console.log(first, b);
//17. Tuples (Кортежи)
const userDataTuple: [boolean, number, ...string[]] = [true, 1, "a", "b", "c"];
//19. Сужение типов (Narrowing)
function printMsg(msg: string | number | boolean): void {
  if (typeof msg === "string" || typeof msg === "number") {
    console.log(msg.toString());
  } else {
    console.log(msg);
  }
  console.log(msg);
}
function printMsg2(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}
printMsg2(4);
const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};
const printReadings2 = (a: number[] | string) => {
  console.log(a.slice(0, 3));
};
function checkReadings(readings: { system: number } | { user: number }): void {
  if ("system" in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}
function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
//20. Примитивные литеральные типы (Literal types)
let msg: "Hello" = "Hello";
msg = "Hello";
const port3000: number = 3000;
const port3001: number = 3001;
function startServer(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
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

function createAnimation2( //мой пример создал анимацию + html
  id: string | number,
  animName: string,
  timingFunc: "ease" | "ease-out" | "ease-in" | "ease-in-out" = "ease",
  duration: number,
  iterCount: "infinite" | number,
  fillMmode: string
): void {
  const elem = document.querySelector(`#${id}`) as HTMLElement;
  if (elem) {
    console.log(
      `${animName} ${duration}s ${timingFunc} ${iterCount} ${fillMmode}`
    );
    elem.style.animation = `${animName} ${duration}s ${timingFunc} ${iterCount} ${fillMmode}`;
  }
}
createAnimation2("id", "heartbeat", "ease-in-out", 1.5, "infinite", "both");
//21. Псевдонимы типов (Type aliases)
type AnimationTimingFunc = "ease" | "ease-out" | "ease-in" | "ease-in-out";
type AnimationID = string | number;
function createAnimation3(
  id: AnimationID,
  animName: string,
  timingFunc: AnimationTimingFunc,
  duration: number,
  iterCount: "infinite" | number,
  fillMmode: string
): void {
  //логика
}
//22. Объектные литералы и аннотации функций
const serverConfig: { protocol: "http" | "https"; port: 3000 | 3001 } = {
  protocol: "http",
  port: 3001,
};
const startServer2: (
  protocol: "http" | "https",
  port: 3000 | 3001
) => string = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server started";
};
startServer2(serverConfig.protocol, serverConfig.port); //без {}на 171 - ошибка!

