const resultsContainer = document.getElementById("results");

// Objeto JSON de exemplo
fetch("BD.json")
    .then((response) => response.json())
    .then((data) => {
        // Processar o JSON aqui
        search(data);
    })
    .catch((error) => {
        // Tratar erros aqui
        console.error(error);
    });

// Loop através do objeto JSON e criar elementos HTML para cada item
function search(products) {
    Object.keys(products).forEach((key) => {
        const product = products[key];
        // Criar o elemento da miniatura do produto
        const productElem = document.createElement("div");
        productElem.classList.add("result");

        // Criar a imagem do produto
        const imgElem = document.createElement("img");
        imgElem.src = product.image;
        productElem.appendChild(imgElem);

        // Criar o título do produto
        const titleElem = document.createElement("h2");
        titleElem.textContent = product.name;
        productElem.appendChild(titleElem);

        // Criar a descrição do produto
        const descElem = document.createElement("p");
        descElem.textContent = truncateString(product.description);
        productElem.appendChild(descElem);

        // Criar o botão de adicionar ao carrinho
        const btnElem = document.createElement("button");
        btnElem.textContent = `Ver Detalhes - R$${product.price.toFixed(
            2
        )}`;
        productElem.appendChild(btnElem);

        // Adicionar a miniatura do produto ao container de resultados
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
