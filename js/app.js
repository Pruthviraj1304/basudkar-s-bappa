// ==========================================================================
// Tirupati Balaji & Ganpati Bilingual Invitation Application Logic
// ==========================================================================

const i18nData = {
  mr: {
    // Landing Gate
    gateInvocation: "|| श्री व्यंकटेश व विघ्नहर्त्याच्या चरणी नमन ||",
    gateTitle: "श्री गणेशोत्सव २०२६",
    gateSubtitle: "बासुदकर परिवारातर्फे आग्रहाचे निमंत्रण",
    gateBtn: "निमंत्रण उघडा 🪔",
    
    // Topbar
    brandTitle: "बासुदकर परिवार",
    brandSub: "गणेशोत्सव २०२६",
    btnBellTitle: "घंटी वाजवा",
    btnFlowerTitle: "पुष्पवृष्टी करा",
    btnMusicTitle: "गणपती बाप्पा आरती संगीत चालू/बंद",
    btnGateTitle: "प्रवेशद्वार पहा",

    // Hero
    heroInvocation: "|| श्री गणेशाय नमः || || श्री व्यंकटेश प्रसन्न ||",
    heroTitle: "श्री गणेशोत्सव २०२६",
    heroTheme: "✨ सपरिवार बाप्पाच्या दर्शनासाठी हार्दिक निमंत्रण ✨",
    darshanBadge: "॥ श्री गणपती बाप्पा प्रसन्न ॥",
    countdownLabel: "गणेश आगमनासाठी शिल्लक वेळ :",
    days: "दिवस",
    hours: "तास",
    minutes: "मिनिटे",
    seconds: "सेकंद",
    btnInvitation: "📜 निमंत्रण पत्रिका",
    btnSchedule: "📅 कार्यक्रम रूपरेषा",
    btnLocation: "📍 पत्ता व दिशा",
    btnTimeline: "📷 मागील उत्सव",

    // Invitation
    invitationTag: "सस्नेह निमंत्रण",
    invitationHeading: "निमंत्रण पत्रिका",
    shlokaText: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    shlokaMeaning: "(वाकडी सोंड, महाकाय शरीर आणि करोडो सूर्यांचे तेज असणाऱ्या हे गणराया, माझ्या सर्व कार्यातील विघ्ने दूर कर.)",
    invitationP1: "स्नेही जन व आप्तेष्ट,\nदरवर्षीप्रमाणे याही वर्षी आमच्या घरी विघ्नहर्ता मंगलमूर्ती गणरायाचे अत्यंत भक्तिभावाने व उत्साहात आगमन होत आहे.",
    invitationP2: "तरी आपण सर्वांनी आपल्या सहकुटुंब-सहपरिवारासह उपस्थित राहून आमच्या लाडक्या बाप्पाचे मंगलमय दर्शन घ्यावे आणि तीर्थप्रसादाचा लाभ घेऊन उत्सवाची शोभा वाढवावी, हीच आम्हा सर्व बासुदकर परिवारातर्फे नम्र व आग्रहाची विनंती.",
    invitationP3: "आपली उपस्थिती व सदिच्छा आमच्या उत्सवाचा आनंद द्विगुणीत करेल.",
    signatureLabel: "आपले नम्र व स्नेही,",
    signatureFamily: "समस्त बासुदकर परिवार",
    familyCaption: "॥ समस्त बासुदकर परिवार आपले सहर्ष स्वागत करत आहे ॥",

    // Schedule
    scheduleTag: "उत्सव रूपरेषा",
    scheduleHeading: "कार्यक्रम पत्रिका",
    ev1Badge: "पहिला दिवस",
    ev1Title: "श्री गणेश मूर्ती स्थापना व आरती",
    ev1Time: "दुपारी १२:०० वाजता",
    ev1Desc: "मंत्रोच्चारासहित श्री गणरायाची विधिवत प्राणप्रतिष्ठापना आणि पहिली महाआरती.",
    ev2Badge: "नित्य पूजा",
    ev2Title: "नित्य पूजा व संध्या आरती",
    ev2Time: "दररोज संध्याकाळी ८:०० वाजता",
    ev2Desc: "दैनिक भक्तिगीते, अथर्वशीर्ष पठण आणि सुमधुर आरती सोहळा.",
    ev3Badge: "अंतिम दिवस",
    ev3Title: "उत्तर पूजा व विसर्जन मिरवणूक",
    ev3Time: "संध्याकाळी ८:०० वाजता",
    ev3Desc: "उत्तर पूजा, निरोप आरती आणि ढोल-ताशांच्या गजरात मंगल विसर्जन.",

    // Location
    locationTag: "पत्ता व मार्गदर्शन",
    locationHeading: "आमचे निवासस्थान",
    venueName: "बासुदकर निवास",
    venueAddress: "रूम नं. १०६ / ४ था मजला, खटाव बिल्डिंग, डॉ. एस. एस. राव रोड, इन्कम टॅक्स ऑफिसजवळ, लालबाग, मुंबई - ४०००१२.",
    btnOpenMaps: "🗺️ थेट गुगल मॅप्सवर दिशा पहा",
    btnCopyAddress: "📋 पत्ता कॉपी करा",
    btnShareWhatsapp: "💬 व्हॉट्सॲपवर निमंत्रण पाठवा",

    // Timeline
    timelineTag: "स्मरणिका व आठवणी",
    timelineHeading: "मागील वर्षांचे मंगलमय दर्शन",
    year2023Caption: "॥ श्री गणेशोत्सव २०२३ ॥",
    year2023Sub: "बासुदकर बाप्पा दर्शन",
    year2024Caption: "॥ श्री गणेशोत्सव २०२४ ॥",
    year2024Sub: "बासुदकर बाप्पा दर्शन",
    year2025Caption: "॥ श्री गणेशोत्सव २०२५ ॥",
    year2025Sub: "बासुदकर बाप्पा दर्शन",
    
    // Download Card
    btnDownloadCard: "📥 निमंत्रण पत्रिका डाऊनलोड करा",
    toastCardGenerating: "⏳ निमंत्रण पत्रिका तयार होत आहे...",
    toastCardDownloaded: "📥 निमंत्रण पत्रिका यशस्वीरित्या सेव्ह झाली!",

    // Toast
    toastAddressCopied: "पत्ता क्लिपबोर्डवर यशस्वीरित्या कॉपी झाला!",
    toastBellRung: "🔔 मंगलमय घंटीनाद!",
    toastPetals: "🌸 पुष्पवृष्टी सुरू झाली!"
  },

  en: {
    // Landing Gate
    gateInvocation: "|| Salutations to Lord Venkateshwara & Lord Ganesha ||",
    gateTitle: "Shree Ganeshotsav 2026",
    gateSubtitle: "Cordially Invited by the Basudkar Family",
    gateBtn: "Open Invitation 🪔",

    // Topbar
    brandTitle: "Basudkar Family",
    brandSub: "Ganeshotsav 2026",
    btnBellTitle: "Ring Temple Bell",
    btnFlowerTitle: "Flower Shower",
    btnMusicTitle: "Toggle Ganpati Aarti Music",
    btnGateTitle: "View Entrance Gate",

    // Hero
    heroInvocation: "|| Shree Ganeshaya Namah || || Shree Venkatesha Prasanna ||",
    heroTitle: "Shree Ganeshotsav 2026",
    heroTheme: "✨ Cordial Invitation for Bappa's Divine Darshan ✨",
    darshanBadge: "॥ Shree Ganpati Bappa Darshan ॥",
    countdownLabel: "Countdown to Ganesh Arrival :",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    btnInvitation: "📜 Invitation Letter",
    btnSchedule: "📅 Event Schedule",
    btnLocation: "📍 Venue & Route",
    btnTimeline: "📷 Past Darshan",

    // Invitation
    invitationTag: "Heartfelt Invitation",
    invitationHeading: "Letter of Invitation",
    shlokaText: "Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kuru Me Deva Sarvakaryeshu Sarvada ||",
    shlokaMeaning: "(O Lord with curved trunk, immense divine form, and the radiance of a million suns, please remove all obstacles from all our endeavors forever.)",
    invitationP1: "Dear Friends and Family,\nWith great joy and devotion, we are delighted to welcome Lord Ganesha into our home once again for Shree Ganeshotsav 2026.",
    invitationP2: "We cordially invite you and your family to join us in these auspicious celebrations, take our beloved Bappa's divine darshan, and partake in the Mahaprasad.",
    invitationP3: "Your gracious presence and blessings will bring immense joy to our celebrations.",
    signatureLabel: "Warmly Invited By,",
    signatureFamily: "The Basudkar Family",
    familyCaption: "॥ The Basudkar Family Warmly Welcomes You ॥",

    // Schedule
    scheduleTag: "Festive Itinerary",
    scheduleHeading: "Program Schedule",
    ev1Badge: "Day 1",
    ev1Title: "Ganesh Sthapana & Welcome Aarti",
    ev1Time: "12:00 PM Afternoon",
    ev1Desc: "Vedic Sthapana Pooja, traditional welcome of Ganpati Bappa, and Grand Aarti.",
    ev2Badge: "Daily Pooja",
    ev2Title: "Nitya Pooja & Evening Aarti",
    ev2Time: "Daily at 8:00 PM",
    ev2Desc: "Evening Atharvashirsha chanting, bhajans, and Aarti with brass lamps.",
    ev3Badge: "Final Day",
    ev3Title: "Uttar Pooja & Visarjan Miravuk",
    ev3Time: "8:00 PM Evening",
    ev3Desc: "Farewell Uttar Pooja followed by joyful procession with Dhol-Tasha beats.",

    // Location
    locationTag: "Venue & Navigation",
    locationHeading: "Residence Location",
    venueName: "Basudkar Niwas",
    venueAddress: "Room No. 106 / 4th Floor, Khatav Building, Dr. S. S. Rao Road, Near Income Tax Office, Lalbaug, Mumbai - 400012.",
    btnOpenMaps: "🗺️ Get Directions on Google Maps",
    btnCopyAddress: "📋 Copy Full Address",
    btnShareWhatsapp: "💬 Share Invitation on WhatsApp",

    // Timeline
    timelineTag: "Memories & Past Darshan",
    timelineHeading: "Past Years' Divine Darshan Timeline",
    year2023Caption: "॥ Shree Ganeshotsav 2023 ॥",
    year2023Sub: "Basudkar Bappa Darshan",
    year2024Caption: "॥ Shree Ganeshotsav 2024 ॥",
    year2024Sub: "Basudkar Bappa Darshan",
    year2025Caption: "॥ Shree Ganeshotsav 2025 ॥",
    year2025Sub: "Basudkar Bappa Darshan",

    // Download Card
    btnDownloadCard: "📥 Download Invitation Card",
    toastCardGenerating: "⏳ Generating invitation card...",
    toastCardDownloaded: "📥 Invitation card saved successfully!",

    // Toast
    toastAddressCopied: "Address copied to clipboard successfully!",
    toastBellRung: "🔔 Temple Bell Chime!",
    toastPetals: "🌸 Flower shower started!"
  }
};

class GanpatiApp {
  constructor() {
    this.currentLang = 'mr';
    // Target Date: 14th September 2026, 12:00 PM
    this.targetDate = new Date('2026-09-14T12:00:00');

    // Prevent browser restoring previous scroll position on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    this.init();
  }

  init() {
    // 1. Initialize Petal Canvas
    if (window.FlowerPetalSystem) {
      this.petalSystem = new window.FlowerPetalSystem();
    }

    // 2. Setup DOM Event Listeners
    this.setupGate();
    this.setupLanguage();
    this.setupAudioControls();
    this.setupCountdown();
    this.setupLocation();
    this.setupTimeline();
    this.setupCardDownloader();

    // 3. Render initial language
    this.applyLanguage(this.currentLang);
  }

  // --- Tilak Entrance Gate ---
  setupGate() {
    const gateOverlay = document.getElementById('tilakGate');
    const openGateBtn = document.getElementById('openGateBtn');
    const tilakEmblem = document.getElementById('tilakEmblem');
    const btnReopenGate = document.getElementById('btnReopenGate');

    const triggerOpen = () => {
      // Always ensure main page starts from the very beginning (top of hero)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      if (window.divineSound) {
        window.divineSound.playTempleBell();
      }
      if (this.petalSystem) {
        this.petalSystem.triggerFlowerShower(65);
      }
      gateOverlay.classList.add('gate-opened');
      this.showToast(this.currentLang === 'mr' ? '॥ गणपती बाप्पा मोरया ! श्री व्यंकटेश प्रसन्न ॥' : '॥ Ganpati Bappa Morya ! Welcome to the Celebration ॥');
    };

    if (openGateBtn) openGateBtn.addEventListener('click', triggerOpen);
    if (tilakEmblem) tilakEmblem.addEventListener('click', triggerOpen);

    if (btnReopenGate) {
      btnReopenGate.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        gateOverlay.classList.remove('gate-opened');
      });
    }
  }

  // --- Language Switcher ---
  setupLanguage() {
    const btnMr = document.getElementById('langMr');
    const btnEn = document.getElementById('langEn');

    if (btnMr && btnEn) {
      btnMr.addEventListener('click', () => {
        this.setLanguage('mr');
      });
      btnEn.addEventListener('click', () => {
        this.setLanguage('en');
      });
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
    const btnMr = document.getElementById('langMr');
    const btnEn = document.getElementById('langEn');

    if (btnMr && btnEn) {
      btnMr.classList.toggle('active', lang === 'mr');
      btnEn.classList.toggle('active', lang === 'en');
    }

    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const dict = i18nData[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerText = dict[key];
        }
      }
    });
  }

  // --- Audio & Festive Action Controls ---
  setupAudioControls() {
    const btnBell = document.getElementById('btnRingBell') || document.getElementById('btnBell');
    const btnFlower = document.getElementById('btnFlower');
    const btnMusic = document.getElementById('btnMusic');

    if (btnBell) {
      btnBell.addEventListener('click', () => {
        const icon = btnBell.querySelector('span') || btnBell;
        icon.classList.add('swing-bell');
        setTimeout(() => icon.classList.remove('swing-bell'), 800);

        if (window.divineSound) {
          window.divineSound.playTempleBell();
        }
        this.showToast(i18nData[this.currentLang].toastBellRung);
      });
    }

    if (btnFlower) {
      btnFlower.addEventListener('click', () => {
        if (this.petalSystem) {
          this.petalSystem.triggerFlowerShower(55);
        }
        this.showToast(i18nData[this.currentLang].toastPetals);
      });
    }

    if (btnMusic) {
      btnMusic.addEventListener('click', () => {
        if (window.divineSound) {
          window.divineSound.toggleBGM((isPlaying) => {
            btnMusic.classList.toggle('playing', isPlaying);
          });
        }
      });
    }
  }

  // --- Live Countdown Timer ---
  setupCountdown() {
    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance < 0) {
        if (daysEl) daysEl.innerText = "00";
        if (hoursEl) hoursEl.innerText = "00";
        if (minsEl) minsEl.innerText = "00";
        if (secsEl) secsEl.innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
      if (minsEl) minsEl.innerText = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.innerText = String(seconds).padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // --- Location & WhatsApp & Copy Routing ---
  setupLocation() {
    const btnOpenMaps = document.getElementById('btnOpenMaps');
    const btnCopyAddress = document.getElementById('btnCopyAddress');
    const btnShareWhatsapp = document.getElementById('btnShareWhatsapp');

    const mapsNavigationUrl = "https://maps.app.goo.gl/qEDMhwqYWH1JpBCs7";

    if (btnOpenMaps) {
      btnOpenMaps.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(mapsNavigationUrl, '_blank');
      });
    }

    if (btnCopyAddress) {
      btnCopyAddress.addEventListener('click', () => {
        const addressText = i18nData[this.currentLang].venueName + "\n" + i18nData[this.currentLang].venueAddress;
        navigator.clipboard.writeText(addressText).then(() => {
          this.showToast(i18nData[this.currentLang].toastAddressCopied);
        }).catch(() => {
          this.showToast(addressText);
        });
      });
    }

    if (btnShareWhatsapp) {
      btnShareWhatsapp.addEventListener('click', () => {
        let msg = "";
        if (this.currentLang === 'mr') {
          msg = `🌸 *श्री गणेशोत्सव २०२६ - बासुदकर परिवार निमंत्रण* 🌸\n\n` +
                `|| श्री गणेशाय नमः || || श्री व्यंकटेश प्रसन्न ||\n\n` +
                `दरवर्षीप्रमाणे यंदाही आमच्या घरी बाप्पाचे आगमन होत आहे. यंदाचा आमचा देखावा खास *'श्री तिरुपती बालाजी मंदिर'* संकल्पनेवर आधारित आहे.\n\n` +
                `तरी आपण सर्वांनी सपरिवार येऊन बाप्पाच्या दर्शनाचा व तीर्थप्रसादाचा लाभ घ्यावा ही नम्र विनंती!\n\n` +
                `📍 *निवासस्थान:* ${i18nData.mr.venueName}, ${i18nData.mr.venueAddress}\n` +
                `🗺️ *गुगल मॅप्स लोकेशन:* ${mapsNavigationUrl}\n\n` +
                `निमंत्रक: समस्त बासुदकर परिवार 🙏`;
        } else {
          msg = `🌸 *Shree Ganeshotsav 2026 - Basudkar Family Invitation* 🌸\n\n` +
                `|| Shree Ganeshaya Namah || || Shree Venkatesha Prasanna ||\n\n` +
                `You and your family are cordially invited to celebrate Ganeshotsav at our home with the grand *'Shree Tirupati Balaji Temple'* theme!\n\n` +
                `📍 *Venue:* ${i18nData.en.venueName}, ${i18nData.en.venueAddress}\n` +
                `🗺️ *Google Maps Navigation:* ${mapsNavigationUrl}\n\n` +
                `Invited with love: The Basudkar Family 🙏`;
        }

        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
        window.open(whatsappUrl, '_blank');
      });
    }
  }

  // --- Past Years Timeline Lightbox ---
  setupTimeline() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const modalTitle = document.getElementById('lightboxTitle');
    const modalClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.timeline-card').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.timeline-img');
        const title = card.getAttribute('data-title') || card.querySelector('.timeline-caption')?.innerText;
        if (modal && modalImg && img) {
          modalImg.src = img.src;
          if (modalTitle) modalTitle.innerText = title;
          modal.classList.add('active');
        }
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  }

  // --- Downloadable Digital Invitation Card Generator ---
  setupCardDownloader() {
    const btnDownload = document.getElementById('btnDownloadCard');
    if (!btnDownload) return;

    btnDownload.addEventListener('click', async () => {
      this.showToast(i18nData[this.currentLang].toastCardGenerating || "⏳ निमंत्रण पत्रिका तयार होत आहे...");
      try {
        await this.generateAndDownloadCard();
        this.showToast(i18nData[this.currentLang].toastCardDownloaded || "📥 निमंत्रण पत्रिका यशस्वीरित्या सेव्ह झाली!");
      } catch (err) {
        console.error("Card generation failed:", err);
        this.showToast("त्रुटी आली, कृपया पुन्हा प्रयत्न करा.");
      }
    });
  }

  async generateAndDownloadCard() {
    const width = 1200;
    const height = 1750;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 1. Royal Festive Background
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#060920');
    bgGradient.addColorStop(0.5, '#0c133a');
    bgGradient.addColorStop(1, '#050718');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Elegant Gold Concentric Borders
    ctx.strokeStyle = '#f6c042';
    ctx.lineWidth = 6;
    ctx.strokeRect(35, 35, width - 70, height - 70);

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(48, 48, width - 96, height - 96);

    // Corner Ornaments
    const drawCorner = (x, y, dx, dy) => {
      ctx.save();
      ctx.strokeStyle = '#ffe082';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 45);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 45, y);
      ctx.stroke();

      ctx.fillStyle = '#ffb300';
      ctx.beginPath();
      ctx.arc(x + dx * 16, y + dy * 16, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    drawCorner(55, 55, 1, 1);
    drawCorner(width - 55, 55, -1, 1);
    drawCorner(55, height - 55, 1, -1);
    drawCorner(width - 55, height - 55, -1, -1);

    // Helper to load image
    const loadImage = (src) => new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

    // 3. Top Tilak Emblem
    const tilakImg = await loadImage('assets/images/balaji_tilak.jpg');
    if (tilakImg) {
      const tilakSize = 130;
      const tilakX = (width - tilakSize) / 2;
      const tilakY = 85;
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(tilakX + tilakSize/2, tilakY + tilakSize/2, tilakSize/2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(tilakImg, tilakX, tilakY, tilakSize, tilakSize);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = '#ffcc00';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(tilakX + tilakSize/2, tilakY + tilakSize/2, tilakSize/2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Invocation & Headers
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffe082';
    ctx.font = 'bold 30px serif, sans-serif';
    ctx.fillText('|| श्री गणेशाय नमः ||   || श्री व्यंकटेश प्रसन्न ||', width / 2, 270);

    ctx.fillStyle = '#ffc107';
    ctx.font = 'bold 54px serif, sans-serif';
    ctx.fillText(this.currentLang === 'mr' ? 'श्री गणेशोत्सव २०२६' : 'Shree Ganeshotsav 2026', width / 2, 348);

    ctx.fillStyle = '#ff9e40';
    ctx.font = '600 28px sans-serif';
    ctx.fillText(this.currentLang === 'mr' ? '✨ सपरिवार बाप्पाच्या दर्शनासाठी सस्नेह निमंत्रण ✨' : '✨ Cordial Invitation for Bappa\'s Divine Darshan ✨', width / 2, 405);

    // Divider Line
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(180, 435);
    ctx.lineTo(width - 180, 435);
    ctx.stroke();

    // 5. Shloka Box
    ctx.fillStyle = 'rgba(15, 22, 60, 0.85)';
    ctx.fillRect(140, 460, width - 280, 105);
    ctx.strokeStyle = 'rgba(255, 204, 0, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(140, 460, width - 280, 105);

    ctx.fillStyle = '#ffd54f';
    ctx.font = 'bold 26px serif, sans-serif';
    ctx.fillText('वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।', width / 2, 502);
    ctx.fillText('निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥', width / 2, 542);

    // 6. Lord Ganesha Altar Portrait Image
    const bappaImg = await loadImage('assets/images/ganpati_bappa.jpg');
    if (bappaImg) {
      const imgWidth = 430;
      const imgHeight = 430;
      const imgX = (width - imgWidth) / 2;
      const imgY = 595;

      ctx.save();
      ctx.fillStyle = '#10173e';
      ctx.fillRect(imgX - 8, imgY - 8, imgWidth + 16, imgHeight + 16);
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 3;
      ctx.strokeRect(imgX - 8, imgY - 8, imgWidth + 16, imgHeight + 16);
      ctx.drawImage(bappaImg, imgX, imgY, imgWidth, imgHeight);
      ctx.restore();
    }

    // 7. Formal Invitation Body
    ctx.fillStyle = '#f5f5f5';
    ctx.font = '500 26px sans-serif';
    if (this.currentLang === 'mr') {
      ctx.fillText('स्नेही जन व आप्तेष्ट,', width / 2, 1080);
      ctx.fillText('दरवर्षीप्रमाणे याही वर्षी आमच्या घरी विघ्नहर्ता मंगलमूर्ती गणरायाचे आगमन होत आहे.', width / 2, 1122);
      ctx.fillText('आपण सर्वांनी सपरिवार उपस्थित राहून बाप्पाचे मंगलमय दर्शन घ्यावे आणि', width / 2, 1162);
      ctx.fillText('तीर्थप्रसादाचा लाभ घ्यावा हीच आमची नम्र व आग्रहाची विनंती.', width / 2, 1202);
    } else {
      ctx.fillText('Dear Friends and Family,', width / 2, 1080);
      ctx.fillText('With great joy, we cordially invite you and your family to celebrate', width / 2, 1122);
      ctx.fillText('Shree Ganeshotsav 2026, seek Lord Ganesha\'s divine blessings,', width / 2, 1162);
      ctx.fillText('and partake in the Mahaprasad with us.', width / 2, 1202);
    }

    // 8. Event Schedule Highlight Card
    ctx.fillStyle = 'rgba(255, 109, 0, 0.14)';
    ctx.fillRect(150, 1245, width - 300, 135);
    ctx.strokeStyle = '#ff9100';
    ctx.lineWidth = 2;
    ctx.strokeRect(150, 1245, width - 300, 135);

    ctx.fillStyle = '#ffe082';
    ctx.font = 'bold 26px sans-serif';
    if (this.currentLang === 'mr') {
      ctx.fillText('⏰ पहिला दिवस (स्थापना): १४ सप्टेंबर २०२६ | दुपारी १२:०० वाजता', width / 2, 1298);
      ctx.fillText('🔔 नित्य पूजा व संध्या आरती: दररोज संध्याकाळी ८:०० वाजता', width / 2, 1348);
    } else {
      ctx.fillText('⏰ Day 1 (Sthapana): 14th September 2026 | 12:00 PM Afternoon', width / 2, 1298);
      ctx.fillText('🔔 Nitya Pooja & Evening Aarti: Daily at 8:00 PM Evening', width / 2, 1348);
    }

    // 9. Venue & Location
    ctx.fillStyle = '#ffd54f';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(this.currentLang === 'mr' ? '📍 पत्ता: बासुदकर निवास, रूम नं. १०६/४था मजला, खटाव बिल्डिंग, डॉ. एस.एस. राव रोड, लालबाग, मुंबई-१२' : '📍 Venue: Basudkar Niwas, Rm 106/4th Flr, Khatav Bldg, Dr. S.S. Rao Rd, Lalbaug, Mumbai-12', width / 2, 1440);

    // 10. Signature Block
    ctx.fillStyle = '#ff9e40';
    ctx.font = '600 24px sans-serif';
    ctx.fillText(this.currentLang === 'mr' ? 'आपले नम्र व स्नेही,' : 'Warmly Invited By,', width / 2, 1515);

    ctx.fillStyle = '#ffc107';
    ctx.font = 'bold 36px serif, sans-serif';
    ctx.fillText(this.currentLang === 'mr' ? '॥ समस्त बासुदकर परिवार ॥' : '॥ The Basudkar Family ॥', width / 2, 1568);

    // Footer Mantra
    ctx.fillStyle = '#a3acdb';
    ctx.font = '22px sans-serif';
    ctx.fillText('॥ ॐ गं गणपतये नमः ॥', width / 2, 1648);

    // Trigger Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'Shree_Ganeshotsav_2026_Basudkar_Family_Invitation.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  showToast(message) {
    let toast = document.getElementById('toast') || document.getElementById('toastMsg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new GanpatiApp();
});
