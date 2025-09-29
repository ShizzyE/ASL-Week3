const { Planet, Star } = require('../models/index')

// Show all resources GET ALL
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  // res.status(200).json([`Planet#index`])
  const planets = await Planet.findAll();
  // res.json(planets)
    res.render('planets/index.html.twig', { planets });
}


// Show resource GET ID
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  // res.status(200).json(`Planet#show(:id)`)
  const planet = await Planet.findByPk(req.params.id, {
    include: Star
  });
  // res.json(planet)
  res.render('planets/show.html.twig', { planet })
}

// GET /planets/new - Doesn't load in an existing planet and shows an empty form
// GET /planets/1/edit - Loads in the planet with id of 1 and pre populates form 
const form = async (req, res) => {
  let planet = await new Planet()
  if(req.params.id) {
     planet = await Planet.findByPk( Number(req.params.id) )
  } 
  res.render('planets/form.html.twig', { planet })
}


// Create a new resource POST
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  // res.redirect(`/planets`, 201)
  const planet = await Planet.create(req.body);
  // OR
  // res.redirect(`./planets/${planet.id}`)
}


// Update an existing resource PUT
const update = async (req, res) => {

   const { hasRings: hasRings = false} = req.body

   const planet = await Planet.update(
    { ...req.body, id: req.params.id, hasRings },
    {
    where: { id: req.params.id }
   }
  );
  res.redirect(`/planets/${req.params.id}`)
}


// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  // res.status(204).json(true)
  const planet = await Planet.destroy({
    where: { id: req.params.id }
  });
  // res.json({ "status": true })
  res.redirect('/planets')
}

// Export all controller actions
module.exports = { index, show, create, update, remove, form }
