import NoteItem from "./NoteItem";

function NoteList({ notes, label, onDelete, onArchive, isArchived = false }) {
  const list = notes.filter((note) =>
    isArchived ? note.archived === true : note.archived === false
  );
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {list.length < 1 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          list.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
}

export default NoteList;
