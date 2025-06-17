export default class Checklist {
    #checklistName = "New Checklist"
    #checklistDescription = "Enter description here"
    #dateCreated = new Date()
    #checkedStatus = false
    constructor(checklistName, checklistDescription) {
        if (typeof checklistName == "string") {
            this.#checklistName = checklistName
        }
        if (typeof checklistDescription == "string" && checklistDescription.length > 2) {
            this.#checklistDescription = checklistDescription
        }
    }

    get checklistName() {
        return this.#checklistName
    }

    get checklistDescription() {
        return this.#checklistDescription
    }

    get checkedStatus(){
        return this.#checkedStatus
    }

    set checkedStatus(checkedStatus){
        if(typeof checkedStatus == "boolean"){
            this.#checkedStatus = checkedStatus
        }
    }
}