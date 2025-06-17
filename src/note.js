export default class Note {
    #noteName = "New Note"
    #noteDescription = "Enter description here"
    #dateCreated = new Date()

    constructor(noteName, noteDescription) {
        if (typeof noteName == "string") {
            this.#noteName = noteName
        }
        if (typeof noteDescription == "string" && noteDescription.length > 2) {
            this.#noteDescription = noteDescription
        }
    }

    get noteName() {
        return this.#noteName
    }

    get noteDescription() {
        return this.#noteDescription
    }

    set noteName(noteName){
        if(noteName.trim() == "" && typeof noteName != "string"){
            return "Invalid Name"
        }
        else{
            this.#noteName = noteName
        }
    }

    set noteDescription(noteDescription){
        if(typeof noteDescription == "string"){
            this.#noteDescription = noteDescription
        }
        else{
            return "invaid description"
        }
    }
}