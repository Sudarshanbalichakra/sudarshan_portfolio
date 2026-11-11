# Sudarshan Balichakra – Developer Portfolio

A responsive developer portfolio website built with **React**, **Vite**, and modern CSS.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
# or on Windows PowerShell:
npm.cmd run dev
```

### 2. Build for Production
```bash
npm.cmd run build
```

### 3. Preview Production Bundle
```bash
npm.cmd run preview
```

---

## 📸 How to Replace SufiSys Dummy Mockups with Your Real Photos

The portfolio currently includes vector mockups for SufiSys across three views:
1. **Multi-Tenant Web Dashboard** (`src/assets/projects/sufisys-dashboard.svg`)
2. **Pigmy Savings Ledger** (`src/assets/projects/sufisys-pigmy.svg`)
3. **Expo Android Collector App** (`src/assets/projects/sufisys-mobile.svg`)

### Steps to swap with your original photos:
1. Save your real application screenshots (PNG or JPG or WebP) inside:
   ```
   src/assets/projects/
   ```
   For example:
   - `src/assets/projects/my-sufisys-dashboard.png`
   - `src/assets/projects/my-sufisys-pigmy.png`
   - `src/assets/projects/my-sufisys-mobile.png`

2. Open [`src/data/portfolioData.js`](file:///e:/sudarshan_portfolio/src/data/portfolioData.js) and update the import statements at the top:
   ```javascript
   import sufisysDashboardImg from '../assets/projects/my-sufisys-dashboard.png'
   import sufisysPigmyImg from '../assets/projects/my-sufisys-pigmy.png'
   import sufisysMobileImg from '../assets/projects/my-sufisys-mobile.png'
   ```

3. Save the file! Vite will hot-reload with your real application photos.

---

## 🛠️ Portfolio Features Included

- **Header / Navigation:** Sticky glassmorphism header, active availability indicator, one-click resume view/print, mobile menu drawer.
- **Hero Section:** Introduction, core stack tags, interactive terminal profile widget, direct social links, one-click copyable email and phone.
- **SufiSys Spotlight:** Dedicated showcase for your flagship project featuring:
  - Multi-tenant architecture & data isolation
  - Customer & loan lifecycle engine
  - Daily Pigmy savings ledger & 30-day deposit attendance heat-grid
  - Dedicated Expo / React Native Android collection manager app
  - NestJS & MongoDB Atlas REST API backend
  - Cloud deployment on Vercel, Render, and Cloudinary
  - Interactive fullscreen modal zoom on previews
- **Technical Skills Matrix:** Interactive category filtering (Frontend, Backend, Databases, Cloud & DevOps, Mobile & Media, Practices) with live skill search.
- **Professional Experience Timeline:** Full breakdown of your roles at **CraftySogo** (Bengaluru) and **Digibizminds** (Kalaburagi) with achievements, tech stacks, and metrics.
- **Education & Languages:** Degree from Poojya Doddappa Appa College of Engineering (B.E. in CSE, 7.4/10 CGPA) and trilingual proficiencies (English, Kannada, Hindi).
- **Contact & Footer:** Direct copy cards for Email & Phone, pre-configured email message dispatch, LinkedIn and GitHub shortcuts, and smooth back-to-top button.
