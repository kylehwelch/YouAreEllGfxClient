import MessageService from "./message-service.js";

    let userId = "kylehwelch";
    const messageService = new MessageService();

    window.addEventListener("load", function () {
        document.getElementById("greeting").innerHTML = `Welcome, ${userId}!`;
        messageService.getAllMessages()
            .then(successCallback, errorCallback);

        function successCallback(response) {
            // This data comes from the resolves method
            populateMessages(response);
        }
        function errorCallback(response) {
            // This data comes from the reject method
            console.log(response);
        }
});

function populateMessages(messages) {
    messages.forEach(message => {
        addMessageToThread(message);
    })
}

function createFormListener() {
    const form = document.getElementById("new-message-form");

    form.onsubmit = function (event) {
        //stop by the regular form submission
        event.preventDefault();

        const data = {
            fromid: userId,
            message: form.message.value
        };

        messageService.createNewMessage(data)
            .then(successCallback, errorCallback);

        function successCallback(response) {
            // This data comes from the resolve method
            addMessageToThread(response);
        }

        function errorCallback(response) {
            //This data comes back from the reject method
            console.log(response);
        }
    }
};

function addMessageToThread(message) {
    const messageListItem = document.createElement("LI");
    const userIdHeading = document.createElement("h3");
    const messageParagraph = document.createElement("p");
    const messageContent = document.createTextNode(message.message);
    const userIdContent = document.createTextNode(message.fromid);
    userIdHeading.appendChild(userIdContent);
    messageParagraph.appendChild(messageContent);
    messageListItem
        .appendChild(userIdHeading)
        .appendChild(messageParagraph);
    document.getElementById("message-list").appendChild(messageListItem);
}

createFormListener();