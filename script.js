const form = document.getElementById("reservationForm");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", function(event){

  event.preventDefault();

  successMessage.innerHTML =
  "✅ Reservation Successful! We look forward to serving you.";

  successMessage.style.color = "#d4a373";

  successMessage.style.fontSize = "20px";

  successMessage.style.marginTop = "20px";

  form.reset();

});