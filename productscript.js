const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    fetch("BD.json")
      .then((response) => response.json())
      .then((data) => {
        // Processar o JSON aqui
        prodPage(data[id]);
      })
      .catch((error) => {
        // Tratar erros aqui
        console.error(error);
      });
    function prodPage(product) {
      const titleElement = document.querySelector("h3");
      const authorElement = document.querySelector("#author");
      const priceElement = document.querySelector("#price");
      const descriptionElement = document.querySelector("#description");
      const coverImageElement = document.querySelector("img");

      // Set the book information in the HTML elements
      titleElement.innerHTML = product.name;
      authorElement.innerHTML = product.author;
      priceElement.innerHTML = "R$" + product.price.toFixed(2);
      descriptionElement.innerHTML = product.description;
      coverImageElement.src = product.image;
    };