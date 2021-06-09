class ShowButton extends HTMLElement {
    constructor(){
        super();
        this._showButtonText;
        this._visible = false;
        this._showButtonContainer;
        this._showButton;
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML = `
                <style>
                    #info-box {
                      display: none;
                    }
                </style>
                <button></button>
        `;
    }
    connectedCallback(){
        this.showButton = this.shadowRoot.querySelector('button');
        this._showButtonContainer = document.createElement('p');
        this._showButtonContainer.id = 'info-box'; 
        this._showButtonContainer.innerHTML = `<slot></slot>`;
        if(this.hasAttribute('visible')){
          this._visible = this.getAttribute("visible");
          if(this._visible == "true"){
              this._hideshowButton()
          }
          if(this._visible == "false"){
            this._showshowButton()
          }
        }
        
        this.showButton.addEventListener('click', () => {
            if (this._visible) {
              this._hideshowButton();
            } else {
              this._showshowButton();
            }
        });
        this.shadowRoot.appendChild(this.showButton);
        this.shadowRoot.appendChild(this._showButtonContainer)
    }
    _showshowButton(){
      this._showButtonContainer.style.display = 'none';
      this.showButton.textContent = 'Show';
      this._visible = true;
    }

    _hideshowButton(){
      this._showButtonContainer.style.display = 'block';
      this.showButton.textContent = 'Hide';
      this._visible = false;
    } 
}

customElements.define("dc-show-button", ShowButton);