const $body = document.querySelector('body')
const mob_btn = document.querySelector('.mob_btn')


// 스크롤이 되면 헤더 배경색 들어감
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  //console.log(scroll)

  if(scroll > 80){
    $body.classList.add('scrolling')
  } else {
    $body.classList.remove('scrolling')
  }
})

// 햄버거버튼을 클릭
mob_btn.addEventListener('click',(e)=>{
  e.preventDefault()
  $body.classList.toggle('mOpen')
})