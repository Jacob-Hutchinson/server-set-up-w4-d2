const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getHouse, createHouse, updateHouse, deleteHouse} = require('./controller')

app.get('/api/houses', getHouse)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => {
    console.log('listening on port 4004')
})