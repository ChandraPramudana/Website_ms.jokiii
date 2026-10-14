# ms.jokiii — Landing Page

Landing page resmi **ms.jokiii**, jasa akademik (SPSS, Makalah, PPT, dan Paket Makalah + PPT). Dibangun dengan Next.js 15 (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

## ✨ Fitur

- Desain cute, modern, dan friendly dengan palet biru pastel + aksen kuning pastel
- Glassmorphism ringan, rounded corners besar, soft shadow
- Maskot burung hantu kustom (SVG) sebagai signature visual brand
- Navbar sticky dengan menu dan tombol WhatsApp
- Hero dengan floating icons (buku, laptop, grafik, topi wisuda) + parallax
- Section keunggulan dengan hover scale & glow
- Pricelist 4 layanan dengan badge diskon animasi untuk Jasa SPSS
- Timeline alur pemesanan dengan animasi scroll reveal
- Carousel testimoni otomatis (marquee) dengan efek glassmorphism
- FAQ accordion
- CTA dengan gradient animasi
- Loading screen lucu, back to top, dan efek sparkle mouse
- Semua tombol pemesanan langsung membuka WhatsApp dengan pesan otomatis
- SEO meta title & description sudah disetel
- Mobile-first & fully responsive

## 🧱 Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📁 Struktur Folder

```
ms-jokiii/
├── app/
│   ├── globals.css
│   ├── icon.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AlurPemesanan.tsx
│   ├── BackToTop.tsx
│   ├── CTA.tsx
│   ├── FAQ.tsx
│   ├── FloatingIcons.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Keunggulan.tsx
│   ├── LoadingScreen.tsx
│   ├── Mascot.tsx
│   ├── MouseSparkle.tsx
│   ├── Navbar.tsx
│   ├── Pricelist.tsx
│   ├── ScrollReveal.tsx
│   └── Testimoni.tsx
├── lib/
│   └── constants.ts
├── public/
│   └── robots.txt
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Menjalankan secara Lokal

Pastikan sudah terinstall **Node.js 18.18+** (disarankan Node 20 LTS).

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🏗️ Build untuk Produksi

```bash
npm run build
npm run start
```

## ☁️ Deploy ke Vercel

1. Push project ini ke repository GitHub/GitLab/Bitbucket.
2. Buka [vercel.com](https://vercel.com), klik **New Project**, lalu import repository tersebut.
3. Vercel akan otomatis mendeteksi framework Next.js — tidak perlu konfigurasi tambahan.
4. Klik **Deploy** dan tunggu prosesnya selesai.

Atau langsung lewat CLI:

```bash
npm i -g vercel
vercel
```

## ⚙️ Konfigurasi yang Bisa Diubah

Semua data konten (nomor WhatsApp, pesan otomatis, daftar harga, testimoni, FAQ, jam operasional) terletak terpusat di:

```
lib/constants.ts
```

Ubah nilai di file tersebut untuk memperbarui konten tanpa perlu menyentuh komponen UI.

## 📱 Kontak WhatsApp

Ada 2 admin WhatsApp (daftar di `WA_ADMINS` pada `lib/constants.ts`):

- Admin 1 (Utama): 0896-6605-3367
- Admin 2 (Ikna): 0895-0220-3203

Semua tombol "Pesan Sekarang" / "Konsultasi Sekarang" / "Chat WhatsApp" membuka pop-up pilihan admin, lalu mengarah ke `https://wa.me/<nomor>` dengan pesan otomatis. Footer menampilkan kedua nomor langsung.

---

Dibuat dengan 💙 untuk **ms.jokiii**.
