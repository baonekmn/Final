/*Name this external file gallery.js*/
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    let textDiv = document.getElementById("image-text");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    textDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");
    let textDiv = document.getElementById("image-text");
    imageDiv.style.backgroundImage = "url('')";
    textDiv.innerHTML = "Hover over an image below to display here.";
}