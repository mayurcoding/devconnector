const express = require('express');
const app = express();

app.get('/', (req, res) =>  res.send('Mayur Rastogi 7454955886'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));