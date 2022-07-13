const randomMessages = [
    "Кто тут?",
    "Где ваша совесть?",
    "К сожалению, все операторы заняты."
]

// side text to show the chat
const sideText = document.querySelector(".chat-widget__side-text")

// block with chat
const chatWidget = document.querySelector(".chat-widget")
const input = document.getElementById("chat-widget__input")
const chatMessages = document.querySelector(".chat-widget__messages")
const chatContainer = document.querySelector(".chat-widget__messages-container")


function sendMessage(
    classAttribute="message", 
    textMessage=randomMessages[Math.floor(Math.random() * randomMessages.length)]
    ) {
    let message = document.createElement("div");
    message.setAttribute("class",classAttribute);
    
    let date = new Date();
    let time = document.createElement("div");
    time.setAttribute("class", "message__time");
    time.innerText = `${date.getHours()}`+ ':' + `${date.getMinutes()}`;
    
    let text = document.createElement("div");
    text.setAttribute("class", "message__text");
    text.innerText = textMessage;

    message.append(time, text);
    chatMessages.append(message);
    input.value = classAttribute == "message"? '': input.value;

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sideText.addEventListener("click", () => {
   chatWidget.classList.add("chat-widget_active");
})

input.addEventListener("keydown",(event)=>{
    
    if (event.key == "Enter") {        
        sendMessage("message message_client", input.value);
        sendMessage();
    }
})
