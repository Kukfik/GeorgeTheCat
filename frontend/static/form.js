// const chatHeader = document.querySelector('.chat-header')
// const chatMessages = document.querySelector('.chat-messages')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')
// const clearChatBtn = document.querySelector('.clear-chat-button')

// const CreatechatMessageElement = (message) =>
// 	<div class="message ${message.sender === 'You' ? 'blue-bg' :'gray-bg'}">
// 		<div class="message-sender">{message.sender}</div>
// 		<div class="message-text">${message.text}</div>
// 		<div class="message-timestamp">${message.timestamp}</div>
// 	</div>

// let messageSender = "You"

// const sendMessage = (e) => {
// 	e.preventDefault()
// 	const timestamp = new Date().toLocaleString('ko-KR', {hour: 'numeric', minute:'numeric', hour12: true})
// 	const message = {
// 		sender: messageSender,
// 		text: chatInput.value,
// 		timestamp,
// 	}
// 	chatMessages.innerHTML += CreatechatMessageElement(message)
// }
// chatInputForm.addEventListener('submit', sendMessage)



function getTime() {
	let today = new Date();
	hours = today.getHours();
	minutes = today.getMinutes();

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	let time = hours + ':' + minutes;
	return time;
}

function firstBotMessage() {
	let firstMessage = "how is it going?"
	document.getElementById("botStarterMessage").innerHTML =  firstMessage ;
	let time = getTime();
	document.getElementById("chat-timestamp").innerHTML = time;
	document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

function getHardResponse(userText) {
	let botResponse = "have a nice day";
	let botHtml =  botResponse ;
	document.getElementById('chatbox') = botHtml;
	document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function getResponse() {
	let userText = $("#textInput").val();

	if (userText == "") {
		userText = "I love Maksimka!";
	}
	let userHtml = userText;
	$("#textInput").val("");
	$("#chatbox").append(userHtml);
	document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function buttonSendText(sampleText){
	let userHtml = sampleText;
	$("#textInput").val("");
	$("chatbox").append(userHtml);
	document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function sendButton(){
	getResponse();
}

$("#textInput").keypress(function(e){
	if(e.which == 13){
		getResponse();
	}
})
//https://www.youtube.com/watch?v=He0xK1x-vnI
//https://www.youtube.com/watch?v=g9SewnLpTE0
//https://www.youtube.com/watch?v=_sxoqRIbW0c
