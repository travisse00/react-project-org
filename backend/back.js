import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { fileURLToPath } from 'url';
// import jobs from '../src/Pages/Jobs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
  origin: "https://react-project-org.onrender.com"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected ✅'))
.catch(err => console.error(err));

app.use(express.static(path.join(__dirname, '/src/Pages')));

const jobSchema = new mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    requirement: String,
    salary: Number
});

const userSchema = new mongoose.Schema({
    username: String,
    Phone: Number,
    password: String
});

const User = mongoose.model('User', userSchema);
const Jobs = mongoose.model('Jobs', jobSchema);

app.get('/', (req, res) => {
    res.send(`
        <h1>Home route works ✅</h1>
        <a href='https://react-project-org.vercel.app/'>Register</a>
        <a href='/jobs'>View it</a>
        `);
});

app.post('/job', async (req, res) => {
    try {
        const { id, title, desc, requirement, salary, username } = req.body;

        const newJob = new Jobs({ id, title, desc, requirement, salary });
        const jobs = await Jobs.find();
        newJob.id = jobs.length + 1;
        if ( username === "Admin" ) {
            res.send("Only admin can add a job");
        }
        await newJob.save();

        

        res.redirect('https://react-project-org.vercel.app/home/home')
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
});

app.get('/jobs', async (req, res) => {
    const jobs = await Jobs.find();
    res.send(jobs);
});

app.get('/jobs/:id', async (req, res) => {
    const jobs = await Jobs.find();

    const id = Number(req.params.id);
    const item = jobs.find((job) => job.id === id);

    if(!item){
        res.status(404).json({message: "Task not found"});
    } 
    res.json(item);
});

app.post('/register', async (req, res) => {
    try{
        const { username, Phone, password } = req.body;

        const user = new User({username, Phone, password})
        await user.save();

        res.status(201).json({message: 'Succesfully Registered'})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error});
    }
});

app.post('/login', async (req, res) => {
    try{
        const { username, password} = req.body;

        const user = await User.findOne({ username , password });

        if(!user){
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(201).json({message: 'Login succesful'});

    } catch (error) {

        console.log(error);

        res.send(alert(`Wrong Login's.`))
        
        res.status(500).json({message: "Server error", error});
    }
})

app.listen(4000, () => {
    console.log('🚀 Server running on http://localhost:4000');
    });
