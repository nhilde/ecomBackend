const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ],
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // find a single tag by its `id`
  // be sure to include its associated Product data

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    })
    res.json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update({
      where: {
        tag_id: req.params.id,
      },
    });
    res.json(tagUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.delete('/:id', (req, res) => {
  try {
    Tag.delete({
      where: {
        tag_id: req.params.id,
      },
    });
    res.json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
