const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});
// be sure to include its associated Products


router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ],
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
    // find one category by its `id` value
    // be sure to include its associated Products

    router.post('/', (req, res) => {
      // create a new category
      try {
        const newCategory = await Category.create({
          category_name: req.body.category_name,
        })
        res.json(newCategory);
      } catch (err) {
        res.status(500).json(err);
      }
      
    });

    router.put('/:id', (req, res) => {
      try {
        const categoryUpdate = await Category.update({
          where: {
            category_id = req.params.id,
          },
        });
        res.json(categoryUpdate);
      } catch (err) {
        res.status(500).json(err);
      }
      
    });
      
      
      // update a category by its `id` value
   

    router.delete('/:id', (req, res) => {
      // delete a category by its `id` value
    });

    module.exports = router;
