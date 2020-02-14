// const emailjs = require('emailjs-com');
/* eslint-disable no-bitwise */
window.onload = function() {
  const sendResult = document.querySelector('#sendResult');
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate the contact number value
    this.contact_number.value = (Math.random() * 100000) | 0;
    const templateParams = {
      number: this.contact_number.value,
      name: this.name_value.value,
      email: this.email_value.value,
      message: this.message_value.value,
    };
    // eslint-disable-next-line no-undef
    emailjs.send('gmail_mean', 'no-captcha', templateParams, 'user_nA6P8cuhfuXYF41H0AfBJ').then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        this.name_value.value = '';
        this.email_value.value = '';
        this.message_value.value = '';
        sendResult.textContent = 'Send! Thank you for your time';
      },
      error => {
        this.status = 'FAILED... Please try again later';
        console.log('FAILED...', error);
        sendResult.textContent = `FAILED... Please try again later`;
      }
    );
  });
};
