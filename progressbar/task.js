const progress = document.getElementById( "progress" );

const submitBtn = document.getElementById( "send" );

submitBtn.addEventListener("click", (event)=>{
    let fileUpload = new XMLHttpRequest();
    let formData = new FormData();           
    formData.append("file", file.files[0]);
    fileUpload.addEventListener("progress", (event) => {
        // progress.value = event.loaded / event.total;
        progress.value = event.loaded / file.files[0].size;
    })
     
    fileUpload.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");   
    fileUpload.send(formData);
    event.preventDefault()
    event.stopPropagation();
}
)