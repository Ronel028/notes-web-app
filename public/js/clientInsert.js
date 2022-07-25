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
			title: insertTitle.value,
			description: insertDesc.value,
			content: insertContent.value
		})
	})
	console.log(insertNotes)
	resetInput();
})

// function to reset all input
function resetInput(){
	insertTitle.value = "";
	insertDesc.value = "";
	insertContent.value = "";
}