export default class NotesArray {
  constructor() {
    this.notes = [];
    this.subscribed = [];
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  subscribe(func) {
    this.subscribed.push(func);
  }

  unsubscribe(func) {
    this.subscribed = this.subscribed.filter((f) => f !== func);
  }
  
  notify(){
    this.subscribed.forEach((func) => {
      func(this.notes)
    });
  }

}


class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}