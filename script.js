// Данные промтов (можно вынести в отдельный файл, но оставим здесь для простоты)
const promptsData = [
  {
    id: 1,
    titleKey: "prompt-title-1",
    raw: "cinematic shot, cyberpunk street at night, raining, neon signs in japanese, reflective wet asphalt, a lone figure with holographic umbrella, deep shadows, volumetric fog, shot on cinematic camera, 35mm, anamorphic lens flare, masterpiece, 8k --ar 21:9 --v 6.0 --style raw",
    analysisKey: "analysis-1",
    explanationKey: "prompt-explanation-1",
    tags: ["Midjourney", "prompt-tag-cyberpunk", "prompt-tag-cinematic"]
  },
  {
    id: 2,
    titleKey: "prompt-title-2",
    raw: "1990s anime style, magical girl transformation sequence, dynamic spinning pose, sparkles and magical circles, gradient hair, detailed frilly dress, sparkling eyes, background with floating crystals, nostalgic cel-shaded look, VHS tape aesthetic, slight film grain --ar 4:3 --niji 5",
    analysisKey: "analysis-2",
    explanationKey: "prompt-explanation-2",
    tags: ["NijiJourney", "prompt-tag-retro", "prompt-tag-magical"]
  },
  {
    id: 3,
    titleKey: "prompt-title-3",
    raw: "fantasy anime, enchanted forest at twilight, bioluminescent plants, ethereal forest spirit with butterfly wings, glowing particles, soft focus, ray tracing, atmospheric perspective, detailed vegetation, Makoto Shinkai style, vibrant colors, 8k, masterpiece, best quality --ar 3:2",
    analysisKey: "analysis-3",
    explanationKey: "prompt-explanation-3",
    tags: ["Stable Diffusion", "prompt-tag-fantasy", "prompt-tag-shinkai"]
  },
  {
    id: 4,
    titleKey: "prompt-title-4",
    raw: "mecha anime, epic space battle, giant robots clashing, laser beams and explosions, dynamic action shot, detailed mechanical design, glowing energy weapons, cosmic background with nebula, sci-fi aesthetic, high detail, Yoji Shinkawa inspired linework, cinematic lighting --ar 16:9",
    analysisKey: "analysis-4",
    explanationKey: "prompt-explanation-4",
    tags: ["prompt-tag-mecha", "prompt-tag-action", "prompt-tag-space"]
  },
  {
    id: 5,
    titleKey: "prompt-title-5",
    raw: "cozy anime style, rainy day in a small coffee shop, warm interior lighting, steam from coffee cups, girl reading book by window, raindrops on glass, soft shadows, detailed interior, Studio Ghibli atmosphere, comfortable mood, slice of life, muted color palette --ar 5:4 --s 700",
    analysisKey: "analysis-5",
    explanationKey: "prompt-explanation-5",
    tags: ["prompt-tag-sliceoflife", "prompt-tag-cozy", "prompt-tag-ghibli"]
  }
];

// --- Вспомогательная функция (оптимизированная) ---
const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

function escapeHtml(s) {
  if(!s) return '';
  return String(s).replace(/[&<>"']/g, function(m) {
    return escapeMap[m];
  });
}

// --- Утилита дебаунса для оптимизации ---
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// --- Отрисовка сетки аниме с ленивой загрузкой изображений ---
function renderAnimeGrid(items, lang = 'ru') {
  const grid = document.getElementById('animeGrid');
  grid.innerHTML = '';

  items.forEach((a, index) => {
    // Получаем данные для текущего языка
    const title = a[`title_${lang}`] || a.title;
    const description = a[`description_${lang}`] || a.description;
    const genres = a[`genres_${lang}`] || a.genres;
    const format = a[`format_${lang}`] || a.format;
    
    const genresHTML = genres.map(genre => 
      `<span class="anime-genre">${escapeHtml(genre)}</span>`
    ).join('');
    
    const el = document.createElement('article');
    el.className = 'anime-card';
    // Добавляем data-атрибут для ленивой загрузки
    el.innerHTML = `
      <div class="anime-image" data-src="${a.image || ''}" style="
        background: linear-gradient(135deg, var(--accent1), var(--accent2));
        background-size: cover;
        background-position: center;
      ">
        <div class="anime-image-overlay"></div>
      </div>
      <div class="anime-body">
        <div class="anime-meta">
          <span>${format} • ${a.episodes || '?'} эп.</span>
          <span class="anime-score">${a.averageScore || '—'}%</span>
        </div>
        <div class="anime-title">${escapeHtml(title)}</div>
        <div class="anime-genres">
          ${genresHTML}
        </div>
        <div class="anime-desc">${escapeHtml(description)}</div>
      </div>
    `;
    
    grid.appendChild(el);
    
    // Ленивая загрузка изображений
    if (a.image) {
      setTimeout(() => {
        const imageDiv = el.querySelector('.anime-image');
        const img = new Image();
        img.onload = () => {
          imageDiv.style.backgroundImage = `url('${a.image}')`;
        };
        img.onerror = () => {
          // Если изображение не загрузилось, оставляем градиентный фон
        };
        img.src = a.image;
      }, index * 30); // Небольшая задержка для плавной загрузки
    }
  });
}

// --- Отрисовка промтов ---
function renderPrompts(lang = 'ru') {
  const container = document.getElementById('prompts');
  container.innerHTML = '';
  
  const t = translations[lang];
  
  promptsData.forEach(prompt => {
    const promptEl = document.createElement('div');
    promptEl.className = 'prompt-container';
    
    // Создаем теги
    const tagsHTML = prompt.tags.map(tag => {
      const tagText = t[tag] || tag;
      return `<span class="prompt-tag">${escapeHtml(tagText)}</span>`;
    }).join('');
    
    promptEl.innerHTML = `
      <div class="prompt-header">
        <div id="${prompt.titleKey}" class="prompt-title">${t[prompt.titleKey]}</div>
      </div>
      <div class="prompt" data-raw="${escapeHtml(prompt.raw)}" data-copy-text="${t.copyText}">
${prompt.raw}
      </div>
      <div class="prompt-explanation">
        <span id="${prompt.analysisKey}">${t[prompt.analysisKey]}</span> <span id="${prompt.explanationKey}">${t[prompt.explanationKey]}</span>
      </div>
      <div class="prompt-tags">
        ${tagsHTML}
      </div>
    `;
    
    container.appendChild(promptEl);
  });
  
  // Добавляем обработчики для новых промтов
  setupPromptCopyListeners(lang);
}

// --- Настройка обработчиков копирования промтов ---
function setupPromptCopyListeners(lang = 'ru') {
  const t = translations[lang];
  
  document.querySelectorAll('.prompt').forEach(promptElement => {
    // Удаляем старые обработчики
    const newElement = promptElement.cloneNode(true);
    promptElement.parentNode.replaceChild(newElement, promptElement);
    
    // Добавляем новый обработчик
    newElement.addEventListener('click', async function() {
      const text = this.dataset.raw || this.textContent.trim();
      
      try {
        await navigator.clipboard.writeText(text);
        
        // Визуальная обратная связь
        this.classList.add('prompt-copied');
        const originalText = this.textContent;
        this.textContent = t.copiedText;
        
        setTimeout(() => {
          this.classList.remove('prompt-copied');
          this.textContent = originalText;
        }, 1500);
        
      } catch(e) {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          
          // Визуальная обратная связь и для fallback
          this.classList.add('prompt-copied');
          const originalText = this.textContent;
          this.textContent = t.copiedText;
          
          setTimeout(() => {
            this.classList.remove('prompt-copied');
            this.textContent = originalText;
          }, 1500);
          
        } catch (err) {
          alert('Не удалось скопировать промт. Выделите текст вручную.');
        }
        document.body.removeChild(textArea);
      }
    });
  });
}

// --- Функция смены языка ---
function changeLanguage(lang) {
  // Обновляем активную кнопку
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Устанавливаем язык документа
  document.documentElement.lang = lang === 'ja' ? 'ja' : 
                                 lang === 'zh' ? 'zh' : 
                                 lang === 'de' ? 'de' : 
                                 lang === 'en' ? 'en' : 'ru';
  
  // Получаем переводы для выбранного языка
  const t = translations[lang];
  
  // Обновляем все текстовые элементы с id
  document.querySelectorAll('[id]').forEach(el => {
    const id = el.id;
    if (t[id] !== undefined) {
      el.textContent = t[id];
    }
  });
  
  // Обновляем заголовок страницы
  document.title = t['page-title'];
  
  requestAnimationFrame(() => {
    // Обновляем промты
    renderPrompts(lang);
    
    // Обновляем сетку аниме с небольшой задержкой
    setTimeout(() => {
      renderAnimeGrid(animeData, lang);
    }, 50);
  });
  
  // Сохраняем выбор языка
  localStorage.setItem('preferredLanguage', lang);
}

// Оптимизированное обновление языка с дебаунсом
const debouncedChangeLanguage = debounce(changeLanguage, 50);

// --- Предотвращение скачков при скролле ---
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    requestAnimationFrame(() => {
      isScrolling = false;
    });
    isScrolling = true;
  }
}, { passive: true });

// Предотвращение двойного тапа на мобильных
let lastTap = 0;
document.addEventListener('touchend', function(e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 300 && tapLength > 0) {
    e.preventDefault();
  }
  lastTap = currentTime;
}, { passive: true });

// --- Инициализация при загрузке ---
document.addEventListener('DOMContentLoaded', () => {
  // Загружаем данные аниме при старте
  renderAnimeGrid(animeData);
  
  // Загружаем промты
  renderPrompts();
  
  // Восстанавливаем сохраненный язык или используем русский по умолчанию
  const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
  changeLanguage(savedLang);
  
  // Обработчики для кнопок переключения языка с дебаунсом
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      requestAnimationFrame(() => {
        debouncedChangeLanguage(lang);
      });
    });
  });
});