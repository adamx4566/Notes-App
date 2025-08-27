const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", () => addNote());

function addNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  textarea.addEventListener("input", saveNotes);

  note.appendChild(textarea);
  note.appendChild(deleteBtn);
  notesContainer.appendChild(note);

  saveNotes();
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note textarea").forEach(note => {
    notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(noteText => addNote(noteText));
}

loadNotes();
