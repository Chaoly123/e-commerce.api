const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../Develop/models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Product.findAll().then((productData) => {
    res.json(productData);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Product.findByPK(req.params.id).then((productData) => {
    res.json(productData);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Product.create([
      // create a new tag
    {
      tag_name: 'rock music',
    },
    {
      tag_name: 'pop music',
    },
    {
      tag_name: 'blue',
    },
    {
      tag_name: 'red',
    },
    {
      tag_name: 'green',
    },
    {
      tag_name: 'white',
    },
    {
      tag_name: 'gold',
    },
    {
      tag_name: 'pop culture',
    },
  ])
  .then(() => {
    res.send('Database seeded!');
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(
    [
      tag_name:req.body.tag,
    ],
    {
      where: {
        id: req.params.id,
      },
    }
  )
  // update a tag's name by its `id` value
  .then((updatedTag) => {
    res.json(updatedTag);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destory({
    where: {
      id: req.params.id,
    },
  })
  // delete on tag by its `id` value
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
