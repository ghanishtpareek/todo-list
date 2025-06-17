import List from "./list.js"
import Checklist from "./checklist.js"
export default class ChecklistManager extends List {
    constructor(listName, list, projectName) {
        const listType = "checklist"
        super(listName, list, listType, projectName)
    }

    createListItem() {
        const checklistItem = new Checklist("list", "bring books")
        this.addItem(checklistItem)
    }

    unchecklist(checklistItem) {
        if (checklistItem.checkedStatus == false) {
            checklistItem.checkedStatus = true
        }
        else {
            checklistItem.checkedStatus = false
        }
    }
}