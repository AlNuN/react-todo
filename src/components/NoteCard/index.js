import React, { Component } from 'react';
import "./style.css"

export default class NoteCard extends Component{
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.note.title}</h3>
        </header>
        <p className="note-card_text">{this.props.note.note}</p>
      </section>
    );
  }
}
