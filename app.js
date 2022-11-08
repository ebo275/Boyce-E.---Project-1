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
    const $contactsButton = $('#contact-button')
    const $contacts = $('#contacts')
    const $mailButton = $('#mail-icon')
    const $mailModal = $('#contact-modal')





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
    // const bioToggle = () => {
    //     $bio.toggle(bioSlide)
    // }
    
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
    
//-------------------CONTACTS------------------------//
const contactsSlide = () => {
    $contacts.css('display', 'flex');
}
const contactsHide = () => {
    $contacts.css('display', 'none');
}

//-----------------------EMAIL MODAL-----------------------//

const mailSlide = () => {
    $mailModal.css('display', 'block');
}
const mailHide = () => {
    $mailModal.css('display', 'none');
}
//---------------EVENT LISTENERS/INVOCATIONS-----------------//

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $sockSock.on('click', sockSock)
    $sockShoe.on('click', sockShoe)
    $bioButton.mouseover(bioSlide)
    $('body').on('click', bioHide)
    $experienceButton.mouseover(experienceSlide)
    $('body').on('click', experienceHide)
    $projectsButton.mouseover(projectsSlide)
    $('body').on('click', projectsHide)
    $contactsButton.mouseover(contactsSlide)
    $('body').on('click',contactsHide)
    $mailButton.mouseover(mailSlide)
    $mailButton.mouseout(mailHide)
    // $('body').on('click',mailHide)

    // $bioButton.on('click', bioToggle)
    //make a variable for the body so that it says if you click anywhere else besides this 
    //button iy eill close 
    // the toggle fuction takes 3 arguments: duration, xxxx, function to call once the job is completee
        //toggle and display will actually show and hide it 
    

    // $bioButton.on('click', bioSlide)
    // $bioButton.on('click', bioHide)
    // $experienceButton.on('click', experienceSlide)
    // $experienceButton.on('click', experienceHide)
    // $projectsButton.on('click', projectsSlide)
    // $projectsButton.on('click', projectsHide)

    // $bioButton.addEventListener('click', bioSlide)
    // $bioButton.addEventListener('mouseover', bioSlide)
    // $bioButton.addEventListener('mouseout', bioHide)

})