export function chunkText(
  text: string,
  chunkSize: number,
  overlap: number,
): string[] {
  const chunks: string[] = [];
  let start = 0;
  const textLength = text.length;

  while (start < textLength) {
    const end = start + chunkSize;
    const chunk = text.slice(start, end);

    chunks.push(chunk);
    start += chunkSize - overlap;
  }

  return chunks;
}
