import express from 'express';
const router = express.Router();

import * as contractService from '../service/contract-service.js';


router.get("/", async (req, res)=>{
    const list = await contractService.getWebsites();
    res.status(200).send(list);
})

router.get("/:id", async (req, res)=>{
    const websiteId = req.params.id;
    const website = await contractService.getWebsite(websiteId);
    res.status(200).send(website);
})

router.post("/", async (req, res)=>{
    const website = req.body;
    const newWebsite = await contractService.addNewWebsiteToCustomer(website);
    res.status(201).send(newWebsite);
})

router.put("/:id", async (req, res)=>{
    const websiteId = req.params.id;
    const existingWebsite = req.body;
    const updatedWebsite = await contractService.updateWebsite(websiteId, existingWebsite);
    
    res.status(200).send(updatedWebsite);
})

router.delete("/:id", async (req, res)=>{
    const websiteId = req.params.id;
    await contractService.deleteWebsiteFromContract(websiteId);
    res.status(200);
})

export {router};