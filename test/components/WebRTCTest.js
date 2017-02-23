//GLOBALS

describe("webrtc", function () {

        var  options ={
            transports: ['websocket'],
            'force new connection': true
        };

    it("echos message", function (done) {
        var io = require('socket.io-client');
        var client = io.connect("http://localhost:3000", options);

        client.once("connect", function () {
            client.once("created", function (message) {
                console.log("CREATED", message);

                client.disconnect();
                done();
            });

            client.emit("created", "hello world");
        });
    });

});
