const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCate = await Category.findByPk(req.params.id,{
      include: [{ model: Product }]
    });
    res.status(200).json(oneCate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const productData = await Category.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updateCate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateCate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const destroyCate = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(destroyCate);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
