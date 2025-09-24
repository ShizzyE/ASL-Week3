const { Star, Galaxy } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  // res.status(200).json([`Galaxy#index`])
  const galaxies = await Galaxy.findAll();
  res.json(galaxies);
};

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  // res.status(200).json(`Galaxy#show(:id)`)
  const galaxy = await Galaxy.findByPk(req.params.id, {
    include: Star,
  });
  res.json(galaxy);
};

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  // res.redirect(`/galaxies`, 201)
  const galaxy = await Galaxy.create(req.body);
  res.json(galaxy);
};

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  // res.status(200).json(`/galaxies/${req.params.id}`, )
  const galaxy = await Galaxy.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(galaxy);
};

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  // res.status(204).json(true)
  const galaxy = await Galaxy.destroy({
    where: { id: req.params.id }
  });
  res.json({ "status": true })
};

// Export all controller actions
module.exports = { index, show, create, update, remove };
