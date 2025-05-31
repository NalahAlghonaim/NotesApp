function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ noteId: noteId }),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = "/";
        } else {
          alert("Failed to delete note.");
        }
      })
      .catch((err) => {
        console.error("Error deleting note:", err);
        alert("Something went wrong.");
      });
  }
  