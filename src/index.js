import Task from "./task.js"
console.log("it is a todo list application")
alert("hi in my app")

const writing = new Task("writing","this is a writing task very important","low")
console.log(writing)

writing.priority = "medium"
console.log(writing)