document.getElementById('fileUploadWrapper').addEventListener('click', function() {
    document.getElementById('captureImage').click();
});

document.getElementById('captureImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileNameSpan = document.getElementById('fileName');
    if (file) {
        fileNameSpan.textContent = file.name;
    } else {
        fileNameSpan.textContent = 'No se ha seleccionado ningún archivo';
    }
});