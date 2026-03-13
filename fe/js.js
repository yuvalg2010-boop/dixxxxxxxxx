const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.querySelector("#name").value;
  const last_name = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;

  if (name.length < 3) {
    alert("שם חייב להכיל לפחות 3 תווים");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("כתובת אימייל לא חוקית");
    return;
  }

  const phonePattern = /^[0-9]{10,}$/;

  if (!phonePattern.test(phone)) {
    alert("טלפון חייב להכיל לפחות 10 ספרות");
    return;
  }

  if (message.length < 10) {
    alert("הודעה חייבת להכיל לפחות 10 תווים");
    return;
  }

  alert("הטופס נשלח בהצלחה!");

});