const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', e => {
  if (e.target.tagName === 'TEXTAREA') {
    formData.message = e.target.value;
  } else if (e.target.tagName === 'INPUT') {
    formData.email = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const storage = localStorage.getItem('feedback-form-state');
const storageParse = JSON.parse(storage || '{}');

const inputValue = feedbackForm.querySelector('input');
formData.email = storageParse.email;
inputValue.value = storageParse.email || '';

const textareaValue = feedbackForm.querySelector('textarea');
formData.message = storageParse.message;
textareaValue.value = storageParse.message || '';

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  if (inputValue.value === '' || textareaValue.value === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  inputValue.value = '';
  textareaValue.value = '';
});
