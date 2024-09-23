const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/tasks', (req, res) => {
    const { task } = req.body;
    if (task) {
        tasks.push({ id: tasks.length + 1, description: task, completed: false });
    }
    res.redirect('/');
});

app.post('/tasks/update/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { completed } = req.body;
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: completed === 'on' } : task
    );
    res.redirect('/');
});

app.post('/tasks/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    tasks = tasks.filter(task => task.id !== id);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});