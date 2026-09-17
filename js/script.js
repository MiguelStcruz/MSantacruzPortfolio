document.documentElement.classList.add('has-js');

const projects = [
  {
    title: 'Lightlock',
    description: 'A third-person, multiplayer puzzle game. Four players must collaborate together to solve puzzles and move through the levels while chained to each other.',
    role: 'UI Programmer',
    engine: 'Unreal Engine',
    language: 'C#',
    contributions: ['UI design', 'UI functionality', 'Level cutscenes',],
    overview: 'Lightlock is a game where four players are chained together and they must solve puzzles to escape. ',
    image: 'assets/images/LightLockpng.png',
    video: 'assets/videos/LightLock.mp4'
  },
  {
    title: 'Yeti Run',
    description: 'A 2D platformer game developed for my midstone project at Humber College. The player must run through the platforms and reach the goal before the time runs out.',
    role: 'Lead Programmer',
    engine: 'Custom made engine',
    language: 'C++',
    contributions: ['Collision detection', 'Player controller', 'Animation system', 'Art assets', 'UI implementation'],
    overview: 'More than a game, the purpose of YetiRun was to design game engine assets and systems, such as physics, animations, UI, etc.',
    image: 'assets/images/YetiRun.png',
    video: ''
  },
  {
    title: 'Sewer Surfers',
    description: 'A 3D endless runner developed for my capstone project at Humber College. The player slides down a sewer while trying to avoid obstacles and survive for as long as they can.',
    role: 'Team Lead',
    engine: 'Unreal Engine',
    language: 'C# - Blueprints',
    contributions: ['Random terrain generation', 'Player controller', 'Local networking', 'Game save and load files'],
    overview: 'The player takes control of a frog sliding down the sewers. They must collect goodies while dodging dangerous obstacles in an endless runner.',
    image: 'assets/images/SewerSurferspng.png',
    video: 'assets/videos/SewerSurfers.mp4'
  }
];

const projectList = document.querySelector('[data-project-list]');
const dialog = document.querySelector('[data-project-dialog]');
const dialogContent = document.querySelector('[data-dialog-content]');
const dialogClose = document.querySelector('[data-dialog-close]');
let lastProjectTrigger;

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const projectVisual = (project, index) => project.image
  ? `<img src="${project.image}" width="960" height="600" loading="lazy" alt="Gameplay from ${escapeHtml(project.title)}">`
  : `<div class="project-visual__frame" aria-hidden="true"><span></span><span></span><span></span></div>
     <span class="project-visual__label">Media placeholder</span>`;

projectList.innerHTML = projects.map((project, index) => `
  <article class="project-card project-card--${index + 1}" data-reveal>
    <div class="project-visual">${projectVisual(project, index)}</div>
    <div class="project-body">
      <h3>${escapeHtml(project.title)}</h3>
      <p class="project-description">${escapeHtml(project.description)}</p>
      <dl class="project-meta">
        <div><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div>
        <div><dt>Engine</dt><dd>${escapeHtml(project.engine)}</dd></div>
        <div><dt>Language</dt><dd>${escapeHtml(project.language)}</dd></div>
      </dl>
      <div class="project-contributions">
        <strong>Candidate contributions</strong>
        <ul>${project.contributions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <div class="button-row">
        <button class="button button--primary" type="button" data-project-index="${index}">Learn More</button>
      </div>
    </div>
  </article>
`).join('');

const projectLink = (url, label) => url
  ? `<a class="button button--secondary" href="${url}" target="_blank" rel="noreferrer">${label}</a>`
  : `<span class="button button--secondary" aria-disabled="true" title="Add this URL in js/script.js">${label} [add URL]</span>`;

function openProject(index, trigger) {
  const project = projects[index];
  lastProjectTrigger = trigger;
  dialogContent.innerHTML = `
    <article class="case-study">
      <header class="case-study__head">
        <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.description)}</p>
        <div class="case-study__meta">
        </div>
      </header>
      <div class="case-study__grid">
        <section class="case-study__section"><h3>Overview</h3><p>${escapeHtml(project.overview)}</p></section>
        <section class="case-study__section"><h3>My role</h3><p>${escapeHtml(project.role)}.</p></section>
      <div class="case-study__media">
        ${project.video ? `
          <video controls width="100%" preload="metadata">
            <source src="${project.video}" type="video/mp4">
            Your browser does not support video playback.
          </video>
        ` : `
          <img src="${project.image}" alt="Screenshot of ${escapeHtml(project.title)}" loading="lazy">
        `}
      </div>
    </article>`;
  dialog.showModal();
  dialogClose.focus();
}

projectList.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-index]');
  if (trigger) openProject(Number(trigger.dataset.projectIndex), trigger);
});

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  const video = dialog.querySelector('video');

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  lastProjectTrigger?.focus();
});

const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

const header = document.querySelector('[data-header]');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const navLinks = [...nav.querySelectorAll('a')];
const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.toggleAttribute('aria-current', link.hash === `#${visible.target.id}`));
}, { rootMargin: '-22% 0px -60%', threshold: [0, .25, .6] });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -8%', threshold: .08 });
const workHeading = document.querySelector('.work .section-heading');
if (workHeading) revealObserver.observe(workHeading);
