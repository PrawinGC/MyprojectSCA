import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all clubs');
});

router.post('/', (req, res) => {
  res.send('Create a new club');
});

export default router;