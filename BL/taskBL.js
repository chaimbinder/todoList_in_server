let {editeTaskById ,deleteTaskById ,createTask, findAll, findById } = require('../DEL/taskModelSequelize')

async function getAll() {
  return await findAll()
}

async function getByID(id) {
  return await findById(id)
}

async function addTask(temp) {
  return await createTask(temp);
}

function deleteTask(id) {
  return deleteTaskById(id)
}


async function editeTask(task) {
  return await editeTaskById(task,task.taskid);
}

module.exports = {editeTask ,deleteTask, addTask,getAll, getByID }
