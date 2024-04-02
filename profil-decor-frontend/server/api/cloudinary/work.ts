export default defineEventHandler(_ => {
  const images: CloudinaryImage[] = [
    { src: 'work/work1.webp' },
    { src: 'work/work2.webp' },
    { src: 'work/work3.webp' }
  ];

  return images;
});