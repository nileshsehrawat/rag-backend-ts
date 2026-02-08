import fs from "fs";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pdfParse = require("pdf-parse");

export async function loadPdf(filePath: string): Promise<string> {
  const buffer = fs.readFileSync(filePath);
  return loadPdfBuffer(buffer, filePath);
}

export async function loadPdfBuffer(
  buffer: Buffer,
  filePath?: string,
): Promise<string> {
  const data = await pdfParse(buffer);

  if (!data.text || data.text.trim().length === 0) {
    console.warn(`⚠️ No extractable text found in PDF: ${filePath}`);
  }

  return data.text;
}
