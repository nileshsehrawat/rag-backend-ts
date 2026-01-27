import path from "path";
import { loadPdf } from "./pdf.loader";

async function test() {
  const pdfPath = path.join(process.cwd(), "data/pdfs/sample.pdf");
  const text = await loadPdf(pdfPath);

  console.log("Extracted Text:", text);
}
test();
