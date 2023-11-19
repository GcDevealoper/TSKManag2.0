const UserProfile = document.querySelector('.UserProfile')
export let UserImage
let UserName
let BodyBackground

//Objetos
export const images = {
  'Guest': './media/Profiles/Guest.jpg'
}


UserImage = images['Guest']
UserName = 'Guest'
BodyBackground = './media/wall2.jpg'
document.body.style.backgroundImage = `url(${BodyBackground})`


const MenuTemplate = `
<div id="UserHead" style="--i:-1" class="active">
  <img src="${UserImage}">
 <h3>${UserName}</h3>
</div>
 <hr>
 <div class="Option" style="--i: 0 " id="UserAccount"><i class="fa-solid fa-circle-user icon"></i><h3>User Account</h3></div>
 <div class="Option" id="Theme" style="--i: 1 "><i class="fa-solid fa-moon icon"></i><h3>Change Theme</h3></div>
 <div class="Option" style="--i: 2 "><i class="fa-regular fa-clipboard icon"></i><h3>Documentation</h3></div>


 <div id="SocialLinks">
   <a style="--j:0" title="link" href="https://www.instagram.com/_goruncdevealoper/" target="_BLANK" class="fa-brands fa-instagram icon"></a>

   <a style="--j:1" title="link" href="https://github.com/GcDevealoper" target="_BLANK" class="fa-brands fa-github icon"></a>

   <a style="--j:2" title="link" href="https://www.linkedin.com/in/ender-cuevas-b9a520226/" target="_BLANK" class="fa-brands fa-linkedin icon"></a>
 </div>
 `

const Colors ={
	'pink': '#e61c8c'
}

export const Header = ()=>{
    UserProfile.innerHTML = `
    <img src="${UserImage}">
    <h3>${UserName}</h3>`
}

/*User Menu Logic*/
export function OpenUserMenu(){

  let $UserHeader = document.getElementById('UserProfileMenu');
  let $Container = document.createElement("div")
  $Container.setAttribute("id","UserMenu")

  $Container.innerHTML = MenuTemplate
  $UserHeader.appendChild($Container)
  
  CloseMenuListener($Container)
  CloseEverywhereMenuListener($Container)
  StopPropagation($Container)
  DarkmodeListener()
  AccountSettingsListener()
  CloseUserSettings()
}

function OpenUserSettings(){
  let $Container = document.getElementById('AccountSettingsContainer')
  $Container.classList.add('Open')
  CreateUserSettingsElements('create')
}

function CloseUserSettings(){
  let $Button = document.getElementById('CloseSettings')
  $Button.addEventListener("click", (e)=>{
    let $Container = document.getElementById('AccountSettingsContainer')
    $Container.classList.remove('Open')
    CreateUserSettingsElements('delete')
  })
}

function AccountSettingsListener(){
  let $UserAccount = document.getElementById('UserAccount')
  $UserAccount.addEventListener("click", (e)=>{OpenUserSettings()})
}

function CloseMenuListener(Menu){
//Cerrar form
let $UserHead = document.getElementById('UserHead')
  $UserHead.addEventListener("click", (e)=>{
    Menu.remove()
    e.stopPropagation()
  },false)
}

function CreateUserSettingsElements(Answer){
  const $Container = document.getElementById('SettingsMainContent')

  const $ProfilePhotoItems = `
  <div class="UserProfileContainer">
      <h4 class="MiniTitle">Profile Photo</h4>
      <div id="ProfileFotoExample"><img src="${UserImage}"></div>
      <span class="UserMenuButton">Change Image</span>
  </div>

  <div class="UserProfileContainer">
    <h4 class="MiniTitle">User Name</h4>
    <h3 contenteditable="true">${UserName}</h3>
    <span class="UserMenuButton">Change Username</span>
  </div>

  <div class="UserProfileContainer">
    <h4 class="MiniTitle">Background Image</h4>
    <div id="BackgroundPhotoExample"><img src="${BodyBackground}"></div>
    <span class="UserMenuButton">Change Background</span>
  </div>
  `

  if (Answer === 'create') $Container.innerHTML += $ProfilePhotoItems
  if(Answer === 'delete') $Container.innerHTML = ""
}

function CloseEverywhereMenuListener(Menu){
//Cerrar form desde cualquier lugar
  document.addEventListener("click", (e)=>{
    if(e.target.id !== "Userhead") Menu.remove()
  })
}

function StopPropagation(Item){  
  Item.addEventListener("click", (e)=>{
  	e.stopPropagation()
  },false)
}

function ToggleDarkmode(){  
	document.body.classList.toggle('Lightmode');
	store(document.body.classList.contains('Lightmode'));
}

function DarkmodeListener(){ 
  let Theme = document.getElementById('Theme')
  Theme.addEventListener("click", (e)=> ToggleDarkmode())
}

export function load(){
	const Lightmode = localStorage.getItem('Lightmode');
	if (!Lightmode) store('false')
	else if (Lightmode == 'true') document.body.classList.add('Lightmode')
}

function store(value){
	localStorage.setItem('Lightmode', value);
}

//guardar el contenido en una variable y mandarlo al localstorage y utilizar la misma logica que el darkmode
