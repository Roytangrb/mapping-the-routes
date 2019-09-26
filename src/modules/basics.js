const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const Basics = function(){}


  Basics.lightbox = ()=>{

    	const image = $$('.modal-image')
      const modal = $$('.modal')
      const modalImg = $$('.modal-content')

    	image.forEach((image, i)=> {
        image.onclick = function(){
          modal[i].style.display = "block";
          modalImg[i].src = this.src;

          var span = document.getElementsByClassName("close")[i];
          span.onclick = function() {
            modal[i].style.display = "none";
          }
        }
    	})

    }


    Basics.dropdown = ()=>{

      //add listener for click
      $("#dropbtn").addEventListener('click', handler)
      //add listener for touch
      $("#dropbtn").addEventListener('touchend', handler)

      const handler = event => {
        $("#dropdownctn").classList.toggle("show")
      }

      }

      Basics.init = (isDesktop) => {

        if (isDesktop){
          //return all controllers
          return [Basics.lightbox()]
        }

      }

  export default Basics
