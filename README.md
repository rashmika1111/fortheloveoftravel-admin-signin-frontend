# LV of Travel - Authentication Frontend

A modern authentication frontend for the "For the Love of Travel" website built with Next.js 14 and Tailwind CSS.

## Features

- 🔐 User Registration and Login
- 🔑 Password Reset via Email
- 📱 Responsive Design
- ⚡ Modern UI with Tailwind CSS
- 🔒 Secure Authentication Flow
- 🎨 Clean and Intuitive Interface

## Pages

- `/` - Home page
- `/login` - User login
- `/signup` - User registration
- `/forgotpassword` - Password reset request
- `/resetpassword` - Password reset with token

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running on `http://localhost:5000`

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lv-of-travel-auth-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/auth
```

## API Integration

This frontend integrates with the backend API for authentication:

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset with token

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── forgotpassword/    # Forgot password page
│   ├── resetpassword/     # Reset password page
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   ├── LoginForm.jsx      # Login form component
│   ├── SignupForm.jsx     # Signup form component
│   ├── ForgotPasswordForm.jsx
│   └── ResetPasswordForm.jsx
├── public/                # Static assets
└── styles/                # Global styles
    └── globals.css        # Global CSS with Tailwind
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

