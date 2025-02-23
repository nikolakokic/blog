export function calculateReadingTime(content: string): number {
    const WORDS_PER_MINUTE = 200;
    
    const cleanText = content
      .trim()
      .replace(/\s+/g, ' ');
  
    const wordCount = cleanText.split(' ').length;
    
    const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);
     
    return Math.max(1, readingTime);
  }