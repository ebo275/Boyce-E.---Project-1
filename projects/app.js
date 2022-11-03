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

    
    
//---------------EVENT LISTENERS/INVOCATIONS-----------------//

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $sockSock.on('click', sockSock)
    $sockShoe.on('click', sockShoe)
    $bioButton.mouseenter(bioSlide)
    $bioButton.mouseleave(bioHide)

})