class SideNavBar extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		const style = document.createElement('style');
		style.textContent = /*html*/`
		<style>
			svg{
				width: 100%;
				height: 100%;
			}
			.sideNavBar{
                background-color: #2b3339;
                position: fixed;
                top: 60%;
                left: 10px;
                height: 70vh;
                width: 5vw;
                display: flex;
				flex-direction: column;
				justify-content: space-between;
                align-items: center;
				border-radius: 40px 40px 40px 40px;
				transform: translateY(-50%);
				box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
			}
			.sideNavBar:hover{
				box-shadow: 0 0 20px 3px rgba(0, 20, 5, 0.8);
			}
			.icon-Div{
                margin: 10px 10px;
                display: flex;
                height: 18%;
				width: 65%;
				flex-grow:1;
				justify-content: center;
				align-items: center;
				color: rgba(160, 215, 160, 0.9);    
			}
			.icon-Div:hover{
				color: rgba(200, 225, 200, 0.7);
				cursor: pointer;

			}
			.icon{
				font-size: 2rem;
			}
		</style>`
		shadow.appendChild(style);
		const container = document.createElement('div');
		container.classList.add('sideNavBar');
		container.innerHTML = /*html*/`
				<div class="icon-Div">
					<svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z" fill="currentColor"/>
					</svg>
				</div>
				<div class="icon-Div">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						 <path d="M10 2h4v4h-4V2zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7V7zm-2 4h2V9H5v2zm0 0v2H3v-2h2zm14 0h-2V9h2v2zm0 0h2v2h-2v-2z" fill="currentColor"/>
					 </svg>
				</div>
				<div class="icon-Div">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zM9 7H7v2h2V7zm6 0h2v2h-2V7zm-6 8H7v2h2v-2zm6 0h2v2h-2v-2zm-2-4h-2v2h2v-2z" fill="currentColor"/>
					</svg>
				</div>
				<div class="icon-Div">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6 2h4v4H6V2zM3 7h10v9h-2v6H9v-6H7v6H5v-6H3V7zm18-4h-6v2h6V3zm-4 4h4v2h-4V7zm4 4h-6v2h6v-2zm-6 8h6v2h-6v-2zm6-4h-4v2h4v-2z" fill="currentColor"/>
					</svg>
				</div>
				<div class="icon-Div">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
						<path d="M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z" fill="currentColor"/> 
					</svg>
				</div>`;
		shadow.appendChild(container);
		
	}
	connectedCallback() {}
	disconnectedCallback(){}
}
customElements.define('side-nav-bar', SideNavBar);