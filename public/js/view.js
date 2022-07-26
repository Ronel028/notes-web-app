console.log("view data testing")

let notesArray = [];

async function notes(){
    const notesData = await fetch('/service/getdata')
    notesArray = await notesData.json();
    myNotes(notesArray)
} 
notes();

// search notes
const searchInput = document.getElementById("search")
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchNotes)
function searchNotes(){
    let input = searchInput.value;
    if(input === ""){
        notes();
        return;
    }
    const filterdNotes = notesArray.filter(item =>{
        if(item.title === input){
            return [item]
        }
    })
    
    if(filterdNotes != input){
        myNotes(filterdNotes)
    }else{
        console.log("No data found")
    }
    
    

}
searchInput.addEventListener('change', function(){
    if(this.value === ""){
        notes();
    }
})


const dataContainer = document.getElementById("data-container")
function myNotes(notes){
    let data = "";
    notes.map(note=>{
        const { _id, title, description, content} = note
        data += `
            <li class="mb-3">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Notes
                        <a  onclick="deleteNotes('${_id}')">
                            <img src="/images/remove.png" alt="remove"/>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <div class="buttons w-100 d-flex justify-content-between">
                            <a href="#" class="btn btn-primary">View all</a>
                            <a href="/updatenotes/${title}/${description}/${content}?id=${_id}"><img src="/images/edit.png" alt="edit"/></a>
                        </div>
                    </div>
                </div>
            </li>
        `
    })

    dataContainer.innerHTML = data;
}

// delete
async function deleteNotes(noteId){
    const note = await fetch(`/service/deletenotes?id=${noteId}`, {
        method: "DELETE"
    })

    console.log(note)
    notes();
}
