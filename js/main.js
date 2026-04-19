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
      { text: 'Se la paso a otro grupo que tengo', correct: false, feedback: 'Si la sigues pasando, el daño va aumentando. Compartir lo privado es un gran error, ¡respeta a los otros y sé mucho mejor!' },
      { text: 'Le digo que la borre y que no la pase. Yo no la comparto', correct: true, feedback: '¡Has sido valiente al actuar! Cortar la cadena es saber cuidar. Proteges la imagen y la dignidad, ¡eso es actuar con responsabilidad!' },
      { text: 'Le mando un 😂 y me la guardo', correct: false, feedback: 'Aunque te rías y decidas guardarla, no ayudas a nadie por quedártela sin más. Lo que a ti te hace gracia, a otra persona le duele. Si haces algo a tiempo, todo se resuelve.' }
    ],
    successTransition: 'Cifrado de privacidad restaurado. Habéis detenido la difusión a tiempo, pero el sistema sigue inestable. ¡Cuidado! El virus está infectando a grupos enteros. El algoritmo está creando una espiral de intolerancia que amenaza con dividir el mundo físico. Debéis romper la cámara de eco antes de que el sistema colapse.'
  },
  {
    id: 'ciberodio',
    ageGroup: 'all',
    center: 'Centro de Odio',
    alert: 'El algoritmo está creando una espiral de intolerancia que amenaza con dividir el mundo físico. Debéis romper la cámara de eco antes de que el sistema colapse.',
    media: { type: 'video', src: 'assets/ciberodio.mp4' },
    situation: 'Estás en el grupo de WhatsApp y empiezan a saltar mensajes sin parar. Cuando entras, ves que, por un vídeo de X, están soltando comentarios sobre un grupo de personas por su origen.',
    options: [
      { text: 'Lo reenvío a otro grupo para que lo vean', correct: false, feedback: 'Si lo reenvías, el daño puede aumentar. Mejor frenar a tiempo y no hacerlo viral.' },
      { text: 'No sigo el rollo y denuncio el reel en Instagram', correct: true, feedback: '¡Excelente decisión has tomado! Al insulto le has cortado el paso. Denunciar es cuidar al de al lado, y un internet mejor habrás creado.' },
      { text: 'Me sumo a las bromas e insultos', correct: false, feedback: 'Unirse a la mofa no te hace mejor, solo hace que todo vaya a peor. El respeto es siempre la mejor opción, ¡di no a la discriminación!' }
    ],
    successTransition: 'El ruido se detiene… habéis limpiado los canales. El Centro de Odio está expuesto y las Sombras Digitales se desvanecen, pero los sensores siguen en rojo. No es un fallo de hardware… hemos detectado a una persona en el foco.'
  },
  {
    id: 'ciberacoso',
    ageGroup: 'all',
    center: 'Centro de Acoso',
    alert: 'Hemos detectado una señal de socorro activa. Un perfil está siendo atacado en el sistema. ¡Hay que actuar ya!',
    media: { type: 'video', src: 'assets/ciberacoso.mp4' },
    situation: 'Estás en el grupo de clase y ves que han estado haciendo comentarios sobre una compañera, Sandra, hasta que se ha salido del grupo. Después la vuelven a meter para seguir burlándose de ella.',
    options: [
      { text: 'No digo nada y solo leo los mensajes', correct: false, feedback: 'Si te quedas solo mirando, al que insulta estás ayudando. No seas testigo del mal comportamiento, ¡rompe el silencio en este momento!' },
      { text: 'Me sumo a los insultos', correct: false, feedback: 'Sumarse al ataque es un gran error, causas en ella un profundo dolor. Lo que en el grupo decidas publicar, a tus compañeros puede dañar.' },
      { text: 'Le escribo por privado para ver si está bien', correct: true, feedback: 'Tu mensaje es un rayo de luz, le quitas de encima una pesada cruz. Ayudar al que sufre es un gesto valiente, ¡así se comporta un buen referente!' }
    ],
    successTransition: 'Habéis protegido a la víctima y el Centro de Acoso ha sido restaurado, pero… el virus ha mutado. ¡Iniciando escaneo de perfiles! Ahora toca ver si sabes detectarlo.'
  },
  {
    id: 'grooming',
    ageGroup: 'all',
    center: 'Centro de Engaño',
    alert: '¡Iniciando escaneo de perfiles! Se detecta un patrón de comportamiento sospechoso. Demuestra lo que eres capaz de detectar.',
    media: { type: 'image', src: 'assets/grooming.png', caption: 'Chat real en consola: un desconocido pide tu número personal' },
    situation: 'Llevas varios días escribiéndote con un chico con el que sueles jugar a videojuegos. Un día te pide tu número de teléfono para poder avisarte para jugar.',
    options: [
      { text: 'Le paso mi número para jugar otro día', correct: false, feedback: 'Dar tu teléfono es un gran error, con un extraño no estarás mejor. Dar tu número a alguien que no conoces le permite contactarte fuera del juego. ¡Protege siempre tu información!' },
      { text: 'No le paso mi número y le bloqueo', correct: true, feedback: '¡Qué buena respuesta, has estado atento! Cortar el contacto es un gran acierto. Si no le conoces, mejor no hablar, tu tranquilidad debes priorizar.' },
      { text: 'No le paso mi número, pero le doy mi Insta', correct: false, feedback: 'Darle tu Insta es darle una pista, aunque parezca que no está a la vista. Compartir tus redes con alguien desconocido también puede exponer información personal. ¡Mantén tu perfil siempre protegido!' }
    ],
    successTransition: '¡Identidad del impostor confirmada! El virus ha sido purgado y el Centro de Engaño se ha estabilizado, pero en su retirada ha activado una trampa de fragmentación que altera los datos.'
  },
  {
    id: 'fakenews',
    ageGroup: 'all',
    center: 'Centro de Bulos',
    alert: '¡Alerta! Se detecta información falsa propagándose a gran velocidad por los canales. Debéis verificar antes de que sea demasiado tarde.',
    situation: 'Estás haciendo scroll en TikTok, cuando te aparece un vídeo que muestra que el Gobierno de España ha prohibido el uso de móviles a menores de 16 años.',
    options: [
      { text: 'La difundo en mis redes sociales', correct: false, feedback: 'Si compartes sin verificar, una mentira vas a propagar. No lances noticias a la ligera, ¡que la red no sea una ratonera!' },
      { text: 'Busco si la noticia aparece en medios fiables antes de compartirla', correct: true, feedback: '¡Gran decisión has tomado! El dato has contrastado. No te dejes engañar, la verdad siempre hay que buscar.' },
      { text: 'Miro los comentarios a ver si alguien dice si es verdad', correct: false, feedback: 'En los comentarios no está la verdad, pues falta mucha objetividad. Busca siempre un medio oficial, ¡así serás un genio digital!' }
    ],
    successTransition: '¡Adiós al clickbait! El Centro de Bulos está protegido. Pero ¡cuidado! Los sensores de autoestima están cayendo en picado.'
  },
  {
    id: 'bodyshaming',
    ageGroup: 'all',
    center: 'Centro de Críticas',
    alert: '⚠️ Los sensores de autoestima están cayendo en picado. Se detectan comentarios dañinos en los canales. ¡Actuad ya!',
    situation: 'Te encuentras en Instagram con un reel de una chica de contenido fitness y, al entrar en los comentarios, ves que la mayoría son burlas hacia su cuerpo.',
    options: [
      { text: 'Le doy like a los comentarios', correct: false, feedback: 'Si un \'like\' decides regalar, al que insulta vas a animar. Del cuerpo ajeno no hay que opinar, ¡el respeto siempre debe ganar!' },
      { text: 'Paso del vídeo y sigo viendo otro', correct: false, feedback: 'Si pasas de largo y decides callar, a la víctima no vas a ayudar. No mires hacia otro lado, ¡el silencio es un mal aliado!' },
      { text: 'Denuncio los comentarios ofensivos y digo que esto no está bien', correct: true, feedback: '¡Qué valiente es tu reacción! Poner límites es la solución. Cuidar a otros es lo más genial, ¡eres un héroe del mundo digital!' }
    ],
    successTransition: 'Lograste acabar con el odio injustificado, por lo que el Centro de Críticas está a salvo de amenazas. Sin embargo, una nueva amenaza está atacando vuestros terminales. ¡No muerdas el anzuelo!'
  },
  {
    id: 'phishing',
    ageGroup: 'all',
    center: 'Centro de Identidad',
    alert: '¡Alerta! Se detecta un intento de suplantación de identidad. Un mensaje sospechoso está llegando a los terminales. ¡No muerdas el anzuelo!',
    situation: 'Recibes un DM de una cuenta llamada "TikTok-Security-Center-2026" (con el logo de TikTok como foto de perfil). El mensaje dice: "¡Felicidades! Tu cuenta ha sido seleccionada para recibir la insignia de verificación y un bono de 5.000 monedas. Tienes 24 horas para reclamarlo. Haz clic aquí para verificar tu identidad: www.tiktok-verify-rewards.io"',
    options: [
      { text: 'Hacer clic rápido en el enlace para no perder el regalo', correct: false, feedback: 'Si haces clic sin pensar, tu cuenta van a robar. No des tu contraseña a un extraño, ¡o sufrirás un gran daño!' },
      { text: 'Reenviar el mensaje a un amigo para que él también gane los puntos', correct: false, feedback: 'Hablar con un amigo está muy bien, pero él puede caer también. Mejor cuéntale a un adulto el cuento, para estar seguro en todo momento.' },
      { text: 'Bloquear la cuenta, reportar el mensaje y no abrir el enlace', correct: true, feedback: '¡Lo has hecho fenomenal! Has evitado un final fatal. Si reportas al estafador, de la red eres el mejor.' }
    ],
    successTransition: '¡Lograste no picar por esta vez! El Centro de Identidad está seguro. ¡Casi acabaste con todos los virus! El siguiente es un parásito financiero y psicológico. ¡No te dejes caer en sus garras!'
  },
  {
    id: 'lootboxes',
    ageGroup: 'all',
    center: 'Centro de Estafa',
    alert: '⚠️ Se detecta un parásito financiero y psicológico en el sistema. ¡No te dejes caer en sus garras!',
    situation: 'Estás jugando a tu videojuego favorito y de repente te salta esta oferta para abrir una caja misteriosa con recompensas interesantes. Puedes ganar objetos exclusivos o perder tus monedas. El contador dice: "¡Solo quedan 2 cajas disponibles!"',
    options: [
      { text: 'La compro sin consultar con mis padres', correct: false, feedback: '¡Cuidado, atención! Es una tentación. Si compras la caja sin saber qué hay dentro, perder tus monedas será el final del cuento.' },
      { text: 'Paso y sigo jugando', correct: true, feedback: '¡Muy buena elección, mantén la atención! No necesitas cajas para ser un campeón, lo que importa es tu esfuerzo y la diversión.' },
      { text: 'Le digo a un amigo que la compre conmigo para probar suerte', correct: false, feedback: 'Convencer a un amigo no es el camino, pues nadie controla este raro destino. Gastar en la suerte suele salir mal, ¡mejor jueguen juntos de forma real!' }
    ],
    successTransition: '¡Bóveda sellada! Habéis resistido la tentación del azar y recuperado los créditos del sistema, el Centro de Estafa se ha recuperado. ¡Vamos a por el último Centro antes del reinicio!'
  },
  {
    id: 'robocontrasena',
    ageGroup: 'all',
    center: 'Centro de Privacidad',
    alert: '⚠️ ¡Último centro! Se detecta un intento de robo de credenciales. ¡Revisa que todo esté en orden!',
    situation: 'Estás viendo vídeos cuando te llega una notificación que parece ser de Instagram: "⚠️ ALERTA DE SEGURIDAD: Hemos detectado varios intentos fallidos de inicio de sesión en tu cuenta desde Moscú, Rusia. Por tu seguridad, hemos bloqueado el acceso temporalmente. Para desbloquear tu cuenta, haz clic en el siguiente botón."',
    options: [
      { text: 'Haces clic rápido en el botón para cambiar la contraseña cuanto antes', correct: false, feedback: 'Si al botón le das sin pensar, el pirata te va a pescar. Lo que parece una solución, ¡es solo una gran suplantación!' },
      { text: 'No haces clic. Abres Instagram tú mismo y vas a Configuración > Seguridad para ver si hay avisos reales', correct: true, feedback: '¡Eres todo un detective, así el peligro no te recibe! Entra tú mismo en la aplicación y evita cualquier suplantación.' },
      { text: 'Ignoras el mensaje. Total, mi contraseña es el nombre de mi perro, no se la sabe nadie', correct: false, feedback: 'Si tu clave es muy sencilla, te pillarán de maravilla. El nombre de tu perro no es seguridad, ¡ponle números y más dificultad!' }
    ],
    successTransition: 'El ruido se detiene... habéis limpiado todos los canales. El Centro de Privacidad está seguro. Las Sombras Digitales se han desvanecido. ¡El Internet ha vuelto!'
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

function showScreen(id) {
  if (id !== 'screen-video') {
    const v = document.getElementById('mission-video');
    if (v) v.pause();
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ── Glitch Transition ─────────────────────────────────── */

function triggerGlitchAndGo() {
  const overlay = document.getElementById('glitch-overlay');
  const title   = document.getElementById('glitch-title');
  const btn     = document.getElementById('btn-start');
  btn.disabled  = true;

  overlay.classList.add('active');
  title.classList.add('glitching');

  setTimeout(() => {
    overlay.classList.remove('active');
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
