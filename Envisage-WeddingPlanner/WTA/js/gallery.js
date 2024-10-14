
for (var i = 1; i <= 10; i++) {
    var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");
    var thumb = document.createElement("img");
    thumb.src = "images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    
}
thumb.addEventListener(
    "click", function() {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
    }
    );
thumb.classList.add("thumb");
imageThumbs.appendChild(thumb);