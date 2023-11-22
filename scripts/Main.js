import { OpenUserMenu } from "./Dom/Header.js";
import { Header } from "./Dom/Header.js";
import { CreateSidebarMenu } from "./Dom/SectionsMenu.js";
import { load } from "./Dom/Header.js";
import { EraseLoader } from "./Dom/Loader.js";
import { AbleToEditTitle, BORRAR, CreateTodoListForm, CrossOutTask, DisableToEditTitle, ShowForm, RemoveTask, ShowTaskIcons, TitleisEditable, FormStatus, loadTodoList, storeTodoList, storeNotes, loadNotes, addTitle, addText } from "./Dom/ToDoList.js";
import { ChangeFormStyles, ChangeSection } from "./Dom/SectionsSwitcher.js";
import { ActualContainer, GallerySwitcher } from "./Dom/GallerySwitcher.js";
import { createCard, GestionarGallery, mostrarBotondeVerificacion, ObtenerUrldeLaCarta, showGalleryButtons, validarCampos } from "./Dom/GalleryForm.js";
import { loadGallery, storeGallery } from "./Dom/SaveGallery.js";


const $UserMenu = document.getElementById('UserProfileMenu')
export let sectionStatus = 1
const $Title = document.getElementById('TodoTitle')
let Section = 0
export let GalleryImages = {}

function StoreGalleryImages(){
  localStorage.setItem("GalleryHasImages", true)
  localStorage.setItem("GalleryImages", JSON.stringify(GalleryImages))
  console.log(GalleryImages)
}

function loadGalleryImages(){ 
  let $GalleryHasContent = localStorage.getItem("GalleryHasImages")
  console.log($GalleryHasContent)
  if ($GalleryHasContent) {
    let $ObjectString = localStorage.getItem("GalleryImages")
    GalleryImages = JSON.parse($ObjectString)
    console.log(GalleryImages)
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
    Header()
    load()
    CreateSidebarMenu()
    CreateTodoListForm()
    ShowTaskIcons()
    CrossOutTask()
    RemoveTask()
    loadTodoList()
    loadNotes()
    loadGallery()
    loadGalleryImages()
    GestionarGallery()
    EraseLoader()
})

document.addEventListener("click", (e)=>{

  if(e.target.matches("#UserProfileMenu") || e.target.matches("#UserProfileMenu img") || e.target.matches("#UserProfileMenu h3")) {
    OpenUserMenu('Desktop')
    console.log(e.target)
  }
  if(e.target.matches('#MobileUserProfile')) OpenUserMenu('Mobile')
  
  if(e.target.matches("#SaveNotes")) storeNotes()

  if(e.target.matches("#AddTask"))ShowForm()

  if(e.target.matches("#AddTitle")) addTitle()

  if(e.target.matches("#AddText")) addText()

  if(e.target.matches('#TodoTitle') && !TitleisEditable) AbleToEditTitle()

  if(!(e.target.matches('#TodoTitle')) && TitleisEditable) {
    DisableToEditTitle()
    storeTodoList()
  }

  if(e.target.matches('.CloseForm')) BORRAR(Section)

  //Section Switcher Normal
  if(e.target.matches('#TodoList')) {ChangeSection(0);Section = 0; ChangeFormStyles(Section)}
  if(e.target.matches('#DoingBtn')) {ChangeSection(2);Section = 2; ChangeFormStyles(Section)}
  //Section Switcher Mobile
  if(e.target.matches('#MTareas')) {ChangeSection(0);Section = 0; ChangeFormStyles(Section)}
  if(e.target.matches('#MDoing')) {ChangeSection(2);Section = 2; ChangeFormStyles(Section)}

  //Gallery Switcher
  if(e.target.matches('#MBtn')) GallerySwitcher(0)
  if(e.target.matches('#AnBtn')) GallerySwitcher(1)
  if(e.target.matches('#GaBtn')) GallerySwitcher(2)

  //Section Switcher Mobile



  if(e.target.matches('#Verificar')) {
    validarCampos()
    mostrarBotondeVerificacion()}

  if(e.target.matches('#CrearCarta')) {
    createCard()
    BORRAR(Section)
    storeGallery()
    StoreGalleryImages()
  }

  if(e.target.matches('#manageCards')) showGalleryButtons()

  if(e.target.matches('.image')) {
    ObtenerUrldeLaCarta(e)
    Section = 3
    //console.log("Main",Section)
  }

})


document.addEventListener("keydown", (e)=>{
  if(e.key == "Escape" && FormStatus) BORRAR(Section)
})

export function setVariable(value) {
  Section = value;
}

