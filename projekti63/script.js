const header = document.getElementById("header");

const title = document.getElementById("title");

const excerpt = document.getElementById("excerpt");

const profileImg = document.getElementById("profile_img");

const name = document.getElementById("name");

const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");

const animatedBgsText = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500)

function getData() {

    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="" />`

    title.innerHTML = "Lorem ispum dolor sit amet";

    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolore preferendis."

    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`

    name.innerHTML = "John Doe";

    date.innerHTML = "December 8th 2020";

    animatedBgs.forEach(bg => {

        bg.classList.remove("animated-bg");

        
    })

    animatedBgsText.forEach(bgText => {

        bgText.classList.remove("animated-bg-text");

        
    })

}