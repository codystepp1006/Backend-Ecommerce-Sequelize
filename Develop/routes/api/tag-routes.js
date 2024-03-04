const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//note: make sure you add async in the router so await doesn't cause problems!
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(allTags)
  } 
  catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
    if (!tagData) {
      res.status(404).json("error")
    }
    res.status(200).json(tagData)
  }catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData)
  }catch(err) {
    res.status(500),json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    if(!tagData) {
      res.status(404),json("No tag found with that id")
    }

    res.status(200).json("The tag name has been changed ")
  }catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where : {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(404).json("Incorrect id")
    }
    res.stastus(200).json("The tag was deleted")
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
