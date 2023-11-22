const D = document

export function ChangeSection(section){
    const Sections = [document.getElementById('ListContainer'),
    document.getElementById('DoingGallery'),
    document.getElementById('DoingGallery'),
    document.getElementById('DoingGallery')]

    for(let i=0;i<Sections.length;i++){
        Sections[i].classList.remove('open')
    }

    Sections[section].classList.add('open')
    //console.log(section)

    ChangeSectionIcons(section)
}

export function ChangeFormStyles(number){
    let $Form = document.getElementById('CardsForm')
  
    if(number === 0) {$Form.classList.add('TodoList'); $Form.classList.remove('Gallery')}
    if(number === 2) {$Form.classList.add('Gallery');  $Form.classList.remove('TodoList')}
  }

function ChangeSectionIcons(Icon){
    const Icons = [
    D.getElementById('TodoList'),
    D.getElementById('Accounts'),
    D.getElementById('DoingBtn'),
    D.getElementById('Fitness')]

    const IconsII = [
    D.getElementById('Tareas'),
    D.getElementById('Cuentas'),
    D.getElementById('Doing'),
    D.getElementById('Fitness2')]

    const MobileIcons = [
        D.getElementById('MTareas'),
        D.getElementById('MCuentas'),
        D.getElementById('MDoing'),
        D.getElementById('MFitness2')]

    for(let i=0;i<Icons.length;i++){
        Icons[i].classList.remove('Selected')
        for(let i=0;i<IconsII.length;i++){
            IconsII[i].classList.remove('Selected')
        }
    }

    for(let i=0;i<MobileIcons.length;i++){MobileIcons[i].classList.remove('Selected')}


    Icons[Icon].classList.add('Selected')
    IconsII[Icon].classList.add('Selected')
    MobileIcons[Icon].classList.add('Selected')
}
