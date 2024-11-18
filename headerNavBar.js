
class headerNavBar extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		const container = document.createElement('div');
		const style = document.createElement('style');
		style.textContent = /*html*/`
		<style>
			svg{
				width: 100%;
				height: 100%;
			}
			.gradient-text {
				font-family: "Press Start 2P", cursive;
				margin-left: 2rem;
				font-size: 3rem;
				background: linear-gradient(45deg, #546ed6, #3c698d, #22b8cf, #3f8a73, #51cf66, #87a854, #e0bc4f, #f19d4e);
				background-size: 200% 200%;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				animation: gradient-animation 5s ease infinite;
			}
			#spantitle{
				font-size: 1.5rem;
			}
			@keyframes gradient-animation {
				0% {
			  	background-position: 0% 50%;
				}
				50% {
	  			background-position: 100% 50%;
				}
				100% {
				background-position: 0% 50%;
				}
  			}
			.headerNavBar{
				height: 12vh;
				width: 100vw;
				background-color: #2b3339;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-shadow:rgba(60, 70, 60, 0.9) 2px 3px 10px 0px;
				border-radius: 5px 5px 5px 5px;
			}
			.icon-Div{
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 15%;
				height: 100%;
				color : rgba(160, 215, 160, 0.9);
				
			}
			.icon:hover{
				color: rgba(200, 225, 200, 0.7);
				transform: translateY(-2px);
			}
			.icon{
				width: 20%;
				height:30%;
				display: flex;
				justify-content: center;
				align-items:center;
				flex-grow: 1;
			}
			.pic-container{
				width: 25%;
				height: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius:50%;
			}
			img{
				width: 75%;
				height: 75%;
				border-radius:50%;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.9);
			}
			img:hover{
				transform: translateY(-2px)
			}
			.tooltip {
				width: 5rem;
				height: 8px;
				background: #2b3339;
				padding: 0.5em;
				text-align: center;
				position: absolute;
				top: 60px;
				left: 0;
				opacity: 0;
				visibility: hidden;
				transform-origin: center top;
				box-shadow: 0px 0px 20px 3px rgba(0, 20, 5, 0.8);
				transition: opacity 0.3s ease-in-out;
				display: flex;
				align-content:center;
				justify-content:center;
			}
			.tooltip p {
				margin: 0;
				color: #ffffff;
				font-size: 0.6rem;
				font-family: "Press Start 2P", cursive;
				align-self: center;
				justify-self: center;
			}
			.icon:hover .tooltip {
				top: 100px;
				left: -45px;
				opacity: 1;
				visibility: visible;
				animation: goPopup 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
			}

			.icon:hover .tooltip p {
				animation: bounce 2s ease-in-out infinite;
			}

			@keyframes goPopup {
				0% {
					transform: translateY(0) scaleY(0);
					opacity: 0;
				}
				50% {
					transform: translateY(-50%) scaleY(1.2);
					opacity: 1;
				}
				100% {
					transform: translateY(-100%) scaleY(1);
					border-radius: 8px;
					opacity: 1;
					height: 40px;
				}
			}
			@keyframes bounce {
				0%,
				20%,
				50%,
				80%,
				100% {
					transform: translateY(0);
				}
				40% {
					transform: translateY(-3px);
				}
				60% {
					transform: translateY(-2px);
				}
			}
			loading {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.loading-box {
				width: 250px;
				height: 80px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				position: relative;
			}

			.color {
				background-color: rgba(160, 215, 160, 0.9);
			}
			.WH {
				width: 10px;
				height: 50px;
				position: absolute;
				box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
			}

			.l1 {
				left: 0;
				animation: l1 4s infinite linear;
			}
			.l2 {
				right: 0;
				animation: l2 4s infinite linear;
			}
			.ball {
				width: 15px;
				height: 15px;
				border-radius: 50%;
				position: absolute;
				animation: ball 4s infinite linear;
			}
			@keyframes l1 {
				0% {
					top: 0%;
				}
				10% {
					top: -20%;
				}
				20% {
					top: 0%;
				}
				30% {
					top: 40%;
				}
				40% {
					top: 0%;
				}
				50% {
					top: 30%;
				}
				60% {
					top: 40%;
				}
				70% {
					top: 60%;
				}
				80% {
					top: -10%;
				}
				90% {
					top: 10%;
				}
				100% {
					top: 0%;
				}
				}
			@keyframes l2 {
				0% {
					bottom: 0%;
				}
				10% {
					bottom: -20%;
				}
				20% {
					bottom: 40%;
				}
				30% {
					bottom: 60%;
				}
				40% {
					bottom: 20%;
				}
				50% {
					bottom: 30%;
				}
				60% {
					bottom: 40%;
				}
				70% {
					bottom: 60%;
				}
				80% {
					bottom: -10%;
				}
				90% {
					bottom: 10%;
				}
				100% {
					bottom: 0%;
				}
			}
			@keyframes ball {
				0% {
					top: 80%;
					left: 96%;
				}
				10% {
					top: 10%;
					left: 3%;
				}
				20% {
					top: 10%;
					left: 90%;
				}
				30% {
					top: 60%;
					left: 3%;
				}
				40% {
					top: 10%;
					left: 90%;
				}
				50% {
					top: 50%;
					left: 3%;
				}
				60% {
					top: 10%;
					left: 90%;
				}
				70% {
					top: 93%;
					left: 3%;
				}
				80% {
					top: 83%;
					left: 90%;
				}
				90% {
					top: 10%;
					left: 3%;
				}
				100% {
					top: 80%;
					left: 90%;
				}
			}
		</style>`;
		container.classList.add('headerNavBar');
		container.innerHTML = /*html*/`
		<div class="gradient-text">
			TRANS<span id="spantitle">CENDENCE</span>		
		</div>
		<div class="loading">
  			<div class="loading-box">
    			<div class="WH color l1"></div>
    			<div class="ball color"></div>
    			<div class="WH color l2"></div>
  			</div>
		</div>
		<div class="icon-Div">
			<div class="pic-container">
				<img src="https://cdn.intra.42.fr/users/6fa19611301215aa2696010d7d4b32e4/jbortolo.png" alt="intra profile pic">
			</div>
			<div class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" style="height: 2rem; width: 2rem;" >
					<path d="M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z"/>
				</svg>
				<div class="tooltip">
    				<p>Settings</p>
				</div>
			</div>
			<div class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 2rem; width: 2rem;">
					<g class="" transform="translate(0,0)" style="">
						<path d="M234.875 18.78c-26.087 2.367-51.557 8.56-74.875 18.782 15.37 32.763 14.222 66.706-6.72 82.407-20.835 15.617-54.055 7.965-81.124-15.69-16.246 19.452-29.336 41.36-38.875 65.626 33.83 12.333 56.635 37.665 52.94 63.5-3.698 25.835-32.697 43.74-68.626 46.094 2.338 25.796 8.91 50.778 18.937 73.875 17.81-8.182 35.793-11.09 51.095-8.938 13.032 1.87 23.927 7.015 31.156 16.657 15.817 21.097 7.603 54.713-16.78 81.97 19.516 16.35 42.216 29.444 66.594 39.03 12.33-33.828 37.655-56.634 63.5-52.938 25.844 3.697 43.74 32.696 46.094 68.625 26.087-2.365 51.557-8.555 74.875-18.78-15.766-32.997-14.26-67.588 6.843-83.406 9.64-7.23 22.568-9.022 35.594-7.125 15.112 2.16 31.19 10.25 45.563 22.78 16.088-19.345 29.4-41.51 38.875-65.594-33.83-12.332-56.635-37.653-52.938-63.5 3.697-25.846 32.665-43.772 68.594-46.125-2.36-25.944-8.774-50.663-18.906-73.874-32.612 15.117-66.66 13.145-82.282-7.687-15.696-20.944-7.252-53.86 16.688-81-19.52-16.352-42.248-29.447-66.625-39.032-12.332 33.828-37.657 56.66-63.5 52.968-25.846-3.693-43.744-32.696-46.095-68.625zm21.656 95.126c79.626 0 144.376 64.752 144.376 144.375 0 79.626-64.75 144.376-144.375 144.376-79.624 0-144.374-64.75-144.374-144.375 0-79.624 64.75-144.374 144.375-144.374zm0 18.688c-69.524 0-125.686 56.162-125.686 125.687 0 69.526 56.162 125.69 125.687 125.69 69.526 0 125.69-56.164 125.69-125.69 0-69.522-56.164-125.686-125.69-125.686zm.033 15.125c61.094 0 110.625 49.53 110.625 110.624 0 61.095-49.53 110.625-110.625 110.625s-110.625-49.53-110.625-110.626c0-61.095 49.53-110.625 110.625-110.625z" fill="currentcolor" fill-opacity="1">
						</path>
					</g>
				</svg>
				<div class="tooltip">
    				<p>Log Out</p>
				</div>
			</div>
		</div>`;
		shadow.appendChild(style);
		shadow.appendChild(container);
	}
	connectedCallback() {}
	disconnectedCallback(){}
}
customElements.define('header-nav-bar', headerNavBar);