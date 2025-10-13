# 🎬 Portfolio - Adham (Director of Photography)

بورتفوليو تفاعلي لمدير التصوير أدهم مع تأثيرات 3D وتصميم سينمائي احترافي.

## 📁 هيكل المشروع

```
portfolio-adham/
├── public/
│   └── assets/
│       ├── frames/
│       │   ├── bg.png          # الخلفية الرئيسية
│       │   ├── 1.png           # برواز About Me (الوسط)
│       │   ├── 2.png           # برواز Tajally
│       │   └── 3.png           # برواز Mo7nkeen
│       └── sponsors/
│           ├── sponsor1.png    # لوجو راعي 1
│           ├── sponsor2.png    # لوجو راعي 2
│           └── sponsor3.png    # لوجو راعي 3
├── src/
│   ├── components/
│   │   ├── Portfolio.jsx       # الصفحة الرئيسية
│   │   ├── Frame.jsx           # مكون البرواز
│   │   ├── StudioLight.jsx     # المصباح مع الرعاة
│   │   └── AboutMe.jsx         # صفحة About Me
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## ✨ المميزات

- ✅ **تصميم سينمائي احترافي** بألوان الأزرق الداكن والذهبي
- ✅ **براويز تفاعلية** قابلة للنقر مع تأثيرات 3D
- ✅ **صفحة About Me** منبثقة بتصميم جذاب
- ✅ **مصباح استوديو متحرك** يعرض لوجوهات الرعاة بالتناوب
- ✅ **تأثيرات حركة** تتبع حركة الماوس
- ✅ **تصميم متجاوب** يعمل على جميع الشاشات
- ✅ **دعم اللغة العربية** بخط Cairo الاحترافي

## 🎯 وظائف البراويز

1. **البرواز الأوسط (1.png)**: يفتح صفحة About Me عن مدير التصوير
2. **البرواز الأيسر (2.png)**: يفتح رابط Tajally Media Production
3. **البرواز الأيمن (3.png)**: يفتح رابط Mo7nkeen

## 🚀 التشغيل

### 1. تثبيت المكتبات
```bash
cd /Users/marooo/adham/portfolio-adham
npm install
```

### 2. تشغيل المشروع
```bash
npm run dev
```

سيعمل الموقع على: `http://localhost:5173`

### 3. بناء النسخة النهائية
```bash
npm run build
```

## 📸 الملفات المطلوبة

تأكد من وضع الملفات التالية في المسارات الصحيحة:

### الخلفية والبراويز
- ✅ `/public/assets/frames/bg.png` - الخلفية
- ✅ `/public/assets/frames/1.png` - برواز About Me
- ✅ `/public/assets/frames/2.png` - برواز Tajally
- ✅ `/public/assets/frames/3.png` - برواز Mo7nkeen

### لوجوهات الرعاة (اختياري)
- `/public/assets/sponsors/sponsor1.png`
- `/public/assets/sponsors/sponsor2.png`
- `/public/assets/sponsors/sponsor3.png`

> **ملاحظة**: إذا لم تتوفر صور الرعاة، سيتم عرض أسماءهم كنص.

## 🎨 التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **Vite** - أداة البناء السريعة
- **Framer Motion** - تأثيرات الحركة والانتقالات
- **TailwindCSS** - تنسيق الواجهة
- **Lucide React** - الأيقونات

## 🔗 الروابط

- **Tajally Media**: https://www.facebook.com/tajallymediaproduction/
- **Mo7nkeen**: https://www.facebook.com/Mo7nkeen/

## 📝 ملاحظات

- المشروع يدعم RTL (من اليمين لليسار) للغة العربية
- جميع التأثيرات محسّنة للأداء
- التصميم responsive ويعمل على الموبايل والتابلت

---

**صُنع بـ ❤️ لمدير التصوير أدهم**
