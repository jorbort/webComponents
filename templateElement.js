class friendsList extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.innerText = /*html*/``;
		shadow.appendChild(style);
		let container = document.createElement('div');
		container.innerHTML = /*html*/``;
		shadow.appendChild(container);
	}
	connectedCallback(){
		/*implementar la logica del fetch de los amigos para crear un li por cada miembro de la lista de amigos*/
	}
	disconectedCallback(){}
}

window.customElements.define("friends-list", friendsList);