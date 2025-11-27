// LISTE DES PRODUITS
const products = [
    {id:1, name:"iPhone 12", price:250000, category:"smartphone", img:"https://i.imgur.com/7OFtq6F.jpeg"},
    {id:2, name:"Samsung S21", price:230000, category:"smartphone", img:"https://i.imgur.com/2rHkzH3.jpeg"},
    {id:3, name:"Écouteurs Bluetooth", price:15000, category:"audio", img:"https://i.imgur.com/XyGzL8O.jpeg"},
    {id:4, name:"Power Bank 20.000mAh", price:12000, category:"accessoire", img:"https://i.imgur.com/GgKfZPt.jpeg"},
    {id:5, name:"Casque Gaming RGB", price:18000, category:"audio", img:"https://i.imgur.com/T0eHz92.jpeg"},
    {id:6, name:"Chargeur Rapide 30W", price:7000, category:"accessoire", img:"https://i.imgur.com/eeYB6uE.jpeg"}
];

let cart = [];

const productList = document.getElementById("product-list");

// AFFICHAGE PRODUITS
function displayProducts(list){
    productList.innerHTML = "";
    list.forEach(p => {
        productList.innerHTML += `
            <div class="product">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>${p.price} FCFA</p>
                <button onclick="addToCart(${p.id})">Ajouter au panier</button>
            </div>
        `;
    });
}
displayProducts(products);

// AJOUT PANIER
function addToCart(id){
    const item = products.find(p => p.id === id);
    cart.push(item);
    document.getElementById("cart-count").innerText = cart.length;
}

// OUVRIR PANIER
function openCart(){
    document.getElementById("cart-modal").style.display = "flex";

    let html = "";
    let total = 0;

    cart.forEach(c => {
        html += <p>${c.name} - ${c.price} FCFA</p>;
        total += c.price;
    });

    document.getElementById("cart-items").innerHTML = html;
    document.getElementById("cart-total").innerText = total;
}

// FERMER PANIER
function closeCart(){
    document.getElementById("cart-modal").style.display = "none";
}

// RECHERCHE PRODUIT
function searchProduct(){
    let text = document.getElementById("search").value.toLowerCase();

    let results = products.filter(p => p.name.toLowerCase().includes(text));

    displayProducts(results);
}

// FILTRE CATÉGORIE
function filterCategory(cat){
    if(cat === "all"){
        displayProducts(products);
    } else {
        displayProducts(products.filter(p => p.category === cat));
    }
}