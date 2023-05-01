const postresConnect = require('../DB/PostresConnect')

const table1 = "tasksName";

async function findAll() {
  const data = await postresConnect('SELECT * FROM tasks')
  console.log(data);
  return data
}

async function findById(id) {
  const data = await postresConnect(`SELECT * FROM tasks WHERE id =${id}`)
  return data.rows[0]
}

const createTask = async (VALUES) => {
  const data = await postresConnect(  `INSERT INTO tasks(name_task,description,priority_level,active)  
  VALUES ($1,$2,$3,$4)  RETURNING *`,
VALUES)
return data.rows;
}
async function deleteTaskById(id) {
  const date = await postresConnect(`DELETE FROM tasks WHERE taskid =${id}`)
  console.log("The task deleting");
  return date.rowCount;
}
module.exports = {deleteTaskById, createTask, findById, findAll }



