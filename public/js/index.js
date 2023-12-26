// window.addEventListener('scroll',function(){
//     const old  =this.document.querySelector('.sidebar_pagers .active')
//     if(old)old.classList.remove('active')
    
   
//       const n  = document.documentElement.scrollTop
//       console.log(n);
//     })

         //这是上下两个箭头
     const  sidebarprev =  document.querySelector('.sidebar_nav-prev')
     const  sidebarnext =  document.querySelector('.sidebar_nav-next')
     const ones = this.document.querySelector('.one')
     const twos = this.document.querySelector('.two')
     const five = this.document.querySelector('.five')
     const rightone  = this.document.querySelector('.sidebar_pagers-num')
     const righttwo  = this.document.querySelector('.sidebar_pagers-num-two')
     const rightthree = this.document.querySelector('.sidebar_pagers-num-three')


    // 按钮点击事件
    sidebarnext.addEventListener('click',function(e){
        //  console.log(twos.offsetTop); 
        //  document.documentElement.scrollTop = twos.offsetTop    
        const n  =document.documentElement.scrollTop
        if(n < twos.offsetTop){
            document.documentElement.scrollTop = twos.offsetTop    
        }else if(n >=twos.offsetTop && n <=five.offsetTop){
            document.documentElement.scrollTop = five.offsetTop    
        }
})

    sidebarprev.addEventListener('click',function(e){
    //  console.log(twos.offsetTop); 
    //  document.documentElement.scrollTop = twos.offsetTop    
    const n  =document.documentElement.scrollTop
    // console.log(n);
    if(n <= five.offsetTop && n > twos.offsetTop){
        document.documentElement.scrollTop = twos.offsetTop    
    }else if(n <= twos.offsetTop){
        document.documentElement.scrollTop = 0
        
    }
})  

//     sidebarnext.addEventListener('click',function(e){
//     const n  =document.documentElement.scrollTop
//     if(n < righttwo.offsetTop){
//         document.documentElement.scrollTop = righttwo.offsetTop
//     }else if(n >= righttwo.offsetTop && n <= rightthree.offsetTop){
//         document.documentElement.scrollTop = rightthree.offsetTop
//     }
// })

    // else if(n >=twos.offsetTop || n <=five.offsetTop){
    //     document.documentElement.scrollTop = five.offsetTop    
    // }

    // //这是三个盒子
  
    // const n = this.document.documentElement.scrollTop
    // if( n >= ones.offsetTop && n < popular.offsetTop){}
    
//获取两个箭头
// (function(){
//     const  sidebarprev =  document.querySelector('.sidebar_nav-prev disable')
    
//     const  sidebarnext =  document.querySelector('.sidebar_nav-next')
  
// })