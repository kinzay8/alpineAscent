function makeProductColumn(product={}){
return`<div class="col-md-4 col-sm-6 pd">
<div class="maincard card" style="width: 25rem; overflow: hidden;">
<div class="zoom">
    <a href=""><img class="card-img-top w-100" style="height:20rem" src="${imageUrl}${product.image}" alt=""></a>
</div>
<div class="card-body container-fluid">
<h5 class="card-text">${product.name}</h5>
</div>
</div>
</div>`
}
function makeProductGrid(title, products= []){
    let gridHtml=` <div class="container mt-5">
    <h2 class="text-end h2">${title}</h2>
    <div class="row">`
const columns = products.map((item,)=>{
    return makeProductColumn(item)

})
gridHtml += columns.join('')

gridHtml += `</div>
</div>`
return gridHtml
}
