const progress = document.getElementById( "progress" );

document.forms.form.addEventListener("submit", (event)=>{
    let fileUpload = new XMLHttpRequest();
    let formData = new FormData();           
    formData.append("file", file.files[0]);
    fileUpload.upload.addEventListener("progress", (event) => {
        progress.value = (event.total !== 0)? event.loaded / event.total: 0;
    })
     
    fileUpload.open("POST", event.target.action);   
    fileUpload.send(formData);
    event.preventDefault();
    event.stopPropagation();
}
)