// HOME: LIGHTBOX 

lightboxApp = {}

lightboxApp.init = () => {
    lightboxApp.openLightbox();
    lightboxApp.closeLightbox();
    lightboxApp.slideLightbox(); 
}

// variables

lightboxApp.images = document.querySelectorAll('.galleryContainer');
lightboxApp.imagesLightbox = document.querySelectorAll('.galleryContainerSlide');
lightboxApp.lightbox = document.getElementById('lightbox');
lightboxApp.close = document.getElementById('close');

// Open

lightboxApp.showLightbox = () => {
    lightboxApp.lightbox.style.display = "flex";
}

lightboxApp.openLightbox = () => {
    lightboxApp.images.forEach((image) => {
        image.addEventListener('click', lightboxApp.showLightbox);
    })
}

// Close

// I wanted "close" to work anywhere outside the image.
// Inspiration from Squarespace Forum by "bangank36"
// Link ➡ https://forum.squarespace.com/topic/173126-close-lightbox-form-when-clicking-outside-the-form/

lightboxApp.closeLightbox = () => {
    document.addEventListener("click", function (event) {
        let element = event.target;
        if (element.querySelector('img') || element.classList.contains('close') ) {
            lightboxApp.lightbox.style.display = 'none';
        }
    });
}

// starting index

lightboxApp.slideIndex = 1;

 // general function to hold it all together for init
    
lightboxApp.slideLightbox = () => {

    // main controls of this lightbox

    lightboxApp.slideControl = (photoIndex) => {

        // if it reaches the end, go back to the first slide

        if (photoIndex > lightboxApp.imagesLightbox.length) {
            lightboxApp.slideIndex = 1;
        }

        // if reaches the end (going the other end), go to slides.length, aka last picture

        if (photoIndex < 1) {
            lightboxApp.slideIndex = lightboxApp.imagesLightbox.length;
        }

        // hiding the other images 

        lightboxApp.hideLightboxImage();

        // taking all of the images [(index of the one I need) - (default slideIndex)]  

        lightboxApp.imagesLightbox[lightboxApp.slideIndex - 1].style.display = "block";
    }

    // hide previous image in lightbox

    lightboxApp.hideLightboxImage = () => {
        lightboxApp.imagesLightbox.forEach((image) => {
            image.style.display = "none";
        })
    }

    // current slide

    lightboxApp.currentSlide = (photoIndex) => {
        lightboxApp.slideControl(lightboxApp.slideIndex = photoIndex);
    }

    // change slide

    lightboxApp.changeSlide = (changeIndex) => {
        lightboxApp.slideControl(lightboxApp.slideIndex += changeIndex);
    }
}

lightboxApp.init();





