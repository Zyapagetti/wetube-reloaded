export const stories = (req, res) => res.send(`story #${req.params.id} page `);
export const storiesEdit = (req, res) =>
  res.send(`Story #${req.params.id} edit page `);
export const storiesDelete = (req, res) =>
  res.send(`Story #${req.params.id} delete page `);
