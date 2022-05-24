(() => {
  const refs = {
    openModalBtn: document.querySelector("[submit-modal-open]"),
    closeModalBtn: document.querySelector("[submit-modal-close]"),
    modal: document.querySelector("[submit-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();