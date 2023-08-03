const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#colse-btn");
const themeToggler= document.querySelector(".themeToggler");

menuBtn.addEventListener('click',( ) =>{
    sideMenu.style.display= 'block';
})

closeBtn.addEventListener('click',( ) =>{
    closeBtn.style.display= 'block';
})
themeToggler.addEventListener('click',( ) =>{
    themeToggler.body.classList.toggler('dark-theme-varaible');
    themeToggler.querySelector('span:nth-child(1)').classList.toggler('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggler('active');
})

Orders.forEach(order =>{
    const tr =document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping ==='Declined' ? 'Danger' : 
    order.shipping === 'pending' ?'warning': 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML =trContent;
    document.querySelector('table tbody').appendChild(tr);
})

