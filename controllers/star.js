const { Star, Planet } = require('../models/index')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  // res.status(200).json([`Star#index`])
  const stars = await Star.findAll();
  res.json(stars)
  
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  // res.status(200).json(`Star#show(:id)`)
  const star = await Star.findByPk(req.params.id, {
    include: Planet
  })
  res.json(star)
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  // res.redirect(`/stars`, 201)
  const star = await Star.create(req.body);
  res.json(star)
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  // res.status(200).json(`/stars/${req.params.id}`, )
     const star = await Star.update(req.body, {
    where: { id: req.params.id }
   });
  res.json(star)
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  // res.status(204).json(true)
  const star = await Star.destroy({
    where: { id: req.params.id }
  });
  res.json({ "status": true })
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
