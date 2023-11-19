import { UserImage } from "./Header.js"

const $UserSiderBarMenu = document.querySelector('.UserCard')

export function CreateSidebarMenu() {
    $UserSiderBarMenu.innerHTML = `
	  <img src="${UserImage}">

		<div id="Buttons">
		  <span id="TodoList" class="SideBtn Selected"><i class="fas fa-bookmark SideBarIcon Selected" id="Tareas" aria-hidden="true"></i>
		    To Do List </span>
		  
		  <span id="Accounts" class="SideBtn"><i class="fas fa-laptop SideBarIcon" id="Cuentas" aria-hidden="true"></i>
		    Account's </span>
		  
		  <span id="DoingBtn" class="SideBtn Buttons"><i class="fas fa-book SideBarIcon" id="Doing" aria-hidden="true"></i>
			Watching</span>

		  <span id="Fitness" class="SideBtn Buttons"><i class="fas fa-heartbeat SideBarIcon" id="Fitness2"></i> 
    		Fitness</span>
	  	</div>`
}