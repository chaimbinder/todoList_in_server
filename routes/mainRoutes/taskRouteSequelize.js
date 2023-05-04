let { Router } = require('express')
let  {editeTask,deleteTask,addTask, getAll, getByID } = require('../../BL/taskBL')

let router = Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).send( await getAll())
  } catch (error) {
    res.status(400).send( error )
  }
})


router.get('/:id', async (req, res) => {
  try {
    res.status(200).send(await getByID(req.params.id))
  } catch (error) {
    res.status(400).send( error )
  }
})


router.post('/', async (req, res) => {
  try {
    res.status(200).send(await addTask(req.body))
  } catch (error) {
    res.status(400).send( error )
  }
})


router.patch('/', async (req, res) => {
  try {
    await editeTask(req.body)
    let dataSort = await getAll()
    res.status(200).send(dataSort)
  } catch (error) {
    console.log("error",error);
    res.status(400).send( error )
  }
})

router.delete("/", async (req, res)=>{
  try {
    await deleteTask(req.body.id)
      res.status(200).send("ok");
  } catch (error) {
    res.status(400).send(error);
  }
})
module.exports = router