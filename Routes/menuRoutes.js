const express = require('express');
const router = express.Router();
const Menu = require('./../Menu');

router.post('/', async (req, res) => {

  try {

    const data = req.body
    const newItem = new Menu(data)
    const responseData = await newItem.save();
    console.log("data saved")

    res.status(200).json(responseData)

  } catch (err) {

    console.log(err);
    res.status(500).json({ error: "Internal server error" })

  }
})

router.get('/', async (req, res) => {

  try {
    const data = await Menu.find()
    console.log('data fetched')
    res.status(200).json(data)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
})
router.get('/:type', async (req, res) => {
  try {

    const type = req.params.type;
    if (type == 'drink' || type == 'dish' || type == 'dessert') {

      const response = await Menu.find({ type: type })
      console.log(response)
      res.status(200).json(response)
    } else {
      res.status(404).json({ error: "type not found" })
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const menuId = req.params.id;
    const data = req.body; // newData for the id which u want to update

    const response = await Menu.findByIdAndUpdate(menuId, data, {
      new: true,
      runValidators: true

    })
    console.log('data updated')
    res.status(200).json(response)

    if (!response) {
      return res.status(404).json({ error: 'Item not found' })
    }
    console.log(response)


  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
})

router.delete('/:id', async (req, res) => {
  try {

    const menuId = req.params.id;
    const response = await Menu.findByIdAndDelete(menuId);

    if (!response) {
      return res.status(404).json({ error: 'Item not found' })
    }
    console.log('item deleted !')
    res.status(200).json({ message: 'Item deleted successfully' })
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
})
module.exports = router;