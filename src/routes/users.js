const { Router } = require('express');
const router = Router();

const _ = require('underscore');

const users = require('../sample.json');

router.get('/', (req, res) => {
  res.json(users);
})

router.post('/', (req, res) => {
  const {first_name, last_name, email, gender} = req.body;
  if (first_name && last_name && email && gender) {
    const id = users.length + 1;
    const newUser = {...req.body, id};
    users.push(newUser);
    res.json(users);
  } else {
    res.status(500).json({error: 'There was an error.'});
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {first_name, last_name, email, gender} = req.body;
  if (first_name && last_name && email && gender) {
    _.each(users, (user, i) => {
      if (user.id == id) {
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.gender = gender;
      }
    })
    res.json(users);
  } else {
    res.status(500).json({error: 'There was an error'});
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  _.each(users, (user, i) => {
    if (user.id == id) {
      users.splice(i, 1);
    }
  })
  res.send(users);
})

module.exports = router;