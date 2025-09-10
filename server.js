const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS (Cross-Origin Resource Sharing)
// This is crucial for allowing your frontend (localhost:5500)
// to make requests to your backend (localhost:3000).
app.use(cors());

// Define a route to fetch recipes
app.get('/recipes', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/recipes?limit=110&skip=0');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
