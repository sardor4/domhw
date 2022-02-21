const box = document.querySelector('.box'),
      block = document.querySelectorAll('.block')
document.body.style = `margin: 0;
                       padding: 0;
                       box-sizing: border-box;`
box.style = `height: 100vh;
             display: flex;
             flex-wrap: wrap;`;
for (let i = 0; i < 4; i++) {
    if(i % 2){
        block[i].innerHTML = 'red'
        block[i].style = `width: 25%;
               height: 50%;
               background: black;
               font-family: Arial;
               color: red;
               display: flex;
               justify-content: center;
               align-items: center;`;
    }else{
        block[i].innerHTML = 'black'
        block[i].style = `width: 25%;
                          height: 50%;
                          background: red;
                          font-family: Arial;
                          color: black;
                          display: flex;
                          justify-content: center;
                          align-items: center;`;
    }
    
}
for (let i = 7; i > 3; i--) {
    if(i % 2){
        block[i].innerHTML = 'black'
        block[i].style = `width: 25%;
               height: 50%;
               background: red;
               font-family: Arial;
               color: black;
               display: flex;
               justify-content: center;
               align-items: center;`;
    }else{
        block[i].innerHTML = 'red'
        block[i].style = `width: 25%;
                          height: 50%;
                          background: black;
                          font-family: Arial;
                          color: red;
                          display: flex;
                          justify-content: center;
                          align-items: center;`;
    }
}