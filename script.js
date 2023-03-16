const resultsContainer = document.getElementById("results");

fetch("BD.json")
    .then((response) => response.json())
    .then((data) => {
        search(data);
    })
    .catch((error) => {
        console.error(error);
    });


function search(products) {
    Object.keys(products).forEach((key) => {
        const product = products[key];

        const productElem = document.createElement("div");
        productElem.classList.add("result");

        const imgElem = document.createElement("img");
        imgElem.src = product.image;
        productElem.appendChild(imgElem);

        const titleElem = document.createElement("h2");
        titleElem.textContent = product.name;
        productElem.appendChild(titleElem);

        const descElem = document.createElement("p");
        descElem.textContent = truncateString(product.description);
        productElem.appendChild(descElem);

        const btnElem = document.createElement("a");
        btnElem.classList.add("productBtn");
        btnElem.setAttribute("href", `/product.html?id=${product.id}`);
        btnElem.textContent = `Ver Detalhes R$${product.price.toFixed(2)}`;
        productElem.appendChild(btnElem);
        resultsContainer.appendChild(productElem);
    });
}

function truncateString(str) {
    var newStr = "";
    const num = 100;

    if (num <= 3) {
        newStr = str.slice(0, num) + "...";
    } else if (str.length > num) {
        newStr = str.slice(0, num - 3) + "...";
    } else {
        return str;
    }

    return newStr;
}
