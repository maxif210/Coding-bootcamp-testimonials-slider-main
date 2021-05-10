const prev = document.getElementById("prev");
const next = document.getElementById("next");
const parrafo = document.getElementById("texto");
const profileInfo = document.getElementById("profile-info");
const slider = document.getElementsByClassName("slider")[0];

prev.addEventListener('click', changeCard);
next.addEventListener('click', changeCard);
const characters = [
    {
        name: "Tanya Sinclair",
        profession: "UX Engineer",
        description: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`
    },
    {
        name: "John Tarkpor",
        profession: "Junior Front-end Developer",
        description: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`

    }

]

function changeCard() {
    const profileImg = document.getElementById("profile-img");

    if (profileImg.currentSrc == "http://127.0.0.1:5500/images/image-tanya.jpg") {
        profileImg.src = "http://127.0.0.1:5500/images/image-john.jpg";
        parrafo.textContent = characters[1].description;
        profileInfo.firstElementChild.innerText = characters[1].name;
        profileInfo.lastElementChild.innerText = characters[1].profession;

    } else {
        profileImg.src = "http://127.0.0.1:5500/images/image-tanya.jpg";
        parrafo.textContent = characters[0].description;
        profileInfo.firstElementChild.innerText = characters[0].name;
        profileInfo.lastElementChild.innerText = characters[0].profession;
    }
}



document.onkeydown = function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        changeCard();
    } else {
        return
    }
}
