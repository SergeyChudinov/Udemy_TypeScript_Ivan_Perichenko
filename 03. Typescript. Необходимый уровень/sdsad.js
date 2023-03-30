"use strict";
const forms = document.querySelectorAll('form');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
const checkbox = document.querySelector('#checkbox');
const formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};
forms.forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
    formData.email = email?.value ?? '';
    formData.title = title?.value ?? '';
    formData.text = text?.value ?? '';
    formData.checkbox = checkbox?.checked ?? false;
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
}));
function validateFormData(data) {
    // Если каждое из свойств объекта правдиво...
    if (Object.values(data).every((value) => value)) {
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
    if (emails.some((e) => e === email)) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RzYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZHNhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFxQixDQUFDO0FBQ25FLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFxQixDQUFDO0FBQ25FLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUF3QixDQUFDO0FBQ3BFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0FBU3pFLE1BQU0sUUFBUSxHQUFjO0lBQzFCLEtBQUssRUFBRSxFQUFFO0lBQ1QsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUM7QUFFRixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQix5RkFBeUY7SUFDekYsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3BDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDbEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQztJQUUvQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzlCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyxDQUNILENBQUM7QUFFRixTQUFTLGdCQUFnQixDQUFDLElBQWU7SUFDdkMsNkNBQTZDO0lBQzdDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxDQUFDO0tBQ2I7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQWU7SUFDcEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFMUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0tBQzVDO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDIn0=