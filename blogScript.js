
// BLOG: FORM 

// go ahead, add a comment :D

const blogForm = document.querySelector('form.blogMainForm');

let list = document.querySelector('ul.blogMainComment');

blogForm.addEventListener('submit', function (event) {

    const comment = document.getElementById('comment');
    const commentValue = comment.value;
    console.log(commentValue);

    const name = document.getElementById('name');
    const nameValue = name.value;

    const email = document.getElementById('email');
    const emailValue = email.value;

    let today = new Date().toDateString();

    if (commentValue) {
        event.preventDefault();

        let newListItem = document.createElement('li');

        newListItem.innerHTML = `
            <img src="./assets/blank-profile.webp" alt="User Photo">
                <div class="commentText">
                    <p>${today} by ${nameValue}</p>
                    <p>${commentValue}</p>
                </div>`

        list.appendChild(newListItem);

        comment.value = "";
        name.value = "";
        email.value = "";
    }

})