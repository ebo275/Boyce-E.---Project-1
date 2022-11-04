$( () => {
//---------------------VARIABLES---------------------//
    const $openBtn = $('h1');
    const $modal = $('#modal');
    const $closeBtn = $('#close')
    const $sockSock = $('#sockSock')
    const $sockShoe = $('#sockShoe')
    const $option1 = $('#option1')
    const $option2 = $('#option2')
    const $bioButton = $('#bio-button')
    const $bio = $('#bio')
    const $experienceButton = $('#experience-button')
    const $experience = $('#experience')
    const $projectsButton = $('#projects-button')
    const $projects = $('#projects')

//---------------------FUNCTIONS---------------------//

//---------------------MODAL---------------------//

    const openModal = () => {
        $modal.css('display', 'flex');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    const sockSock = () => {
        $option1.toggle();    

    }

    const sockShoe = () => {
        $option2.toggle();    
    }

//---------------------BIO---------------------//

    const bioSlide = () => {
        $bio.css('display', 'flex');
    }
    const bioHide = () => {
        $bio.css('display', 'none');
    }
//-----------------EXPERIENCE---------------------//

const experienceSlide = () => {
    $experience.css('display', 'flex');
}
const experienceHide = () => {
    $experience.css('display', 'none');
}

//-----------------PROJECTS---------------------//

const projectsSlide = () => {
    $projects.css('display', 'flex');
}
const projectsHide = () => {
    $projects.css('display', 'none');
}
    
    
//---------------EVENT LISTENERS/INVOCATIONS-----------------//

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $sockSock.on('click', sockSock)
    $sockShoe.on('click', sockShoe)
    $bioButton.mouseover(bioSlide)
    $bioButton.mouseout(bioHide)
    $experienceButton.mouseover(experienceSlide)
    $experienceButton.mouseout(experienceHide)
    $projectsButton.mouseover(projectsSlide)
    $projectsButton.mouseout(projectsHide)

})