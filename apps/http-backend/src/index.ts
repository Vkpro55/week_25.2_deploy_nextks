import express from 'express';

import { prisma } from '@repo/prisma/client';

const app = express();
const PORT = 8000;

console.log('Starting HTTP Backend...');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from HTTP Backend!");
});

app.post('/signup', async (req, res) => {
    console.log('Received signup request');
    try {
        const {username, password} = req.body;
    
        // create users in the database
        const user = await prisma.user.create({
            data: {
                username,
                password,
            },
        }); 

        return res.status(201).json({ message: 'User created successfully', userId: user.id });
    } catch (error) {
        console.log('Error during signup:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`HTTP Backend is running on port ${PORT}`);
});