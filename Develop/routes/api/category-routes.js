const router = require('express').Router();
const { model } = require('../../config/connection');
const { Category, Product } = require('../../Develop/models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findOne(req.params.id,) {
    };
    // find one category by its `id` value
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products

});

router.post('/', (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
    // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name:req.body.category,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  // update a category by its `id` value
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destory({
    where: {
      id: req.params.id,
    },
  })
  // delete a category by its `id` value
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));

});

module.exports = router;
