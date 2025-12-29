import express from 'express';
const router = express.Router();

// @route         GET /api/ideas
// @description   Get all ideas
// @access        Public
router.get('/', (req, res) => {
  const ideas = [
    { id: 1, title: 'idea 1', description: 'This is idea 1' },
    { id: 2, title: 'idea 2', description: 'This is idea 2' },
    { id: 3, title: 'idea 3', description: 'This is idea 3' },
  ];

  res.status(400);
  throw new Error('This is an error');

  res.json(ideas);
});

// @route         POST /api/ideas
// @description   Create new idea
// @access        Public
router.post('/', (req, res) => {
  console.log(req.body);

  res.send('Processed');
});

export default router;
