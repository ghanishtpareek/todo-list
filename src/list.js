export default class List {
    #listName = 'todo'
    #list = []
    #projectName = "project"
    #listCreated = new Date()
    #listType = "todo"
    static validListTypes = ["todo", "note", "checklist"]

    constructor(listName, list, listType, projectName) {
        if (listName && typeof listName == "string") {
            this.#listName = listName
        }
        if (projectName && typeof projectName == "string") {
            this.#projectName = projectName
        }
        if (list && Array.isArray(list)) {
            this.#list = list
        }
        if (List.validListTypes.includes(listType)) {
            this.#listType = listType
        }
    }
    get listName() {
        return this.#listName
    }
    set listName(listName) {
        if (typeof listName !== "string") {
            console.log("Task list name shoud be string")
            return false
        }
        this.#listName = listName
    }
    get list() {
        return this.#list
    }
    set list(list) {
        if (Array.isArray(list)) {
            this.#list = list
        }
    }

    get projectName() {
        return this.#projectName
    }

    set projectName(projectName) {
        if (projectName && typeof projectName == "string") {
            this.#projectName = projectName
        }
    }

    get listType() {
        return this.#listType;
    }

    get listCreated() {
        return this.#listCreated;
    }

    addItem(listItem) {
        this.#list.push(listItem)
    }

    removeItem(index) {
        if(index < 0 || index > this.#list.length){
            console.log("invalid index")
            return false
        }
        this.#list.splice(index, 1)
    }
}