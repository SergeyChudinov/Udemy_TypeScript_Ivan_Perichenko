"use strict";
const player1 = {
    game: 'CS:GO',
    hours: 300,
    server: 'basic',
};
const player2 = {
    game: 2048,
    hours: '300 h.',
    server: 'arcade',
};
const player3 = {
    game: 'Chess',
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: 'chess',
};
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
var FigureNames;
(function (FigureNames) {
    FigureNames["RECT"] = "rect";
    FigureNames["TRIANGLE"] = "triangle";
    FigureNames["LINE"] = "line";
    FigureNames["CIRCLE"] = "circle";
})(FigureNames || (FigureNames = {}));
function calculateAmountOfFigures(figure) {
    const amount = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach((fig) => {
        switch (fig.name) {
            case FigureNames.RECT:
                amount.squares++;
                break;
            case FigureNames.TRIANGLE:
                amount.triangles++;
                break;
            case FigureNames.CIRCLE:
                amount.circles++;
                break;
            default:
                amount.others++;
        }
    });
    return amount;
}
const dataTest = [
    {
        name: FigureNames.RECT,
        data: { a: 5, b: 10 },
    },
    {
        name: FigureNames.RECT,
        data: { a: 6, b: 11 },
    },
    {
        name: FigureNames.TRIANGLE,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FigureNames.LINE,
        data: { l: 15 },
    },
    {
        name: FigureNames.CIRCLE,
        data: { r: 10 },
    },
    {
        name: FigureNames.CIRCLE,
        data: { r: 5 },
    },
    {
        name: FigureNames.RECT,
        data: { a: 15, b: 7 },
    },
    {
        name: FigureNames.TRIANGLE,
    },
];
console.log(calculateAmountOfFigures(dataTest));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDQ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdDQ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxNQUFNLE9BQU8sR0FBNEI7SUFDdkMsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxPQUFPO0NBQ2hCLENBQUM7QUFDRixNQUFNLE9BQU8sR0FBNEI7SUFDdkMsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFDRixNQUFNLE9BQU8sR0FBNEI7SUFDdkMsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLEVBQUUsT0FBTztDQUNoQixDQUFDO0FBRUYsaUdBQWlHO0FBQ2pHLDZFQUE2RTtBQUM3RSw4Q0FBOEM7QUFDOUMsd0hBQXdIO0FBQ3hILGtEQUFrRDtBQUNsRCx3R0FBd0c7QUFDeEcsZ0RBQWdEO0FBQ2hELHNEQUFzRDtBQUV0RCxJQUFLLFdBS0o7QUFMRCxXQUFLLFdBQVc7SUFDZCw0QkFBYSxDQUFBO0lBQ2Isb0NBQXFCLENBQUE7SUFDckIsNEJBQWEsQ0FBQTtJQUNiLGdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFMSSxXQUFXLEtBQVgsV0FBVyxRQUtmO0FBVUQsU0FBUyx3QkFBd0IsQ0FDL0IsTUFBVztJQUVYLE1BQU0sTUFBTSxHQUFvQjtRQUM5QixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLENBQUM7UUFDWixNQUFNLEVBQUUsQ0FBQztLQUNWLENBQUM7SUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDckIsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ25CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtZQUNSO2dCQUNFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUlELE1BQU0sUUFBUSxHQUFtQjtJQUMvQjtRQUNFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtRQUN0QixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7S0FDdEI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtRQUN0QixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7S0FDdEI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUTtRQUMxQixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtLQUM3QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1FBQ3RCLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7S0FDaEI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXLENBQUMsTUFBTTtRQUN4QixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0tBQ2hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU07UUFDeEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUNmO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVE7S0FDM0I7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDIn0=