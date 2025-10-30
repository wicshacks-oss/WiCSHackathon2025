document.addEventListener('DOMContentLoaded', ()=>{
  // Fetch attendees data and render
  fetch('/attendees').then(r=>r.json()).then(data=>{
    const totalEl = document.getElementById('attendees-total')
    if(totalEl) totalEl.textContent = data.total

    // Demographics pie
    const ctx = document.getElementById('demographicsChart')
    if(ctx){
      new Chart(ctx,{
        type:'pie',
        data:{
          labels: Object.keys(data.demographics),
          datasets:[{data:Object.values(data.demographics),backgroundColor:['#6f42c1','#0d6efd','#198754']}]
        },
        options:{responsive:true}
      })
    }
  }).catch(err=>{console.warn('Could not load attendees:',err)})
})

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
