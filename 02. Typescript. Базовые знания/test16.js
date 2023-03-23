"use strict";
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
const waterUserData = {
    readings: 3,
    units: "m3",
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = ({ readings, mode }, wData, elRate, wRate) => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice = ([el, water], { readings, units }, waterUserData) => {
    const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`.trim();
    return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
