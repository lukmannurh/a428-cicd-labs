import NoteItemContent from "./NoteItemContent";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
