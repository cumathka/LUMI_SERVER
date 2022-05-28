import express from 'express';
const router = express.Router();

import * as taskService from '../service/task-service.js';


router.get("/", async (req, res)=>{
    const list = await taskService.getTasks();
    res.status(200).send(list);
})

router.get("/:id", async (req, res)=>{
    const taskId = req.params.id;
    const task = await taskService.getTask(taskId);
    res.status(200).send(task);
})

router.post("/", async (req, res)=>{
    const task = req.body;
    const newTask = await taskService.createTask(task);
    res.status(201).send(newTask);
})

router.put("/:id", async (req, res)=>{
    const taskId = req.params.id;
    const existingTask = req.body;
    const updatedTask = await taskService.updatedTask(taskId, existingTask);
    
    res.status(200).send(updatedTask);
})

router.delete("/:id", async (req, res)=>{
    const taskId = req.params.id;
    await taskService.deleteTask(taskId);
    res.status(200);
})

export {router};