import { Hono } from "hono";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const pdfRoute = new Hono();

pdfRoute.post("/generate", async (c) => {
  try {
    const { formData } = await c.req.json<{ formData: { name: string; email: string } }>();

    // 1️⃣ Create PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 750]);
    const form = pdfDoc.getForm();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // 2️⃣ Labels
    page.drawText("Fillable Form Example", {
      x: 180,
      y: 700,
      size: 18,
      font,
      color: rgb(0.53, 0.45, 0.26),
    });

    page.drawText("Name:", { x: 50, y: 630, size: 12, font });
    page.drawText("Email:", { x: 50, y: 580, size: 12, font });

    // 3️⃣ Fillable fields
    const nameField = form.createTextField("nameField");
    nameField.setText(formData.name || "");
    nameField.addToPage(page, { x: 120, y: 620, width: 300, height: 20 });

    const emailField = form.createTextField("emailField");
    emailField.setText(formData.email || "");
    emailField.addToPage(page, { x: 120, y: 570, width: 300, height: 20 });

    nameField.enableRichFormatting();
    emailField.enableRichFormatting();

    // 4️⃣ Save PDF
    const pdfBytes = await pdfDoc.save();

    // ✅ FIX: Wrap in Uint8Array (valid for Edge & Node)
    const uint8Array = new Uint8Array(pdfBytes);

    return new Response(uint8Array, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="fillable-form.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return c.json({ error: "Failed to generate PDF" }, 500);
  }
});

export default pdfRoute;
