interface ShowcaseImage extends CloudinaryImage {
  title: string;
  year: number;
  month: string;
}

export default defineEventHandler(_ => {
  const images: ShowcaseImage[] = [
    {
      src: '/show/show1.webp',
      title: 'Scheia',
      year: 2024,
      month: "march"
    },
    {
      src: '/show/show2.webp',
      title: 'Scheia - detaliu',
      year: 2024,
      month: "march"
    },
    {
      src: '/show/show3.webp',
      title: 'Scheia',
      year: 2024,
      month: "march"
    },
    {
      src: '/show/show4.webp',
      title: 'Sf. Ilie',
      year: 2024,
      month: "march"
    }
  ];

  return images;
});