export function buildPrompt(
  contextChunks: string[],
  questions: string,
): string {
  const context = contextChunks.join("\n\n");
  return `
    You are an assistant answering questions ONLY the context below
    Context:
    ${context}
    Question:
    ${questions}
    Answer:`.trim();
}
