const registerForm = document.querySelector('.feedback-form');
const key = 'feedback-form-state';
let formData = { email: '', message: '' };

const init = () => {
  const previous = localStorage.getItem(key);
  if (!previous) {
    return;
  }

  formData = JSON.parse(previous);
  registerForm.elements.email.value = formData.email;
  registerForm.elements.message.value = formData.message;
};
init();

registerForm.addEventListener('input', evt => {
  const target = evt.target;
  formData[target.name] = target.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
});

registerForm.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  registerForm.reset();
  localStorage.removeItem(key);
  formData = { email: '', message: '' };
});
