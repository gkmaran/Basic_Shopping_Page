let products=[{id:1,name:"Psychology Of Money",price:450,qty:0},
    {id:2,name:"Atomic Habits",price:250,qty:0},
    {id:3,name:"Deep Work",price:550,qty:0},
    {id:4,name:"Art Of Laziness",price:650,qty:0},]
    let cart=[];
    let productElement=document.getElementById("products-list")
    let cartElement=document.getElementById("cart-items")
    let totalElement=document.getElementById("total-price")
    productElement.className='head'
    productElement.innerHTML=`<h1>Magic Book Store</h1>`
    function renderProducts(){
        products.forEach(item =>{
            let productDiv=document.createElement("div");
            productDiv.className='item'
            productDiv.innerHTML=`<h3>${item.name}-
            Rs-${item.price}</h3>
            <button onclick="addToCart(${item.id})">Add To Cart<i class="fa-solid fa-cart-shopping"></i></button>
            `
            productElement.appendChild(productDiv);
        })
    }
    renderProducts()
    function addToCart(productId){
        let product =products.find(p=> p.id===productId)
        let dup = cart.find(item=>item.id == product.id)
        if (dup){
            product.qty +=1;
        }
        else{
            cart.push(product);
            product.qty =1;
        }
        
        renderCart()
        
    }
    function renderCart(){
        cartElement.innerHTML="";
        cartElement.className='addCart'
        total=0;
            if(cart.length==0){
                cartElement.innerHTML=`<h2>Your Cart Is Empty</h2>`;
            }else{
            let cartDiv=document.createElement("table");
            cartDiv.className='cartItem'
            cartDiv.innerHTML +=`<tr>
            <th>ProductName</th>
            <th>Price</th>
            <th>Qty</th>
            </tr>
           `;
            cart.forEach((item,i)=>{
            total += item.qty * item.price;
            cartDiv.innerHTML +=`<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td><button class="remove" onclick="removeCart(${i})"><i class="fa-solid fa-trash-alt"></i></button></td>
            </tr>
           `;
        })
        cartDiv.innerHTML+=`<tr>
            <td colspan="2">Total</td>
            <td>${total}</td>
            <td></td>
            </tr>`;
        cartElement.appendChild(cartDiv);
    }
    }
    function removeCart(index){
        if(cart[index].qty===1){
            cart.splice(index,1);
        }else{
            cart[index].qty-=1;
        }
        renderCart();
    }
renderCart();
