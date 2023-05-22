const posts = {
    vincent: {
        avatar: "./images/avatar-1.png",
        name: "Vincent van Gogh",
        location: "Zudert, Netherlands",
        photo: "./images/image-1.png",
        likes: "21,492",
        comment: ["vincey1853", "just took a few mushrooms lol"]
    },
    gustave: {
        avatar: "./images/avatar-2.png",
        name: "Gustave Courbet",
        location: "Ornans, France",
        photo: "./images/image-2.png",
        likes: "12,502",
        comment: ["gus1819", "i'm feelin a bit stressed tbh"]
    },
    joseph: {
        avatar: "./images/avatar-3.png",
        name: "Joseph Ducreux",
        location: "Paris, France",
        photo: "./images/image-3.png",
        likes: "15,137",
        comment: ["jd1735", "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"]
    }
}

const mainEl = document.getElementById("main-part")

function newElement(person) {
    const newEl = `
        <section class="posts">
            <div class="container">
                <div class="head-section">
                    <img src=${person.avatar} alt=${person.name}>
                    <div class="name-loc">
                        <span>${person.name}</span>
                        <span>${person.location}</span>
                    </div>
                </div>
                <div class="main-section">
                    <img class="main-img" src=${person.photo} alt=${person.name}>
                </div>
                <div class="like-com-section">
                    <div class="btns">
                        <button><img src="./images/like.png" alt="like"></button>
                        <button><img src="./images/comment.png" alt="comment"></button>
                        <button><img src="./images/share.png" alt="share"></button>
                    </div>
                    <span>${person.likes} likes</span>
                    <p><span>${person.comment[0]}</span>${person.comment[1]}</p>
                </div>
            </div>
        </section>
    `
    return newEl;
}

function appendMain(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newEl = newElement(obj[key])
            mainEl.innerHTML += newEl
        }
    }
}

document.addEventListener("DOMContentLoaded", appendMain(posts));




  