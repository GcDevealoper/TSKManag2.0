//Loader
export function EraseLoader(){
  const $Loader = document.getElementById('loader')
  setTimeout(()=>{
    $Loader.classList.add('Loaded')
  }, 1500)

  $Loader.addEventListener("transitionend", ()=>{$Loader.remove()})
}
