"use strict";
const totalData = {
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
function printReport(data) {
    const result = Object.entries(data)
        .filter((item) => item[1] === "empty")
        .reduce((res, item) => `${res} ${item[0]},`, "");
    if (result.trim().length) {
        return `We need this items:${result.slice(0, -1)}`;
    }
    else {
        return "Everything fine";
    }
}
console.log(printReport(totalData));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDI2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdDI2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUF1QkEsTUFBTSxTQUFTLEdBQW9CO0lBQ2pDLE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLEVBQUU7SUFDWixLQUFLLEVBQUUsSUFBSTtJQUNYLFdBQVcsRUFBRSxDQUFDO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsSUFBSTtJQUNiLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtDQUNqQixDQUFDO0FBQ0YsU0FBUyxXQUFXLENBQUMsSUFBcUI7SUFDeEMsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDO1NBQ3JDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUN4QixPQUFPLHNCQUFzQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7U0FBTTtRQUNMLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7QUFDSCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyJ9