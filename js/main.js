/* ── Risk Data ─────────────────────────────────────────── */

const RISKS = [
  { id: 'sexting',       ageGroup: 'over13', icon: '🔒', name: 'Sexting sin consentimiento', desc: 'Compartir imágenes privadas ajenas causa daño real y es ilegal.' },
  { id: 'ciberodio',     ageGroup: 'all',    icon: '🚫', name: 'Ciberodio',                  desc: 'Los comentarios de odio online tienen consecuencias en la vida real.' },
  { id: 'ciberacoso',    ageGroup: 'all',    icon: '🛡️', name: 'Ciberacoso',                 desc: 'Ignorar o participar en el acoso online hace el daño mayor.' },
  { id: 'grooming',      ageGroup: 'all',    icon: '⚠️', name: 'Grooming',                   desc: 'Los adultos que se acercan online a menores pueden ser peligrosos.' },
  { id: 'fakenews',      ageGroup: 'all',    icon: '🔍', name: 'Fake news',                  desc: 'Verifica siempre en fuentes fiables antes de compartir.' },
  { id: 'bodyshaming',   ageGroup: 'all',    icon: '💬', name: 'Body shaming',               desc: 'Burlarse del cuerpo de alguien online es acoso y causa daño real.' },
  { id: 'phishing',      ageGroup: 'all',    icon: '🎣', name: 'Phishing',                   desc: 'Los estafadores imitan webs y marcas para robarte datos.' },
  { id: 'lootboxes',     ageGroup: 'all',    icon: '🎮', name: 'Lootboxes',                  desc: 'Las cajas de recompensa usan mecánicas de azar para provocar gasto.' },
  { id: 'robocontrasena',ageGroup: 'all',    icon: '🔑', name: 'Robo de contraseñas',        desc: 'Nunca hagas clic en enlaces sospechosos ni uses contraseñas débiles.' },
];

/* ── Game Data ─────────────────────────────────────────── */

const ALL_SCENARIOS = [
  {
    id: 'sexting',
    ageGroup: 'over13',
    center: 'Centro de Intimidad',
    alert: 'Se ha detectado una fuga de archivos privados moviéndose a gran velocidad hacia los servidores públicos. El Centro de Intimidad está perdiendo presión... ¡Corred, antes de que el daño sea permanente!',
    media: { type: 'image', src: 'assets/sexting.png', caption: 'Capturas reales: foto íntima reenviada sin consentimiento en WhatsApp' },
    situation: 'Empiezas a recibir muchas notificaciones y, al entrar en WhatsApp, ves que una amiga y un amigo te han enviado fotos íntimas de otras personas que solo se las habían enviado a ellos.',
    options: [
      { text: 'Se la paso a otro grupo que tengo', correct: false, feedback: 'Si la sigues pasando, el daño va aumentando. Es algo privado: mejor cortarlo y no seguir reenviando.' },
      { text: 'Le digo que la borre y que no la pase. Yo no la comparto', correct: true, feedback: '¡Has sido valiente al actuar! Cortar la cadena es saber cuidar. Proteges la imagen y la dignidad: eso es actuar con responsabilidad.' },
      { text: 'Le mando un 😂 y me la guardo', correct: false, feedback: 'Reírte o guardarla no es ayudar: lo que a ti te hace gracia puede hacer daño de verdad; mejor saber frenar y no continuar.' }
    ],
    successTransition: 'Cifrado de privacidad restaurado. Habéis detenido la difusión a tiempo, pero el sistema sigue inestable. ¡Cuidado! El virus está infectando a grupos enteros. El algoritmo está creando una espiral de intolerancia que amenaza con dividir el mundo físico. Debéis romper la cámara de eco antes de que el sistema colapse.'
  },
  {
    id: 'ciberodio',
    ageGroup: 'all',
    center: 'Centro de Respeto',
    alert: 'El algoritmo está creando una espiral de intolerancia que amenaza con dividir el mundo físico. Debéis romper la cámara de eco antes de que el sistema colapse.',
    media: { type: 'video', src: 'assets/ciberodio.mp4' },
    situation: 'Estás en el grupo de WhatsApp y empiezan a saltar mensajes sin parar. Cuando entras, ves que, por un vídeo de X, están soltando comentarios sobre un grupo de personas por su origen.',
    options: [
      { text: 'Lo reenvío a otro grupo para que lo vean', correct: false, feedback: 'Cada vez que lo reenvías, el daño crece más: mejor frenarlo a tiempo y no hacerlo viral.' },
      { text: 'No sigo el rollo y denuncio el reel en Instagram', correct: true, feedback: '¡Bien hecho! Cortar el paso al insulto es un gran acto: denunciar es cuidar al de al lado.' },
      { text: 'Me sumo a las bromas e insultos', correct: false, feedback: 'Seguir la mofa no es solución, solo hace crecer la situación; no entrar al juego y elegir otra opción.' }
    ],
    successTransition: 'El Centro de Respeto se ha estabilizado y las Sombras Digitales se desvanecen, pero los sensores siguen en rojo. No es un fallo de hardware… hemos detectado a una persona en el foco.'
  },
  {
    id: 'ciberacoso',
    ageGroup: 'all',
    center: 'Centro de Empatía',
    alert: 'Hemos detectado una señal de socorro activa. Un perfil está siendo atacado en el sistema. ¡Hay que actuar ya!',
    media: { type: 'video', src: 'assets/ciberacoso.mp4' },
    situation: 'Estás en el grupo de WhatsApp de clase y se están metiendo con una compañera, Sandra. Se sale, pero la vuelven a meter para seguir riéndose de ella.',
    options: [
      { text: 'No digo nada y solo leo los mensajes', correct: false, feedback: 'Quedarte solo mirando también cuenta en la situación: el silencio deja pasar el daño; apoyar a quien lo sufre cambia la dirección.' },
      { text: 'Me sumo a los insultos', correct: false, feedback: 'Lo que se dice puede afectar; apoyar a quien lo pasa mal es fundamental.' },
      { text: 'Le escribo por privado para ver si está bien', correct: true, feedback: '¡Bien hecho! Escribirle por privado es una buena acción: le haces sentir acompañada y animas a otros a cambiar su reacción.' }
    ],
    successTransition: 'Habéis protegido a la víctima y el Centro de Empatía ha sido restaurado, pero… el virus ha mutado. ¡Iniciando escaneo de perfiles! Demuestra lo que eres capaz de detectar.'
  },
  {
    id: 'grooming',
    ageGroup: 'all',
    center: 'Centro de Seguridad Personal',
    alert: '¡Iniciando escaneo de perfiles! Demuestra lo que eres capaz de detectar.',
    media: { type: 'image', src: 'assets/grooming.png', caption: 'Chat real en consola: un desconocido pide tu número personal' },
    situation: 'Llevas unos días hablando por el chat de la Play con alguien con quien sueles jugar. Os lleváis bien, pero no lo conoces fuera del juego. Un día te pide tu número de teléfono para avisarte cuando se conecte.',
    options: [
      { text: 'Le paso mi número para hablar por ahí otro día', correct: false, feedback: 'Dar tu número puede parecer sin importancia, aunque te dé confianza, mejor guardar distancia.' },
      { text: 'No le paso mi número y le bloqueo', correct: true, feedback: '¡Bien visto! Cortar a tiempo es protección: si no sabes quién es, cuida tu información.' },
      { text: 'No le paso mi número, pero le doy mi Insta', correct: false, feedback: 'Dar tu Insta también abre la conversación, mejor cuidar lo que compartes y con quién hablas con precaución.' }
    ],
    successTransition: 'Algo no encajaba y has sabido detectarlo. El virus ha sido eliminado y el Centro de Seguridad Personal se ha estabilizado, pero antes de desaparecer ha alterado los datos. Lo está haciendo otra vez… está en tus manos distinguir qué es verdad y qué no.'
  },
  {
    id: 'fakenews',
    ageGroup: 'all',
    center: 'Centro de Pensamiento Crítico',
    alert: '¡Alerta! Se detecta información falsa propagándose a gran velocidad por los canales. Debéis verificar antes de que sea demasiado tarde.',
    media: { type: 'image', src: 'assets/fake%20news.png', caption: 'Noticia viral sin verificar propagándose en redes' },
    situation: 'Estás en TikTok haciendo scroll y te aparece un vídeo en el que hablan de una nueva medida del Gobierno de España.',
    options: [
      { text: 'La difundo en mis redes sociales', correct: false, feedback: 'Cuando algo no está claro, puede causar confusión; mejor pararse un momento y buscar otra versión.' },
      { text: 'Busco si la noticia aparece en medios fiables antes de compartirla', correct: true, feedback: '¡Bien hecho! No todo lo que parece es verdad, fijarse en quién lo cuenta ayuda a ver la realidad.' },
      { text: 'Miro los comentarios a ver si alguien dice si es verdad', correct: false, feedback: 'Lo que dicen otros no siempre es señal, puede haber opiniones, pero no un dato real.' }
    ],
    successTransition: '¡Clickbait neutralizado! El Centro de Pensamiento Crítico está protegido, pero algo no va bien… los niveles de autoestima están cayendo. El virus ha cambiado de objetivo.'
  },
  {
    id: 'bodyshaming',
    ageGroup: 'all',
    center: 'Centro de Autoestima',
    alert: '⚠️ Los sensores de autoestima están cayendo en picado. Se detectan comentarios dañinos en los canales. ¡Actuad ya!',
    media: { type: 'image', src: 'assets/bodyshaming.png', caption: 'Comentarios ofensivos en un reel de fitness' },
    situation: 'Estás en Instagram y te aparece un reel de una chica de contenido fitness. Al entrar en los comentarios, ves que la mayoría son burlas sobre su cuerpo.',
    options: [
      { text: 'Le doy like a los comentarios', correct: false, feedback: 'Un simple gesto puede reforzar la acción, y hacer que continúe la misma situación; mejor usar las redes desde el respeto y la reflexión.' },
      { text: 'Paso del vídeo y sigo viendo otro', correct: false, feedback: 'Mirar y seguir puede parecer lo normal, pero quien lo recibe no lo vive igual; apoyar también es saber actuar.' },
      { text: 'Denuncio los comentarios ofensivos y digo que esto no está bien', correct: true, feedback: '¡Bien hecho! Frenar este tipo de acción crea un espacio con respeto y protección.' }
    ],
    successTransition: '¡Has frenado las burlas! El Centro de Autoestima está a salvo. Pero algo no encaja… un nuevo virus se está propagando por el sistema y cada vez es más difícil de detectar.'
  },
  {
    id: 'phishing',
    ageGroup: 'all',
    center: 'Centro de Identidad',
    alert: '¡Alerta! Se detecta un intento de suplantación de identidad. Un mensaje sospechoso está llegando a los terminales. ¡No muerdas el anzuelo!',
    media: { type: 'image', src: 'assets/Phishing-TikTok.png', caption: 'DM falso de TikTok prometiendo verificación y monedas' },
    situation: 'Recibes un DM de una cuenta llamada "TikTok-Security-Center-2026" (con el logo de TikTok como foto de perfil). El mensaje dice: "¡Felicidades! Tu cuenta ha sido seleccionada para recibir la insignia de verificación y un bono de 5.000 monedas. Tienes 24 horas para reclamarlo. Haz clic aquí para verificar tu identidad: www.tiktok-verify-rewards.io"',
    options: [
      { text: 'Entrar en el enlace para no perder el regalo', correct: false, feedback: 'Si algo te apura y te invita a clicar, mejor parar un momento y pensarlo antes de actuar.' },
      { text: 'Reenviarlo a un amigo para que también lo tenga', correct: false, feedback: 'Si lo compartes sin pensar, tu amigo también puede confiar; mejor hablarlo con alguien antes de reenviar.' },
      { text: 'Bloquear la cuenta, reportar el mensaje y no abrir el enlace', correct: true, feedback: '¡Bien hecho! Has visto la trampa a tiempo y no has caído en el intento.' }
    ],
    successTransition: '¡Has evitado la trampa! El Centro de Identidad está a salvo. Estás cada vez más cerca de acabar con los virus… pero uno nuevo aparece: parece inofensivo, pero puede engancharte.'
  },
  {
    id: 'lootboxes',
    ageGroup: 'all',
    center: 'Centro de Autocontrol',
    alert: '⚠️ Se detecta un parásito financiero y psicológico en el sistema. ¡No te dejes caer en sus garras!',
    media: { type: 'image', src: 'assets/Loot%20boxes.png', caption: 'Oferta de caja misteriosa en videojuego' },
    situation: 'Estás jugando a tu videojuego favorito y de repente te salta esta oferta para abrir una caja misteriosa con recompensas interesantes. Puedes ganar objetos exclusivos o perder tus monedas. El contador dice: "¡Solo quedan 2 cajas disponibles!"',
    options: [
      { text: 'Uso el saldo de la tarjeta monedero para abrir la caja', correct: false, feedback: 'Al gastar para abrir, puedes querer repetir; mejor poner un límite antes de seguir.' },
      { text: 'Paso y sigo jugando', correct: true, feedback: '¡Bien hecho! Has sabido elegir y no caer; jugar es para disfrutar, no para gastar sin valorar.' },
      { text: 'Pedir dinero a amigos para abrirla', correct: false, feedback: 'Si pides para jugar, otros te pueden ayudar; pero el problema sigue y puede aumentar.' }
    ],
    successTransition: '¡Bóveda sellada! Has evitado caer en la trampa y recuperado los créditos del sistema. El Centro de Autocontrol se ha estabilizado… pero se ha detectado una última amenaza. ⏳ Tienes 30 segundos antes del reinicio.'
  },
  {
    id: 'robocontrasena',
    ageGroup: 'all',
    center: 'Centro de Privacidad',
    alert: '⚠️ ¡Último centro! Se ha detectado una última amenaza. ⏳ Tienes 30 segundos antes del reinicio.',
    media: { type: 'image', src: 'assets/Robo%20de%20contrase%C3%B1as.png', caption: 'Correo falso de Instagram alertando de un intento de acceso' },
    situation: 'Te ha llegado un correo de Instagram avisando de un intento de acceso a tu cuenta.',
    options: [
      { text: 'Pulsar el botón de "proteger mi cuenta"', correct: false, feedback: 'No todo lo que parece es de fiar; mejor mirar quién lo envía antes de pulsar.' },
      { text: 'Abrir Instagram y comprobar desde la app', correct: true, feedback: '¡Eres todo un detective, así el peligro no te recibe! Entra tú mismo en la aplicación y evita cualquier suplantación.' },
      { text: 'Pasar del correo porque tu contraseña es segura', correct: false, feedback: 'Confiarse no vale, cualquiera puede entrar; mejor revisar a tiempo para tu cuenta cuidar.' }
    ],
    successTransition: 'El ruido se detiene… Has limpiado todos los canales. El Centro de Privacidad está seguro. Las Sombras Digitales se han desvanecido. La conexión ha vuelto… ahora está en tus manos mantenerla.'
  }
];

/* ── Game State ────────────────────────────────────────── */

let state = {
  ageGroup: null,
  scenarios: [],
  currentIndex: 0,
  completedCenters: [],
  lastAnswerCorrect: false
};

/* ── Screen Navigation ─────────────────────────────────── */

let glitchInterval = null;

function flashGlitch() {
  const overlay = document.getElementById('glitch-overlay');
  if (!overlay || overlay.classList.contains('active') || overlay.classList.contains('flash')) return;
  overlay.classList.add('flash');
  setTimeout(() => overlay.classList.remove('flash'), 300);
}

function startPeriodicGlitch() {
  stopPeriodicGlitch();
  glitchInterval = setInterval(flashGlitch, 3500);
}

function stopPeriodicGlitch() {
  clearInterval(glitchInterval);
  glitchInterval = null;
}

const NON_QUIZ_SCREENS = ['screen-intro', 'screen-video', 'screen-age', 'screen-transition', 'screen-final'];

function showScreen(id) {
  if (id !== 'screen-video') {
    const v = document.getElementById('mission-video');
    if (v) v.pause();
  }

  const overlay = document.getElementById('glitch-overlay');
  overlay.classList.remove('active', 'flash');
  void overlay.offsetWidth;
  overlay.classList.add('active');
  setTimeout(() => overlay.classList.remove('active'), 560);

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);

  if (NON_QUIZ_SCREENS.includes(id)) {
    startPeriodicGlitch();
  } else {
    stopPeriodicGlitch();
  }
}

/* ── Glitch Transition ─────────────────────────────────── */

function triggerGlitchAndGo() {
  const title = document.getElementById('glitch-title');
  const btn   = document.getElementById('btn-start');
  btn.disabled = true;
  title.classList.add('glitching');

  setTimeout(() => {
    title.classList.remove('glitching');
    btn.disabled = false;
    goToVideo();
  }, 560);
}

/* ── Video Screen ──────────────────────────────────────── */

function goToVideo() {
  showScreen('screen-video');
  const video = document.getElementById('mission-video');
  const overlay = document.getElementById('video-overlay');
  const skipBtn = document.getElementById('btn-skip');

  // Try autoplay with sound; fall back to muted autoplay; else show play button
  video.play()
    .then(() => {
      overlay.classList.add('hidden');
      skipBtn.style.display = 'inline-block';
    })
    .catch(() => {
      // Try muted autoplay (allowed on most mobile browsers)
      video.muted = true;
      video.play()
        .then(() => {
          overlay.classList.add('hidden');
          skipBtn.style.display = 'inline-block';
          // Unmute after first user interaction on the page
          document.addEventListener('click', () => { video.muted = false; }, { once: true });
        })
        .catch(() => {
          // Manual play required — overlay stays visible
          skipBtn.style.display = 'inline-block';
        });
    });

  video.addEventListener('ended', () => {
    showScreen('screen-age');
  }, { once: true });
}

function playVideo() {
  const video = document.getElementById('mission-video');
  const overlay = document.getElementById('video-overlay');
  video.muted = false;
  video.play().then(() => overlay.classList.add('hidden'));
}

/* ── Game Init ─────────────────────────────────────────── */

function startGame(ageGroup) {
  state.ageGroup = ageGroup;
  state.scenarios = ALL_SCENARIOS.filter(s => ageGroup === 'over13' || s.ageGroup === 'all');
  state.currentIndex = 0;
  state.completedCenters = [];

  showIntroTransition();
}

function showIntroTransition() {
  const sc = state.scenarios[state.currentIndex];
  document.getElementById('transition-icon').textContent = '⚡';
  document.getElementById('transition-text').textContent =
    '¡Comienza la misión! Los Beta-Testers están dentro del servidor. El primer centro infectado os espera. ¡Actuad rápido!';
  renderCentersGrid();
  document.getElementById('transition-btn-text').textContent = 'IR AL PRIMER CENTRO';
  showScreen('screen-transition');
}

/* ── Load Scenario ─────────────────────────────────────── */

function loadCurrentScenario() {
  if (state.currentIndex >= state.scenarios.length) {
    showFinal();
    return;
  }

  const sc = state.scenarios[state.currentIndex];
  const total = state.scenarios.length;
  const current = state.currentIndex + 1;

  // Header
  document.getElementById('center-badge').textContent = sc.center.toUpperCase();

  // Progress dots
  const dotsEl = document.getElementById('progress-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot ' + (i < state.currentIndex ? 'done' : i === state.currentIndex ? 'current' : '');
    dotsEl.appendChild(dot);
  }

  // Pause any previous scenario media
  document.querySelectorAll('.media-video').forEach(v => v.pause());

  // Alert
  document.getElementById('scenario-alert').textContent = sc.alert || '';

  // Situation
  document.getElementById('situation-text').textContent = sc.situation;

  // Media
  renderScenarioMedia(sc.media);

  // Options
  const optionsEl = document.getElementById('options-list');
  optionsEl.innerHTML = '';
  sc.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${opt.text}</span>`;
    btn.onclick = () => selectOption(i, btn);
    optionsEl.appendChild(btn);
  });

  // Hide feedback
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';

  showScreen('screen-scenario');
}

/* ── Scenario Media Renderer ───────────────────────────── */

function renderScenarioMedia(media) {
  const el    = document.getElementById('scenario-media');
  const col   = document.getElementById('scenario-left');
  el.innerHTML = '';

  if (!media) {
    col.classList.add('no-media');
    return;
  }
  col.classList.remove('no-media');

  if (media.type === 'image') {
    const img = document.createElement('img');
    img.src       = media.src;
    img.alt       = media.caption || '';
    img.className = 'media-img';
    img.onclick   = () => openMediaModal('image', media.src);
    el.appendChild(img);

    const expandBtn = document.createElement('button');
    expandBtn.className   = 'media-expand-btn';
    expandBtn.textContent = '⛶ Ver en detalle';
    expandBtn.onclick     = () => openMediaModal('image', media.src);
    el.appendChild(expandBtn);

    if (media.caption) {
      const cap = document.createElement('p');
      cap.className   = 'media-caption';
      cap.textContent = media.caption;
      el.appendChild(cap);
    }

  } else if (media.type === 'video') {
    const wrap  = document.createElement('div');
    wrap.className = 'media-video-wrap';

    const video = document.createElement('video');
    video.src        = media.src;
    video.className  = 'media-video';
    video.controls   = true;
    video.muted      = true;
    video.playsInline = true;
    video.autoplay   = true;
    wrap.appendChild(video);
    el.appendChild(wrap);
    video.play().catch(() => {});

    const expandBtn = document.createElement('button');
    expandBtn.className   = 'media-expand-btn';
    expandBtn.textContent = '⛶ Ver pantalla completa';
    expandBtn.onclick     = () => openMediaModal('video', media.src);
    el.appendChild(expandBtn);
  }
}

/* ── Media Modal ───────────────────────────────────────── */

function openMediaModal(type, src) {
  const modal   = document.getElementById('media-modal');
  const content = document.getElementById('media-modal-content');
  content.innerHTML = '';

  if (type === 'image') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    content.appendChild(img);
  } else {
    const video = document.createElement('video');
    video.src        = src;
    video.controls   = true;
    video.autoplay   = true;
    video.playsInline = true;
    content.appendChild(video);
    video.play().catch(() => {});
  }

  modal.classList.add('open');
  document.addEventListener('keydown', handleModalKey);
}

function closeMediaModal() {
  const modal   = document.getElementById('media-modal');
  const content = document.getElementById('media-modal-content');
  modal.classList.remove('open');
  content.querySelectorAll('video').forEach(v => v.pause());
  content.innerHTML = '';
  document.removeEventListener('keydown', handleModalKey);
}

function handleModalKey(e) {
  if (e.key === 'Escape') closeMediaModal();
}

/* ── Option Selection ──────────────────────────────────── */

function selectOption(index, clickedBtn) {
  const sc = state.scenarios[state.currentIndex];
  const opt = sc.options[index];

  // Disable all options
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === index) {
      b.classList.add(opt.correct ? 'correct' : 'incorrect');
    }
  });

  // Show feedback
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'flex';
  fb.className = 'feedback-box ' + (opt.correct ? 'is-correct' : 'is-incorrect');

  document.getElementById('feedback-icon').textContent = opt.correct ? '✅' : '⚠️';
  document.getElementById('feedback-text').textContent = opt.feedback;

  const fbBtn = document.getElementById('feedback-btn');

  if (opt.correct) {
    state.lastAnswerCorrect = true;
    state.completedCenters.push(sc.center);
    fbBtn.textContent = 'CONTINUAR →';
    fbBtn.onclick = showSuccessTransition;
  } else {
    state.lastAnswerCorrect = false;
    fbBtn.textContent = 'INTENTAR DE NUEVO';
    fbBtn.onclick = retryScenario;
  }
}

/* ── Retry ─────────────────────────────────────────────── */

function retryScenario() {
  loadCurrentScenario();
}

/* ── Success Transition ────────────────────────────────── */

function showSuccessTransition() {
  const sc = state.scenarios[state.currentIndex];
  state.currentIndex++;

  document.getElementById('transition-icon').textContent = '✅';
  document.getElementById('transition-text').textContent = sc.successTransition;
  renderCentersGrid();

  const isLast = state.currentIndex >= state.scenarios.length;
  document.getElementById('transition-btn-text').textContent = isLast ? 'VER RESULTADO FINAL' : 'SIGUIENTE CENTRO';
  document.getElementById('transition-btn').onclick = isLast ? showFinal : loadCurrentScenario;

  showScreen('screen-transition');
}

/* ── Centers Grid ──────────────────────────────────────── */

function renderCentersGrid() {
  const grid = document.getElementById('centers-grid');
  grid.innerHTML = '';
  state.scenarios.forEach(sc => {
    const pill = document.createElement('div');
    const done = state.completedCenters.includes(sc.center);
    pill.className = 'center-pill ' + (done ? 'done' : 'pending');
    pill.innerHTML = (done ? '✓ ' : '○ ') + sc.center;
    grid.appendChild(pill);
  });
}

/* ── Final Screen ──────────────────────────────────────── */

function showFinal() {
  const grid = document.getElementById('risks-grid');
  grid.innerHTML = '';

  const visibleRisks = RISKS.filter(r => state.ageGroup === 'over13' || r.ageGroup === 'all');

  visibleRisks.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'risk-card';
    card.style.animationDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <div class="risk-icon">${r.icon}</div>
      <div class="risk-info">
        <span class="risk-name">${r.name}</span>
        <span class="risk-desc">${r.desc}</span>
      </div>`;
    grid.appendChild(card);
  });

  showScreen('screen-final');
}

/* ── Restart ───────────────────────────────────────────── */

function restartGame() {
  state = { ageGroup: null, scenarios: [], currentIndex: 0, completedCenters: [], lastAnswerCorrect: false };
  showScreen('screen-intro');
}

/* ── Next Scenario (transition btn default) ────────────── */

function nextScenario() {
  loadCurrentScenario();
}

/* ── Init ──────────────────────────────────────────────── */
startPeriodicGlitch();
