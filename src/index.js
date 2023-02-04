import SassyModal from './js/plugins/SassyModal';

const modal = new SassyModal({
    blur: true,
    centered: true,
    animation: 'fade-in',
    showModalCSS: 'show-modal'
});

// Use custom events
const modalOne = document.querySelector('[data-modal-id="modal-one"]');
modalOne.addEventListener('after_open', (event) => {
    const targetModal = event.detail;
    targetModal.querySelector('.modal__content h3').innerText = "Modal One - After Open Event";
})
