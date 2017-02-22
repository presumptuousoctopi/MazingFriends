XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var io = require('../../src/js/socket.io'); // Socket.io client module

// The global.location is necessary
var page = "http://127.0.0.1:3000";
global.location = require('url').parse(page);

describe("Test on the client side", function() {
  var server;

  describe("Connect the server with Socket.IO", function() {
    it ("Should establish connection", function() {
      var client = io.connect(page);
      expect(client).to.equal('hey');
    });
  });
});