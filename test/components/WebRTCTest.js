//GLOBALS

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from '../helpers/shallowRenderHelper';

import ChatView from 'components/Game/ChatView'
import TextChat from 'components/Game/TextChat';
import HomeView from 'components/Home/HomeView';
import Signup from 'components/Login/Signup';
import Login from 'components/Login/Login';
import VideoChat from 'components/Game/VideoChat'

import { shallow, mount, render } from 'enzyme';
import { SocketIO, Server } from 'mock-socket';

describe("webrtc", function () {
    before( function(done) {
        window.mockServerAddress = 'test'
        window.mockServer = new Server(mockServerAddress);
        window.io = SocketIO;
        window.socket = new window.io(mockServerAddress);
        window.socket.on('connect', function() {
            done();
        });
    });
    var io = require('socket.io-client');
    var  options ={
        transports: ['websocket'],
        'force new connection': true
    };
    it("should return the room that has been created", function (done) {
        var client = io.connect("http://localhost:3000", options);
        client.on("connect", function () {
            client.emit("createRoom", "room");
            client.on("roomName", function(data){
                expect(data).to.equal('room');
            })

                client.disconnect();
                done();

        });
    });

    it("it should open a local stream after entering a room", function (done) {
        var client = io.connect("http://localhost:3000", options);
        client.on("connect", function () {
            client.emit("createRoom", "room");
            client.on("roomName", function(data){
                expect(spy).to.have.been.called();
            })

            client.disconnect();
            done();

        });
    });

});
