class loginFormComponent extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.textContent = /*css*/`
		:host{
			top: 50%;
			left:50%;
			transform: translate(-50%, -50%);
			font-family: "Press Start 2P", cursive;
			font-size: 0.6rem;
		}
		svg{
			height: 2.5em;
			width: 2.5em;
		}
		.wrapper {
			--input-focus: rgba(60, 69, 75,1);
			--font-color: #e67e80;
			--font-color-sub: #a7c080;
			--bg-color: #2b3339;
			--bg-color-alt: #0000;
			--main-color: #a7c080;
		}
		.switch {
			transform: translateY(-200px);
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 30px;
			width: 50px;
			height: 20px;
		}
		.card-side::before {
			position: absolute;
			content: 'Log in';
			left: -70px;
			top: 0;
			width: 100px;
			text-decoration: underline;
			color: var(--font-color);
			font-weight: 600;
		}
		.card-side::after {
			position: absolute;
			content: 'Sign up';
			left: 70px;
			top: 0;
			width: 100px;
			text-decoration: none;
			color: var(--font-color);
			font-weight: 600;
		}
		.toggle {
			opacity: 0;
			width: 0;
			height: 0;
		}
		.slider {
			box-sizing: border-box;
			border-radius: 5px;
			border: 2px solid var(--main-color);
			box-shadow: 4px 4px var(--main-color);
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: var(--bg-color);
			transition: 0.3s;
		}
		.slider:before {
			box-sizing: border-box;
			position: absolute;
			content: "";
			height: 20px;
			width: 20px;
			border: 2px solid var(--main-color);
			border-radius: 5px;
			left: -2px;
			bottom: 2px;
			background-color: var(--bg-color);
			box-shadow: 0 3px 0 var(--main-color);
			transition: 0.3s;
		}
		.toggle:checked + .slider {
			background-color: var(--input-focus);
		}
		.toggle:checked + .slider:before {
			transform: translateX(30px);
		}
		.toggle:checked ~ .card-side:before {
			text-decoration: none;
		}
		.toggle:checked ~ .card-side:after {
			text-decoration: underline;
		}
		.flip-card__inner {
			width: 300px;
			height: 350px;
			position: relative;
			background-color: transparent;
			perspective: 1000px;
			text-align: center;
			transition: transform 0.8s;
			transform-style: preserve-3d;
		}  
		.toggle:checked ~ .flip-card__inner {
			transform: rotateY(180deg);
		}		  
		.toggle:checked ~ .flip-card__front {
			box-shadow: none;
		}
		.flip-card__front, .flip-card__back {
			padding: 20px;
			position: absolute;
			display: flex;
			flex-direction: column;
			justify-content: center;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			background: var(--bg-color);
			gap: 20px;
			border-radius: 5px;
			border: 2px solid var(--main-color);
			box-shadow: 4px 4px var(--main-color);
		}  
		.flip-card__back {
			width: 100%;
			transform: rotateY(180deg);
		}
		.flip-card__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;
		}
		.title {
			margin: 20px 0 20px 0;
			font-size: 25px;
			font-weight: 900;
			text-align: center;
			color: var(--main-color);
		}
		.flip-card__input {
			width: 250px;
			height: 40px;
			border-radius: 5px;
			border: 2px solid var(--main-color);
			background-color: var(--bg-color);
			box-shadow: 4px 4px var(--main-color);
			font-size: 15px;
			font-weight: 600;
			color: var(--font-color);
			padding: 5px 10px;
			outline: none;
			font-family: "Press Start 2p";
		}
		.flip-card__input::placeholder {
			color: var(--font-color-sub);
			opacity: 0.8;
		} 
		.flip-card__input:focus {
			border: 2px solid var(--input-focus);
		}
		.flip-card__btn:active, .button-confirm:active {
			box-shadow: 0px 0px var(--main-color);
			transform: translate(3px, 3px);
		} 
		.flip-card__btn {
			margin: 10px 0 10px 0;
			width: 9rem;
			height: 3.5rem;
			border-radius: 5px;
			border: 2px solid var(--main-color);
			background-color: var(--bg-color);
			box-shadow: 4px 4px var(--main-color);
			font-weight: 600;
			color: var(--font-color);
			cursor: pointer;
			font-size: 0.6rem;
			font-family: "Press Start 2P";
		} `;
		shadow.appendChild(style);
		let container = document.createElement('div');
		container.classList.add('wrapper');
		container.innerHTML = /*html*/`
	<div class="card-switch">
		<label class="switch">
			<input class="toggle" type="checkbox">
			<span class="slider"></span>
			<span class="card-side"></span>
			<div class="flip-card__inner">
				<div class="flip-card__front">
					<div class="title">Log in</div>
					<form action="" class="flip-card__form">
						<input type="email" placeholder="Email" name="email" class="flip-card__input">
						<input type="password" placeholder="Password" name="password" class="flip-card__input">
						<button class="flip-card__btn">Lets go!</button>
						<button class="flip-card__btn" href="http://localhost:8000/users/login_42">Log in with <svg version="1.1"
	 id="Calque_1" sodipodi:docname="42_logo.svg" inkscape:version="0.48.2 r9819" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -200 960 960"
	 enable-background="new 0 -200 960 960" xml:space="preserve">
<polygon id="polygon5" points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1 
	32,279.1 "/>
<polygon id="polygon7" points="597.9,114.2 762.7,-51.1 597.9,-51.1 "/>
<polygon id="polygon9" points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "/>
<polygon id="polygon11" points="928,279.1 762.7,443.9 928,443.9 "/>
</svg> </button>
					</form>
				</div>
				<div class="flip-card__back">
					<div class="title">Sign up</div>
					<form action="" class="flip-card__form">
						<input type="name" placeholder="Name" class="flip-card__input">
						<input type="email" placeholder="Email" name="email" class="flip-card__input">
						<input type="password" placeholder="Password" name="password" class="flip-card__input">
						<input type="password" placeholder="Repeat Password" name="password2" class="flip-card__input">
						<button class="flip-card__btn">Confirm!</button>
					</form>
				</div>
			</div>
		</label>
	</div> `;
		shadow.appendChild(container);
	}
	connectedCallback(){
		
	}
	disconectedCallback(){}
}

window.customElements.define("login-form", loginFormComponent);