const { Star, Galaxy } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  const galaxies = await Galaxy.findAll();
  res.render('galaxies/index.html.twig', { galaxies })
};

// Show resource
const show = async (req, res) => {
  const galaxy = await Galaxy.findByPk(req.params.id, {
    include: Star,
  });
  res.render('galaxies/show.html.twig', { galaxy })
};

// HTML create a new galaxy
const form = async (req, res) => {
  let galaxy = await new Galaxy()
  if(req.params.id) {
     galaxy = await Galaxy.findByPk( Number(req.params.id) )
  } 
  res.render('galaxies/form.html.twig', { galaxy })
}

// Create a new resource
const create = async (req, res) => {
  const galaxy = await Galaxy.create(req.body);
  res.json(galaxy);
};

// Update an existing resource
const update = async (req, res) => {
  const galaxy = await Galaxy.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect(`/galaxies/${req.params.id}`)
};

// Remove a single resource
const remove = async (req, res) => {
  const galaxy = await Galaxy.destroy({
    where: { id: req.params.id }
  });
  res.redirect(`/galaxies`)
};

// Export all controller actions
module.exports = { index, show, create, update, remove, form };
