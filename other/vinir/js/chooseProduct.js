window.addEventListener('DOMContentLoaded', () => {
  const linksChooseProd =  document.querySelectorAll('.new-section__list-text');
  const orderLink = document.querySelector('.order-link');
  const modalInfoProd = document.querySelector('.modal-info-prod');
  linksChooseProd.forEach(item => {
    item.addEventListener('click', (event)=>{
      event.preventDefault();
      let linkPath = event.target.getAttribute("href");
      for(let i = 0; i < linksChooseProd.length; i++) {
        linksChooseProd[i].parentNode.classList.remove('active');
      }
      event.target.parentNode.classList.add('active');
      orderLink.setAttribute('href', linkPath);
      for(let i = 0; i < linksChooseProd.length; i++) {
        if(linksChooseProd[i].parentNode.classList.contains('active')){
          modalInfoProd.classList.remove('show');
        }
      }
    })
  });
  console.log(orderLink.getAttribute('href').length);
  orderLink.addEventListener('click', (event)=> {
    console.log(event.target.getAttribute('href'))
    if(event.target.getAttribute('href') == ''){
      event.preventDefault()
      console.log('Выберете товар');
      modalInfoProd.classList.add('show');
    }
  })
  
})