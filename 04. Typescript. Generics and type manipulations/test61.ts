// 1
interface IForm {
  login: string;
  password: string;
}
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации
const validationData: Validation<IForm> = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
};
type Validation<T> = {
  [K in keyof T]: { isValid: false; errorMsg: string } | { isValid: true };
};

// 2
// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя
// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)
interface IFitnessClass {
  name: string;
  startsAt: string;
  duration: number;
}
interface IFutureClass extends Omit<IFitnessClass, 'startsAt'> {
  willStartsAt: string;
}
interface IClient {
  name: string;
  age: string | number;
  gender: "male" | "female";
  timeLeft: string;
  makeCallFor: Date;
}
type CurrClient = Omit<IClient, 'makeCallFor'>;
type ExClient = Omit<IClient, 'timeLeft'>;
type FutureClient = Pick<IClient, 'name' | 'makeCallFor'>;
interface IFitnessClub {
  clubName: string;
  location: string;
  classes: IFitnessClass[];
  futureClasses: IFutureClass[];
  currClients: CurrClient[];
  exClients: ExClient[];
  futureClients: FutureClient[];
}
const fitnessClubCenter: IFitnessClub = {
  clubName: 'Fitness club Center',
  location: 'central ave. 45, 5th floor',
  classes: [
    {
      name: 'yoga',
      startsAt: '8:00 AM',
      duration: 60,
    },
    {
      name: 'trx',
      startsAt: '11:00 AM',
      duration: 45,
    },
    {
      name: 'swimming',
      startsAt: '3:00 PM',
      duration: 70,
    },
  ],
  futureClasses: [
    {
      name: 'boxing',
      willStartsAt: '6:00 PM',
      duration: 40,
    },
    {
      name: 'breath training',
      willStartsAt: '8:00 PM',
      duration: 30,
    },
  ],
  currClients: [
    {
      name: 'John Smith',
      age: '-',
      gender: 'male',
      timeLeft: '1 month',
    },
    {
      name: 'Alise Smith',
      age: 35,
      gender: 'female',
      timeLeft: '3 month',
    },
    {
      name: 'Ann Sonne',
      age: 24,
      gender: 'female',
      timeLeft: '5 month',
    },
  ],
  exClients: [
    {
      name: 'Tom Smooth',
      age: 50,
      gender: 'male',
      makeCallFor: new Date('2023-08-12'),
    },
  ],
  futureClients: [
    {
      name: 'Maria',
      makeCallFor: new Date('2023-07-10'),
    },
  ],
};

// 3
interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: 'horizontal' | 'vertical';
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}
type CustomSliderBase = Required<Omit<ISlider, 'animationName' | 'speed'>>;
interface ICustomSlider extends CustomSliderBase {
  speed: number;
}
function createSlider({
  container = '',
  numberOfSlides = 1,
  speed = 300,
  direction = 'horizontal',
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения
const customSliderOptions: ICustomSlider = {
  container: 'id',
  numberOfSlides: 4,
  speed: 1100,
  direction: 'horizontal',
  dots: true,
  arrows: true,
};

function createCustomSlider(options: ICustomSlider): void {
  if ('container' in options) {
    console.log(options);
  }
}
createCustomSlider(customSliderOptions);
