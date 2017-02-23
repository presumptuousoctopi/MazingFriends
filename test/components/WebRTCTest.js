//GLOBALS
var chai = require('chai'),
    mocha = require('mocha'),
    should = chai.should();

var io = require('socket.io-client');

describe("webrtc", function () {

        var  options ={
            transports: ['websocket'],
            'force new connection': true
        };

    it("echos message", function (done) {
        var client = io.connect("http://localhost:3000", options);

        client.once("connect", function () {
            client.once("created", function (message) {
                console.log(message);

                client.disconnect();
                done();
            });

            client.emit("created", "hello world");
        });
    });

});
