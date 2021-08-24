const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // try {
  //   const tagData = Tag.findAll({
  //     // be sure to include its associated Product data
  //     include: [{ model: Product, through: ProductTag }],
  //   });
  //   res.status(200).json(tagData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  Tag.findAll().then((tagsData) => {
    res.json(tagsData);
  })
});
router.get('/:id', (req, res) => {
  // Product.findOne().then((categoryData) => {
  //   res.json(categoryData);
  // });
  Tag.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  ).then((tagData) => {
    res.json(tagData);
  });

  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});
router.post('/', (req, res) => {
  // Product.create([
  //     // create a new tag
  //   {
  //     tag_name: 'rock music',
  //   },
  //   {
  //     tag_name: 'pop music',
  //   },
  //   {
  //     tag_name: 'blue',
  //   },
  //   {
  //     tag_name: 'red',
  //   },
  //   {
  //     tag_name: 'green',
  //   },
  //   {
  //     tag_name: 'white',
  //   },
  //   {
  //     tag_name: 'gold',
  //   },
  //   {
  //     tag_name: 'pop culture',
  //   },
  // ])
  // .then((productData) => {
  //   res.send('Database seeded!');
  // })
  // .catch((err) => {
  //   res.json(err);
  // });
  Tag.create(req.body)
    .then((product) => {
      res.json(product)
    });
});

router.put('/:id', (req, res) => {
  Tag.update(
   req.body,
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
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    // delete on tag by its `id` value
    .then((deletedTag) => {
      res.json(deletedTag);
    })
  
});

module.exports = router;
