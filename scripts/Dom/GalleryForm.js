import { GalleryImages, setVariable } from "../Main.js";
import { ActualContainer, doingStatus, Gallerycontainers } from "./GallerySwitcher.js";
import { storeGallery } from "./SaveGallery.js";
import { FormStatus } from "./ToDoList.js";

//CartasDinamicas
let doingCards = document.querySelectorAll('.DoingCard');
let addCardBtn = document.querySelectorAll('.Addbtn');
let mangasCont2 = document.getElementById('Mangas');
let animeCont2 = document.getElementById('Anime');
let gameCont2 = document.getElementById('Game');
let cardsForm = document.querySelectorAll('.CardFormBg');
let formCards = document.getElementById('CardsForm');
let closeBtn = document.getElementById('CloseForm');
let verifyBtn = document.getElementById('Verificar');
let manageCards = document.getElementById('manageCards');
let mangaBook = "";
let number = 0;
let src;
let OptionStatus = 0
//GestionarGallery()
export function GestionarGallery(e){
let addCardBtn = document.querySelectorAll('.Addbtn');
let cardsForm = document.querySelectorAll('.CardFormBg');
    
//haciendo un for para recorrer el arreglo de botones
for(let i=0;i<addCardBtn.length;i++){
//añadiendo un listener al boton correspondiente
	addCardBtn[i].addEventListener("click", ()=>{
        cardsForm[0].classList.add('open');
        //creando el formulario de cartas
        createForm();
        //reseteando los botones de borrar
        let eraseButton = document.querySelectorAll('.eraseCard')
        for(let i=0;i<eraseButton.length;i++){
          eraseButton[i].classList.remove('open');
        }

        
    });
};

//cerrarForm()
}


function createForm(){
    //Imagen de fondo

        let formCards = document.getElementById('CardsForm');
        src = `media/Manga/${doingStatus}.png`;
        let imageCont = document.createElement("div");
        imageCont.setAttribute("id", "ImagePreview")
        let imageBg = document.createElement("img");
        imageBg.setAttribute("src",`${src}`);
        imageCont.appendChild(imageBg);
    
    //Formulario
        let form = document.createElement("form");
        form.setAttribute("id","Form");
    
    
    //Contenedor de las Opciones
        let Options = document.createElement("div")
        Options.setAttribute("id", "Options")
    
    //Botones
        let btnsCont = document.createElement("div");
        btnsCont.style.display = "flex";
        btnsCont.style.width = "auto";
        btnsCont.style.gap = "8px";
        btnsCont.setAttribute('id', 'VerifyContainer')
        let vBtn = document.createElement("span");
        vBtn.setAttribute("id","Verificar");
        vBtn.innerText = "Verificar";
        let ccBtn = document.createElement("span");
        ccBtn.setAttribute("id","CrearCarta");
        ccBtn.setAttribute("class","hidden");
        ccBtn.innerText = "Añadir";
    
        let OptionsBtnContainer = document.createElement("div")
        OptionsBtnContainer.setAttribute("class", "OptionsBtnContainer")
        OptionsBtnContainer.innerHTML = `
          <i class="fa-solid fa-laptop-file OptionsBtns Selected"></i>
          <i class="fas fa-file-code OptionsBtns"></i>
          </i><i class="fa-solid fa-file-pen OptionsBtns"></i>
        `
    
        btnsCont.appendChild(vBtn);
        btnsCont.appendChild(ccBtn);
        form.appendChild(OptionsBtnContainer)
        form.appendChild(Options)
        form.appendChild(btnsCont);
        //Juntando objetos en el form
        formCards.appendChild(imageCont);
        formCards.appendChild(form);
        ViaFile()
        obtenerUrldelInput()
        OptionsLogic()
        OptionStatus = 0
    }
    
    
function ViaFile(){
    let OptionsContainer = document.getElementById('Options')
    OptionsContainer.innerHTML = ""
    
        let Photoname = document.createElement("label");
        Photoname.innerText = "Photo Name"
        let PhotonameInput = document.createElement("input");
        PhotonameInput.setAttribute("type","text");
        PhotonameInput.setAttribute("placeholder", "Type a name for the image")
        PhotonameInput.setAttribute("id", "Photoname2")
    
        let PhotoFile = document.createElement("label");
        PhotoFile.innerHTML = `
          <input type="file" accept="image/*" class="ImageInput" id="ImageInput" style="margin:5px 0px;display:none;">
          <i class="fa-solid fa-file-image ImageButton"></i>
        `
    
        OptionsContainer.appendChild(Photoname)
        OptionsContainer.appendChild(PhotonameInput)
        OptionsContainer.appendChild(PhotoFile)
    
        PhotonameInput.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                
                e.preventDefault();
    
            }
        });
}
    
function ViaUrl(){
    let OptionsContainer = document.getElementById('Options')
    OptionsContainer.innerHTML = ""
    
        let PhotonameLabel = document.createElement("label");
        PhotonameLabel.innerText = "Photo Name"
        let PhotonameInput = document.createElement("input");
        PhotonameInput.setAttribute("type","text");
        PhotonameInput.setAttribute("placeholder", "Type a name for the image")
        PhotonameInput.setAttribute("id", "Photoname2")
    
            
        let PhotoUrlLabel = document.createElement("label");
        PhotoUrlLabel.innerText = "Via Image Url"
        let PhotoUrlInput = document.createElement("input");
        PhotoUrlInput.setAttribute("type","text");
        PhotoUrlInput.setAttribute("placeholder", "Put the Image Url")
        PhotoUrlInput.setAttribute("id", "UrlInput")
    
        OptionsContainer.appendChild(PhotonameLabel)
        OptionsContainer.appendChild(PhotonameInput)
        OptionsContainer.appendChild(PhotoUrlLabel)
        OptionsContainer.appendChild(PhotoUrlInput)
    
        PhotonameInput.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                
                e.preventDefault();
    
            }
        });
    
        PhotoUrlInput.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                
                e.preventDefault();
    
            }
        });
}
    
function ViaName(){
    let OptionsContainer = document.getElementById('Options')
    OptionsContainer.innerHTML = ""
    
        let VianameLabel = document.createElement("label");
        VianameLabel.innerText = "Via Name"
        let VianameInput = document.createElement("input");
        VianameInput.setAttribute("type","text");
        VianameInput.setAttribute("placeholder", "Type the Image Name")
        VianameInput.setAttribute("id", "Photoname2")
    
        OptionsContainer.appendChild(VianameLabel)
        OptionsContainer.appendChild(VianameInput)
        
        VianameInput.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                
                e.preventDefault();
    
            }
        });
}
    
export function validarCampos(){
        let ImageInput = document.getElementById('ImageInput')
    
        //Via name guardado
        if (OptionStatus == 0) {
          let Photoname = document.getElementById('Photoname2')
          let ImageName = Photoname.value
          GalleryImages[ImageName] = src
    
        }
         //Via Url
        if (OptionStatus == 1){
          let UrlInput = document.getElementById('UrlInput')
          let Photoname = document.getElementById('Photoname2')
          let ImageName = Photoname.value
          mangaBook = UrlInput.value//Url
          GalleryImages[ImageName] = mangaBook
          src = GalleryImages[ImageName]
        }
         //Via File
        if (OptionStatus == 2) {
            let VianameInput = document.getElementById('Photoname2')
            let ViaNames = VianameInput.value//Elegir la imagen por un nombre guardado
            for (const image in GalleryImages) {
              if (image == ViaNames) {
                  src = GalleryImages[image]
                  break
              }
            }		
        }
    
        let imageBg = document.querySelector('#ImagePreview img')
        let Photoname = document.getElementById('Photoname2')
        //let btnsCont = document.querySelector('VerifyContainer')
        let vBtn = document.getElementById('Verificar')
        imageBg.setAttribute("src",`${src}`);
        Photoname.value = "";
        //btnsCont.removeChild(vBtn)
        vBtn.remove()
}

export function mostrarBotondeVerificacion(){
    let $CrearCartaBtn = document.getElementById('CrearCarta')
    $CrearCartaBtn.removeAttribute("class","hidden")
}

function obtenerUrldelInput(){

	let ImageInput = document.getElementById('ImageInput')
	ImageInput.addEventListener("change", function (){
		const file = this.files[0]

		if (file) {
			const reader = new FileReader()

			reader.addEventListener("load", function () {
				//console.log(this)
				src = this.result
				//console.log(src)
			})

			reader.readAsDataURL(file)
		}
	})

}

    
function eraseForm(){
        src = `media/Manga/${doingStatus}.png`;
        formCards.removeChild(imageCont);
        formCards.removeChild(form);
        mangaBook = "";
        number = 0;
}
    

function cerrarForm(){

    //Cerrar Form al tocar en cualquier otro lado
    for (let i=0;i<cardsForm.length;i++){
      cardsForm[i].addEventListener("click", ()=>{
    
        cardsForm[i].classList.toggle('open')
        if (secStatus == 1) {
          eraseTaskForm()	      
                let eraseTaskBtn = document.getElementById('CloseForm')
                eraseTaskBtn.setAttribute("style", "top:4%")
        }else if(secStatus == "Preview"){
                 erasePreview()
           }else if (secStatus === 3) {
          eraseForm()
        }else if (secStatus === 2) {
          eraseAccountsForm()
        }else if (secStatus == "Section"){
          eraseSectionForm()
          resetFormSize()
        }
        OptionStatus = 0
      })
    }
    
    //Cerrando Formulario
    closeBtn.addEventListener("click", ()=>{
        for(let i=0;i<mangasCont.length;i++){
            cardsForm[i].classList.remove('open');
            if (secStatus == 1) {
               eraseTaskForm()	      
                let eraseTaskBtn = document.getElementById('CloseForm')
                eraseTaskBtn.setAttribute("style", "top:4%")
               }else if(secStatus == "Preview"){
                 erasePreview()
               }else if (secStatus === 3) {
              eraseForm();
            }else if (secStatus === 2) {
                eraseAccountsForm()
            }else if (secStatus == "Section"){
              eraseSectionForm()
              resetFormSize()
            }
        };
        OptionStatus = 0
    });
    //Evitar la propagacion en el form
    formCards.addEventListener("click", (e)=>{
        e.stopPropagation()
    }, false)
    
}


export function createCard(){
    //Creando el div padre
        let div = document.createElement("div");
    //Dandole la clase al div padre	
        div.setAttribute("class","DoingCard");
    //creando el boton para borrar la carta	
        let eraseCardBtn = document.createElement("span");
    //Dandole las clases al boton	
        eraseCardBtn.setAttribute("class","fa-solid fa-circle-xmark eraseCard");
        //eraseCardBtn.setAttribute("id","eraseButton");
    //Creando el img de la carta	
        let img = document.createElement("img");
    //Dandole las clases al img	
        img.setAttribute("src",`${src}`);
        img.setAttribute("class", "image");
    //Agregando el img y el boton de borrar al div padre	
        div.appendChild(img);
        div.appendChild(eraseCardBtn);
    //Añadiendo la carta al contenedor en el que se está actualmente
        let Gallerycontainers = document.querySelectorAll('.GalleryContainer')
        Gallerycontainers[ActualContainer].appendChild(div);
    //Reseteando los valores de variables
        mangaBook = "";
        number = 0;
    
    //Logica para borrar las cartas
    //Borrar carta
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
    
    //Logica para hacer una preview de la imagen al dar click sobre la carta
    //let Src//No recuerdo para que era esta variable 
    //for(let i=0;i<carta.length;i++){
    //  carta[i].addEventListener("click", ObtenerUrldeLaCarta)
    //}
    
}


export function showGalleryButtons(){

let eraseButton = document.querySelectorAll('.eraseCard')
for(let i=0;i<eraseButton.length;i++){
    eraseButton[i].classList.toggle('open');
}
storeGallery()
}


export function ObtenerUrldeLaCarta(e) {
	let Carta = e.target
	let url = Carta.src;
	//console.log(url)
	FormParaPreview(url)
}

function FormParaPreview(url) {
	let form = document.getElementById('CardsForm')
	form.setAttribute("style", "width:auto;height:inherit;max-height:80vh;")
	let PreviewImage = document.createElement('img')
	PreviewImage.setAttribute("src", `${url}`)
	PreviewImage.setAttribute("style", "width: 100%;height: 100%;object-fit: contain;object-position:top;")
	PreviewImage.setAttribute("id", "Preview")
	form.appendChild(PreviewImage)
  	let formBg = document.querySelector('.CardFormBg')
    formBg.classList.toggle('open')
    //secStatus = "Preview"
}

function erasePreview(){
		let form = document.getElementById('CardsForm')
		let PreviewImage = document.getElementById('Preview')
		form.setAttribute("style", "width:60%;height:500px;top:0px")
		form.removeChild(PreviewImage)
		//secStatus = 3
}

function resetearSeleccion() {
    let OptionsBtns = document.querySelectorAll('.OptionsBtns')
    
    for (let i=0;i<OptionsBtns.length;i++){
        OptionsBtns[i].classList.remove('Selected')
    }
    
}

function OptionsLogic(){
    //Este trozo de codigo no funciona, no se detecta
let OptionsBtns = document.querySelectorAll('.OptionsBtns')
			//recorriendo el array de las opciones 
	for (let i=0;i<OptionsBtns.length;i++){
	//añadiendo un listener para poder seleccionar 
	//la opcion deseada con un click
		OptionsBtns[i].addEventListener("click", ()=>{
			//quitando las clases "Selected" de todos los botones de opciones
			resetearSeleccion()
			//añadiendo la clase "Selected" SOLO ala opcion seleccionada
			OptionsBtns[i].classList.toggle('Selected')
			//
	    	if (i == 0) {
				ViaFile()
				OptionStatus = 0
				//Llamando Funcion para obtener la Url del archivo del Input File en Watching
				obtenerUrldelInput()
			}else if (i == 1) {
				ViaUrl()
				OptionStatus = 1
			}else if (i == 2) {
				ViaName()
				OptionStatus = 2
			}
		})
}
}