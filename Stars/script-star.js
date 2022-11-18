productsGet();
async function productsGet(){
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  let count = ``;
  for(let i = 0; i<products.length; i++){
    count += `<p>${products[i].rating.count}</p>`  



    let rate = ``;
      rate += ` <h2> ${Math.round(products[i].rating.rate)} </h2> `  
    console.log(rate);


  }
}



// men aldigim rate = spanin valuesine ona activ clasi elave et bereber deilse galsin 



