let { Router } = require('express')
let  {deleteTask,addTask, getAll, getByID } = require('../BL/taskBL')


let router = Router()

router.get('/getAllTask', async (req, res) => {
  res.status(200).json( await getAll())
})

router.post('/getTaskById', async (req, res) => {
  res.status(200).json(await getByID(req.body.id))
})

router.post('/createTask', async (req, res) => {
  res.status(200).json(await addTask(req.body))
})

router.post('/deleteTask', async (req, res) => {
  res.status(200).json(await deleteTask(req.body.id))
})


module.exports = router
