window.addEventListener('DOMContentLoaded', () => {
  const currentCountProd = document.querySelectorAll('.current-count')
  if (currentCountProd) {
    
    currentCountProd.forEach(item => {
      let countSaleProd = item.dataset.count;
      if (localStorage.getItem('counter')) {
        item.innerHTML = localStorage.getItem('counter');
        setTimeout(() => {
          startCounter(item, localStorage.getItem('counter'));
        }, 5000);
      } else {
        setTimeout(() => {
          startCounter(item, countSaleProd);
        }, 5000);
      }
    })
   
  }
})

const startCounter = (selctor, count) => {
  let countInteraval = setInterval(() => {
    localStorage.setItem('counter', count)
    count--
    if (localStorage.getItem('counter') >= 4) {
      selctor.innerHTML = localStorage.getItem('counter');
    } else {
      clearInterval(countInteraval);
    }
  }, 10000);
}