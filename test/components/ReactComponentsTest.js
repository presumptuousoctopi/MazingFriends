/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

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

describe('TextChat component', function () {
  before( function(done) {
    window.mockServerAddress = 'test'
    window.mockServer = new Server(mockServerAddress);
    window.io = SocketIO;
    window.socket = new window.io(mockServerAddress);
    window.socket.on('connect', function() {
      done();
    });
  });

  it('Should contain sendMessage function that emits message state using socket.io', function(done) {
    window.mockServer.on('sendMessage', function (message) {
      expect(message).to.equal('');
      done();
    });

    const wrapper = shallow(<TextChat />);
    var instance = wrapper.instance();
    instance.sendMessage({
      preventDefault: () => {}
    });
    wrapper.update();
  });

  it('Should contain updateInput function that updates message state', function() {
    const wrapper = shallow(<TextChat />);
    wrapper.instance().updateInput({
      target: {
        value: 10
      }
    });
    wrapper.update();
    expect(wrapper.state('message')).to.equal(10);
  });

  after( function() {
    window.mockServer.stop();
    window.socket.disconnect();
  });
});

describe('HomeView component', function () {
  before( function(done) {
    window.mockServerAddress = 'test'
    window.mockServer = new Server(mockServerAddress);
    window.io = SocketIO;
    window.socket = new window.io(mockServerAddress);
    window.socket.on('connect', function() {
      done();
    });
  });

  it('Should contain createRoomButton function that emits createRoom state using socket.io', function(done) {
    mockServer.on('createRoom', function (message) {
      expect(message).to.equal('');
      done();
    });
    const wrapper = shallow(<HomeView />);
    wrapper.instance().createRoomButton();
    wrapper.update();
  });

  it('Should contain joinRoomButton function that emits joinRoom state using socket.io', function(done) {
    mockServer.on('joinRoom', function (message) {
      expect(message).to.equal('');
      done();
    });
    const wrapper = shallow(<HomeView />);
    wrapper.instance().joinRoomButton();
    wrapper.update();
  });

  it('Should have its view vanished after creating or joining a room', function(done) {
    mockServer.on('createRoom', function (message) {
      expect(message).to.equal('');
    });
    var wrapper = shallow(<HomeView />);
    wrapper.instance().createRoomButton();
    wrapper.update();
    expect(wrapper.state().view).to.equal('vanish');

    mockServer.on('joinRoom', function (message) {
      expect(message).to.equal('');
      done();
    });
    var wrapper = shallow(<HomeView />);
    wrapper.instance().joinRoomButton();
    wrapper.update();
    expect(wrapper.state().view).to.equal('vanish');
  });

  after( function() {
    window.mockServer.stop();
    window.socket.disconnect();
  });
});


describe('Signup component', function () {
  before( function(done) {
    window.mockServerAddress = 'test'
    window.mockServer = new Server(mockServerAddress);
    window.io = SocketIO;
    window.socket = new window.io(mockServerAddress);
    window.socket.on('connect', function() {
      done();
    });
  });

  it('Should contain signUp function that sends user information to the server via socket.io', function(done) {
    mockServer.on('signup', function (newUser) {
      expect(newUser.username).to.equal('dj');
      expect(newUser.password).to.equal('kim');
      done();
    });
    var wrapper = shallow(<Signup />);
    var instance = wrapper.instance();
    instance.refs = {
      username: {
        value: 'dj'
      },
      password: {
        value: 'kim'
      }
    };
    instance.signUp({
      preventDefault: () => {}
    });
  });

  after( function() {
    window.mockServer.stop();
    window.socket.disconnect();
  });
});
describe('VideoChat component', function () {
  beforeEach(function () {
    this.VideoChatView = createComponent(VideoChat);
  });

  it('should exist when mounted', function () {
    const wrapper = shallow(<ChatView/>);
    expect(wrapper.find(VideoChat)).to.have.length(1);
  });


  describe('Login component', function () {
    before(function (done) {
      window.mockServerAddress = 'test'
      window.mockServer = new Server(mockServerAddress);
      window.io = SocketIO;
      window.socket = new window.io(mockServerAddress);
      window.socket.on('connect', function () {
        done();
      });
    });

    it('Should contain signIn function that sends user information to the server via socket.io', function (done) {
      mockServer.on('signin', function (user) {
        expect(user.username).to.equal('dj');
        expect(user.password).to.equal('kim');
        done();
      });
      var wrapper = shallow(<Login />);
      var instance = wrapper.instance({
        preventDefault: () => {
        }
      });
      instance.refs = {
        username: {
          value: 'dj'
        },
        password: {
          value: 'kim'
        }
      };
      instance.signIn({
        preventDefault: () => {
        }
      });
      wrapper.update();
    });

    after(function () {
      window.mockServer.stop();
      window.socket.disconnect();
    });
  });
});