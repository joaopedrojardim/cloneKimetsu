export default class ModalVideo {
    constructor(botaoAbrir, botaoFechar, containerModal,){
      this.botaoAbrir = document.querySelector(botaoAbrir)
      this.botaoFechar = document.querySelector(botaoFechar)
      this.containerModal = document.querySelector(containerModal)
      this.eventTogleModal = this.eventTogleModal.bind(this)
      this.cliqueForaModal = this.cliqueForaModal.bind(this)
    }
  
    toggleModal() {
      this.containerModal.classList.toggle('ativo')
    }


  
    eventTogleModal(event){
      event.preventDefault()
      this.toggleModal()
    }
  
    cliqueForaModal(event) {
      if(event.target === this.containerModal) {
        this.toggleModal()
      }
    }
    
    addModalEvents(){
      this.botaoAbrir.addEventListener('click', this.eventTogleModal)
      this.botaoFechar.addEventListener('click', this.eventTogleModal)
      this.containerModal.addEventListener('click', this.cliqueForaModal)
    }
  
    init(){
      if(this.botaoAbrir && this.botaoFechar && this.containerModal){
        this.addModalEvents()
      }
  
      return this
    }
  
  }