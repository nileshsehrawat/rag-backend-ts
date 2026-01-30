export interface LLMProvider {
  //Generate a response from  the model using a prompt
  generate(prompt: string): Promise<string>;
}
