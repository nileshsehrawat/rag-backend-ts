export interface Retriever {
  retrieve(query: string, topK?: number): Promise<string[]>;
}
