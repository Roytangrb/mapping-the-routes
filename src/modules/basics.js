const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const Basics = function(){}


Basics.lightbox = ()=>{
	const image = $$('.modal-image')
  const modal = $$('.modal')
  const modalImg = $$('.modal-content')

  const handler = function(evt){
    modal[i].style.display = "block";
    modalImg[i].src = evt.target.src;

    var span = document.getElementsByClassName("close")[i];
    span.onclick = function() {
      modal[i].style.display = "none";
    }
  }

	image.forEach( (target, i) => {
    target.addEventListener('click', handler)
	})

  return () => {
    image.forEach( target => {
      target.removeEventListener('click', handler)
    })
  }
}


Basics.dropdown = (isDesktop)=>{
  const handler = event => {
    $("#dropdownctn").classList.toggle("show")
  }

  $("#dropbtn").addEventListener(isDesktop ? 'click' : 'touchend', handler)

  return () => {
    $("#dropbtn").removeEventListener(isDesktop ? 'click' : 'touchend', handler)
  }
}

Basics.burgermenu = ()=>{
  const handler = event => {
    $(".country-list").classList.toggle('show') 
  }

  $("#burgerbtn").addEventListener('touchend', handler)

  return () => {
    $("#burgerbtn").removeEventListener('touchend', handler)
  }
}

Basics.init = (isDesktop) => {
  //return handlers
  if (isDesktop){
    return [Basics.lightbox(), Basics.dropdown(isDesktop)]
  }else {
    return [Basics.burgermenu(), Basics.dropdown(isDesktop)]
  }
}

export default Basics
