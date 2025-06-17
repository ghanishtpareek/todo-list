export default class Task {
    #name = "New Task"
    #description = "A new task"
    #dueDate
    #priority = "low"
    #dateCreated = new Date()
    static validPriorities = ["low", "medium", "high"]

    constructor(name, description, priority, dueDate) {
        console.log("hello class task")

        if (!dueDate) {
            //if no date provided sets tomrrow as due date
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            this.#dueDate = tomorrow
        }
        else {
            if (dueDate instanceof Date) {
                this.#dueDate = dueDate
            }
            else {
                // incase date in incorrect
                const tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                this.#dueDate = tomorrow
            }
        }
        if (name && typeof name == "string") {
            this.#name = name
        }
        if (description && typeof description == "string") {
            this.#description = description
        }
        if (priority && typeof priority == "string" && Task.validPriorities.includes(priority.toLowerCase())) {
            this.#priority = priority
        }
        else{
            console.log("priority incorrect setting priority low")
        }
    }

    get name() {
        return this.#name
    }

    get description() {
        return this.#description
    }

    get duedate() {
        return this.#dueDate
    }

    get priority() {
        return this.#priority
    }

    get dateCreated(){
        return this.#dateCreated
    }

    set priority(priorityLevel){
        console.log("setting priority")
        if(typeof priorityLevel !== "string"){
            console.log('priority cannot be not a string')
            return false
        }
        else if(Task.validPriorities.includes(priorityLevel.toLowerCase()) ){
            console.log("priority set to: ",priorityLevel)
            this.#priority = priorityLevel
        }
        else{
            console.log("priority level incorrect")
            return false
        }
    }
}