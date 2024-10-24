const $body = document.querySelector('body')
const mob_btn = document.querySelector('.mob_btn')
const $sec05 = document.querySelector('.sec05 .boxes')


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

//  카운트 함수를 sec05가 화면이 보일때 작동시킴
const io = new IntersectionObserver((ss)=>{
  if(ss[0].isIntersecting){
    countFunc()
  }
})
io.observe($sec05)


//  각 section이 화면에 보일때 textWrap에 ani클라스를 집에 넣는다
const $targets = document.querySelectorAll('section .text_wrap')
//console.log($targets)

let io2 = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      console.log(entry)
      entry.target.classList.add('ani')
    } else {
      entry.target.classList.remove('ani')
    }
  })
})

$targets.forEach(tw =>{
  io2.observe(tw)
})


