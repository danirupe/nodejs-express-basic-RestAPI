const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  const data = {
    "name": "Daniel",
    "apellidos": "Ruiz",
    "edad": 26
  }
  res.json(data);
})

module.exports = router;
