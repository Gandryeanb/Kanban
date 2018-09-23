const db = require('./config.js')
const todo = db.ref('db/todo/')

function createTask (taskName,priority,dueDate,createdAt,updatedAt) {
    todo.push({
      taskName,
      priority,
      dueDate,
      createdAt,
      updatedAt
    })
}

createTask('makan', '2', Date(), Date(), Date()) // add data