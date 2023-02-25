const displayCards = () => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow-lg rounded-md">
            <figure><img src="${element.imageURL}" alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">${element.name}</h2>
                <p>${element.description}</p>
                <div class="card-actions">
                    <button class="btn btn-xs">Price: ${element.price}</button>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(newDiv);
    });
}
displayCards();