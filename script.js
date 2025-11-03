const form = document.getElementById('verifyForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  message.textContent = "Sending verification email...";
  message.style.color = "yellow";

  try {
    // Replace URL below with your backend API endpoint
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = data.message || "Verification email sent successfully!";
      message.style.color = "lightgreen";
    } else {
      message.textContent = data.error || "Something went wrong.";
      message.style.color = "red";
    }
  } catch (error) {
    message.textContent = "Server not reachable.";
    message.style.color = "red";
  }
});
