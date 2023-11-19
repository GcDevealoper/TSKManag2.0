import { GalleryImages } from "../Main.js";
import { ActualContainer, loadGalleryActualContainer } from "./GallerySwitcher.js";




export function storeGallery(){
    let $GalleryContent = document.getElementById('DoingGallery').innerHTML
    localStorage.setItem('GalleryContent', $GalleryContent)
    localStorage.setItem('GalleryHasContent', true);
    localStorage.setItem('ActualContainer', ActualContainer)
    //StoreGalleryImages()
    //storeImagesVar()
}

export function loadGallery(){
      const GalleryhasContent = localStorage.getItem('GalleryHasContent')
      const $GalleryContent = localStorage.getItem('GalleryContent')
      const $GalleryContainer = document.getElementById('DoingGallery')

      if (!GalleryhasContent) storeGallery('false')
      else if (GalleryhasContent == 'true') {
      $GalleryContainer.innerHTML = $GalleryContent
      loadGalleryActualContainer()
      let eraseButton = document.querySelectorAll('.eraseCard');
      let carta = document.querySelectorAll('.DoingCard');
      //listener borrar carta
      for(let i=0;i<carta.length;i++){
        eraseButton[i].addEventListener("click", (e)=>{
          carta[i].remove();
          e.stopPropagation()
          storeGallery()
        }, false)
      };
    }
}