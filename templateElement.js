class friendsList extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.textContent = /*html*/``;
		shadow.appendChild(style);
		let container = document.createElement('div');
		container.innerHTML = /*html*/``;
		shadow.appendChild(container);
	}
	connectedCallback(){
		
	}
	disconectedCallback(){}
}

window.customElements.define("friends-list", friendsList);