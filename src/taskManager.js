import List from "./list.js"
import Task from "./task.js"
export default class TaskManager extends List{    
    constructor(listName, list, projectName){
        // alert("inside task manager")
        const listType = "todo"
        super(listName, list, listType, projectName)
    }

    createTodoItem(){
        // console.log("creating a new object for todo task")
        const todoItem = new Task("test task","this is a test task","medium")
        // console.log(todoItem.dateCreated,todoItem.name)
        this.addItem(todoItem)
    }

    // getAllDetails(){
    //     console.log(this.listName, this.listCreated, this.listType)
    // }
}