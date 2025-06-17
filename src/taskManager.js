import List from "./list.js"
import Task from "./task.js"
export default class TaskManager extends List{    
    constructor(listName, list, projectName){
        const listType = "todo"
        super(listName, list, listType, projectName)
    }

    createTodoItem(){
        const todoItem = new Task("test task","this is a test task","medium")
        this.addItem(todoItem)
    }
}