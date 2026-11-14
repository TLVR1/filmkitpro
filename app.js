(() => {
"use strict";
const T = [
 ["smartcut","edit","القطع الذكي للسكتات","يحذف فترات الصمت من الكليب المحدد","Smart Silence Cut","Removes silent gaps from the selected clip"],
 ["repeats","edit","حذف التكرار","يكتشف الجمل المعادة والبدايات المتكررة ويحذفها ويحتفظ بآخر محاولة","Remove Repeats","Finds repeated takes and restarted sentences, removes them and keeps the last take"],
 ["multicam","edit","مزامنة الكاميرات","حدد كليبين أو أكتر ويتم محاذاتهم بالصوت","Multicam Sync","Select 2+ clips and align them by audio"],
 ["autoedit","edit","المونتاج التلقائي","يقطع السكوت والتكرار ويطلعلك أول نسخة مونتاج في دقايق","Auto Edit","Cuts silences and repeats and builds a first rough cut in minutes"],
 ["looks","edit","اللوكات والـ LUTs","لوكات سينمائية بضغطة على Lumetri، ومعاها LUTs أفلام كلاسيك مجانية","Looks & LUTs","One-click cinematic Lumetri looks, plus free classic film LUTs"],
 ["captions","captions","كابشن تلقائي","تفريغ الكلام لمسار Captions في Premiere","Auto Captions","Transcribe speech into a Premiere caption track"],
 ["styledcaps","captions","كابشن بستايلات","كابشن كلمة بكلمة بستايلات متحركة كفيديو شفاف فوق الكليب","Styled Captions","Word-by-word animated captions rendered as a transparent overlay video"],
 ["capsdict","captions","اللهجة وقاموس التصحيح","اختر اللهجة، وعلّم الكلمات اللي الكابشن بيغلط فيها، فتتصحح تلقائياً بعد كده","Dialect & Correction Dictionary","Pick the Arabic dialect and teach captions the words they get wrong, once"],
 ["translate","captions","ترجمة الكابشن","ترجم الكابشن بين العربي والإنجليزي بالذكاء الاصطناعي مع الحفاظ على التوقيت","Translate Captions","Translate captions between Arabic and English with AI, keeping timing"],
 ["capsfx","captions","أصوات للكابشن","حط صوت (بوب، كليك، ووش...) مع كل جملة ترجمة أو كل كام جملة","Caption SFX","Drop a sound (pop, click, whoosh...) on every caption or every N captions"],
 ["importsrt","captions","استيراد SRT","استورد ملف ترجمة جاهز كتراك كابشن أو كترجمة بستايل","Import SRT","Import an existing subtitle file as a caption track or as styled captions"],
 ["titles","captions","العناوين","عناوين ونصوص متحركة جاهزة بالعربي والإنجليزي","Titles","Ready animated titles in Arabic and English"],
 ["audioenhance","audio","تحسين الصوت","إزالة ضوضاء وضغط وضبط مستوى الصوت (LUFS)","Audio Enhance","Denoise, compress and normalize loudness (LUFS)"],
 ["sfxlib","audio","مكتبة المؤثرات الصوتية","ووش وبوب وهيت ورايزر مجانية، اسمعها وحطها عند المؤشر بضغطة","SFX Library","Free whoosh, pop, hit and riser sounds: preview and drop at the playhead"],
 ["beats","audio","مزامنة الإيقاع","يكتشف البيتس في المزيكا ويقطع عليها تلقائياً","Beat Sync","Detects music beats and cuts on them automatically"],
 ["transitions","motion","ترانزيشن بالحركة","زووم، سلايد، ويب، لف، فلاش وهزة على نقطة القطع مع صوت تلقائي","Motion Transitions","Zoom, slide, whip, spin, flash and shake at the edit point, with auto SFX"],
 ["carousel3d","motion","كاروسيل 3D","تتحول المقاطع المحددة إلى بطاقات تدور في شكل دائري ثلاثي الأبعاد","3D Carousel","The selected clips become cards that rotate on a 3D ring"],
 ["textpath","motion","تكست على الخط","عنوان بيتحرك على دايرة أو موجة أو خط فوق الكليب","Text on Path","A title travels along a circle, wave or line over the clip"],
 ["motionai","motion","موشن بالـAI","اكتب الحركة اللي عايزها، ويطبّقها الذكاء الاصطناعي على المقطع المحدد","AI Motion","Describe the motion you want, and the AI keyframes the selected clip"],
 ["tracking","motion","تتبّع الحركة","تتبّع نقطة في الفيديو وخلّي جرافيك أو نص يمشي معاها تلقائياً","Motion Tracking","Track a point in the footage and make a graphic or text follow it automatically"],
 ["curves","motion","منحنيات الحركة","غيّر نوع الانتقال بين الكي فريمز (Linear / Ease / Hold) أو ارسم منحنى خاص بيك","Motion Curves","Change keyframe interpolation (Linear / Ease / Hold) or draw your own curve"],
 ["autoreframe","motion","Auto Reframe","حوّل الفيديو الأفقي لرأسي والشخص دايماً في النص","Auto Reframe","Turn horizontal video vertical, keeping the subject centered"],
 ["autozoom","motion","Auto Zoom","زووم ديناميكي تلقائي على اللحظات المهمة في الكلام","Auto Zoom","Automatic dynamic punch-ins on key moments"],
 ["broll","media","بي-رول (Pexels)","ابحث عن فيديوهات وصور مجانية من Pexels، نزّلها وحطها عند المؤشر","B-Roll (Pexels)","Search free Pexels videos and photos, download them and place at the playhead"],
 ["aigen","media","توليد بالذكاء الاصطناعي","صور ومؤثرات صوتية مجانية، و12 ستايل جاهز ومقاسات مختلفة","AI Generate","Free images and sound effects, 12 preset styles and multiple sizes"],
 ["unsplash","media","صور Unsplash","ابحث في صور Unsplash عالية الجودة وحطها عند المؤشر","Unsplash Photos","Search high-quality Unsplash photos and place them at the playhead"],
 ["locallib","media","مكتبتي المحلية","ابحث في مجلد الميديا وحط الملف عند المؤشر","My Local Library","Search your media folder and place a file at the playhead"],
 ["motionlib","media","مكتبة فيلم كيت","استورد العناصر اللي نزّلتها من حسابك واستخدمها في مشروعك","FilmKit Library","Import the items you downloaded from your account and use them in your project"],
 ["safezones","social","المناطق الآمنة","إطار TikTok وReels وShorts","Safe Zones","TikTok, Reels and Shorts overlays"],
 ["chapters","social","فصول يوتيوب","من الماركرز لقائمة فصول جاهزة","YouTube Chapters","Markers to a ready chapter list"],
 ["shorts","social","صانع الشورتس","يطلّع شورتس وريلز من الفيديو الطويل","Shorts Maker","Pulls Shorts and Reels out of long videos"],
 ["export","social","التصدير","صدّر عبر Media Encoder","Export","Export via Media Encoder"],
 ["transform","project","نسخ التحويلات","انسخ الحركة والشفافية والقص من كليب والصقها على كل الكليبات المحددة","Copy Transform","Copy Motion, Opacity and Crop from one clip and paste onto all selected clips"],
 ["frames","project","الفريمات والصور","انسخ الفريم اللي عليه المؤشر كصورة، أو الصق صورة من الحافظة على التايم لاين","Frames & Images","Copy the frame under the playhead as an image, or paste a clipboard image onto the timeline"],
 ["organize","project","ترتيب المشروع","رتّب ملفات المشروع في بِنز: فيديو، صوت، صور، جرافيك، سيكوانس، ترجمة","Organize Project","Sort project items into bins: Videos, Audio, Images, Graphics, Sequences, Captions"],
 ["assistant","project","مساعد AI","اسأل عن المونتاج، وهيرد بمفتاح Gemini بتاعك","AI Assistant","Ask editing questions, answered with your own Gemini key"],
].map(r => ({id:r[0],g:r[1],ar:[r[2],r[3]],en:[r[4],r[5]]}));
const NEW = new Set(["carousel3d","textpath","motionai","capsdict","sfxlib","repeats"]);
const DEMOS = {smartcut:"demo/smartcut.html"};
const CLIPS = {audioenhance:1,captions:1,carousel3d:1,smartcut:1,textpath:1,transitions:1};
const G = {
 all:["الكل","All"],edit:["مونتاج","Editing"],captions:["كابشن ونصوص","Captions & Text"],audio:["صوت","Audio"],
 motion:["حركة و3D","Motion & 3D"],media:["ميديا","Media"],social:["سوشيال","Social"],project:["المشروع","Project"]
};
const STEPS = {
 edit:[["حدد الكليب على التايم لاين","Select the clip on the timeline"],["افتح الأداة واضبط الحساسية","Open the tool and set sensitivity"],["اضغط تطبيق وراجع القطعات","Click Apply and review the cuts"]],
 captions:[["حدد الكليب أو السيكوانس","Select the clip or sequence"],["اختار اللغة/اللهجة والستايل","Pick the language/dialect and style"],["اضغط إنشاء، والكابشن ينزل على التراك","Click Create — captions land on a track"]],
 audio:[["حدد كليب الصوت أو المزيكا","Select the audio or music clip"],["اختار الإعداد المناسب","Choose a preset"],["اسمع النتيجة وطبّق","Preview and apply"]],
 motion:[["حدد كليب أو أكتر","Select one or more clips"],["اختار نوع الحركة ومدتها","Pick the motion type and duration"],["طبّق، والكي فريمز تتعمل لوحدها","Apply — keyframes are created for you"]],
 media:[["ابحث بكلمة أو اختار ستايل","Search a keyword or pick a style"],["اسمع/شوف المعاينة","Preview it"],["اضغط وهتنزل عند المؤشر","Click to place it at the playhead"]],
 social:[["افتح السيكوانس","Open the sequence"],["اختار المنصة أو الإعداد","Pick the platform or preset"],["اضغط تنفيذ","Click Run"]],
 project:[["افتح المشروع","Open your project"],["حدد العناصر لو محتاج","Select items if needed"],["اضغط تنفيذ وخلاص","Click Run — done"]],
};
const NEWS = [
 ["🎠","كاروسيل 3D","المقاطع بتلف كبطاقات في دايرة ثلاثية الأبعاد.","3D Carousel","Clips spin as cards on a 3D ring."],
 ["➰","تكست على الخط","عنوان بيمشي على دايرة أو موجة.","Text on Path","A title that travels a circle or wave."],
 ["🧠","موشن بالـAI","اكتب الحركة بالكلام والـ AI يعمل الكي فريمز.","AI Motion","Describe motion in words, AI keyframes it."],
 ["📖","قاموس اللهجة","الكابشن بيتعلّم الكلمات اللي بيغلط فيها.","Dialect dictionary","Captions learn the words they get wrong."],
 ["🔉","مكتبة مؤثرات صوتية","ووش وبوب وهيت مجانية بضغطة.","SFX library","Free whooshes, pops and hits in one click."],
 ["↺","حذف التكرار","يشيل المحاولات المعادة ويسيب الأخيرة.","Remove repeats","Drops retakes and keeps the last one."],
 ["🤖","صور AI أقوى","12 ستايل، 4 مقاسات، وتحسين الوصف تلقائي.","Stronger AI images","12 styles, 4 sizes, auto prompt boost."],
 ["🎨","9 LUTs أفلام","LUTs كلاسيك مجانية بتتسطّب بضغطة.","9 film LUTs","Free classic LUTs, one-click install."],
];
const GOALS = [
 ["كابشن لفيديو بيتكلم","Captions for a talking video","captions"],["أشيل السكتات","Remove silences","smartcut"],
 ["أشيل الجمل المتكررة","Remove repeated takes","repeats"],["أحوّل لفيديو رأسي","Make it vertical","autoreframe"],
 ["أعمل شورتس من فيديو طويل","Shorts from a long video","shorts"],["أنضّف الصوت","Clean up audio","audioenhance"],
 ["ترانزيشن بحركة وصوت","Transitions with SFX","transitions"],["أقطع على المزيكا","Cut on the beat","beats"],
 ["لوك سينمائي","Cinematic look","looks"],["نص يمشي مع حاجة في الفيديو","Text that follows an object","tracking"],
 ["أترجم الكابشن","Translate captions","translate"],["صور وفيديوهات مجانية","Free stock footage","broll"],
];
const FAQ = [
 ["هل الملفات بتترفع على النت؟","لأ. كل المعالجة بتحصل على جهازك، والنت بيستخدم بس للتحديثات والأدوات الاختيارية زي Pexels والـ AI.","Are my files uploaded?","No. Processing happens on your computer; the internet is only used for updates and optional tools like Pexels and AI."],
 ["محتاج نت عشان أشتغل؟","مش لازم، غير أول مرة لتحميل موديل الكابشن، وفي الأدوات اللي بتجيب ميديا من النت.","Do I need internet?","No, except once to download the caption model, and for tools that fetch online media."],
 ["في واجهة إنجليزي؟","أيوه، بزرار واحد تقلب بين العربي والإنجليزي.","Is there an English UI?","Yes — one toggle switches between Arabic and English."],
 ["التحديثات بتنزل إزاي؟","البانل بيشيّك لوحده مرة كل يوم ويقولك لو في إصدار جديد.","How do updates work?","The panel checks once a day and tells you when a new version is out."],
 ["بيشتغل على أنهي إصدار بريمير؟","Premiere Pro 2020 وأحدث على ويندوز.","Which Premiere versions?","Premiere Pro 2020 and newer on Windows."],
 ["بدفع إزاي؟","بإنستاباي أو المحفظة، وبترفع صورة التحويل، والاشتراك بيتفعّل بعد الموافقة.","How do I pay?","InstaPay or mobile wallet — upload the transfer screenshot and your plan activates after approval."],
 ["البانل مش ظاهر في Extensions؟","اقفل البريمير خالص وافتحه تاني، ولو لسه مش ظاهر سطّب تاني وكلمنا واتساب.","Panel missing from Extensions?","Fully restart Premiere; if it's still missing, reinstall and message us on WhatsApp."],
];
const I = {
 "nav.new":"What's new","nav.tools":"Tools","nav.goal":"Find a tool","nav.install":"Install","nav.pricing":"Pricing","nav.faq":"FAQ","nav.dl":"Download",
 "hero.pill":"Runs inside Adobe Premiere Pro · Arabic & English","hero.h1a":"All your tools","hero.h1b":"in one place.",
 "hero.lead":"36 tools that speed up editing: auto captions in Arabic dialects, silence and repeat cutting, motion transitions, 3D carousel, audio cleanup, shorts maker… without leaving Premiere.",
 "hero.win":"Download for Windows","hero.see":"See the tools","m.ver":"Version","m.ui":"Interface","m.trial":"7 days","m.trialS":"Free trial",
 "s.tools":"tools in one panel","s.styles":"AI image styles","s.luts":"free film LUTs","s.local":"runs on your machine","s.lang":"UI languages",
 "new.h":"What's new in this update","new.p":"The biggest update yet — new tools and a faster interface.",
 "tools.k":"Tools","tools.h":"36 tools — click any of them","tools.p":"Pick a category or search, then click a tool to see what it does and how to use it.","tools.none":"No tool matches that.",
 "goal.k":"Not sure where to start?","goal.h":"Tell us what you want to do",
 "how.k":"Guide","how.h":"Every tool in 3 steps","how.1":"Pick the tool","how.1p":"From the panel inside Premiere, or search.","how.2":"Select the clip","how.2p":"On the timeline — the tool knows what to work on.","how.3":"Click Apply","how.3p":"The result lands on your sequence, and Ctrl+Z undoes it.",
 "ins.k":"Install","ins.h":"Ready in two minutes","ins.p":"No admin rights or extra software needed.","ins.1":"Download the file","ins.2":"Run the installer","ins.2p":"Click Next until Finish — keep Premiere closed.","ins.3":"Open the panel",
 "pr.k":"Pricing","pr.h":"Start free for 7 days","pr.p":"Pay with InstaPay or mobile wallet; activation after review.","pr.m":"Monthly","pr.mp":"per month","pr.y":"Yearly","pr.yp":"≈ 150 EGP / month","pr.6":"6 months","pr.6p":"≈ 166 EGP / month","pr.egp":"EGP","pr.start":"Start free trial","pr.best":"Best value",
 "faq.k":"FAQ","faq.h":"Frequently asked","cta.h":"Download and start in two minutes","cta.p":"Windows · Premiere Pro 2020+ · 7-day free trial","cta.b":"Download FilmKit Pro for Windows",
 "f.by":"Website by Omar Elkhamisy — Alkhamesi Film",
};
let lang = "ar", group = "all";
try { lang = localStorage.getItem("fk-lang") || "ar"; } catch (e) {}
const $ = s => document.querySelector(s);
const L = (a, e) => lang === "ar" ? a : e;
const AR = {}; document.querySelectorAll("[data-i]").forEach(el => AR[el.dataset.i] = el.textContent);

function applyLang() {
  document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i]").forEach(el => el.textContent = lang === "ar" ? AR[el.dataset.i] : (I[el.dataset.i] || AR[el.dataset.i]));
  document.querySelectorAll("#lang span").forEach((s, i) => s.classList.toggle("on", (i === 0) === (lang === "ar")));
  $("#q").placeholder = L("ابحث عن أداة…", "Search tools…");
  document.title = L("FilmKit Pro — كل أدوات المونتاج في مكان واحد", "FilmKit Pro — All your editing tools in one place");
  renderTabs(); renderGrid(); renderNews(); renderChips(); renderFaq(); renderMarquee();
}
$("#lang").onclick = () => { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("fk-lang", lang); } catch (e) {} applyLang(); };

function renderTabs() {
  $("#tabs").innerHTML = Object.keys(G).map(k => {
    const n = k === "all" ? T.length : T.filter(t => t.g === k).length;
    return `<button data-g="${k}" class="${k === group ? "on" : ""}">${L(...G[k])}<em>${n}</em></button>`;
  }).join("");
}
$("#tabs").onclick = e => { const b = e.target.closest("button"); if (!b) return; group = b.dataset.g; renderTabs(); renderGrid(); };
$("#q").oninput = renderGrid;

function renderGrid() {
  const q = $("#q").value.trim().toLowerCase();
  const list = T.filter(t => (group === "all" || t.g === group) && (!q || (t.ar.join(" ") + " " + t.en.join(" ")).toLowerCase().includes(q)));
  $("#grid").innerHTML = list.map((t, i) => `<button class="card tool" data-id="${t.id}" style="animation-delay:${Math.min(i, 14) * 30}ms">
    ${NEW.has(t.id) ? `<span class="badge">${L("جديد", "NEW")}</span>` : CLIPS[t.id] ? `<span class="vid">▶ ${L("فيديو", "video")}</span>` : ""}
    <img src="assets/icons/${t.id}.png" alt="" loading="lazy"><h3>${L(t.ar[0], t.en[0])}</h3><p>${L(t.ar[1], t.en[1])}</p></button>`).join("");
  $("#empty").hidden = list.length > 0;
}
$("#grid").onclick = e => { const b = e.target.closest(".tool"); if (b) openTool(b.dataset.id); };

function renderNews() { $("#news").innerHTML = NEWS.map(n => `<div class="card reveal in"><h3><i>${n[0]}</i>${L(n[1], n[3])}</h3><p>${L(n[2], n[4])}</p></div>`).join(""); }
function renderChips() { $("#chips").innerHTML = GOALS.map(g => `<button data-id="${g[2]}">${L(g[0], g[1])}</button>`).join(""); }
$("#chips").onclick = e => { const b = e.target.closest("button"); if (b) openTool(b.dataset.id); };
function renderFaq() {
  $("#faqList").innerHTML = FAQ.map(f => `<div class="q"><button>${L(f[0], f[2])}<i></i></button><div class="a"><div><p>${L(f[1], f[3])}</p></div></div></div>`).join("");
}
$("#faqList").onclick = e => { const b = e.target.closest("button"); if (!b) return; const q = b.parentElement, o = q.classList.contains("open"); document.querySelectorAll(".q.open").forEach(x => x.classList.remove("open")); if (!o) q.classList.add("open"); };
function renderMarquee() {
  const s = T.map(t => `<span><img src="assets/icons/${t.id}.png" alt="">${L(t.ar[0], t.en[0])}</span>`).join("");
  $("#mq").innerHTML = s + s;
}

/* modal */
const modal = $("#modal");
function openTool(id) {
  const t = T.find(x => x.id === id); if (!t) return;
  $("#mMedia").innerHTML = DEMOS[id] ? `<iframe src="${DEMOS[id]}" title="${L(t.ar[0], t.en[0])}" style="width:100%;aspect-ratio:16/10;border:0;display:block;background:#0e0f11" loading="lazy" allowfullscreen></iframe>` : CLIPS[id] ? `<video src="assets/clips/${id}.mp4" autoplay muted loop playsinline controls></video>` : `<div class="ph"><img src="assets/icons/${id}.png" alt=""></div>`;
  $("#mIcon").src = `assets/icons/${id}.png`;
  $("#mGrp").textContent = L(...G[t.g]);
  $("#mTitle").textContent = L(t.ar[0], t.en[0]);
  $("#mDesc").textContent = L(t.ar[1], t.en[1]);
  $("#mSteps").innerHTML = STEPS[t.g].map(s => `<li>${L(s[0], s[1])}</li>`).join("");
  modal.hidden = false; document.body.style.overflow = "hidden";
}
function closeModal() { modal.hidden = true; $("#mMedia").innerHTML = ""; document.body.style.overflow = ""; }
modal.onclick = e => { if (e.target.closest("[data-close]")) closeModal(); };
addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* nav */
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
$("#burger").onclick = () => nav.classList.toggle("open");
$("#links").onclick = e => { if (e.target.tagName === "A") nav.classList.remove("open"); };
const secs = [...document.querySelectorAll("main section[id]")];
const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) document.querySelectorAll(".links a").forEach(a => a.classList.toggle("act", a.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
secs.forEach(s => so.observe(s));

/* reveal + counters */
const ro = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in"); ro.unobserve(en.target);
  const b = en.target.querySelector("[data-count]"); if (b) count(b);
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 5) * 70 + "ms"; ro.observe(el); });
function count(b) {
  const n = +b.dataset.count, suf = b.hasAttribute("data-pct") ? "%" : b.hasAttribute("data-plus") ? "+" : "", t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1400, 1), v = Math.round(n * (1 - Math.pow(1 - p, 3))); b.textContent = v + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* pointer effects */
const fine = matchMedia("(pointer:fine)").matches;
addEventListener("pointermove", e => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
  const c = e.target.closest && e.target.closest(".card");
  if (c) { const r = c.getBoundingClientRect(); c.style.setProperty("--x", e.clientX - r.left + "px"); c.style.setProperty("--y", e.clientY - r.top + "px"); }
}, { passive: true });
if (fine) {
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`; });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });
  document.querySelectorAll(".magnet").forEach(el => {
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });
}
applyLang();
})();
