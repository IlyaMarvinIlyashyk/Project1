
// // BLOG: FORM 

// // go ahead, add a comment :D

// const blogForm = document.querySelector('form.blogMainForm');

// let list = document.querySelector('ul.blogMainComment');

// blogForm.addEventListener('submit', function(event) {
    
//     const comment = document.getElementById('comment');
//     const commentValue = comment.value;
//     console.log(commentValue);
    
//     const name = document.getElementById('name');
//     const nameValue = name.value;

//     const email = document.getElementById('email');
//     const emailValue = email.value;
    
//     let today = new Date().toDateString();

//     if (commentValue) {
//         event.preventDefault();
        
//         let newListItem = document.createElement('li');
        
//         newListItem.innerHTML = `
//             <img src="./assets/blank-profile.webp" alt="User Photo">
//                 <div class="commentText">
//                     <p>${today} by ${nameValue}</p>
//                     <p>${commentValue}</p>
//                 </div>`
        
//         list.appendChild(newListItem);
        
//         comment.value = "";
//         name.value = "";
//         email.value = "";
//     }

// })

// HOME: LIGHTBOX 

const images = document.getElementsByClassName("galleryContainer");
const imagesLightbox = document.getElementsByClassName("galleryContainerSlide");
const lightbox = document.getElementById("lightbox");
const close = document.getElementById("close");

// Open

function openLightbox() {
    lightbox.style.display = "flex";
}

// Close

function closeLightbox() {
    lightbox.style.display = "none";
}

// ALSO I wanted "close" to work anywhere outside the image.
// Inspiration from Squarespace Forum by "bangank36"
// Link ➡ https://forum.squarespace.com/topic/173126-close-lightbox-form-when-clicking-outside-the-form/

document.addEventListener("click", function (event) {
    // console.log(event.target);
    let element = event.target;
    if (element.querySelector('img') || element.classList.contains('close') ) {
        closeLightbox();
    }
});

// Overall, I found making a lightbox pretty challenging. 
// But, with the help of feeCodeCamp and W3 Schools, this is what i came up with!
// freeCodeCamp ➡ https://www.freecodecamp.org/news/how-to-create-a-lightbox-using-html-css-and-javascript/
// W3 Schools ➡ https://www.w3schools.com/howto/howto_js_lightbox.asp

let slideIndex = 1;
showSlide(slideIndex);

function currentSlide(photoIndex) {
    showSlide(slideIndex = photoIndex);
    // console.log(photoIndex);
}

function changeSlide(changeIndex) {
    showSlide(slideIndex += changeIndex);
    // console.log(changeIndex);
}

function showSlide(photoIndex) {

    // Forloop to target the right image, created with the help of Stack Oveflow. 
    // I discovered that if targetting a class with "getElementsByClassName" and not by ID, will return an array! 😨
    // Shoutout to "syazdani" on Stack Overflow for inspiration.  
    // link ➡ https://stackoverflow.com/questions/32151704/addeventlistener-is-not-a-function
    
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", openLightbox);
    }
    
    // if it reaches the end, go back to beginning
    
    if (photoIndex > imagesLightbox.length) {
        slideIndex = 1
    }
    
    // if reaches the end, go to slides.length, aka last picture
    
    if (photoIndex < 1) {
        slideIndex = imagesLightbox.length
    }
    
    // hiding other images, another forloop 😭
    
    for (i = 0; i < imagesLightbox.length; i++) {
        imagesLightbox[i].style.display = "none";
    }
    
    // taking all of the images [(index of the one I need) - (default slideIndex)]  
    
    imagesLightbox[slideIndex - 1].style.display = "block";    
}


