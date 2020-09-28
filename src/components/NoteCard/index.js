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
          <h3 className="note-card_title">{this.props.title}</h3>
          <DeleteSVG onClick={this.deleteNote} />
          <h4>{this.props.category}</h4>
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}
