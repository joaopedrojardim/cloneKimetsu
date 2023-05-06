export default class Tooltip {
    constructor(tooltips){
      this.tooltips = document.querySelectorAll(tooltips)
      this.onMouseMove = this.onMouseMove.bind(this)
      this.onMouseLeave = this.onMouseLeave.bind(this)
      this.onMouseOver = this.onMouseOver.bind(this)
    }
  
    onMouseLeave({currentTarget}) {
      this.tooltipBox.remove()
      currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
      currentTarget.removeEventListener('mousemove', this.onMouseMove)
    }
    
    onMouseMove(event) {
      this.tooltipBox.style.top = event.pageY - 15 + 'px'
      this.tooltipBox.style.left = event.pageX - 20 + 'px'  
    }
  
    criarTooltipBox(element) {
      const tooltipBox = document.createElement('div')
      const text = element.getAttribute('aria-label')
      tooltipBox.classList.add('tooltip')
      tooltipBox.innerText = text
      document.body.appendChild(tooltipBox)
      this.tooltipBox = tooltipBox
    }
  
    onMouseOver({currentTarget}) {
      this.criarTooltipBox(currentTarget)
      currentTarget.addEventListener('mousemove', this.onMouseMove)
      currentTarget.addEventListener('mouseleave', this.onMouseLeave)
    }
    
    addTooltipsEvent(){
      this.tooltips.forEach((item) => {
        item.addEventListener('mouseover', this.onMouseOver)
      })
    }
  
    init(){
      if(this.tooltips.length){
        this.addTooltipsEvent()
      }
      return this
    }
  }