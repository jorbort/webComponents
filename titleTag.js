class TitleTagComponent extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.textContent = /*css*/`
		html, body{
			height: 100%;
			font-weight: 900;
		  }
		  
		  body{
			background: yellow;
			font-family: 'Press Start 2P',Arial, sans-serif;
		  }
		  text{
		  }
		  svg {
			  display: block;
			  font: 5em  'Press Start 2P',Arial, sans-serif;
			  width: 950px;
			  height: 400px;
			  margin: 0 auto;
		  }
		  
		  .text-copy {
			  fill: none;
			  stroke: white;
			  stroke-dasharray: 6% 29%;
			  stroke-width: 5px;
			  stroke-dashoffset: 0%;
			  animation: stroke-offset 5.5s infinite linear;
		  }
		  
		  .text-copy:nth-child(1){
			stroke: #4D163D;
			animation-delay: -1;
		  }
		  
		  .text-copy:nth-child(2){
			stroke: #840037;
			animation-delay: -2s;
		  }
		  
		  .text-copy:nth-child(3){
			stroke: #BD0034;
			animation-delay: -3s;
		  }
		  
		  .text-copy:nth-child(4){
			stroke: #BD0034;
			animation-delay: -4s;
		  }
		  
		  .text-copy:nth-child(5){
			stroke: #FDB731;
			animation-delay: -5s;
		  }
		  
		  @keyframes stroke-offset{
			100% {stroke-dashoffset: -35%;}
		  }
		`;
		shadow.appendChild(style);
		let container = document.createElement('div');
		container.innerHTML = /*html*/`<svg viewBox="0 0 960 300">
		<symbol id="s-text">
		  <text text-anchor="middle" x="50%" y="80%">
		  	<tspan dx="0">t</tspan>
			<tspan dx="0.5">r</tspan>
			<tspan dx="0.5">a</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">s</tspan>
			<tspan dx="0.5">c</tspan>
			<tspan dx="0.5">e</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">d</tspan>
			<tspan dx="0.5">a</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">c</tspan>
			<tspan dx="0.5">e</tspan>
		  </text>
		  <text text-anchor="middle" x="49%" y="81%">
		  	<tspan dx="0">t</tspan>
			<tspan dx="0.5">r</tspan>
			<tspan dx="0.5">a</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">s</tspan>
			<tspan dx="0.5">c</tspan>
			<tspan dx="0.5">e</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">d</tspan>
			<tspan dx="0.5">a</tspan>
			<tspan dx="0.5">n</tspan>
			<tspan dx="0.5">c</tspan>
			<tspan dx="0.5">e</tspan>
		  </text>
		  
		</symbol>
	  
		<g class = "g-ants">
		  <use xlink:href="#s-text" class="text-copy"></use>
		  <use xlink:href="#s-text" class="text-copy"></use>
		  <use xlink:href="#s-text" class="text-copy"></use>
		  <use xlink:href="#s-text" class="text-copy"></use>
		  <use xlink:href="#s-text" class="text-copy"></use>
		</g>
	  </svg>
		`;
		shadow.appendChild(container);
	}
	connectedCallback(){
		
	}
	disconectedCallback(){}
}

window.customElements.define("title-component", TitleTagComponent);