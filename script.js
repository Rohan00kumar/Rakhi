alert (" Happy Raksha Bandhan All of You ", " 🥳🥳🥳🥳" ,"success");
alert ("click the card");
alert ("wait for loading music and pics");
window.addEventListener("mouseover",play);
window.addEventListener("click",play);
function play(){ document.getElementById("audio").play();
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCard = 0;

    setInterval(() => {
        cards[currentCard].style.transform = 'rotateY(-180deg)';
        currentCard = (currentCard + 1) % cards.length;
        cards[currentCard].style.transform = 'rotateY(0deg)';
    }, 5000); // Change card every 5 seconds
});
