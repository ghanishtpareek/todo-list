import NoteManager from "./noteManager.js"
import ChecklistManager from "./checklistManager.js"
import TaskManager from "./taskManager.js"
import Task from "./task.js"
export default class Project {
    #projectName = "New Project"
    #projectDescription = "A new project"
    #projectCreated = new Date()
    #projectTasks = [];
    #projectNotes = [];
    #projectChecklists = [];
    static validListTypes = ["todo", "note", "checklist"]


    constructor(projectName, projectDescription) {
        if (projectName && typeof projectName === "string") {
            this.#projectName = projectName;
        }
        if (projectDescription && typeof projectDescription === "string") {
            this.#projectDescription = projectDescription;
        }
    }
    get projectName() {
        return this.#projectName;
    }
    set projectName(projectName) {
        if (projectName && typeof projectName === "string") {
            this.#projectName = projectName;
        }
    }
    get projectDescription() {
        return this.#projectDescription;
    }
    set projectDescription(projectDescription) {
        if (projectDescription && typeof projectDescription === "string") {
            this.#projectDescription = projectDescription;
        }
    }
    get projectCreated() {
        return this.#projectCreated;
    }

    addList(listType = "todo"){
        alert("adding a new list in project")
        if (!Project.validListTypes.includes(listType)) {
            console.error("Invalid list type. Valid types are: " + Project.validListTypes.join(", "));
            return;
        }

        const listName = prompt(`what is the name of the list of type ${listType}`)
        if (listType === "todo") {
            alert("creating a new todo")
            const todoList = new TaskManager(listName,[],this.#projectName)
            this.#projectTasks.push(todoList);
        } else if (listType === "note") {
            const noteList = new NoteManager(listName,[],this.#projectName)
            this.#projectNotes.push(noteList);
        } else if (listType === "checklist") {
            const checklist = new ChecklistManager(listName,[],this.#projectName)
            this.#projectChecklists.push(checklist);
        }
    }

    testing(){
        return this.#projectTasks
    }
}