# CodexUg — Empowering Businesses Through Technology

> Uganda's premier IT products and services company, delivering cutting-edge technology solutions to businesses across East Africa.

![CodexUg Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)

## 🌐 Overview

**CodexUg** is a full-service IT company founded by **Mask o Kenneth** — a Computer Scientist with multiple certifications in Network Security, Cloud Engineering (AWS, Azure, GCP), and Information Technology.

We offer comprehensive IT solutions including:
- 🔒 Cybersecurity & Network Security
- ☁️ Cloud Infrastructure & Migration
- 💻 Web & Mobile App Development
- 🖥️ Hardware Supply & Installation
- 📊 Data Analytics & Business Intelligence
- 🛠️ Managed IT Support & Helpdesk
- 👁️ Biometric & Access Control
- 📷 CCTV Installation & Management
- 🎓 IT Training & Certifications
- 🖥️ Custom PC Building
- 🏗️ System Design & Implementation
- 📋 Digital & Content Management
- 🔧 Custom App Development

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Inter (Google Fonts) |
| **Images** | Unsplash (4K) |
| **Backend** | Node.js, Express.js, TypeScript |
| **Package Manager** | npm |

---

## 📁 Project Structure

```
codexug/
├── frontend/                    # Next.js 14 application
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── about/page.tsx   # About page
│   │   │   ├── services/page.tsx
│   │   │   ├── products/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── faq/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── globals.css
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── ServiceCard.tsx  # Foldable service cards
│   │   │   ├── ProductCard.tsx  # Hover effect cards
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── StatsCounter.tsx # Animated counters
│   │   └── lib/
│   │       └── data.ts          # Company data & constants
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── next.config.js
├── backend/                     # Express.js API
│   ├── src/
│   │   ├── index.ts             # Express server entry point
│   │   ├── routes/
│   │   │   └── contact.ts       # Contact form route
│   │   └── controllers/
│   │       └── contactController.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

## ✅ Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Git**

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/kiddo8266-jpg/codexug.git
cd codexug
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup (in a separate terminal)

```bash
cd backend
npm install
npm run dev
```

The API will run on [http://localhost:5000](http://localhost:5000).

---

## 🔧 Available Scripts

### Frontend (`/frontend`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Backend (`/backend`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload (ts-node-dev) |
| `npm run build` | Compile TypeScript to `/dist` |
| `npm run start` | Start compiled production server |

---

## 🌍 Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (`backend/.env`)

```env
PORT=5000
# Optional: Add email configuration for contact form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info.codex2024@gmail.com
SMTP_PASS=your_app_password
```

---

## 🚢 Deployment

### Frontend (Vercel — Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Set the **Root Directory** to `frontend`
4. Set environment variable: `NEXT_PUBLIC_API_URL=https://your-backend-url.com`
5. Deploy!

### Backend (Railway / Render / Heroku)

1. Go to [railway.app](https://railway.app) or [render.com](https://render.com)
2. Create a new service from your GitHub repository
3. Set the **Root Directory** to `backend`
4. Set environment variables (PORT, SMTP config)
5. The build command: `npm run build`
6. The start command: `npm start`

---

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.ts` to change the brand colors:
```ts
colors: {
  navy: { DEFAULT: "#0A1628" },  // Primary dark background
  cyan: { DEFAULT: "#06B6D4" },  // Accent color
}
```

### Content & Data
All company data, services, products, and testimonials are in:
```
frontend/src/lib/data.ts
```

### Images
Images use Unsplash URLs. Update URLs in `data.ts` or directly in component files.

### Logo
The SVG logo is in `frontend/src/components/Logo.tsx`. Customize colors, shapes, and text directly in the SVG markup.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary software owned by CodexUg. All rights reserved.

© 2024 CodexUg. Unauthorized use, reproduction, or distribution is prohibited.

---

## 📞 Contact

**CodexUg**
- 📧 Email: [info.codex2024@gmail.com](mailto:info.codex2024@gmail.com)
- 🔗 LinkedIn: [Mask o Kenneth](https://linkedin.com/in/okeng-kenneth/)
- 🌐 Website: [codexug.com](https://codexug.com)

---

*Built with ❤️ by the CodexUg team*