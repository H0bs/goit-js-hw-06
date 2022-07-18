const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };

    if (formData.email === "" || formData.password === "") {
        alert("Для входу обов'язково вкажіть email та password");
    }

    console.log(formData);

    event.currentTarget.reset();
}

