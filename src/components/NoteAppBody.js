import { Component } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteAppBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archives = [...this.state.notes];
    const index = this.state.notes.findIndex((note) => note.id === id);
    archives[index].archived = archives[index].archived ? false : true;
    this.setState({ notes: archives });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((previous) => {
      return {
        notes: [
          ...previous.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }


  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteList
          label="Catatan Aktif"
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <NoteList
          label="Arsip"
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
          isArchived={true}
        />
      </div>
    );
  }
}

export default NoteAppBody;
