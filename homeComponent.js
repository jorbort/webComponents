import {friendsList} from 'friendsListComponent.js';

class HomeComponent extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.textContent = /*html*/`
			<style>
			</style>
		`;
		shadow.appendChild(style);
		const container = document.createElement('div');
		container.innerHTML = /*html*/`
			<div class="home">
				<div class="info"></div>
				<friends-list class="friends" username="${this.getAttribute('username')}" ></friends-list>
				<div>Last game</div>
				<div> win%</div>
			</div>
		`;
		shadow.appendChild(container);
	}
	connectedCallback(){
	}
	disconnectedCallback(){}
}
window.customElements.define('home-component', HomeComponent);