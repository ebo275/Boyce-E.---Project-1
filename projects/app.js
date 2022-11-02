$( () => {

    const $openBtn = $('h1');
    const $modal = $('#modal');
    const $closeBtn = $('#close')
    const $sockSock = $('#sockSock')
    const $sockShoe = $('#sockShoe')
    const $option1 = $('#option1')
    const $option2 = $('#option2')



    const openModal = () => {
        $modal.css('display', 'flex');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    const sockSock = () => {
        $option1.css('display', 'inline')    

    }
    
    const sockShoe = () => {
        $option2.css('display', 'inline')    
    }
    

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $sockSock.on('click', sockSock)
    $sockShoe.on('click', sockShoe)

})