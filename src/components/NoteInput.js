import { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const limit = 50;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, limit),
        limit: limit - event.target.value.slice(0, limit).length,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Tambahkan Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="note-input__title__char-limit">
            Sisa karakter <span>{this.state.limit}</span>
          </div>
          <input
            type="text"
            onChange={this.onTitleChangeHandler}
            value={this.state.title}
            placeholder="Masukan judul catatan..."
            required
          ></input>
          <textarea
            onChange={this.onBodyChangeHandler}
            rows="6"
            placeholder="Isi catatan..."
            required
          />
          <button type="submit">Tambahkan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
