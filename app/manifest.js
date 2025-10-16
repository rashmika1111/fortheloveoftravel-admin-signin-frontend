export default function manifest() {
  return {
    name: 'For the Love of Travel',
    short_name: 'Travel Love',
    description: 'Discover amazing destinations, plan your perfect vacation, and explore the world with our travel guides and tours.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D2AD3F',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

