const fs = require('fs');
const express = require('express');
const app = express();
const dotenv =  require('dotenv');
const cors = require('cors');

dotenv.config();

app.use(
  cors({
    origin: '*'
  })
)
app.use(express.json());

app.post('/request', async (req, res) => {
        const { prompt } = req.body;
        const apiKey = process.env.API_KEY
        const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text_prompts: [
                  {
                    text: prompt,
                  },
                ],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                steps: 30,
                samples: 1,
              }),
            }
          )   
          if (!response.ok) {
            res.send(`Non-200 response: ${await response.text()}`)
          }
          
          
          const responseJSON = (await response.json())
          
          responseJSON.artifacts.forEach((image) => {
           fs.writeFileSync( './output.png',Buffer.from(image.base64, 'base64'));
          })
          let outImage = fs.readFileSync( './output.png');
          res.end(outImage); 
          
})

app.listen(5500,() => console.log('listening on port 5500'));