function changeCoverColor(){
	var color = ['#550033','#0099ff','#003355','#00a172','#a800ff','#00d2ff','#7e00ff','#960058','#cb1831','#6e1160','#2a0f6f','#1aecae', '#04c1be'][Math.floor(Math.random()*13)];


	document.getElementsByClassName('cover-image')[0].style.backgroundColor = color;
};

