import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import redirectRoutes from './routes/redirect.mjs'

const app = express()
const port = process.env.PORT || 3000
const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000'

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(cors())
app.use(express.json())

app.use(redirectRoutes)

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch(`${backendUrl}/api/users`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to backend' });
  }
});

app.listen(port, () => {
  console.log(`Frontend running on http://localhost:${port}`);
});
