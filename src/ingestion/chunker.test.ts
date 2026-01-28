import { chunkText } from "./chunker";

const text =
  "This is a sample text that needs to be chunked into smaller pieces for processing. The chunking process helps in managing large texts by breaking them down into manageable segments. Each chunk can then be processed individually, making it easier to handle tasks such as analysis, storage, or transmission.".repeat(
    30,
  );

const chunks = chunkText(text, 500, 50);

console.log("Chunks count:", chunks.length);
console.log("First chunk:", chunks[0]);
console.log("Second chunk starts with overlap:", chunks[1].slice(0, 20));