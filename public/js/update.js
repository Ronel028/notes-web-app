
console.log("update page")

const param = location.search;
const idParam = new URLSearchParams(param);
const id = idParam.get("id")

const updateTitle = document.getElementById("update-title");
const updateDesc = document.getElementById("update-description");
const updateContent = document.getElementById("update-content");
const updateForm = document.getElementById("update-form");

updateForm.addEventListener("submit", async function(e){
    e.preventDefault();

    const updateNotes = await fetch(`/service/updatemynotes?id=${id}`,{
        method: "POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify({
            title: updateTitle.value,
            desc: updateDesc.value,
            content: updateContent.value
        })
    })
    const response = await updateNotes.json()
    console.log(response)
    resetValue();

})

// reset value of input
function resetValue(){
    updateTitle.value = "";
    updateDesc.value = "";
    updateContent.value = ""
}
