export default defineEventHandler(async event => {
  interface FAQItem {
    question: string;
    answer: string;
    mode?: string;
  }

  // TODO: Error handling
  const data: FAQItem[] = await $fetch("https://profildecor.azurewebsites.net/api/FAQs/RetrieveFAQs");
  return data;
});