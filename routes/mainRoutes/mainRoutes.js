let taskRoutes = require('../taskRoutes')



function mainRoutes(app) {
  app.use((req, res, next) => {
    console.log('body', req.body)
    console.log('params', req.params)
    console.log('url', req.url)
    next()
  })

  

  app.use('/task', taskRoutes)
  app.use('*', (req, res) => res.status(404).res.send('error in Path'))
}

module.exports = mainRoutes
