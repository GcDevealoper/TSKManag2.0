//Watching variables
let mangasBtn = document.getElementById('MBtn');
let animeBtn = document.getElementById('AnBtn');
let gameBtn = document.getElementById('GaBtn');
let mangasCont = document.querySelectorAll('.Mangas');
let animeCont = document.querySelectorAll('.Animes-Series');
let gameCont = document.querySelectorAll('.Games');
export let doingStatus = "manga";
let sectionBtn = document.querySelectorAll('.SectionBtn');
let addCardBtn = document.querySelectorAll('.Addbtn');

/*---------------------------------------------*/
//Cambiando de Seccion en Watching
export function loadGalleryActualContainer(){
  const GalleryhasContent = localStorage.getItem('GalleryHasContent')
  ActualContainer = localStorage.getItem('ActualContainer')
}

export let ActualContainer = 0;
export let GalleryButtons = document.querySelectorAll('.SectionBtn')
export let Gallerycontainers = document.querySelectorAll('.GalleryContainer')

export function GallerySwitcher(Container){

resetearGalleria()
SeleccionarGalleria(Container)
ActualContainer = Container

  switch (Container) {
    case 0:
       doingStatus = "manga";
      break;
    case 1:
       doingStatus = "Anime-Series";
      break;
    case 2:
       doingStatus = "games";
      break;
  }

}

 
function resetearGalleria() {
    let GalleryButtons = document.querySelectorAll('.SectionBtn')
    let Gallerycontainers = document.querySelectorAll('.GalleryContainer')
    for(let i=0;i<GalleryButtons.length;i++){GalleryButtons[i].classList.remove('Selected')}
    for(let i=0;i<Gallerycontainers.length;i++){Gallerycontainers[i].classList.remove('open')}
}
    
function SeleccionarGalleria(i) {
    GalleryButtons = document.querySelectorAll('.SectionBtn')
    Gallerycontainers = document.querySelectorAll('.GalleryContainer')
    addCardBtn = document.querySelectorAll('.Addbtn');    
    Gallerycontainers[i].classList.toggle('open');
    GalleryButtons[i].classList.toggle('Selected');
}

