export default class list {
    #listName = 'todo'
    #list = []
    #projectName = "project"
    #listCreated = new Date()
    #listType = "todo"
    static validListTypes = ["todo","note","checklist"]

    constructor(listName, list, listType, projectName){
        if(listName && typeof listName == "string"){
            this.#listName = listName
        }
        if(projectName && typeof projectName == "string"){
            this.#projectName = projectName
        }
        if(list && Array.isArray(list)){
            this.#list = list
        }
        if(list.validListTypes.includes(listType)){
            this.#listType = listType
        }
    }
    get listName() {
        return this.#listName
    }
    set listName(taskListName) {
        if (typeof taskListName !== "string") {
            console.log("Task list name shoud be string")
            return false
        }
        this.#listName = taskListName
    }
    get list() {
        return this.#list
    }
    set list(taskList) {
        if (Array.isArray(taskList)) {
            this.#list = list
        }
    }
}