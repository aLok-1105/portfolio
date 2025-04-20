# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience with a clean and interactive design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference support
- **Interactive UI**: Smooth animations and transitions
- **Sections Include**:
  - Hero Section with introduction
  - Coding Profiles (CodeForces, CodeChef, LeetCode)
  - Education Background
  - Professional Experience
  - Project Showcase with filtering
  - Technical Skills
  - College Responsibilities
  - Achievements
  - Contact Form with EmailJS integration

## 🛠️ Built With

- **React** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Styling and responsive design
- **Shadcn/ui** - UI component library
- **EmailJS** - Contact form functionality
- **Lucide Icons** - Modern icon set
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
```

2. Navigate to the project directory
```bash
cd portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Create a `.env` file in the root directory and add your EmailJS credentials
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── index.html         # HTML template
```

## 🎨 Customization

1. **Personal Information**: Update your personal information in the respective component files
2. **Theme**: Modify the theme in `tailwind.config.js`
3. **Content**: Each section's content can be updated in its corresponding component file
4. **Styling**: Global styles can be adjusted in the Tailwind configuration

## 📱 Responsive Design

The portfolio is responsive across various screen sizes:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 🔧 Environment Variables

Required environment variables:
- `VITE_EMAILJS_SERVICE_ID`: EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public key

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Alok Ranjan - alokranjan11052003@gmail.com

Project Link: [https://github.com/aLok-1105/portfolio](https://github.com/aLok-1105/portfolio)

---

⭐️ If you find this portfolio template helpful, please consider giving it a star! 