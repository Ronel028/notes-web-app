console.log("Insert Notes test")


const insertTitle = document.getElementById("notes-title");
const insertDesc = document.getElementById("notes-description");
const insertContent = document.getElementById("notes-content");
const form = document.getElementById("insert-form")

form.addEventListener("submit", async function(e){

	e.preventDefault();

	const insertNotes = await fetch("/service/insertnotes", {
		method: 'POST',
		headers: {'Content-Type': 'application/json' },
		body: JSON.stringify({
			title: "HTML",
			description: "Javascript is the best",
			content: "Learn Javascript"
		})
	})
	console.log(insertNotes)
})