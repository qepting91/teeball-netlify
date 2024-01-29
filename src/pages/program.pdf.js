// src/pages/datasheet.pdf.js
export default function handler(req, res) {
    res.status(200).send({
      headers: {
        'Content-Type': 'application/pdf',
      },
      body: Buffer.from('/12-weekprogram.pdf', 'base64'),
    });
  }