import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './style.css';

export default class NoteList extends Component {

  constructor(){
    super();

    this.state = {notes: []};

    this.newNotes = this.newNotes.bind(this);
  }

  newNotes(notes) {
    this.setState({...this.state, notes});
  }

  componentDidMount() {
    this.props.notes.subscribe(this.newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this.newNotes);
  }

  render() {
    return (
      <ul className="note-list">
          {this.state.notes.map((note, index) => {
            return (
              <li className="note-list_item" key={index}>
                <NoteCard 
                  title={note.title}
                  text={note.text}
                  category={note.category}
                  index={index}
                  deleteNote={this.props.deleteNote}
                />
              </li>
            );
          })}
      </ul>
    );
  }
}