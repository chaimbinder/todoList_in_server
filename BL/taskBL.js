let {editeTaskById ,deleteTaskById ,createTask, findById, findAll } = require('../DEL/taskModel.js')

async function getAll() {
  return await findAll()
}

async function getByID(id) {
  return await findById(id)
}

async function addTask(VALUES = {}) {
let temp = [];
 Object.keys(VALUES).map((value) => {
   temp.push(VALUES[value])
   console.log(temp);
  })
  return await createTask(temp);
}

async function deleteTask(id) {
  return await deleteTaskById(id)
}

async function editeTask(VALUES = {}) {
  let temp = [];
  Object.keys(VALUES).map((value) => {
    temp.push(VALUES[value])
    console.log(temp);
   })
   const column = temp[0];
   const data = temp[1];
   const id = temp[2];
  return await editeTaskById(column,data,id)
}

module.exports = {editeTask ,deleteTask, addTask,getAll, getByID }
