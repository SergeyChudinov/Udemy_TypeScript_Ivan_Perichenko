"use strict";
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации
const validationData = {
    login: { isValid: false, errorMsg: 'At least 3 characters' },
    password: { isValid: true },
};
const fitnessClubCenter = {
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
function createSlider({ container = '', numberOfSlides = 1, speed = 300, direction = 'horizontal', dots = true, arrows = true, } = {}) {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения
const customSliderOptions = {
    container: 'id',
    numberOfSlides: 4,
    speed: 1100,
    direction: 'horizontal',
    dots: true,
    arrows: true,
};
function createCustomSlider(options) {
    if ('container' in options) {
        console.log(options);
    }
}
createCustomSlider(customSliderOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDYxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdDYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSwyQ0FBMkM7QUFDM0MsMERBQTBEO0FBQzFELHlDQUF5QztBQUN6QyxNQUFNLGNBQWMsR0FBc0I7SUFDeEMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7SUFDNUQsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtDQUM1QixDQUFDO0FBdUNGLE1BQU0saUJBQWlCLEdBQWlCO0lBQ3RDLFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtTQUNiO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNiO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYjtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsWUFBWSxFQUFFLFNBQVM7WUFDdkIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixZQUFZLEVBQUUsU0FBUztZQUN2QixRQUFRLEVBQUUsRUFBRTtTQUNiO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWDtZQUNFLElBQUksRUFBRSxZQUFZO1lBQ2xCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsUUFBUTtZQUNoQixRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsUUFBUTtZQUNoQixRQUFRLEVBQUUsU0FBUztTQUNwQjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1Q7WUFDRSxJQUFJLEVBQUUsWUFBWTtZQUNsQixHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNwQztLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2I7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEM7S0FDRjtDQUNGLENBQUM7QUFnQkYsU0FBUyxZQUFZLENBQUMsRUFDcEIsU0FBUyxHQUFHLEVBQUUsRUFDZCxjQUFjLEdBQUcsQ0FBQyxFQUNsQixLQUFLLEdBQUcsR0FBRyxFQUNYLFNBQVMsR0FBRyxZQUFZLEVBQ3hCLElBQUksR0FBRyxJQUFJLEVBQ1gsTUFBTSxHQUFHLElBQUksTUFDRixFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFDRCxZQUFZLEVBQUUsQ0FBQztBQUNmLGlFQUFpRTtBQUNqRSx3QkFBd0I7QUFDeEIsNENBQTRDO0FBQzVDLE1BQU0sbUJBQW1CLEdBQWtCO0lBQ3pDLFNBQVMsRUFBRSxJQUFJO0lBQ2YsY0FBYyxFQUFFLENBQUM7SUFDakIsS0FBSyxFQUFFLElBQUk7SUFDWCxTQUFTLEVBQUUsWUFBWTtJQUN2QixJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQztBQUVGLFNBQVMsa0JBQWtCLENBQUMsT0FBc0I7SUFDaEQsSUFBSSxXQUFXLElBQUksT0FBTyxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDO0FBQ0Qsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyJ9