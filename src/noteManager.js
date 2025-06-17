import List from "./list.js"
import Note from "./note.js"
export default class NoteManager extends List{
    constructor(listName, list, projectName){
        const listType = "note"
        super(listName, list, listType, projectName)
    }

    createNoteItem(){
        const noteListItem = new Note("my note","this is a test note")
        this.addItem(noteListItem)
    }

}