import React, { Component } from 'react';
import './style.css'

export default class NoteForm extends Component{

  constructor(props){
    super(props);

    this.title = '';
    this.note = '';

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  handleTitleChange(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleNoteChange(event){
    event.stopPropagation();
    this.note = event.target.value;
  }

  createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note);
  }

  render() {
    return (
      <form className="note-form"
        onSubmit={this.createNote}
      >
        <input 
          className="note-form_input" 
          type="text" 
          placeholder="Título" 
          onChange={this.handleTitleChange}
        />
        <textarea 
          className="note-form_input" 
          rows={15}
          placeholder="Escreva sua nota..." 
          onChange={this.handleNoteChange}
          />
        <button className="note-form_input note-form_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
