import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

localText();



refs.form.addEventListener('submit', onForm);
refs.textarea.addEventListener('input', throttle(onText, 500));
refs.input.addEventListener('input', throttle(onText, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
});

// console.log(formData);

function onForm(e) {
e.preventDefault();
// console.log("Отправляем форму");
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};

function onText(e) {
const message = e.target.value;
// console.log(message);

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function localText() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

     if (savedMessage !== null) {
        // console.log(savedMessage);
         refs.textarea.value = savedMessage.message;
         refs.input.value = savedMessage.email;
     }
     
}