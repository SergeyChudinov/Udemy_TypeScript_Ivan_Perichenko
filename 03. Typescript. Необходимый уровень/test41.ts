enum Status {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'not available',
}
interface IRequest {
  animal: 'cat' | 'dog' | 'bird';
  breed: string;
  sterilized?: string;
}
interface DataWithAvailable extends IRequest {
  location: string;
  age?: number;
}
interface DataWithNotAvailable {
  message: string;
  nextUpdateIn: Date;
}
interface IResponseWithAvailable {
  status: Status.AVAILABLE;
  data: DataWithAvailable;
}
interface IResponseWithNotAvailable {
  status: Status.NOT_AVAILABLE;
  data: DataWithNotAvailable;
}
type Response2 = IResponseWithAvailable | IResponseWithNotAvailable;
function checkAnimalData(animal: Response2): DataWithAvailable | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
function isAvailable(response: Response2): response is IResponseWithAvailable {
  return response.status === Status.AVAILABLE;
}
const response: Response2 = {
  status: Status.AVAILABLE,
  data: {
    animal: 'dog',
    breed: 'korgi',
    sterilized: 'true',
    location: 'Moscow',
    age: 4,
  },
};
const response2: Response2 = {
  status: Status.NOT_AVAILABLE,
  data: {
    message: 'Свяжитесь с нами завтра',
    nextUpdateIn: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  },
};
console.log(checkAnimalData(response));
console.log(checkAnimalData(response2));
