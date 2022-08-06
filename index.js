import MessageService from "./message-service.js";

    let userId = "kylehwelch";
    const messageService = new MessageService();

    window.addEventListener("load", function () {
        document.getElementById("greeting").innerHTML = `Welcome, ${userId}!`;
        messageService.getAllMessages();
});