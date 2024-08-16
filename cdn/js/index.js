fetch("/liste.json")
.then(response => response.json())
.then(response => response.forEach((tome, i) => {
    const card = document.createElement("div");
    card.className = `tome${tome.owned ? " owned" : ""}`;
    card.id = i + 1;
    const index = document.createElement("p");
    index.innerText = i + 1;
    card.appendChild(index);
    const image = document.createElement("img");
    image.src = `/cdn/img/covers/${i + 1}.png`;
    image.alt = `Cover of ${tome.name.toUpperCase()}`;
    card.appendChild(image);
    const title = document.createElement("h4");
    title.innerText = tome.name.toUpperCase() || "?";
    card.appendChild(title);
    document.querySelector("#container").appendChild(card);
}));