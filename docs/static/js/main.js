

// Countdown for hero
// prev was missing an  event listener- not much changes
document.addEventListener('DOMContentLoaded', () => {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Target date: Feb 21, 2026 10:00 local time
  const target = new Date('2026-02-21T10:00:00');

  function update() {
    const now = new Date();
    let diff = Math.max(0, target - now);

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24)); diff -= days  * 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));      diff -= hours * 1000 * 60 * 60;
    const mins  = Math.floor(diff / (1000 * 60));           diff -= mins  * 1000 * 60;
    const secs  = Math.floor(diff / 1000);

    const pad = n => String(n).padStart(2, '0');
    countdownEl.textContent = `${pad(days)} : ${pad(hours)} : ${pad(mins)} : ${pad(secs)}`;
  }

  update();
  setInterval(update, 1000);
});
