const express = require('express');
const app = express();
const router = require('./routers/routerAuth');
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use('/auth', router)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})