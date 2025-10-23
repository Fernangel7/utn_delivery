import 'dotenv/config'
import express from 'express'

import redirectRoutes from './routes/redirect.mjs'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.json())

app.use(redirectRoutes)

app.get('/home', (req, res) => {
  // res.json({ status: 'OK', timestamp: new Date() });
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});