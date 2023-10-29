export default function setupRoutes (router) {
  router.get('/hello', (req, res) => {
    return res.render('test.njk', {
      title: "Form",
      message: "Hello"
    });
  });
}