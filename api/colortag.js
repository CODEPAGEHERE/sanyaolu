export default function handler(req, res) {
    const { text, color = "black" } = req.query;
  
    // Ensure text is provided
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
  
    // Validate the color parameter (basic CSS color validation)
    const validColors = ["black", "red", "blue", "green", "yellow", "purple", "pink"];
    const validColor = validColors.includes(color.toLowerCase()) ? color : "black";
  
    // Return the HTML and preview response
    res.status(200).json({
      html: `<p style="color: ${validColor};">${text}</p>`,
      preview: `Your text: "${text}" in color: "${validColor}"`,
    });
  }
  