class friendsList extends HTMLElement{
	constructor(){
		super();
		let shadow = this.attachShadow({mode: 'open'});
		let style = document.createElement('style');
		style.innerText = /*html*/``;
		shadow.appendChild(style);
		let container = document.createElement('div');
		shadow.appendChild(container);
	}
	async connectedCallback(){
		let username = this.getAttribute('username');
		try {
			let response = await fetch(`http://localhost:8000/users/listFriends?username=${username}`);
			if (!response.ok){
				throw new Error('Error en la peticion');
			}
			let friends = await response.json();
			this.renderFriends(friends);
		}catch(error){
			let fallbackFriends = [{name: 'amigo 1'}, {name:"amigo 2"}, {name:"amigo 3"}];
			this.renderFriends(fallbackFriends);
		}
	}
	renderFriends(friends){
		this.container.innerHTML = '';
		friends.forEach(friend => {
			let friendDiv = document.createElement('div');
			friendDiv.className = 'friend-div';
			friendDiv.textContent = friend.name; /*revisar con el back end si el campo se llama name*/ 
		});
		this.container.appendChild(friendDiv);
		}
	disconectedCallback(){}
}

window.customElements.define("friends-list", friendsList);
export default friendsList;