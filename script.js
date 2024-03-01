const button = document.querySelector("button");
const link = document.querySelector("button a");

button.addEventListener("touchstart", function () {
  button.classList.add("hover_button");
  link.style.color = "#785f6d";
});

button.addEventListener("touchend", function () {
  button.classList.remove("hover_button");
  link.style.color = "white";
});

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone);

function updateCountdown(targetDate) {
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  if (difference <= 0) {
    // Countdown expired
    document.getElementById("countdown").style.display = "none";
    button.style.display = "block";

    // Clear the interval to stop further updates
    clearInterval(intervalId);
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update your HTML element with the countdown
    document.getElementById(
      "countdown"
    ).innerHTML = `${days} days <br> ${hours} hours <br> ${minutes} minutes <br> ${seconds} seconds <br> remaining until <br> Olga's Birthday`;
  }
}

const targetDate = new Date("2024-03-01T19:51:00");

// Set the interval and store the interval ID
const intervalId = setInterval(() => {
  updateCountdown(targetDate);
}, 1000);
