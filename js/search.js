const products = [
    {
      id: 1,
      name: "Apple",
      category: "Fruit",
      description:
        "A round fruit with a red, green, or yellow skin and a white, crunchy interior.Lorem ipsum dolor sit amet.",
      price: 89,
      rating: 5,
      discount: 0,
      image: "https://picsum.photos/200/300/?food0",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruit",
      description:
        "A long, curved fruit with a yellow skin and sweet, creamy white flesh.Lorem ipsum dolor sit amet.",
      price: 71,
      rating: 5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food1",
    },
    {
      id: 3,
      name: "Bread",
      category: "Bakery",
      description:
        "A staple food made from flour, water, and yeast, baked into a loaf.Lorem ipsum dolor sit amet.",
      price: 88,
      rating: 5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food2",
    },
    {
      id: 4,
      name: "Broccoli",
      category: "Vegetable",
      description:
        "A green vegetable with a tree-like appearance, known for its high nutrient content.Lorem ipsum dolor sit amet.",
      price: 94,
      rating: 4.5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food3",
    },
    {
      id: 5,
      name: "Carrot",
      category: "Vegetable",
      description:
        "A root vegetable with a crunchy texture and a sweet, earthy flavor.Lorem ipsum dolor sit amet.",
      price: 82,
      rating: 5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food4",
    },
    {
      id: 6,
      name: "Cheese",
      category: "Dairy",
      description:
        "A dairy product made from milk, with a variety of textures and flavors.Lorem ipsum dolor sit amet.",
      price: 91,
      rating: 3.5,
      discount: 50,
      image: "https://picsum.photos/200/300/?food5",
    },
    {
      id: 7,
      name: "Chicken",
      category: "Meat",
      description:
        "A type of poultry, often used as a source of protein in meals.Lorem ipsum dolor sit amet.",
      price: 68,
      rating: 3.5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food6",
    },
    {
      id: 8,
      name: "Chocolate",
      category: "Dessert",
      description:
        "A sweet food made from cacao beans, used in a variety of desserts and confections.Lorem ipsum dolor sit amet.",
      price: 61,
      rating: 4.5,
      discount: 20,
      image: "https://picsum.photos/200/300/?food7",
    }
  ];



const productsRow = document.querySelector("#products-row");
const productsCategories = document.querySelector(".products-categories");
const searchInput = document.querySelector(".search-products");
const productsCount = document.querySelector(".products-count");

let selectedCategory = "all";
let search = "";

function getProductCard({ image,  name, price, rating, description, id }) {
  return `
  <div class="col-lg-12 col-md-12 col-sm-4 mb-3">
  <div class="product-card d-flex gap-5">
      <div class="img">
          <img src="${image}" class="card-img-top" alt="${name}" />
      </div>
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h3>Top 6 free website mockup tools 2022</h3>
          <p class="card-text">
              ${description}
          </p>
      </div>
  </div>
</div>
  `;
}


// mapping products

function getProducts() {
  productsRow.innerHTML = "";
  let searchProducts = products.filter(
    (el) =>
      el.name.toLowerCase().includes(search.toLowerCase()) ||
      el.description.toLowerCase().includes(search.toLowerCase())
  );
  if (selectedCategory !== "all") {
    searchProducts = searchProducts.filter(
      (el) => el.category === selectedCategory
    );
  }
  searchProducts.forEach((el) => {
    productsRow.innerHTML += getProductCard(el);
  });
  productsCount.innerHTML = `${searchProducts.length} products are found !`;
}

getProducts();

// handling search value

searchInput.addEventListener("input", function () {
  search = this.value;
  getProducts();
});

// mapping categories

function getCategories() {
  category.forEach((category) => {
    productsCategories.innerHTML += `<option value="${category.name}">${category.name}</option>`;
  });
}

getCategories();

// handling category value

productsCategories.addEventListener("change", function () {
  selectedCategory = this.value;
  getProducts();
});
