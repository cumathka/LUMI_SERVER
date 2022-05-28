import express from 'express';
const router = express.Router();

import * as taskService from '../service/task-service.js';


router.get("/", async (req, res)=>{
    const list = await taskService.getEngineers();
    res.status(200).send(list);
})

router.get("/:id", async (req, res)=>{
    const EngineerId = req.params.id;
    const engineer = await taskService.getEngineer(EngineerId);
    res.status(200).send(engineer);
})

router.post("/", async (req, res)=>{
    const engineer = req.body;
    const newEngineer = await taskService.createEngineer(engineer);
    res.status(201).send(newEngineer);
})

router.put("/:id", async (req, res)=>{
    const engineerId = req.params.id;
    const existingEngineer = req.body;
    const updatedEngineer = await taskService.updatedEngineer(engineerId, existingEngineer);
    
    res.status(200).send(updatedEngineer);
})

router.delete("/:id", async (req, res)=>{
    const engineerId = req.params.id;
    await taskService.deleteEngineer(engineerId);
    res.status(200);
})

export {router};