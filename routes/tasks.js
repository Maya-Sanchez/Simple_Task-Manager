const express = require('express');
const router = express.Router();
const Task = require('../views/index.ejs');

router.post('/', async (req, res) => {               // goal is to create a new task
    const { task } = req.body;
    try {
        const NewTask = new NewTAsk({ task });
        await Task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

        router.delete('/:id', async (req, res) => {    //delete task
            try {
              const book = await task.findByIdAndDelete(req.params.id);
              if (!book) return res.status(404).json({ message: 'Task not found' });
              res.json({ message: 'Task Deleted' });
            } catch (err) {
              res.status(400).json({ error: err.message });
            }
          });

          module.exports = router;