import React, { Component } from 'react';
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

export default class NoteCard extends Component{
  constructor() {
    super();
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.note.title}</h3>
          <DeleteSVG onClick={this.deleteNote} />
        </header>
        <p className="note-card_text">{this.props.note.note}</p>
      </section>
    );
  }
}
