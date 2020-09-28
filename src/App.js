import React, { Component } from 'react';
import NoteForm from './components/NoteForm/';
import NoteList from './components/NoteList/';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {notes: []};

    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  createNote(note, title) {
    this.setState({notes: [
      ...this.state.notes, { title, note }]
    });
  }

  deleteNote(index) {
    let newNotes = this.state.notes;
    newNotes.splice(index,1);
    this.setState({notes: newNotes})
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm 
          createNote={this.createNote} 
          />
        <NoteList 
          notes={this.state.notes} 
          deleteNote={this.deleteNote}
        />
      </section>
    );
  }
}
