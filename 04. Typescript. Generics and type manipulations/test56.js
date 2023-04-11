"use strict";
const phones = [
    {
        company: 'Nokia',
        number: 1285637,
        size: '5.5',
        companyPartner: 'MobileNokia',
        manufactured: new Date('2022-09-01'),
    },
    {
        company: 'Samsung',
        number: 4356637,
        size: '5.0',
        companyPartner: 'SamMobile',
        manufactured: new Date('2021-11-05'),
    },
    {
        company: 'Apple',
        number: 4552833,
        size: '5.7',
        companyPartner: 'no data',
        manufactured: new Date('2022-05-24T12:00:00'),
    },
];
function filterPhonesByDate(phones, key, initial) {
    return phones
        .filter((phone) => {
        return phone[key] > new Date(`${initial}`) && phone[key] instanceof Date;
    })
        .map((phone) => {
        return { ...phone, initialDate: initial };
    });
    ;
}
console.log(filterPhonesByDate(phones, 'manufactured', '2022-01-01'));
//через Дженерики, сделанм свойства не обязательные! Partial
function filterPhonesByDate2(phones, key, initial) {
    return phones
        .filter((phone) => {
        return phone[key] > new Date(`${initial}`) && phone[key] instanceof Date;
    })
        .map((phone) => {
        return { ...phone, initialDate: initial };
    });
}
console.log(filterPhonesByDate2(phones, 'manufactured', '2022-01-01'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDU2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdDU2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSxNQUFNLE1BQU0sR0FBbUI7SUFDN0I7UUFDRSxPQUFPLEVBQUUsT0FBTztRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxLQUFLO1FBQ1gsY0FBYyxFQUFFLGFBQWE7UUFDN0IsWUFBWSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNyQztJQUNEO1FBQ0UsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsS0FBSztRQUNYLGNBQWMsRUFBRSxXQUFXO1FBQzNCLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDckM7SUFDRDtRQUNFLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLEtBQUs7UUFDWCxjQUFjLEVBQUUsU0FBUztRQUN6QixZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUM7S0FDOUM7Q0FDRixDQUFDO0FBSUYsU0FBUyxrQkFBa0IsQ0FDekIsTUFBc0IsRUFDdEIsR0FBdUIsRUFDdkIsT0FBZTtJQUVmLE9BQU8sTUFBTTtTQUNWLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDO0lBQzNFLENBQUMsQ0FBQztTQUNELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7QUFDUixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFFdEUsNERBQTREO0FBQzVELFNBQVMsbUJBQW1CLENBQzFCLE1BQVcsRUFDWCxHQUFZLEVBQ1osT0FBZTtJQUVmLE9BQU8sTUFBTTtTQUNWLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDO0lBQzNFLENBQUMsQ0FBQztTQUNELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyJ9