import express from 'express';
import cors from 'cors';
import env from './libs/controls/env.ts';
import { connectDB } from './libs/mongodb/conect.ts';
import User from './libs/mongodb/schematics/user.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});

connectDB().then(() => {
    app.listen(env.PORT, () => {
        console.log(`http://localhost:${env.PORT}`);
    });
});