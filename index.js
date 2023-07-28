let iconClose=document.querySelector(".close_img")
let inconMenu=document.querySelector(".menu_img")


iconClose.addEventListener("click",closeMenu)
inconMenu.addEventListener("click",showMenu)

function closeMenu(){
   let folding_menu=document.querySelector(".folding_menu")
   folding_menu.classList.remove(".show_menu")
  
}
function showMenu(){
   let folding_menu=document.querySelector(".folding_menu")
   folding_menu.classList.add(".show_menu")
   


}