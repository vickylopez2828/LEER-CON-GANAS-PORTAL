
function switchTab(id) {
  const panels = document.querySelectorAll('.section-panel');
  const tabEls = document.querySelectorAll('.tab');
  const dots   = document.querySelectorAll('.step-dot');

  // Leer orden desde los onclick de los tabs, no desde los panels
  const tabs = Array.from(tabEls).map(t => {
    const match = t.getAttribute('onclick')?.match(/switchTab\('([^']+)'\)/);
    return match ? match[1] : '';
  });

  panels.forEach(p => p.classList.remove('active'));
  tabEls.forEach(t => t.classList.remove('active'));

  document.getElementById('tab-' + id)?.classList.add('active');

  const idx = tabs.indexOf(id);
  if (idx !== -1) tabEls[idx].classList.add('active');

  document.getElementById('progressFill').style.width = ((idx + 1) / tabs.length * 100) + '%';

  dots.forEach((d, i) => {
    d.className = 'step-dot';
    if (i < idx) d.classList.add('done');
    else if (i === idx) d.classList.add('active');
    else d.classList.add('locked');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleStrategy(card) {
  card.classList.toggle('expanded');
}

function toggleCheck(item) {
  item.classList.toggle('checked');
}