import express from 'express';

import { prisma } from '@repo/prisma/client';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from HTTP Backend!');
});

app.listen(PORT, () => {
    console.log(`HTTP Backend is running on port ${PORT}`);
});