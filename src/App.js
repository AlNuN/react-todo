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
  }

  createNote(note, title) {
    this.setState({notes: [
      ...this.state.notes, { title, note }]
    })
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm 
          createNote={this.createNote} 
        />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}
