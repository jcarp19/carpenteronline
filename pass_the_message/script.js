"use static";
document.getElementById("button").addEventListener("click", () => {
    
    let message = document.getElementById("message");
    let newMessage = document.querySelector(".new-message");

    newMessage.innerHTML = message.value;
    
    message.value = "";
    }
)