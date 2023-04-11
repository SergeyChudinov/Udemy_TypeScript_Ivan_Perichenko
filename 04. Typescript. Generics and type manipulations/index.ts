//46. Generics (Обобщения), что это и зачем нужно. --type, interf, func, method, class
function processingData<T, S>(data: T[], options: S): string {
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
const res3 = processingData<number, string>([num], 'slow');

interface PrintUK {
  design: number;
}
interface PrintES {
  design: string;
}
interface Print<T> {
  design: T;
} // Обобщения интерфейса!
const somePrint: Print<string> = {
  design: 'string',
};
const somePrint2: Print<number> = {
  design: 10,
};

//47. Generics functions и аннотации
function processong<T>(data: T): T {
  //аннотация, смотреть 3 вариант
  return data;
}
interface processingFn {
  <T>(data: T): T;
}
let newFunc: <T>(data: T) => T = processong;
let newFunc2: processingFn = processong;
interface DataSaver {
  processing: <T>(data: T) => T;
  processing2?: <T>(data: T) => T;
  processing3?: typeof processong; // можем через typeof!!!
  processing4?: processingFn; // можем через typeof!!!
}
const saver: DataSaver = {
  processing(data) {
    console.log(data);
    return data;
  }, // или processing<T>(data: T): T {
}; // -1
const saver2: DataSaver = {
  processing: <T>(data: T) => {
    return data;
  },
  processing2: (data) => {
    return data;
  },
}; // -2 альтернативный вариант!
const saver3: DataSaver = {
  processing: processong,
}; // -3 альтернативный вариант! С аннотацией

//48. Generics types and interfaces, constraints-ограничения
function processong3<T>(data: T): T {
  return data;
}
interface processingFn3<T> {
  (data: T): T;
}
let newFunc3: processingFn3<number> = processong3;

type Smth<T> = T;
const num3: Smth<number> = 5;
type User<T> = {
  login: T;
  age: number;
}; // поменять на interface просто убрать =
const user: User<string> = {
  login: 'str',
  age: 1,
}; // User<'str'> - можем через литерал

interface ParentsOfUser {
  mother: string;
  father: string;
}
interface IUser3<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
} // extends - поля mother и father теперь обезательные!! constraints!!!
const user3: IUser3<{ mother: string; father: string; married: boolean }> = {
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

const depositMoney = <T extends number | string>(amount: T): T => {
  console.log(`req to server with amount: ${amount}`);
  return amount;
}; // ограничения с примитивами
depositMoney(500);
depositMoney('500');
// depositMoney(false); -ошибка

type OrNull<Type> = Type | null; // helper types
type OneOrMany<Type> = Type | Type[];
const data: OneOrMany<number[]> = [5];

//50. Generics classes
class User3<T, S> {
  name: T;
  age: S;
  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }
  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== 'string') {
      return `I have only name: ${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}
class AdminUser3<T> extends User3<string, number> {
  // вместо <T, S> нужно - <string, number>
  reles: T;
  constructor(name: string, age: number, reles: T) {
    super(name, age);
    this.reles = reles;
  }
}
const ivan = new User3('Ivan', 30);
console.log(ivan.sayMyFullName('Smith'));
const nameData = 'Alex';
const ageData = 30;
const alex = new User3<string, number>(nameData, ageData);
const admin = new AdminUser3<string>('Sergey', 37, 'all');
const admin2 = new AdminUser3('Sergey', 37, 3);

//51. Встроенные обобщения (Readonly, Partial, Required)
const arr: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
const rearr: ReadonlyArray<string> = ['asdas'];

interface IState {
  readonly data: {
    name: string;
  };
  tag?: string;
}
// Partial делает свойства не обязательеыми (все!, будто добовляет ?), tag можно не писать!
// можно использовать если хотим сузить свойства {}
const state: Partial<IState> = {
  data: {
    name: 'ansd',
  },
};

//Required делает все необязательные свойства обязательными!
const strictState: Required<IState> = {
  data: {
    name: 'dasd',
  },
  tag: 'ascas',
};

//Readonly распространяется только на верхний уровень, на data, tag, а нва влож-ю нет- это name!!
function action(state: Readonly<IState>) {
  // state.data = 'abc'; //тут будет ошибка изза Readonly
  state.data.name = 'abc';
}

//53. Оператор keyof
interface ICompany {
  name: string;
  debts: number;
}
type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'debts'; // 'debts' или 'name'
function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}
const google: ICompany = {
  name: 'Google',
  debts: 500000,
};
printDebts(google, 'name', 'debts'); // аргументы №2 и №3 строго ограничены свойствами -Company Google, debts: 500000
const hh = {
  name: 'HH',
  open: 'true',
};
printDebts(hh, 'name', 'open'); // -Company HH, debts: true

//54. Оператор typeof и снова запросы типов
type GoogleKeys = keyof typeof google; // keyof ICompany, или - "name" | "debts" если удалить ICompany(203)
const keys2: GoogleKeys = 'name';

//55. Indexed Access Types
interface ICompany2 {
  name: string;
  debts: number;
  departments: Department[];
  managment: {
    owner: string;
  };
}
interface Department {
  [key: string]: string;
}
const google2: ICompany2 = {
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
type CompanyDebtsType = ICompany2['debts']; // Indexed Access Types - доступ по индексному ключу!
type CompanyDebtsType2 = typeof google2.managment;
const debts = 'debts'; // если let , то ниже будет ошибка!
type CompanyDebtsType3 = ICompany2[typeof debts];
type CommoanyOwnerType = ICompany2['managment']['owner'];
type CommoanyDepartmentsType = ICompany2['departments'][number]; // Department
type CommoanyDepartmentsTypes = ICompany2['departments']; // Department[]
const obj: CommoanyDepartmentsTypes = [
  {
    bac: 'a',
  },
];
type Test = ICompany2[keyof ICompany2]; //string | number | Department[] | { owner: string}

//57. Conditional types and infer- условные типы.
// SomeType extends OtherType ? TrueType : FalseType
type Example = 'string' extends 'Hello' ? string : number;
const str: string = 'Hello';
type Example2 = 'string' extends typeof str ? string : number; // просто str брять нельзя! Так как str -это не тип!

type FromUserOreFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;
interface IDataFromUser {
  weight: string;
}
interface IDataFromBase {
  calories: number;
}
const test: FromUserOreFromBase<number> = {
  calories: 1,
};
interface User2<T extends 'created' | Date> {
  created: T extends 'created' ? 'created' : Date;
}
const user4: User2<'created'> = {
  created: 'created',
};
const user5: User2<Date> = {
  created: new Date(),
};

function calculateDailyCalories(str: string): IDataFromUser;
function calculateDailyCalories(num: number): IDataFromBase;
function calculateDailyCalories(
  numOrStr: string | number
): IDataFromUser | IDataFromBase {
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOrStr,
    };
    return obj;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj;
  }
}

// function calculateDailyCalories2(str: string): IDataFromUser; // через дженерики
// function calculateDailyCalories2(num: number): IDataFromBase;
function calculateDailyCalories2<T extends string | number>(
  numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
  // с такой записью можно убрать перегрузку!
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOrStr,
    };
    return obj as T extends string ? IDataFromUser : IDataFromBase;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj as FromUserOreFromBase<T>; // так лучше
  }
}

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
  ? 'hello'
  : T extends 'world'
  ? 'world'
  : string;
const examp: GetStringType<'abc'> = 'sadsadas';

// infer First -это первый элмеент, в нашем случае в массиве!
type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number>; // в этом случпе будет T - number
type Ex2 = GetFirstType<number[]>; // в этом случпе будет First - number

//задача с собеседований!  type ToArray<Type>  => Type[]
// type ToArray<Type> = Type[] // не верно!
type ToArray<Type> = Type extends any ? Type[] : never;
const toArray: ToArray<number> = [1, 2, 3];
const toArray2: ToArray<string> = ['1', '2', '3'];
type ExArray = ToArray<Ex2 | string>;

//58. Mapped types, + - операторы. Манипуляция с типами! type можно поменять на interface!
type Currencies = {
  usa: 'usd';
  china: 'cny';
  ukraine?: 'uah';
  readonly kz: 'tenge';
};
type ROnlyCurr = Readonly<Currencies>;
type CustomCurrencies = {
  usa: string;
  china: string;
  ukraine: string;
  kz: string;
};

type CraeteCustomCurr<T> = {
  -readonly [P in keyof T]-?: string; // - или + - уберает или добовляет readonly или ?
  // readonly [P in keyof T]?: string; // можем добавить readonli или ?
}; // тут нельзя использовать interface
type CraeteCustomCurr2 = {
  [K in keyof CustomCurrencies]: string;
};
type CustomCurrencies2 = CraeteCustomCurr<Currencies>;
const customCurr: CustomCurrencies2 = {
  usa: 'string',
  china: 'string',
  ukraine: 'string',
  kz: 'string',
};

/*type СопостовимыйТип = {
  [произвольныйИндентификатор in Множество]: ПроизвольныйТип Данных
}*/
type Keys = 'name' | 'age' | 'role';
type User4 = {
  [K in Keys]: string;
};
const alex2: User4 = {
  name: 'Alex',
  age: '25',
  role: 'xz',
};

//59. Template literal types- шаблонные строки
type Currencies2 = {
  usa: 'usd';
  china: 'cny';
  ukraine: 'uah';
  kz: 'tenge';
};
type CraeteCustomCurr3<T> = {
  // [P in keyof T as MyAnimation]: string; // as MyAnimation -ключи будут - 'fade' | 'swipe'
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};
type CustomCurrencies3 = CraeteCustomCurr3<Currencies2>;

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';
// type MyNewAnimation = `${MyAnimation}${Direction}`; // "fadein" | "fadeout" | "swipein" | "swipeout"
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`; // Capitalize - "fadeIn" | "fadeOut" | "swipeIn" | "swipeOut"

type A = `${Uppercase<'AbCd'>}`; // type A = "ABCD"
type B = `${Lowercase<'AbCd'>}`; // type B = "abcd"
type C = `${Capitalize<'abcd'>}`; // type C = "Abcd"
type D = `${Uncapitalize<'Abcd'>}`; // type D = "abcd"

//60. Utility types - Pick, Omit, Extract, Exclude, Record - встроеный в TS тип
type Currencies3 = {
  usa: 'usd';
  china: 'cny';
  ukraine: 'uah';
  kz: 'tenge';
};
type CurrWithoutUSA3 = Omit<Currencies3, 'usa' | 'kz'>; // исключили 'usa' и 'kz'!
type CurrUSAAndUkraine = Pick<Currencies3, 'usa' | 'ukraine'>; // фильтрация по свойству!
type CountriseWithoutUSA = Exclude<keyof Currencies3, 'usa'>; // "china" | "ukraine" | "kz"
type FadeType = Exclude<MyAnimation3, 'swipe'>; // исключили 'swipe'! Удаление из union type!
type SwipeType = Extract<MyAnimation3 | Direction3, 'swipe'>; // лбратное от Exclude, выбор подходящего типа!

type CraeteCustomCurr4<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};
type PlayerNames = 'alex' | 'john';
type CustomCurrencies4 = CraeteCustomCurr4<Currencies3>;
type GameDataCurr = Record<PlayerNames, CustomCurrencies3>; // создать {} с ключем - PlayerNames и значением - CustomCurrencies3
const gameData: GameDataCurr = {
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
type MyAnimation3 = 'fade' | 'swipe';
type Direction3 = 'in' | 'out';
type MyNewAnimation3 = `${MyAnimation3}${Capitalize<Direction3>}`;

//63. Дополнительные вспомогательные типы (Utility types)
function calculate(a: number, b: number): number {
  return a * b;
}
type CalculateRT = ReturnType<typeof calculate>; // => number
type CalculatePT = Parameters<typeof calculate>; // => [a: number, b: number]
type CalculatePTFirst = Parameters<typeof calculate>[0]; // => number
type PT1 = Parameters<(a: number) => number>; // => [a: number]
type PT2 = Parameters<<T>(arg: T) => T>; // => [arg: unknown]

class Example3 {
  constructor(a: number) {}
}
type T0 = ConstructorParameters<typeof Example3>; // => [a: number]

//64. Работа с запросами на сервер, Promise и JSON
const jsonTest = '{"name": "Test", "data": "dsada"}';
interface JSONTest {
  name: string;
  data: number; // ошибку не покажет
}
const objFromJson: JSONTest = JSON.parse(jsonTest);

const userData =
  '{"isBirthdayData": "true", "ageData": "40", "userNameData": "John"}';
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const data2 = safeParse(userData);
console.log(typeof data2);
function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase());
  } else if (typeof d === 'object' && d) {
    console.log(data2);
  } else {
    console.error('Some error');
  }
}
transferData(data2);

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
let toDoList: ToDo[] = [];
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
    } else if (Array.isArray(json)) {
      toDoList = json;
    } else {
      console.log(`${json} is a string`);
    }
    console.log(toDoList);
  });

const promise = new Promise<string>((resolve, reject) => {
  resolve('Test');
});
promise.then((value) => {
  console.log(value.toLowerCase()); // value - string
})

//65. Awaited
type FromPromise = Awaited<Promise<number>>;          // => number
type FromPromise2 = Awaited<Awaited<Promise<number>>>;// => number

interface User5 {
  name: string;
}
async function fetchUsers(): Promise<User5[]> {
  const users: User5[] = [
    {
      name: 'Alex',
    },
  ];
  return users;
}
const users = fetchUsers();
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // => Users5[]
// До версии 4.5 в коде TS вы можете встретить ручное создание этого типа:
type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>> // => Users5[]