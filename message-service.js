export default class MessageService {

    getAllMessages() {
        let request = new XMLHttpRequest();

        new Promise(function (resolve, reject) {
        //Setup our listener to process completed requests
        request.onload = function() {
            if (request.status >= 200 && request.status < 300) {
                const threads = (JSON.parse(request.responseText)); // 'This is the returned text.'
                resolve(threads);
            } else {
                console.log(`Error: ` + request.status); // An error occurred during the request.
            }
        };

        request.open("GET", "http://zipcode.rocks:8085/messages");

        request.send();
        });
    }
}