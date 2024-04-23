export default defineEventHandler(async _ => {
  // TODO: Error handling
  const data: FAQItem[] = await $fetch("https://profildecor.azurewebsites.net/api/FAQs/RetrieveFAQs");
  return data;
});