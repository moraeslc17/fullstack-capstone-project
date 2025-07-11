const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// GET /api/gifts – retorna todos os presentes
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find().toArray();
        res.json(gifts);
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

// GET /api/gifts/:id – retorna um presente específico por id
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        const id = parseInt(req.params.id); // converte o id da URL para número

        const gift = await collection.findOne({ id }); // busca usando número

        if (!gift) {
            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});

// POST /api/gifts – adiciona um novo presente
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const result = await collection.insertOne(req.body);

        res.status(201).json(result.ops ? result.ops[0] : req.body);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
