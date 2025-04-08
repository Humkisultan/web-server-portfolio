const form = document.getElementById("messageForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    status.textContent = "Message sent!";
    form.reset();
  } else {
    status.textContent = "Something went wrong!";
  }
});
