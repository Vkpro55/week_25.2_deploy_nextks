import WebSocket, { WebSocketServer } from 'ws';

import { prisma } from '@repo/prisma/client';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async (ws: WebSocket) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });

    ws.send('Hello from WebSocket Backend!');
});