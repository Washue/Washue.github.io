// Тексты для перевода
const translations = {
  ru: {
    // Кнопки переключения
    copyText: "Скопировать?",
    copiedText: "Ну допустим.. вы его скопировали!!",
    
    // Боковая панель
    name: "Angelok",
    role: "Промт-инженер & Аниме-энтузиаст",
    "skills-title": "Навыки",
    experience: "Опыт: 3+ года",
    "anime-stylization": "Аниме-стилизация",
    "contacts-title": "Контакты",
    
    // Основной контент
    "about-title": "Обо мне",
    "about-text1": "Я — специалист по промт-инжинирингу с широким профилем работ. Моя деятельность включает создание сложных промтов для генерации аниме-артов в нейросетях, разработку текстового контента для сайтов и постов, а также генерацию креативных идей для различных проектов.",
    "about-text2": "Экспериментирую с архитектурой нейросетей, весами, комбинациями стилей и параметрами моделей для достижения нужного результата — будь то визуальные образы, текстовый контент или комплексные решения. Мой подход — глубокое понимание механизмов работы AI и создание точных, детализированных промтов, которые превращают абстрактные концепции в качественный конечный продукт.",
    
    "prompts-title": "Коллекция промтов",
    "prompts-desc": "Нажмите на любой промт, чтобы скопировать его в буфер обмена.",
    
    // Названия промтов
    "prompt-title-1": "Атмосферный киберпанк",
    "prompt-title-2": "Магическая девочка (ностальгия 90-х)",
    "prompt-title-3": "Фэнтезийный лес с духом",
    "prompt-title-4": "Меха-битва в космосе",
    "prompt-title-5": "Уютная кофейня в дождь",
    
    // Анализ промтов
    "analysis-1": "Анализ:",
    "analysis-2": "Анализ:",
    "analysis-3": "Анализ:",
    "analysis-4": "Анализ:",
    "analysis-5": "Анализ:",
    "prompt-explanation-1": "Промт начинается с определения типа кадра (cinematic shot), затем задаёт сцену, погоду и ключевые детали (неоновые вывески, мокрая дорога). Фигура с зонтом — смысловой центр. Далее идут параметры, влияющие на качество и атмосферу: глубина теней, объёмный туман, имитация съёмки на кинокамеру с анаморфным бликом. Параметр `--style raw` в MJ даёт более фотографичный результат.",
    "prompt-explanation-2": "Ключ здесь — указание конкретного стиля эпохи (\"1990s anime style\"). Затем описывается действие, поза, детали костюма и эффекты. Для атмосферы добавлена \"ностальгическая cel-шэйдинг\" и \"эстетика VHS\". Соотношение сторон 4:3 и модель `--niji 5` (заточенная под аниме) идеально подходят для воссоздания старого аниме.",
    "prompt-explanation-3": "Этот промт создаёт атмосферную фэнтези-сцену. Ключевые элементы: время суток (сумерки), светящиеся растения, дух леса. Указание стиля Макото Синкая задаёт характерную атмосферу и работу со светом. Технические термины \"ray tracing\" и \"atmospheric perspective\" улучшают глубину и качество изображения.",
    "prompt-explanation-4": "Промт для динамичной сцены сражения мехов. Сначала задаётся жанр и сцена, затем добавляются детали действий (столкновение, лазерные лучи). Упоминание Ёдзи Синкавы влияет на стиль прорисовки механизмов. Космический фон с туманностью создаёт масштаб. Соотношение 16:9 оптимально для экшн-сцен.",
    "prompt-explanation-5": "Промт создаёт уютную атмосферную сцену. Акцент на деталях, передающих настроение: пар от чашек, капли дождя на стекле, тёплый свет. Указание на атмосферу Ghibli задаёт стиль. Параметр `--s 700` контролирует креативность, делая результат более предсказуемым. Соотношение 5:4 подходит для таких уютных кадров.",
    
    // Теги промтов
    "prompt-tag-cyberpunk": "Киберпанк",
    "prompt-tag-cinematic": "Кинематографично",
    "prompt-tag-retro": "Ретро-аниме",
    "prompt-tag-magical": "Магическая девочка",
    "prompt-tag-fantasy": "Фэнтези",
    "prompt-tag-shinkai": "Макото Синкай",
    "prompt-tag-mecha": "Меха",
    "prompt-tag-action": "Экшен",
    "prompt-tag-space": "Космос",
    "prompt-tag-sliceoflife": "Повседневность",
    "prompt-tag-cozy": "Уют",
    "prompt-tag-ghibli": "Studio Ghibli",
    
    // Аниме секция
    "anime-title": "Мои любимые аниме",
    "anime-desc": "Подборка тайтлов, которые меня вдохновляют и влияют на мою работу.",
    
    // Футер
    "footer-text": "Портфолио промт-инженера Angelok | Discord: @qweangelok | Обновлено: февраль 2026",
    
    // Заголовок страницы
    "page-title": "Промт-инженер — Angelok"
  },
  en: {
    copyText: "Copy?",
    copiedText: "Copied to clipboard!",
    
    name: "Angelok",
    role: "Prompt Engineer & Anime Enthusiast",
    "skills-title": "Skills",
    experience: "Experience: 3+ years",
    "anime-stylization": "Anime Stylization",
    "contacts-title": "Contacts",
    
    "about-title": "About Me",
    "about-text1": "I am a prompt engineering specialist with a broad range of work. My activities include creating complex prompts for generating anime art with neural networks, developing text content for websites and posts, as well as generating creative ideas for various projects.",
    "about-text2": "I experiment with neural network architectures, weights, style combinations, and model parameters to achieve the desired result—whether it's visual images, text content, or comprehensive solutions. My approach involves a deep understanding of AI mechanisms and creating precise, detailed prompts that transform abstract concepts into high-quality final products.",
    
    "prompts-title": "Prompt Collection",
    "prompts-desc": "Click on any prompt to copy it to clipboard.",
    
    "prompt-title-1": "Atmospheric Cyberpunk",
    "prompt-title-2": "Magical Girl (90s Nostalgia)",
    "prompt-title-3": "Fantasy Forest with Spirit",
    "prompt-title-4": "Mecha Battle in Space",
    "prompt-title-5": "Cozy Coffee Shop in Rain",
    
    "analysis-1": "Analysis:",
    "analysis-2": "Analysis:",
    "analysis-3": "Analysis:",
    "analysis-4": "Analysis:",
    "analysis-5": "Analysis:",
    "prompt-explanation-1": "The prompt starts by defining the shot type (cinematic shot), then sets the scene, weather, and key details (neon signs, wet road). The figure with an umbrella is the focal point. Next are parameters affecting quality and atmosphere: shadow depth, volumetric fog, simulation of filming with a cinematic camera with anamorphic lens flare. The `--style raw` parameter in MJ gives a more photographic result.",
    "prompt-explanation-2": "The key here is specifying a specific era style (\"1990s anime style\"). Then the action, pose, costume details, and effects are described. For atmosphere, \"nostalgic cel-shading\" and \"VHS tape aesthetic\" are added. The 4:3 aspect ratio and `--niji 5` model (optimized for anime) are perfect for recreating old anime.",
    "prompt-explanation-3": "This prompt creates an atmospheric fantasy scene. Key elements: time of day (twilight), bioluminescent plants, forest spirit. The mention of Makoto Shinkai's style sets the characteristic atmosphere and lighting work. Technical terms \"ray tracing\" and \"atmospheric perspective\" improve depth and image quality.",
    "prompt-explanation-4": "A prompt for a dynamic mecha battle scene. First, the genre and scene are set, then action details (clashing, laser beams) are added. Mentioning Yoji Shinkawa influences the mechanical drawing style. The cosmic background with nebula creates scale. The 16:9 aspect ratio is optimal for action scenes.",
    "prompt-explanation-5": "The prompt creates a cozy atmospheric scene. Emphasis on mood-conveying details: steam from cups, raindrops on glass, warm lighting. Mentioning Ghibli atmosphere sets the style. The `--s 700` parameter controls creativity, making the result more predictable. The 5:4 aspect ratio suits such cozy shots.",
    
    "prompt-tag-cyberpunk": "Cyberpunk",
    "prompt-tag-cinematic": "Cinematic",
    "prompt-tag-retro": "Retro Anime",
    "prompt-tag-magical": "Magical Girl",
    "prompt-tag-fantasy": "Fantasy",
    "prompt-tag-shinkai": "Makoto Shinkai",
    "prompt-tag-mecha": "Mecha",
    "prompt-tag-action": "Action",
    "prompt-tag-space": "Space",
    "prompt-tag-sliceoflife": "Slice of Life",
    "prompt-tag-cozy": "Cozy",
    "prompt-tag-ghibli": "Studio Ghibli",
    
    "anime-title": "My Favorite Anime",
    "anime-desc": "A selection of titles that inspire me and influence my work.",
    
    "footer-text": "Prompt Engineer Portfolio by Angelok | Discord: @qweangelok | Updated: February 2026",
    
    "page-title": "Prompt Engineer — Angelok"
  },
  de: {
    copyText: "Kopieren?",
    copiedText: "In die Zwischenablage kopiert!",
    
    name: "Angelok",
    role: "Prompt-Ingenieur & Anime-Enthusiast",
    "skills-title": "Fähigkeiten",
    experience: "Erfahrung: 3+ Jahre",
    "anime-stylization": "Anime-Stilisierung",
    "contacts-title": "Kontakte",
    
    "about-title": "Über mich",
    "about-text1": "Ich bin ein Prompt-Ingenieur mit einem breiten Arbeitsspektrum. Meine Tätigkeiten umfassen das Erstellen komplexer Prompts zur Generierung von Anime-Kunst mit neuronalen Netzwerken, die Entwicklung von Textinhalten für Websites und Beiträge sowie die Generierung kreativer Ideen für verschiedene Projekte.",
    "about-text2": "Ich experimentiere mit Architekturen neuronaler Netze, Gewichtungen, Stilkombinationen und Modellparametern, um das gewünschte Ergebnis zu erzielen - sei es visuelle Bilder, Textinhalte oder umfassende Lösungen. Mein Ansatz ist ein tiefes Verständnis der KI-Mechanismen und die Erstellung präziser, detaillierter Prompts, die abstrakte Konzepte in hochwertige Endprodukte verwandeln.",
    
    "prompts-title": "Prompt-Sammlung",
    "prompts-desc": "Klicken Sie auf einen beliebigen Prompt, um ihn in die Zwischenablage zu kopieren.",
    
    "prompt-title-1": "Atmosphärischer Cyberpunk",
    "prompt-title-2": "Magisches Mädchen (90er Nostalgie)",
    "prompt-title-3": "Fantasy-Wald mit Geist",
    "prompt-title-4": "Mecha-Kampf im Weltraum",
    "prompt-title-5": "Gemütliches Café im Regen",
    
    "analysis-1": "Analyse:",
    "analysis-2": "Analyse:",
    "analysis-3": "Analyse:",
    "analysis-4": "Analyse:",
    "analysis-5": "Analyse:",
    "prompt-explanation-1": "Der Prompt beginnt mit der Definition des Aufnahmetyps (cinematic shot), legt dann die Szene, das Wetter und wichtige Details fest (Neon-Schilder, nasse Straße). Die Figur mit dem Schirm ist der Blickpunkt. Als nächstes folgen Parameter, die Qualität und Atmosphäre beeinflussen: Schattentiefe, volumetrischer Nebel, Simulation der Aufnahme mit einer Kinokamera mit anamorphischer Linse. Der Parameter `--style raw` in MJ ergibt ein fotografischeres Ergebnis.",
    "prompt-explanation-2": "Der Schlüssel hier ist die Angabe eines bestimmten Epochenstils (\"1990s anime style\"). Dann werden Aktion, Pose, Kostümdetails und Effekte beschrieben. Für die Atmosphäre werden \"nostalgisches Cel-Shading\" und \"VHS-Ästhetik\" hinzugefügt. Das 4:3-Seitenverhältnis und das `--niji 5`-Modell (für Anime optimiert) sind perfekt für die Nachbildung alter Anime.",
    "prompt-explanation-3": "Dieser Prompt erzeugt eine atmosphärische Fantasy-Szene. Schlüsselelemente: Tageszeit (Dämmerung), biolumineszierende Pflanzen, Waldgeist. Die Erwähnung des Stils von Makoto Shinkai setzt die charakteristische Atmosphäre und Lichtarbeit. Die technischen Begriffe \"Raytracing\" und \"Luftperspektive\" verbessern die Tiefe und Bildqualität.",
    "prompt-explanation-4": "Ein Prompt für eine dynamische Mecha-Kampfszene. Zuerst werden Genre und Szene festgelegt, dann werden Aktionsdetails (Zusammenstoß, Laserstrahlen) hinzugefügt. Die Erwähnung von Yoji Shinkawa beeinflusst den Zeichenstil der Mechanik. Der kosmische Hintergrund mit Nebel schafft Maßstab. Das 16:9-Seitenverhältnis ist optimal für Actionszenen.",
    "prompt-explanation-5": "Der Prompt erzeugt eine gemütliche, atmosphärische Szene. Der Schwerpunkt liegt auf stimmungsvollen Details: Dampf von Tassen, Regentropfen auf Glas, warmes Licht. Die Erwähnung der Ghibli-Atmosphäre setzt den Stil. Der Parameter `--s 700` steuert die Kreativität und macht das Ergebnis vorhersehbarer. Das 5:4-Seitenverhältnis eignet sich für solche gemütlichen Aufnahmen.",
    
    "prompt-tag-cyberpunk": "Cyberpunk",
    "prompt-tag-cinematic": "Filmisch",
    "prompt-tag-retro": "Retro-Anime",
    "prompt-tag-magical": "Magisches Mädchen",
    "prompt-tag-fantasy": "Fantasy",
    "prompt-tag-shinkai": "Makoto Shinkai",
    "prompt-tag-mecha": "Mecha",
    "prompt-tag-action": "Action",
    "prompt-tag-space": "Weltraum",
    "prompt-tag-sliceoflife": "Alltag",
    "prompt-tag-cozy": "Gemütlich",
    "prompt-tag-ghibli": "Studio Ghibli",
    
    "anime-title": "Meine Lieblings-Anime",
    "anime-desc": "Eine Auswahl von Titeln, die mich inspirieren und meine Arbeit beeinflussen.",
    
    "footer-text": "Prompt-Ingenieur-Portfolio von Angelok | Discord: @qweangelok | Aktualisiert: Februar 2026",
    
    "page-title": "Prompt-Ingenieur — Angelok"
  },
  ja: {
    copyText: "コピーしますか？",
    copiedText: "クリップボードにコピーしました！",
    
    name: "Angelok",
    role: "プロンプトエンジニア＆アニメ愛好家",
    "skills-title": "スキル",
    experience: "経験: 3年以上",
    "anime-stylization": "アニメスタイライゼーション",
    "contacts-title": "連絡先",
    
    "about-title": "自己紹介",
    "about-text1": "私は幅広い業務を行うプロンプトエンジニアリングの専門家です。私の活動には、ニューラルネットワークを使用したアニメアート生成のための複雑なプロンプトの作成、ウェブサイトや投稿のためのテキストコンテンツの開発、さまざまなプロジェクトのためのクリエイティブなアイデアの生成が含まれます。",
    "about-text2": "私はニューラルネットワークのアーキテクチャ、重み、スタイルの組み合わせ、モデルパラメータを実験して、望ましい結果（ビジュアルイメージ、テキストコンテンツ、または包括的なソリューション）を達成します。私のアプローチは、AIのメカニズムを深く理解し、抽象的な概念を高品質な最終製品に変換する正確で詳細なプロンプトを作成することです。",
    
    "prompts-title": "プロンプトコレクション",
    "prompts-desc": "プロンプトをクリックしてクリップボードにコピーします。",
    
    "prompt-title-1": "大気的なサイバーパンク",
    "prompt-title-2": "魔法少女（90年代ノスタルジー）",
    "prompt-title-3": "精霊がいるファンタジーの森",
    "prompt-title-4": "宇宙でのメカバトル",
    "prompt-title-5": "雨の日の居心地の良いカフェ",
    
    "analysis-1": "分析：",
    "analysis-2": "分析：",
    "analysis-3": "分析：",
    "analysis-4": "分析：",
    "analysis-5": "分析：",
    "prompt-explanation-1": "プロンプトはショットタイプ（cinematic shot）の定義から始まり、シーン、天気、重要な詳細（ネオン看板、濡れた道路）を設定します。傘を持つ人物が焦点です。次に、品質と雰囲気に影響を与えるパラメータ：影の深さ、体積霧、アナモルフィックレンズフレアのあるシネマティックカメラでの撮影のシミュレーション。MJの `--style raw` パラメータはより写真のような結果をもたらします。",
    "prompt-explanation-2": "ここでの鍵は、特定の時代のスタイル（\"1990s anime style\"）を指定することです。次に、アクション、ポーズ、衣装の詳細、エフェクトが記述されます。雰囲気のために、「ノスタルジックなセルシェーディング」と「VHSテープの美学」が追加されています。4:3のアスペクト比と `--niji 5` モデル（アニメ用に最適化）は、古いアニメを再現するのに最適です。",
    "prompt-explanation-3": "このプロンプトは、大気的なファンタジーシーンを作成します。重要な要素：時間帯（夕暮れ）、生物発光植物、森の精霊。新海誠のスタイルの言及は、特徴的な雰囲気と光の処理を設定します。技術用語「レイトレーシング」と「大気遠近法」は、深さと画質を向上させます。",
    "prompt-explanation-4": "ダイナミックなメカバトルシーンのプロンプト。まず、ジャンルとシーンが設定され、次にアクションの詳細（衝突、レーザービーム）が追加されます。新川洋司の言及は、メカの描画スタイルに影響を与えます。星雲のある宇宙の背景はスケールを作り出します。16:9のアスペクト比は、アクションシーンに最適です。",
    "prompt-explanation-5": "プロンプトは、居心地の良い大気的なシーンを作成します。ムードを伝える詳細に重点：カップからの蒸気、ガラス上の雨滴、暖かい照明。ジブリの雰囲気の言及はスタイルを設定します。`--s 700` パラメータは創造性を制御し、結果をより予測可能にします。5:4のアスペクト比は、そのような居心地の良いショットに適しています。",
    
    "prompt-tag-cyberpunk": "サイバーパンク",
    "prompt-tag-cinematic": "シネマティック",
    "prompt-tag-retro": "レトロアニメ",
    "prompt-tag-magical": "魔法少女",
    "prompt-tag-fantasy": "ファンタジー",
    "prompt-tag-shinkai": "新海誠",
    "prompt-tag-mecha": "メカ",
    "prompt-tag-action": "アクション",
    "prompt-tag-space": "宇宙",
    "prompt-tag-sliceoflife": "日常",
    "prompt-tag-cozy": "居心地の良い",
    "prompt-tag-ghibli": "スタジオジブリ",
    
    "anime-title": "私のお気に入りのアニメ",
    "anime-desc": "私をインスピレーションを与え、仕事に影響を与える作品のセレクション。",
    
    "footer-text": "Angelokのプロンプトエンジニアポートフォリオ | Discord: @qweangelok | 更新日：2026年2月",
    
    "page-title": "プロンプトエンジニア — Angelok"
  },
  zh: {
    copyText: "复制？",
    copiedText: "已复制到剪贴板！",
    
    name: "Angelok",
    role: "提示工程师 & 动漫爱好者",
    "skills-title": "技能",
    experience: "经验：3年以上",
    "anime-stylization": "动漫风格化",
    "contacts-title": "联系方式",
    
    "about-title": "关于我",
    "about-text1": "我是一名具有广泛工作范围的提示工程专家。我的活动包括为神经网络生成动漫艺术创建复杂提示，为网站和帖子开发文本内容，以及为各种项目生成创意想法。",
    "about-text2": "我尝试神经网络架构、权重、风格组合和模型参数，以实现所需的结果——无论是视觉图像、文本内容还是综合解决方案。我的方法是深入理解AI机制，并创建精确、详细的提示，将抽象概念转化为高质量的最终产品。",
    
    "prompts-title": "提示集合",
    "prompts-desc": "点击任何提示将其复制到剪贴板。",
    
    "prompt-title-1": "氛围感赛博朋克",
    "prompt-title-2": "魔法少女（90年代怀旧）",
    "prompt-title-3": "精灵居住的奇幻森林",
    "prompt-title-4": "太空机甲战斗",
    "prompt-title-5": "雨中的舒适咖啡馆",
    
    "analysis-1": "分析：",
    "analysis-2": "分析：",
    "analysis-3": "分析：",
    "analysis-4": "分析：",
    "analysis-5": "分析：",
    "prompt-explanation-1": "提示从定义镜头类型（电影镜头）开始，然后设置场景、天气和关键细节（霓虹招牌、湿滑道路）。打伞的人物是焦点。接下来是影响质量和氛围的参数：阴影深度、体积雾、模拟使用变形镜头光斑的电影摄影机拍摄。MJ中的 `--style raw` 参数提供更 photographic 的结果。",
    "prompt-explanation-2": "这里的关键是指定特定的时代风格（\"1990年代动漫风格\"）。然后描述动作、姿势、服装细节和效果。为了氛围，添加了\"怀旧赛璐珞着色\"和\"VHS磁带美学\"。4:3的宽高比和 `--niji 5` 模型（针对动漫优化）非常适合重现老式动漫。",
    "prompt-explanation-3": "此提示创建一个氛围奇幻场景。关键元素：时间（黄昏）、生物发光植物、森林精灵。提到新海诚的风格设定了特有的氛围和光影处理。技术术语\"光线追踪\"和\"大气透视\"提高了深度和图像质量。",
    "prompt-explanation-4": "动态机甲战斗场景的提示。首先设定类型和场景，然后添加动作细节（碰撞、激光束）。提到新川洋司影响了机械绘画风格。带有星云的宇宙背景创造了规模感。16:9的宽高比对于动作场景是最佳的。",
    "prompt-explanation-5": "提示创建一个舒适的氛围场景。强调传达情绪的细节：杯中的蒸汽、玻璃上的雨滴、温暖的灯光。提到吉卜力的氛围设定了风格。`--s 700` 参数控制创造力，使结果更可预测。5:4的宽高比适合这种舒适镜头。",
    
    "prompt-tag-cyberpunk": "赛博朋克",
    "prompt-tag-cinematic": "电影感",
    "prompt-tag-retro": "复古动漫",
    "prompt-tag-magical": "魔法少女",
    "prompt-tag-fantasy": "奇幻",
    "prompt-tag-shinkai": "新海诚",
    "prompt-tag-mecha": "机甲",
    "prompt-tag-action": "动作",
    "prompt-tag-space": "太空",
    "prompt-tag-sliceoflife": "日常",
    "prompt-tag-cozy": "舒适",
    "prompt-tag-ghibli": "吉卜力工作室",
    
    "anime-title": "我最喜爱的动漫",
    "anime-desc": "激励我并影响我工作的作品选集。",
    
    "footer-text": "Angelok的提示工程师作品集 | Discord: @qweangelok | 更新：2026年2月",
    
    "page-title": "提示工程师 — Angelok"
  }
};