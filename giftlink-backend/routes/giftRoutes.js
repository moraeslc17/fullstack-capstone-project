const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// GET /api/gifts – retorna todos os presentes
router.get('/', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase();

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection('gifts');

        // Task 3: Fetch all gifts using the collection.find method. Chain with toArray method to convert to JSON array
        const gifts = await collection.find().toArray();

        // Task 4: return the gifts using the res.json method
        res.json(gifts);
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

// GET /api/gifts/:id – retorna um presente específico por id
router.get('/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase();

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection('gifts');

        const id = req.params.id;

        // Task 3: Find a specific gift by ID using the collection.findOne method and store in constant called gift
        const gift = await collection.findOne({ id: id });

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
