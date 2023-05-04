let taskRoutes = require('../mainRoutes/taskRouteSequelize')



function mainRoutes(app) {
  app.use((req, res, next) => {
    console.log('body = ', req.body)
    console.log('params = ', req.params)
    console.log('url = ', req.url)
    console.log('\n')
    next()
  })

  
  app.use('/task', taskRoutes)
  app.use('*', (req, res) => res.status(404).res.send('error in Path'))
}



module.exports = mainRoutes
