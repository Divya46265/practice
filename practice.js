const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/chatbot', (req, res) => {
  console.log('Received request on /chatbot endpoint');
  console.log('Request body:', req.body);

  const userMessage = req.body.message;
  const botReply = `You said: ${userMessage}`; // Simplified reply for testing
  res.json({ reply: botReply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
