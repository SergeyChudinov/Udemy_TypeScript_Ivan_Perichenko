type ValidAmount = "empty" | number;
interface IClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}
interface IStationeryWarehouse {
  scissors: ValidAmount;
  paper: "empty" | boolean;
}
interface IAppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}
interface ITotalWarehouse
  extends IClothesWarehouse,
    IStationeryWarehouse,
    IAppliancesWarehouse {
  deficit: boolean;
  date: Date;
}
const totalData: ITotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};
function printReport(data: ITotalWarehouse): string {
  const result: string = Object.entries(data)
    .filter((item) => item[1] === "empty")
    .reduce((res, item) => `${res} ${item[0]},`, "");
  if (result.trim().length) {
    return `We need this items:${result.slice(0, -1)}`;
  } else {
    return "Everything fine";
  }
}
console.log(printReport(totalData));