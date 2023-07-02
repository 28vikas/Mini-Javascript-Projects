

let url = "https://fakestoreapi.com/products"


fetch(url)
.then(res=> res.json())
.then(data =>{

    console.log(data)

    products = ""

    data.forEach(element => {
        products += `  <div class="maincard">
        <h3><span class ="tit">Title: </span>${element.title}</h3>
        <img src="${element.image
        }" alt="">
        <p>Price:${ element.price}</p>
    </div>`
    });
    

    document.getElementById("card").innerHTML = products;
}).catch(err => {
    console.log(err)
})