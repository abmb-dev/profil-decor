export default defineEventHandler(_ => {
  const images: CloudinaryImage[] = [
    { src: '/detail/detail1.webp' },
    { src: '/detail/detail2.webp' },
    { src: '/detail/detail3.webp' },
  ];

  return images;
});