export type Lang = "en" | "hi";

export type Dict = Record<string, { en: string; hi: string }>;

export const dict = {
  // Header / Nav
  "nav.home": { en: "Home", hi: "मुख्य" },
  "nav.pricing": { en: "Pricing", hi: "मूल्य" },
  "nav.about": { en: "Our Promise", hi: "हमारा वचन" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.book": { en: "Book a Divya Snan", hi: "दिव्यस्नान बुक करें" },

  // Hero
  "hero.kicker": { en: "Sacred photo-snan seva", hi: "पवित्र फोटो-स्नान सेवा" },
  "hero.title": { en: "A holy dip, from your home.", hi: "घर बैठे, गंगा स्नान।" },
  "hero.sub": {
    en: "Send us your photograph. On the banks of the Ganga and the Triveni Sangam, we perform a respectful snan and prayer on your behalf — and return a dated, geo-tagged video and a Divya Snan Certificate.",
    hi: "अपनी फोटो हमें भेजें। गंगा तट और त्रिवेणी संगम पर हम आपकी ओर से सम्मानपूर्वक स्नान व प्रार्थना करते हैं — और तिथि-स्थान सहित वीडियो तथा दिव्य स्नान प्रमाणपत्र भेजते हैं।",
  },
  "hero.cta.primary": { en: "Book a Divya Snan", hi: "दिव्यस्नान बुक करें" },
  "hero.cta.secondary": { en: "How it works", hi: "यह कैसे काम करता है" },
  "hero.trust.video": { en: "Real video proof", hi: "वास्तविक वीडियो प्रमाण" },
  "hero.trust.geo": { en: "Geo-tag + timestamp", hi: "स्थान व समय अंकित" },
  "hero.trust.respect": { en: "Reverent handling", hi: "श्रद्धापूर्वक देखरेख" },

  // How it works
  "how.title": { en: "How it works", hi: "विधि" },
  "how.sub": {
    en: "Four simple steps. We carry the rest.",
    hi: "केवल चार चरण। शेष हम पर छोड़िए।",
  },
  "how.step1.title": { en: "Upload your photo", hi: "फोटो भेजें" },
  "how.step1.body": {
    en: "A clear photograph of the devotee. Names, gotra and a short sankalp are optional.",
    hi: "श्रद्धालु की स्पष्ट फोटो। नाम, गोत्र व संक्षिप्त संकल्प वैकल्पिक हैं।",
  },
  "how.step2.title": { en: "Choose river & seva", hi: "नदी व सेवा चुनें" },
  "how.step2.body": {
    en: "Ganga at Haridwar or Varanasi, or the Triveni Sangam at Prayagraj. Pick a seva package.",
    hi: "गंगा (हरिद्वार/वाराणसी) अथवा त्रिवेणी संगम (प्रयागराज)। सेवा पैकेज चुनें।",
  },
  "how.step3.title": { en: "We perform the snan", hi: "हम स्नान संपन्न करते हैं" },
  "how.step3.body": {
    en: "Our priests respectfully dip the printed photograph and recite a short prayer on the ghat.",
    hi: "हमारे पंडित घाट पर प्रिंट की हुई फोटो को श्रद्धापूर्वक स्नान कराकर संक्षिप्त मंत्रोच्चार करते हैं।",
  },
  "how.step4.title": { en: "Receive your proof", hi: "प्रमाण प्राप्त करें" },
  "how.step4.body": {
    en: "Within 48 hours, you receive a geo-tagged video, photos, and your Divya Snan Certificate.",
    hi: "48 घंटों में आपको स्थान-अंकित वीडियो, फोटो व दिव्य स्नान प्रमाणपत्र भेजा जाता है।",
  },

  // Rivers
  "rivers.title": { en: "Sacred rivers we serve", hi: "हम जिन पवित्र तटों पर सेवा करते हैं" },
  "rivers.sub": {
    en: "Three of Bharat's most sacred snan-sthals.",
    hi: "भारत के तीन परम पावन स्नान-स्थल।",
  },
  "rivers.haridwar.title": { en: "Ganga · Haridwar", hi: "गंगा · हरिद्वार" },
  "rivers.haridwar.body": {
    en: "Har Ki Pauri — the gateway of Lord Hari. Performed at brahma-muhurta.",
    hi: "हर की पौड़ी — हरि का द्वार। ब्रह्म-मुहूर्त में संपन्न।",
  },
  "rivers.varanasi.title": { en: "Ganga · Varanasi", hi: "गंगा · वाराणसी" },
  "rivers.varanasi.body": {
    en: "Dashashwamedh Ghat — Kashi, the city of Lord Vishwanath. Followed by aarti at sandhya.",
    hi: "दशाश्वमेध घाट — काशी, विश्वनाथ की नगरी। संध्या आरती सहित।",
  },
  "rivers.prayagraj.title": { en: "Triveni Sangam · Prayagraj", hi: "त्रिवेणी संगम · प्रयागराज" },
  "rivers.prayagraj.body": {
    en: "The confluence of Ganga, Yamuna and the unseen Saraswati. The most auspicious snan in Sanatan tradition.",
    hi: "गंगा, यमुना तथा अदृश्य सरस्वती का संगम। सनातन परंपरा का परम पुण्य स्नान।",
  },

  // Trust strip
  "trust.title": { en: "Held with reverence. Verified end-to-end.", hi: "श्रद्धापूर्वक संभाला। आद्यंत सत्यापित।" },
  "trust.sub": {
    en: "Your faith and your photograph are sacred to us. We never share, sell, or publish your image. After the seva, the printed photo is offered to the river itself.",
    hi: "आपकी आस्था और आपकी फोटो हमारे लिए पवित्र हैं। हम कभी भी आपकी छवि साझा, विक्रय या प्रकाशित नहीं करते। सेवा उपरांत प्रिंट की हुई फोटो गंगा को ही समर्पित कर दी जाती है।",
  },
  "trust.point.video.title": { en: "Real video proof", hi: "वास्तविक वीडियो प्रमाण" },
  "trust.point.video.body": {
    en: "Continuous, unedited footage of your photo being dipped — not stock visuals.",
    hi: "बिना संपादन का संपूर्ण वीडियो — कोई स्टॉक दृश्य नहीं।",
  },
  "trust.point.geo.title": { en: "Geo-tag + timestamp", hi: "स्थान व समय अंकित" },
  "trust.point.geo.body": {
    en: "Every video carries verifiable location and time.",
    hi: "प्रत्येक वीडियो में स्थान व समय की पुष्टि होती है।",
  },
  "trust.point.priests.title": { en: "Verified priests", hi: "प्रमाणित पंडित" },
  "trust.point.priests.body": {
    en: "Performed by registered tirth-purohits at recognised ghats.",
    hi: "मान्यता प्राप्त घाटों पर पंजीकृत तीर्थ-पुरोहितों द्वारा संपन्न।",
  },
  "trust.point.privacy.title": { en: "Photo privacy", hi: "फोटो की गोपनीयता" },
  "trust.point.privacy.body": {
    en: "Images are deleted from our servers 30 days after delivery.",
    hi: "वितरण के 30 दिनों के पश्चात् सर्वर से चित्र हटा दिए जाते हैं।",
  },

  // Pricing
  "pricing.title": { en: "Sevas & offerings", hi: "सेवाएँ" },
  "pricing.sub": {
    en: "Three tiers — choose what feels right for your sankalp.",
    hi: "तीन स्तर — अपने संकल्प अनुसार चुनें।",
  },
  "pricing.tier.snan.name": { en: "Snan", hi: "स्नान" },
  "pricing.tier.snan.tagline": { en: "Basic photo-snan", hi: "मूल फोटो-स्नान" },
  "pricing.tier.snan.price": { en: "₹ 501", hi: "₹ ५०१" },
  "pricing.tier.snan.f1": { en: "Respectful dip of your photograph", hi: "फोटो का श्रद्धापूर्वक स्नान" },
  "pricing.tier.snan.f2": { en: "Short prayer with name & gotra", hi: "नाम-गोत्र सहित संक्षिप्त मंत्रोच्चार" },
  "pricing.tier.snan.f3": { en: "Photo proof", hi: "फोटो प्रमाण" },
  "pricing.tier.snan.f4": { en: "Digital Divya Snan Certificate", hi: "डिजिटल दिव्य स्नान प्रमाणपत्र" },

  "pricing.tier.aarti.name": { en: "Snan + Aarti", hi: "स्नान + आरती" },
  "pricing.tier.aarti.tagline": { en: "Most chosen", hi: "सर्वाधिक चयनित" },
  "pricing.tier.aarti.price": { en: "₹ 1,251", hi: "₹ १,२५१" },
  "pricing.tier.aarti.f1": { en: "Everything in Snan", hi: "स्नान की समस्त सेवाएँ" },
  "pricing.tier.aarti.f2": { en: "Sandhya Ganga aarti video on your behalf", hi: "आपकी ओर से संध्या गंगा आरती का वीडियो" },
  "pricing.tier.aarti.f3": { en: "Geo-tagged HD video", hi: "स्थान-अंकित HD वीडियो" },
  "pricing.tier.aarti.f4": { en: "Printed certificate by post", hi: "डाक द्वारा मुद्रित प्रमाणपत्र" },

  "pricing.tier.sampurna.name": { en: "Sampurna Seva", hi: "सम्पूर्ण सेवा" },
  "pricing.tier.sampurna.tagline": { en: "Complete offering", hi: "पूर्ण समर्पण" },
  "pricing.tier.sampurna.price": { en: "₹ 2,501", hi: "₹ २,५०१" },
  "pricing.tier.sampurna.f1": { en: "Everything in Snan + Aarti", hi: "स्नान + आरती की समस्त सेवाएँ" },
  "pricing.tier.sampurna.f2": { en: "Sealed gangajal kalash to your home", hi: "घर तक मुहरबंद गंगाजल कलश" },
  "pricing.tier.sampurna.f3": { en: "Prasad & raksha-sutra by courier", hi: "कूरियर द्वारा प्रसाद व रक्षासूत्र" },
  "pricing.tier.sampurna.f4": { en: "Priority next-morning snan", hi: "अगले प्रातः प्राथमिकता स्नान" },

  "pricing.choose": { en: "Choose this seva", hi: "यह सेवा चुनें" },
  "pricing.popular": { en: "Most chosen", hi: "सर्वाधिक चयनित" },
  "pricing.note": {
    en: "All prices are dakshina-inclusive. Additional photographs in the same booking: ₹ 101 each.",
    hi: "सभी मूल्य दक्षिणा सहित हैं। एक ही बुकिंग में अतिरिक्त फोटो: ₹ १०१ प्रति।",
  },

  // Testimonials
  "test.title": { en: "Voices of our sankalpkartas", hi: "संकल्पकर्ताओं के अनुभव" },
  "test.t1.body": {
    en: "My mother is 82 and could not travel to Prayagraj this Kumbh. The video Divyasnan sent brought her to tears. Thank you for treating her photo with such respect.",
    hi: "मेरी माँ 82 वर्ष की हैं, इस कुम्भ में प्रयागराज नहीं जा सकीं। दिव्यस्नान का वीडियो देखकर वे भावुक हो गईं। उनकी फोटो को इतना सम्मान देने के लिए धन्यवाद।",
  },
  "test.t1.name": { en: "Suresh K., Bengaluru", hi: "सुरेश के., बेंगलुरु" },
  "test.t2.body": {
    en: "The gangajal arrived sealed with a small puja. The certificate is beautifully made. My father has placed it in our prayer room.",
    hi: "गंगाजल पूजन के साथ मुहरबंद आया। प्रमाणपत्र अति सुंदर है। पिताजी ने उसे पूजा-गृह में स्थापित किया है।",
  },
  "test.t2.name": { en: "Anjali M., NRI, Toronto", hi: "अंजलि एम., प्रवासी, टोरंटो" },
  "test.t3.body": {
    en: "We sent photos of all four grandparents for the Mauni Amavasya snan. The geo-tag and the timing felt genuine. Felt like a real pilgrimage performed for our family.",
    hi: "मौनी अमावस्या स्नान हेतु हमने चारों दादा-दादी-नाना-नानी की फोटो भेजी। स्थान व समय अंकन प्रामाणिक लगा। ऐसा प्रतीत हुआ मानो परिवार ने स्वयं तीर्थयात्रा की हो।",
  },
  "test.t3.name": { en: "Ravi & Priya S., Hyderabad", hi: "रवि व प्रिया एस., हैदराबाद" },

  // FAQ
  "faq.title": { en: "Questions of faith", hi: "श्रद्धा से जुड़े प्रश्न" },
  "faq.q1.q": { en: "Is a photo-snan considered religiously valid?", hi: "क्या फोटो-स्नान शास्त्रसम्मत है?" },
  "faq.q1.a": {
    en: "Sanatan tradition recognises pratinidhi (representative) sevas for those who cannot travel due to age, illness, or distance. The sankalp and the prayer carry the merit of the snan to the named devotee.",
    hi: "सनातन परंपरा में आयु, अस्वस्थता या दूरी के कारण असमर्थ श्रद्धालुओं हेतु प्रतिनिधि-सेवा का विधान है। संकल्प व मंत्रोच्चार से स्नान का पुण्य नामांकित श्रद्धालु को प्राप्त होता है।",
  },
  "faq.q2.q": { en: "What happens to the printed photograph?", hi: "मुद्रित फोटो का क्या होता है?" },
  "faq.q2.a": {
    en: "After the snan and prayer, the printed photograph is itself offered to the river — it is not kept, photographed elsewhere, or reused. The digital file is deleted from our servers 30 days after delivery.",
    hi: "स्नान व मंत्रोच्चार उपरांत मुद्रित फोटो को गंगा में समर्पित कर दिया जाता है — न संग्रहित, न पुनः प्रयोग। डिजिटल फाइल वितरण के 30 दिनों पश्चात् हमारे सर्वर से हटा दी जाती है।",
  },
  "faq.q3.q": { en: "How quickly will I receive the video?", hi: "वीडियो कब तक प्राप्त होगा?" },
  "faq.q3.a": {
    en: "Standard delivery is within 48 hours of booking. Sampurna Seva includes priority next-morning snan; gangajal and prasad ship within 3–5 working days.",
    hi: "बुकिंग के 48 घंटों के भीतर वीडियो प्राप्त हो जाता है। सम्पूर्ण सेवा में अगले प्रातः प्राथमिकता स्नान सम्मिलित है; गंगाजल व प्रसाद 3–5 कार्यदिवसों में भेजे जाते हैं।",
  },
  "faq.q4.q": { en: "Can I book on a specific tithi or muhurta?", hi: "क्या किसी विशेष तिथि या मुहूर्त पर बुकिंग संभव है?" },
  "faq.q4.a": {
    en: "Yes. At the booking step, mention the date and tithi. We confirm by WhatsApp whether the muhurta is available at your chosen ghat.",
    hi: "अवश्य। बुकिंग के समय तिथि उल्लेखित करें। हम व्हाट्सएप पर पुष्टि करते हैं कि चयनित घाट पर वह मुहूर्त उपलब्ध है।",
  },
  "faq.q5.q": { en: "Do you handle multi-photo and family bookings?", hi: "क्या पारिवारिक व बहु-फोटो बुकिंग होती है?" },
  "faq.q5.a": {
    en: "Yes. You can add multiple devotees in one booking; each receives an individually named certificate. A family discount is applied for four or more photos.",
    hi: "हाँ। एक बुकिंग में अनेक श्रद्धालु जोड़े जा सकते हैं; प्रत्येक को नामांकित प्रमाणपत्र प्राप्त होता है। चार या अधिक फोटो पर पारिवारिक छूट।",
  },

  // Footer
  "footer.tagline": { en: "A holy dip, from your home.", hi: "घर बैठे, गंगा स्नान।" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
  "footer.col.seva": { en: "Sevas", hi: "सेवाएँ" },
  "footer.col.company": { en: "Company", hi: "कंपनी" },
  "footer.col.support": { en: "Support", hi: "सहायता" },
  "footer.privacy": { en: "Privacy", hi: "गोपनीयता" },
  "footer.terms": { en: "Terms", hi: "नियम" },
  "footer.refund": { en: "Refund policy", hi: "वापसी नीति" },

  // Booking flow
  "book.title": { en: "Book your Divya Snan", hi: "अपना दिव्यस्नान बुक करें" },
  "book.step.photo": { en: "Photo", hi: "फोटो" },
  "book.step.devotee": { en: "Devotee", hi: "श्रद्धालु" },
  "book.step.river": { en: "River", hi: "नदी" },
  "book.step.seva": { en: "Seva", hi: "सेवा" },
  "book.step.review": { en: "Review", hi: "समीक्षा" },
  "book.step.send": { en: "Confirm", hi: "पुष्टि" },
  "book.next": { en: "Continue", hi: "आगे बढ़ें" },
  "book.back": { en: "Back", hi: "पीछे" },

  "book.photo.title": { en: "Upload the devotee's photograph", hi: "श्रद्धालु की फोटो अपलोड करें" },
  "book.photo.help": {
    en: "JPG / PNG up to 10 MB. A clear, front-facing photograph works best.",
    hi: "JPG / PNG, अधिकतम 10 MB। स्पष्ट, सम्मुख फोटो उत्तम।",
  },
  "book.photo.cta": { en: "Choose a photograph", hi: "फोटो चुनें" },
  "book.photo.trust": {
    en: "We handle every photograph with reverence and never share, sell or publish it. After the seva, the printed copy is offered to the river itself.",
    hi: "हम प्रत्येक फोटो को श्रद्धापूर्वक संभालते हैं और कभी साझा, विक्रय या प्रकाशित नहीं करते। सेवा उपरांत मुद्रित प्रति गंगा को ही समर्पित कर दी जाती है।",
  },
  "book.photo.added": { en: "Photograph added", hi: "फोटो जुड़ी" },
  "book.photo.remove": { en: "Remove", hi: "हटाएँ" },
  "book.photo.addAnother": { en: "Add another devotee", hi: "एक और श्रद्धालु जोड़ें" },

  "book.devotee.title": { en: "Devotee details", hi: "श्रद्धालु विवरण" },
  "book.devotee.help": {
    en: "Used to personalise the prayer and the certificate.",
    hi: "मंत्रोच्चार व प्रमाणपत्र को व्यक्तिगत बनाने हेतु।",
  },
  "book.devotee.name": { en: "Devotee's full name", hi: "श्रद्धालु का पूर्ण नाम" },
  "book.devotee.gotra": { en: "Gotra (optional)", hi: "गोत्र (वैकल्पिक)" },
  "book.devotee.gotra.placeholder": { en: "e.g. Bharadwaj", hi: "उदा. भारद्वाज" },
  "book.devotee.sankalp": { en: "Sankalp / prayer (optional)", hi: "संकल्प / प्रार्थना (वैकल्पिक)" },
  "book.devotee.sankalp.placeholder": {
    en: "e.g. For my mother's health and long life.",
    hi: "उदा. मेरी माता के स्वास्थ्य व दीर्घायु हेतु।",
  },
  "book.devotee.phone": { en: "Your WhatsApp number (with country code)", hi: "आपका व्हाट्सएप नंबर (कंट्री कोड सहित)" },
  "book.devotee.phone.placeholder": { en: "e.g. +91 98XXX XXXXX", hi: "उदा. +91 98XXX XXXXX" },
  "book.devotee.phone.help": {
    en: "We will send your video, photos and certificate to this number.",
    hi: "हम आपका वीडियो, फोटो व प्रमाणपत्र इसी नंबर पर भेजेंगे।",
  },

  "book.river.title": { en: "Choose the river and ghat", hi: "नदी व घाट चुनें" },
  "book.river.help": {
    en: "Each ghat has its own sandhya muhurta and aarti tradition.",
    hi: "प्रत्येक घाट की अपनी संध्या-मुहूर्त व आरती-परंपरा है।",
  },

  "book.seva.title": { en: "Pick a seva package", hi: "सेवा पैकेज चुनें" },
  "book.seva.help": { en: "You can upgrade later from your booking page.", hi: "बुकिंग पृष्ठ से बाद में अपग्रेड संभव।" },

  "book.review.title": { en: "Review your sankalp", hi: "अपने संकल्प की समीक्षा करें" },
  "book.review.photos": { en: "Photographs", hi: "फोटो" },
  "book.review.devotee": { en: "Devotee", hi: "श्रद्धालु" },
  "book.review.gotra": { en: "Gotra", hi: "गोत्र" },
  "book.review.sankalp": { en: "Sankalp", hi: "संकल्प" },
  "book.review.river": { en: "River & ghat", hi: "नदी व घाट" },
  "book.review.seva": { en: "Seva", hi: "सेवा" },
  "book.review.total": { en: "Total dakshina", hi: "कुल दक्षिणा" },
  "book.review.consent": {
    en: "I confirm that the photograph is of a person who has consented to this seva (or of a deceased family member). I have read the privacy promise.",
    hi: "मैं पुष्टि करता/करती हूँ कि यह फोटो किसी सहमत व्यक्ति की है (अथवा दिवंगत स्वजन की)। गोपनीयता नीति पढ़ ली है।",
  },
  "book.review.proceed": { en: "Confirm & continue", hi: "पुष्टि कर आगे बढ़ें" },

  "book.send.title": { en: "Send your sankalp on WhatsApp", hi: "व्हाट्सएप पर अपना संकल्प भेजें" },
  "book.send.help": {
    en: "We do not collect money on this site. Tap the button below — your sankalp details and photograph will open in WhatsApp, addressed to our seva team. You only need to press Send.",
    hi: "हम इस वेबसाइट पर भुगतान नहीं लेते। नीचे दिए बटन को दबाएँ — आपका संकल्प व फोटो हमारी सेवा-टीम को संबोधित व्हाट्सएप संदेश में खुल जाएगा। आपको केवल Send दबाना होगा।",
  },
  "book.send.contribution.label": { en: "Seva contribution", hi: "सेवा-दक्षिणा" },
  "book.send.contribution.note": {
    en: "To be arranged on WhatsApp — this is a suggested dakshina, not a charge.",
    hi: "व्हाट्सएप पर तय की जाएगी — यह सुझाई गई दक्षिणा है, कोई शुल्क नहीं।",
  },
  "book.send.button": { en: "Send sankalp on WhatsApp", hi: "व्हाट्सएप पर संकल्प भेजें" },
  "book.send.uploading": { en: "Uploading photograph…", hi: "फोटो अपलोड हो रही है…" },
  "book.send.warning.bizNumber": {
    en: "Setup needed: NEXT_PUBLIC_BUSINESS_WHATSAPP is not configured. The WhatsApp message will not open — please set the env variable.",
    hi: "सेटअप आवश्यक: NEXT_PUBLIC_BUSINESS_WHATSAPP सेट नहीं है। व्हाट्सएप संदेश नहीं खुलेगा — कृपया env चर सेट करें।",
  },
  "book.send.warning.cloudinary": {
    en: "Heads-up: Cloudinary is not configured, so the photograph will be sent separately. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to host it automatically.",
    hi: "सूचना: Cloudinary सेट नहीं है, अतः फोटो अलग से भेजी जाएगी। स्वत: होस्ट हेतु NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME व NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET सेट करें।",
  },
  "book.send.upload.failed": {
    en: "Photo upload failed — proceeding without a hosted URL. We will request it on WhatsApp.",
    hi: "फोटो अपलोड असफल — होस्टेड URL के बिना आगे बढ़ रहे हैं। हम व्हाट्सएप पर पुनः माँगेंगे।",
  },

  "book.confirm.title": { en: "Your sankalp is received", hi: "आपका संकल्प प्राप्त हुआ" },
  "book.confirm.sub": {
    en: "We will perform the snan and send your video & certificate within 48 hours. A WhatsApp confirmation is on its way.",
    hi: "हम स्नान संपन्न कर 48 घंटों में वीडियो व प्रमाणपत्र भेजेंगे। व्हाट्सएप पर पुष्टि भेजी जा रही है।",
  },
  "book.confirm.orderId": { en: "Order ID", hi: "आदेश क्रमांक" },
  "book.confirm.cta.home": { en: "Back to home", hi: "मुख्य पृष्ठ पर वापस" },

  // About
  "about.title": { en: "Our promise", hi: "हमारा वचन" },
  "about.kicker": { en: "Why Divyasnan exists", hi: "दिव्यस्नान क्यों" },
  "about.p1": {
    en: "Across the world, devotees long for the sacred rivers of Bharat — but age, distance, work, or health make the journey impossible. We exist for them. We are a small team of registered tirth-purohits, family priests and a handful of engineers who care about doing this with absolute reverence.",
    hi: "विश्वभर में श्रद्धालु भारत की पवित्र नदियों के दर्शनों को व्याकुल हैं, किंतु आयु, दूरी, कार्य अथवा स्वास्थ्य के कारण यात्रा संभव नहीं होती। हम उन्हीं के लिए हैं। हम पंजीकृत तीर्थ-पुरोहितों, कुलगुरुओं और कुछ इंजीनियरों का एक छोटा परिवार हैं, जो इस सेवा को परम श्रद्धा से करते हैं।",
  },
  "about.pillar.respect.title": { en: "Respect", hi: "सम्मान" },
  "about.pillar.respect.body": {
    en: "A photograph is a person. We never crop, edit, or display the image. The printed copy is offered to the river itself.",
    hi: "फोटो में व्यक्ति बसता है। हम कभी छवि को संशोधित, संपादित या प्रदर्शित नहीं करते। मुद्रित प्रति गंगा को ही समर्पित।",
  },
  "about.pillar.authenticity.title": { en: "Authenticity", hi: "प्रामाणिकता" },
  "about.pillar.authenticity.body": {
    en: "Continuous video, geo-tag and timestamp on every seva. Performed by registered priests at the named ghat — never simulated.",
    hi: "प्रत्येक सेवा में अनवरत वीडियो, स्थान व समय अंकित। नामांकित घाट पर पंजीकृत पुरोहित द्वारा संपन्न — कभी अनुकृत नहीं।",
  },
  "about.pillar.privacy.title": { en: "Privacy", hi: "गोपनीयता" },
  "about.pillar.privacy.body": {
    en: "Encrypted upload. Access limited to the assigned priest. Files deleted from servers 30 days after delivery.",
    hi: "एन्क्रिप्टेड अपलोड। केवल नामांकित पुरोहित को पहुँच। 30 दिनों उपरांत फाइल्स सर्वर से हटा दी जाती हैं।",
  },

  // Contact
  "contact.title": { en: "Contact us", hi: "हमसे संपर्क करें" },
  "contact.sub": {
    en: "We answer faster on WhatsApp — usually within an hour during daylight in Bharat.",
    hi: "हम व्हाट्सएप पर शीघ्र उत्तर देते हैं — भारत में दिवस-समय अधिकतर एक घंटे में।",
  },
  "contact.whatsapp": { en: "Chat on WhatsApp", hi: "व्हाट्सएप पर बात करें" },
  "contact.email": { en: "Email", hi: "ईमेल" },
  "contact.phone": { en: "Phone", hi: "दूरभाष" },
  "contact.address": { en: "Address", hi: "पता" },
  "contact.form.name": { en: "Your name", hi: "आपका नाम" },
  "contact.form.email": { en: "Email or phone", hi: "ईमेल या दूरभाष" },
  "contact.form.message": { en: "Your message", hi: "आपका संदेश" },
  "contact.form.send": { en: "Send message", hi: "संदेश भेजें" },
  "contact.form.sent": { en: "Thank you — we'll respond soon.", hi: "धन्यवाद — हम शीघ्र उत्तर देंगे।" },

  // Language toggle
  "lang.en": { en: "English", hi: "English" },
  "lang.hi": { en: "हिंदी", hi: "हिंदी" },
} as const satisfies Dict;

export type DictKey = keyof typeof dict;
