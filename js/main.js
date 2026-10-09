const bossCards = document.querySelectorAll(".boss-card");

bossCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const bossId = card.dataset.bossId;

        window.location.href = "boss.html?id=" + bossId;
    });
});