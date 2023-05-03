let { Router } = require('express')
let  {editeTask,deleteTask,addTask, getAll, getByID } = require('../../BL/taskBL')

let router = Router()

router.get('/', async (req, res) => {
  res.status(200).json( await getAll())
})


router.get('/:id', async (req, res) => {
  res.status(200).json(await getByID(req.params.id))
})


router.post('/', async (req, res) => {
  res.status(200).json(await addTask(req.body))
})


router.delete('/', async (req, res) => {
  res.status(200).json(await deleteTask(req.body.id))
})
router.patch('/', async (req, res) => {
  res.status(200).json(await editeTask(req.body))
})


module.exports = router
