// let {editeTaskById ,deleteTaskById ,createTask, findAll } = require('../DEL/taskModelSql/index')
let {editeTaskById ,deleteTaskById ,createTask, findAll, findById } = require('../DEL/taskModelSequelize')


async function getAll() {
  return await findAll()
}

async function getByID(id) {
  return await findById(id)
}

async function addTask(temp) {
// let temp = [];
//  Object.keys(VALUES).map((value) => {
//    temp.push(VALUES[value])
//   })
//   temp.push(false)
  // temp.active =false
  return await createTask(temp);
}


function deleteTask(id) {
  return deleteTaskById(id)
}


async function editeTask(task) {
  // let temp = [];

  // Object.keys(VALUES).map((value) => {
  //   temp.push(VALUES[value])
  //   console.log(temp);
  //  })

  //  const column = temp[0];
  //  const data = temp[1];
  //  const id = temp[2];

  return await editeTaskById(task,task.taskid);
}

module.exports = {editeTask ,deleteTask, addTask,getAll, getByID }
