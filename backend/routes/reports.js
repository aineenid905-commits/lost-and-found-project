const router = require('express').Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [reports] = await db.query(
      'SELECT id, type, title, category, location, date, description, photo, status FROM reports'
    );

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      user_id,
      type,
      title,
      category,
      location,
      date,
      description,
      private_details
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO reports
      (user_id, type, title, category, location, date, description, private_details)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, type, title, category, location, date, description, private_details || null]
    );

    res.status(201).json({
      message: 'Report created successfully',
      reportId: result.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create report' });
  }
});

module.exports = router;
