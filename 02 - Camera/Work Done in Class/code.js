
function showImage() {
    console.log('-- Showing image');
    
    let reader = new FileReader();
    
    reader.onload = function (e) {
        $('#preview').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(this.files[0]);
}

$(':file').change(showImage);

