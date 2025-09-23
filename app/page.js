import LoginForm from "../components/LoginForm";

export const metadata = {
  title: "Home",
  description: "Welcome to For the Love of Travel - your ultimate destination for discovering amazing places, planning perfect vacations, and exploring the world through our comprehensive travel guides and curated experiences.",
  keywords: [
    "home",
    "travel homepage",
    "travel inspiration",
    "vacation planning",
    "travel destinations",
    "travel blog",
    "adventure travel",
    "cultural travel",
    "travel tips",
    "world travel"
  ],
  openGraph: {
    title: "Home | For the Love of Travel",
    description: "Welcome to For the Love of Travel - your ultimate destination for discovering amazing places, planning perfect vacations, and exploring the world.",
    url: "https://fortheloveoftravel.nz",
    images: [
      {
        url: "/header.jpg",
        width: 1200,
        height: 630,
        alt: "For the Love of Travel Homepage - Discover Amazing Destinations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | For the Love of Travel",
    description: "Welcome to For the Love of Travel - your ultimate destination for discovering amazing places, planning perfect vacations, and exploring the world.",
    images: ["/header.jpg"],
  },
  alternates: {
    canonical: "https://fortheloveoftravel.nz",
  },
};

export default function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
