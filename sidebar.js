function renderSidebar(activePage) {
  const caps = [
    { id: 'cap1', href: 'cap1.html', icon: '🧠', label: '1. Estilos de aprendizaje' },
    { id: 'cap2', href: 'cap2.html', icon: '🏠', label: '2. Ambiente de lectura' },
    { id: 'cap3', href: 'cap3.html', icon: '🎮', label: '3. Métodos divertidos' },
    { id: 'cap4', href: 'cap4.html', icon: '💪', label: '4. Motivación y confianza' },
    { id: 'cap5', href: 'cap5.html', icon: '📅', label: '5. Lectura en la vida diaria' },
    { id: 'cap6', href: 'cap6.html', icon: '🔧', label: '6. Superar dificultades' },
    { id: 'cap7', href: 'cap7.html', icon: '🛠️', label: '7. Herramientas y recursos' },
    { id: 'cap8', href: 'cap8.html', icon: '🏫', label: '8. Colaborar con la escuela' },
    { id: 'cap9', href: 'cap9.html', icon: '🎉', label: '9. Celebrar el progreso' },
    { id: 'cap10', href: 'cap10.html', icon: '❤️', label: '10. Viaje familiar' },
  ];

  const bono1caps = [
    { id: 'bono1-cap1', href: 'bono1-cap1.html', label: 'Cap 1 · Juegos de palabras' },
    { id: 'bono1-cap2', href: 'bono1-cap2.html', label: 'Cap 2 · Narrativa interactiva' },
    { id: 'bono1-cap3', href: 'bono1-cap3.html', label: 'Cap 3 · Tecnología y lectura' },
    { id: 'bono1-cap4', href: 'bono1-cap4.html', label: 'Cap 4 · Actividades prácticas' },
  ];

  const bono2caps = [
    { id: 'bono2-cap1', href: 'bono2-cap1.html', label: 'Cap 1 · Emociones en las historias' },
    { id: 'bono2-cap2', href: 'bono2-cap2.html', label: 'Cap 2 · Lectura empática' },
    { id: 'bono2-cap3', href: 'bono2-cap3.html', label: 'Cap 3 · Cuentos para sanar' },
    { id: 'bono2-cap4', href: 'bono2-cap4.html', label: 'Cap 4 · Comunicación familiar' },
  ];

  const bono3caps = [
    { id: 'bono3-cap1', href: 'bono3-cap1.html', label: 'Cap 1 · Lectura en movimiento' },
    { id: 'bono3-cap2', href: 'bono3-cap2.html', label: 'Cap 2 · Lectura y cultura' },
    { id: 'bono3-cap3', href: 'bono3-cap3.html', label: 'Cap 3 · Materiales creativos' },
    { id: 'bono3-cap4', href: 'bono3-cap4.html', label: 'Cap 4 · Lectura al aire libre' },
  ];

  const kit = [
    { id: 'descargas', href: 'descargas.html', icon: '⬇️', label: 'Descargar Material' },
  ];

  function navItem(item) {
    const isActive = activePage === item.id;
    return `<a href="${item.href}" class="nav-item${isActive ? ' active' : ''}">
      <span class="icon">${item.icon || '·'}</span> ${item.label}
    </a>`;
  }

  function subItem(item) {
    const isActive = activePage === item.id;
    return `<a href="${item.href}" class="nav-item${isActive ? ' active' : ''}" style="font-size:11px;padding:7px 12px 7px 20px;">
      <span class="icon">·</span> ${item.label}
    </a>`;
  }

  // Detectar si algún cap de cada bono está activo
  const bono1Active = bono1caps.some(c => c.id === activePage) || activePage === 'bono1';
  const bono2Active = bono2caps.some(c => c.id === activePage) || activePage === 'bono2';
  const bono3Active = bono3caps.some(c => c.id === activePage) || activePage === 'bono3';

  const html = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <a href="index.html" style="text-decoration:none;display:block;">
          <img src="assets/tuki.png" alt="Tuki" style="width:80px;display:block;margin-bottom:10px;" onerror="this.style.display='none'">
          <div class="brand">Leer con Ganas</div>
          <div class="subtitle">Aprende Mente</div>
        </a>
      </div>

      <div class="nav-section">
        <div class="nav-label">Inicio</div>
        <a href="index.html" class="nav-item${activePage === 'index' ? ' active' : ''}">
          <span class="icon">🏠</span> Bienvenida
        </a>
      </div>

      <div class="nav-divider"></div>

      <div class="nav-section">
        <div class="nav-label">Guía Principal</div>
        ${caps.map(navItem).join('')}
      </div>

      <div class="nav-divider"></div>

      <div class="nav-section">
        <div class="nav-label">Bonos</div>

        <!-- BONO 1 -->
        <div class="nav-item${bono1Active ? ' active' : ''}" style="cursor:default;font-weight:800;">
          <span class="icon">🎮</span> Juegos que Enseñan
        </div>
        ${bono1caps.map(subItem).join('')}

        <div style="height:6px;"></div>

        <!-- BONO 2 -->
        <div class="nav-item${bono2Active ? ' active' : ''}" style="cursor:default;font-weight:800;">
          <span class="icon">❤️</span> Lectura y Emoción
        </div>
        ${bono2caps.map(subItem).join('')}

        <div style="height:6px;"></div>

        <!-- BONO 3 -->
        <div class="nav-item${bono3Active ? ' active' : ''}" style="cursor:default;font-weight:800;">
          <span class="icon">🌍</span> Lectura sin Fronteras
        </div>
        ${bono3caps.map(subItem).join('')}
      </div>

      <div class="nav-divider"></div>

      <div class="nav-section">
        <div class="nav-label">Kit de Actividades</div>
        ${kit.map(navItem).join('')}
      </div>
    </aside>

    <button class="hamburger" id="hamburger">☰</button>
    <div class="overlay" id="overlay"></div>
  `;

  document.getElementById('sidebar-container').innerHTML = html;

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}