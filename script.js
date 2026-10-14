(function () {
  const langWrap       = document.getElementById('lang');
  const btn            = document.getElementById('langBtn');
  const menu           = document.getElementById('langMenu');
  const curFlag        = document.getElementById('curFlag');
  const curLabel       = document.getElementById('curLabel');
  const heroTitle      = document.getElementById('heroTitle');
  const heroDesc       = document.getElementById('heroDesc');
  const supportedTitle = document.getElementById('supportedTitle');

  const dict = {
    en: {
      htmlLang: 'en',
      label: 'English',
      flagClass: 'flag flag--us',
      title: 'Stealth',
      heroTitle: 'Be best, be with <br> <span class="highlight">Stealth</span>',
      heroDesc: 'Experience gaming excellence with the most sophisticated and reliable solutions. Stay ahead of the competition with our premium features.',
      supportedTitle: 'Supported Games'
    },
    ru: {
      htmlLang: 'ru',
      label: 'Русский',
      flagClass: 'flag flag--ru',
      title: 'Stealth',
      heroTitle: 'Будь лучшим, будь с <br> <span class="highlight">Stealth</span>',
      heroDesc: 'Ощутите игровое превосходство с самыми надежными решениями. Оставайтесь на шаг впереди конкурентов с нашими премиальными функциями.',
      supportedTitle: 'Поддерживаемые игры'
    }
  };

  /* --- Apply language --- */
  function setLanguage(key) {
    const d = dict[key];
    if (!d) return;

    document.documentElement.lang = d.htmlLang;
    document.title = d.title;

    curLabel.textContent = d.label;
    curFlag.className    = d.flagClass;

    heroTitle.innerHTML        = d.heroTitle;
    heroDesc.textContent       = d.heroDesc;
    supportedTitle.textContent = d.supportedTitle;

    localStorage.setItem('stealth_lang', key);
  }

  /* --- Toggle dropdown --- */
  function toggleMenu(force) {
    const open = typeof force === 'boolean'
      ? force
      : !langWrap.classList.contains('is-open');

    langWrap.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  /* --- Events --- */
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  menu.addEventListener('click', (e) => {
    const t = e.target.closest('button[data-lang]');
    if (!t) return;
    setLanguage(t.dataset.lang);
    toggleMenu(false);
  });

  document.addEventListener('click', (e) => {
    if (!langWrap.contains(e.target)) toggleMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  /* --- Init --- */
  setLanguage(localStorage.getItem('stealth_lang') || 'en');
})();