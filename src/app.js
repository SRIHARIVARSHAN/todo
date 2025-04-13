const express = require('express');
require('./db/mongo');
const PORT=3000;
const app = express();
const todoRoutes = require('./routes/todo');

app.use(express.json());
app.use('/todo', todoRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}   );

