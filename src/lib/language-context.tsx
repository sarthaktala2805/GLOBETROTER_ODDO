"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type LanguageCode =
  | "en"
  | "hi" // Hindi
  | "gu" // Gujarati
  | "mr" // Marathi
  | "ta" // Tamil
  | "te" // Telugu
  | "kn" // Kannada
  | "ml" // Malayalam
  | "bn" // Bengali
  | "pa" // Punjabi
  | "or" // Odia
  | "as"; // Assamese

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const languages: LanguageInfo[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
];

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    brandSubtitle: "Personalized India Travel Planner",
    explore: "Explore",
    stays: "Stays",
    activities: "Activities",
    myTrips: "My Trips",
    packing: "Packing",
    calculator: "Calculator",
    compare: "Compare",
    split: "Split & Pay",
    safety: "Safety (112)",
    guide: "Guide",
    aiPlanner: "AI Planner",
    dashboard: "Dashboard",
    planTrip: "Plan a Trip",
    searchPlaceholder: "Search destinations, stays, experiences...",
    heroTitle1: "Make room for",
    heroTitle2: "the unexpected.",
    heroSubtitle: "Plan multi-city journeys across 26+ Indian destinations. Compare transport options, build day-by-day itineraries, and keep your budget in clear sight.",
    viewAllCities: "View All Destinations",
    searchBtn: "Search Trips",
    offlineNotice: "Offline Mode Active — Accessing cached trips and vouchers.",
  },
  hi: {
    brandSubtitle: "व्यक्तिगत भारत यात्रा योजनाकार",
    explore: "खोजें (एक्सप्लोर)",
    stays: "हवेली व होटल",
    activities: "अनुभव व गतिविधियां",
    myTrips: "मेरी यात्राएं",
    packing: "पैकिंग सूची",
    calculator: "मार्ग व टोल कैलकुलेटर",
    compare: "तुलना करें",
    split: "खर्च बांटें (UPI)",
    safety: "सुरक्षा सहायता (112)",
    guide: "सांस्कृतिक मार्गदर्शिका",
    aiPlanner: "स्मार्ट AI प्लानर",
    dashboard: "डैशबोर्ड",
    planTrip: "यात्रा शुरू करें",
    searchPlaceholder: "स्थान, होटल या अनुभव खोजें...",
    heroTitle1: "अविस्मरणीय पलों के लिए",
    heroTitle2: "स्थान बनाएं।",
    heroSubtitle: "भारत के 26+ प्रसिद्ध स्थलों पर बहु-शहर यात्रा की योजना बनाएं। परिवहन की तुलना करें, दैनिक कार्यक्रम बनाएं और बजट ट्रैक करें।",
    viewAllCities: "सभी पर्यटन स्थल देखें",
    searchBtn: "यात्रा खोजें",
    offlineNotice: "ऑफ़लाइन मोड सक्रिय — सहेजी गई यात्राएं और वाउचर उपलब्ध हैं।",
  },
  gu: {
    brandSubtitle: "વ્યક્તિગત ભારત યાત્રા આયોજક",
    explore: "શોધો (એક્સપ્લોર)",
    stays: "રોકાણ અને હોટેલ્સ",
    activities: "પ્રવૃત્તિઓ અને અનુભવો",
    myTrips: "મારી યાત્રાઓ",
    packing: "પેકિંગ લિસ્ટ",
    calculator: "માર્ગ અને ટોલ ગણતરી",
    compare: "સરખામણી કરો",
    split: "ખર્ચ વહેંચો (UPI)",
    safety: "સુરક્ષા સહાય (112)",
    guide: "સાંસ્કૃતિક માર્ગદર્શિકા",
    aiPlanner: "સ્માર્ટ AI પ્લાનર",
    dashboard: "ડેશબોર્ડ",
    planTrip: "નવી યાત્રા બનાવો",
    searchPlaceholder: "શહેરો, હોટેલો અથવા પ્રવૃત્તિઓ શોધો...",
    heroTitle1: "અણધાર્યા સુંદર પળો માટે",
    heroTitle2: "જગ્યા બનાવો.",
    heroSubtitle: "ભારતના 26+ આકર્ષક સ્થળો પર પ્રવાસનું સચોટ આયોજન કરો. પરિવહનની સરખામણી કરો અને બજેટનું સંચાલન કરો.",
    viewAllCities: "બધા શહેરો જુઓ",
    searchBtn: "પ્રવાસ શોધો",
    offlineNotice: "ઑફલાઇન મોડ સક્રિય — સેવ કરેલી યાત્રાઓ અને વાઉચર્સ ઉપલબ્ધ છે.",
  },
  mr: {
    brandSubtitle: "वैयक्तिकृत भारत प्रवास नियोजक",
    explore: "शोधा",
    stays: "हवेली व मुक्काम",
    activities: "अनुभव व उपक्रम",
    myTrips: "माझे प्रवास",
    packing: "पॅकिंग यादी",
    calculator: "मार्ग व टोल गणक",
    compare: "तुलना करा",
    split: "खर्च वाटा (UPI)",
    safety: "सुरक्षा हेल्पलाइन (112)",
    guide: "संस्कृती मार्गदर्शक",
    aiPlanner: "स्मार्ट AI प्लॅनर",
    dashboard: "डॅशबोर्ड",
    planTrip: "नवीन सहल",
    searchPlaceholder: "शहरे, हॉटेल्स किंवा अनुभव शोधा...",
    heroTitle1: "अनपेक्षित सुंदर क्षणांसाठी",
    heroTitle2: "जागा तयार करा.",
    heroSubtitle: "भारतातील 26+ प्रेक्षणीय शहरांसाठी सहलीचे नियोजन करा. प्रवासाची साधने आणि खर्चाचे अचूक व्यवस्थापन करा.",
    viewAllCities: "सर्व शहरे पहा",
    searchBtn: "सहल शोधा",
    offlineNotice: "ऑफलाइन मोड सक्रिय — सेव्ह केलेल्या सहली उपलब्ध आहेत.",
  },
  ta: {
    brandSubtitle: "தனிப்பயனாக்கப்பட்ட பாரத பயணத் திட்டம்",
    explore: "ஆராயுங்கள்",
    stays: "தங்குமிடங்கள்",
    activities: "அனுபவங்கள்",
    myTrips: "எனது பயணங்கள்",
    packing: "பொதி பட்டியல்",
    calculator: "சுங்கச்சாவடி கணக்கீடு",
    compare: "ஒப்பிடுங்கள்",
    split: "செலவு பகிர்வு (UPI)",
    safety: "பாதுகாப்பு (112)",
    guide: "கலாச்சார வழிகாட்டி",
    aiPlanner: "AI திட்டமிடுபவர்",
    dashboard: "முகப்பு பலகை",
    planTrip: "பயணம் தொடங்கு",
    searchPlaceholder: "இடங்கள், தங்குமிடங்களை தேடுங்கள்...",
    heroTitle1: "மறக்க முடியாத தருணங்களுக்கு",
    heroTitle2: "இடமளியுங்கள்.",
    heroSubtitle: "இந்தியாவின் 26+ முக்கிய இடங்களுக்கான பல நகரப் பயணங்களைத் திட்டமிடுங்கள். வரவு செலவை எளிதாகக் கண்காணிக்கவும்.",
    viewAllCities: "அனைத்து நகரங்களையும் காண்க",
    searchBtn: "பயணங்களைத் தேடு",
    offlineNotice: "ஆஃப்லைன் பயன்முறை — சேமிக்கப்பட்ட பயணங்கள் கிடைக்கின்றன.",
  },
  te: {
    brandSubtitle: "వ్యక్తిగతీకరించిన భారత యాత్ర ప్లానర్",
    explore: "అన్వేషించండి",
    stays: "వసతి గృహాలు",
    activities: "అనుభవాలు",
    myTrips: "నా యాత్రలు",
    packing: "ప్యాకింగ్ జాబితా",
    calculator: "టోల్ కాలిక్యులేటర్",
    compare: "పోల్చండి",
    split: "ఖర్చులు పంచండి (UPI)",
    safety: "భద్రత (112)",
    guide: "సంస్కృతి గైడ్",
    aiPlanner: "AI ప్లానర్",
    dashboard: "డ్యాష్‌బోర్డ్",
    planTrip: "యాత్ర ప్లాన్ చేయండి",
    searchPlaceholder: "నగరాలు, హోటళ్లు శోధించండి...",
    heroTitle1: "అద్భుతమైన క్షణాల కోసం",
    heroTitle2: "సిద్ధం అవ్వండి.",
    heroSubtitle: "భారతదేశంలోని 26+ ప్రసిద్ధ ప్రాంతాలకు సులభంగా ప్రయాణ ప్రణాళిక వేసుకోండి.",
    viewAllCities: "అన్ని నగరాలను చూడండి",
    searchBtn: "శోధించండి",
    offlineNotice: "ఆఫ్‌లైన్ మోడ్ — మీ యాత్ర వివరాలు సిద్ధంగా ఉన్నాయి.",
  },
  kn: {
    brandSubtitle: "ವೈಯಕ್ತಿಕ ಭಾರತ ಪ್ರವಾಸ ಯೋಜಕ",
    explore: "ಅನ್ವೇಷಿಸಿ",
    stays: "ತಂಗುದಾಣಗಳು",
    activities: "ಚಟುವಟಿಕೆಗಳು",
    myTrips: "ನನ್ನ ಪ್ರವಾಸಗಳು",
    packing: "ಪ್ಯಾಕಿಂಗ್ ಪಟ್ಟಿ",
    calculator: "ಟೋಲ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    compare: "ಹೋಲಿಕೆ ಮಾಡಿ",
    split: "ವೆಚ್ಚ ಹಂಚಿಕೊಳ್ಳಿ (UPI)",
    safety: "ಸುರಕ್ಷತೆ (112)",
    guide: "ಸಂಸ್ಕೃತಿ ಮಾರ್ಗದರ್ಶಿ",
    aiPlanner: "AI ಪ್ಲಾನರ್",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    planTrip: "ಪ್ರವಾಸ ಆರಂಭಿಸಿ",
    searchPlaceholder: "ಸ್ಥಳಗಳು, ಹೋಟೆಲ್‌ಗಳನ್ನು ಹುಡುಕಿ...",
    heroTitle1: "ಅದ್ಭುತ ಅನುಭವಗಳಿಗಾಗಿ",
    heroTitle2: "ಸಿದ್ಧರಾಗಿ.",
    heroSubtitle: "ಭಾರತದ 26+ ಪ್ರಮುಖ ತಾಣಗಳಿಗೆ ಸುಲಭವಾಗಿ ಪ್ರಯಾಣ ಯೋಜಿಸಿ.",
    viewAllCities: "ಎಲ್ಲಾ ನಗರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    searchBtn: "ಹುಡುಕಿ",
    offlineNotice: "ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ.",
  },
  ml: {
    brandSubtitle: "വ്യക്തിഗത ഭാരത യാത്രാ പ്ലാനർ",
    explore: "കണ്ടെത്തുക",
    stays: "താമസസ്ഥലങ്ങൾ",
    activities: "അനുഭവങ്ങൾ",
    myTrips: "എന്റെ യാത്രകൾ",
    packing: "പാക്കിംഗ് ലിസ്റ്റ്",
    calculator: "ടോൾ കാൽക്കുലേറ്റർ",
    compare: "താരതമ്യം ചെയ്യുക",
    split: "ചെലവ് പങ്കിടുക (UPI)",
    safety: "സുരക്ഷ (112)",
    guide: "മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
    aiPlanner: "AI പ്ലാനർ",
    dashboard: "ഡാഷ്‌ബോർഡ്",
    planTrip: "യാത്ര പ്ലാൻ ചെയ്യുക",
    searchPlaceholder: "സ്ഥലങ്ങൾ തിരയുക...",
    heroTitle1: "വിസ്മയകരമായ നിമിഷങ്ങൾക്കായി",
    heroTitle2: "ഇടം കണ്ടെത്തൂ.",
    heroSubtitle: "ഭാരതത്തിലെ 26+ വിനോദസഞ്ചാര കേന്ദ്രങ്ങളിലേക്ക് എളുപ്പത്തിൽ യാത്ര പ്ലാൻ ചെയ്യാം.",
    viewAllCities: "എല്ലാ സ്ഥലങ്ങളും കാണുക",
    searchBtn: "തിരയുക",
    offlineNotice: "ഓഫ്‌ലൈൻ മോഡ് സജീവമാണ്.",
  },
  bn: {
    brandSubtitle: "ব্যক্তিগত ভারত ভ্রমণ পরিকল্পনাকারী",
    explore: "অন্বেষণ করুন",
    stays: "হোটেল ও রিসোর্ট",
    activities: "কার্যক্রম ও অভিজ্ঞতা",
    myTrips: "আমার ভ্রমণ",
    packing: "প্যাকিং তালিকা",
    calculator: "টোল ও জ্বালানি হিসাব",
    compare: "তুলনা করুন",
    split: "খরচ ভাগ করুন (UPI)",
    safety: "নিরাপত্তা হেল্পলাইন (112)",
    guide: "সাংস্কৃতিক নির্দেশিকা",
    aiPlanner: "স্মার্ট AI প্ল্যানার",
    dashboard: "ড্যাশবোর্ড",
    planTrip: "ভ্রমণ শুরু করুন",
    searchPlaceholder: "শহর, হোটেল বা অভিজ্ঞতা খুঁজুন...",
    heroTitle1: "অবিস্মরণীয় স্মৃতির জন্য",
    heroTitle2: "স্থান তৈরি করুন।",
    heroSubtitle: "ভারতের ২৬+ প্রধান পর্যটন কেন্দ্রে ভ্রমণের সঠিক পরিকল্পনা করুন ও বাজেট ট্র্যাক করুন।",
    viewAllCities: "সমস্ত শহর দেখুন",
    searchBtn: "ভ্রমণ খুঁজুন",
    offlineNotice: "অফলাইন মোড সক্রিয় — সংরক্ষিত ভ্রমণ উপলব্ধ।",
  },
  pa: {
    brandSubtitle: "ਨਿੱਜੀ ਭਾਰਤ ਯਾਤਰਾ ਯੋਜਨਾਕਾਰ",
    explore: "ਖੋਜੋ",
    stays: "ਰਿਹਾਇਸ਼ ਤੇ ਹੋਟਲ",
    activities: "ਤਜਰਬੇ ਤੇ ਸਰਗਰਮੀਆਂ",
    myTrips: "ਮੇਰੀਆਂ ਯਾਤਰਾਵਾਂ",
    packing: "ਪੈਕਿੰਗ ਸੂਚੀ",
    calculator: "ਟੋਲ ਕੈਲਕੁਲੇਟਰ",
    compare: "ਤੁਲਨਾ ਕਰੋ",
    split: "ਖ਼ਰਚਾ ਵੰਡੋ (UPI)",
    safety: "ਸੁਰੱਖਿਆ (112)",
    guide: "ਸੱਭਿਆਚਾਰਕ ਗਾਈਡ",
    aiPlanner: "AI ਪਲਾਨਰ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    planTrip: "ਨਵੀਂ ਯਾਤਰਾ",
    searchPlaceholder: "ਸ਼ਹਿਰ ਜਾਂ ਹੋਟਲ ਲੱਭੋ...",
    heroTitle1: "ਅਣਭੁੱਲ ਪਲਾਂ ਲਈ",
    heroTitle2: "ਜਗ੍ਹਾ ਬਣਾਓ।",
    heroSubtitle: "ਭਾਰਤ ਦੇ 26+ ਮਸ਼ਹੂਰ ਸਥਾਨਾਂ ਲਈ ਸ਼ਾਨਦਾਰ ਯਾਤਰਾ ਦੀ ਯੋਜਨਾ ਬਣਾਓ।",
    viewAllCities: "ਸਾਰੇ ਸ਼ਹਿਰ ਦੇਖੋ",
    searchBtn: "ਯਾਤਰਾ ਖੋਜੋ",
    offlineNotice: "ਆਫ਼ਲਾਈਨ ਮੋਡ ਸਰਗਰਮ ਹੈ।",
  },
  or: {
    brandSubtitle: "ବ୍ୟକ୍ତିଗତ ଭାରତ ଯାତ୍ରା ଯୋଜନାକାରୀ",
    explore: "ଅନ୍ୱେଷଣ କରନ୍ତୁ",
    stays: "ହୋଟେଲ ଓ ରହଣି",
    activities: "ଅନୁଭୂତି",
    myTrips: "ମୋର ଯାତ୍ରା",
    packing: "ପ୍ୟାକିଂ ତାଲିକା",
    calculator: "ଟୋଲ୍ କାଲକୁଲେଟର",
    compare: "ତୁଳନା କରନ୍ତୁ",
    split: "ଖର୍ଚ୍ଚ ବାଣ୍ଟନ୍ତୁ (UPI)",
    safety: "ସୁରକ୍ଷା (112)",
    guide: "ସଂସ୍କୃତି ଗାଇଡ୍",
    aiPlanner: "AI ପ୍ଲାନର୍",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    planTrip: "ଯାତ୍ରା ଯୋଜନା",
    searchPlaceholder: "ସ୍ଥାନ କିମ୍ବା ହୋଟେଲ ଖୋଜନ୍ତୁ...",
    heroTitle1: "ଅଭୁଲା ମୁହୂର୍ତ୍ତ ପାଇଁ",
    heroTitle2: "ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ।",
    heroSubtitle: "ଭାରତର 26+ ପ୍ରମୁଖ ସହର ପାଇଁ ସହଜରେ ଯାତ୍ରା ଯୋଜନା ପ୍ରସ୍ତୁତ କରନ୍ତୁ।",
    viewAllCities: "ସମସ୍ତ ସହର ଦେଖନ୍ତୁ",
    searchBtn: "ଖୋଜନ୍ତୁ",
    offlineNotice: "ଅଫଲାଇନ୍ ମୋଡ୍ ସକ୍ରିୟ ଅଛି।",
  },
  as: {
    brandSubtitle: "ব্যক্তিগত ভাৰত ভ্ৰমণ পৰিকল্পনাকাৰী",
    explore: "অন্বেষণ কৰক",
    stays: "হোটেল আৰু আতিথ্য",
    activities: "অভিজ্ঞতা",
    myTrips: "মোৰ যাত্ৰাসমূহ",
    packing: "প্যাকিং তালিকা",
    calculator: "টোল কেলকুলেটৰ",
    compare: "তুলনা কৰক",
    split: "খৰচ ভাগ কৰক (UPI)",
    safety: "নিৰাপত্তা (112)",
    guide: "সাংস্কৃতিক গাইড",
    aiPlanner: "AI প্লেনাৰ",
    dashboard: "ডেশ্ববৰ্ড",
    planTrip: "যাত্ৰা আৰম্ভ কৰক",
    searchPlaceholder: "স্থান বা হোটেল সন্ধান কৰক...",
    heroTitle1: "অনুপম মুহূৰ্তৰ বাবে",
    heroTitle2: "স্থান দিয়ক।",
    heroSubtitle: "ভাৰতৰ ২৬+ মুখ্য স্থানৰ বাবে সহজতে ভ্ৰমণৰ পৰিকল্পনা কৰক।",
    viewAllCities: "সকলো ঠাই চাওক",
    searchBtn: "সন্ধান কৰক",
    offlineNotice: "অফলাইন ম'ড সক্ৰিয় হৈ আছে।",
  },
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
});

const STORAGE_KEY = "bharatyatra_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode;
      if (saved && translations[saved]) {
        setLanguageState(saved);
      }
    } catch {}
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {}
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const enDict = translations.en;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
