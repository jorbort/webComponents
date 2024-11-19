
class HomeComponent extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.textContent = /*css*/`
			
		`;
		shadow.appendChild(style);
		const container = document.createElement('div');
		container.innerHTML = /*html*/`
			<div class="home">
				<div class="info">
					<div>
						<img src="${this.getAttribute('img')}"></img>
					</div>
					<div></div>
					<div></div>
				</div>
				<div>Last game</div>
				<div> win%</div>
			</div>
		`;
		shadow.appendChild(container);
	}
	connectedCallback(){}
	disconnectedCallback(){}
}
window.customElements.define('home-component', HomeComponent);