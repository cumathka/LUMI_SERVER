import express from 'express';
const router = express.Router();

import * as contractService from '../service/contract-service.js';


router.get("/", async (req, res)=>{
    const list = await contractService.getCustomers();
    res.status(200).send(list);
})

router.get("/:id", async (req, res)=>{
    const customerId = req.params.id;
    const customer = await contractService.getCustomer(customerId);
    res.status(200).send(customer);
})

router.post("/", async (req, res)=>{
    const customer = req.body;
    const newCustomer = await contractService.createContract(customer);
    res.status(201).send(newCustomer);
})

router.put("/:id", async (req, res)=>{
    const customerId = req.params.id;
    const existingCustomer = req.body;
    const updatedCustomer = await contractService.updateContract(customerId, existingCustomer);
    
    res.status(200).send(updatedCustomer);
})

router.delete("/:id", async (req, res)=>{
    const customerId = req.params.id;
    await contractService.endContractWithCustomer(customerId);
    res.status(200);
})

export {router};