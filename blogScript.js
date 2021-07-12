// BLOG: FORM 

// go ahead, add a comment :D

const blogForm = document.querySelector('form.blogMainForm');
const list = document.querySelector('ul.blogMainComment');

blogForm.addEventListener('submit', function (event) {

    const comment = document.getElementById('comment');
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    const today = new Date().toDateString();

    if (comment.value) {
        event.preventDefault();

        const newCommentItem = document.createElement('li');

        newCommentItem.innerHTML = `
            <img src="./assets/blank-profile.webp" alt="User Photo">
                <div class="commentText">
                    <p><strong>${today} by ${name.value}</strong></p>
                    <p>${comment.value}</p>
                </div>`

        list.appendChild(newCommentItem);

        comment.value = "";
        name.value = "";
        email.value = "";
    }

})