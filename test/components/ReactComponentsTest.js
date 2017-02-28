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
import VideoChat from 'components/Game/VideoChat';
import ProgressBar from 'components/Game/ProgressBar';
import Lobby from 'components/Game/ProgressBar';

import { shallow, mount, render } from 'enzyme';
import { SocketIO, Server } from 'mock-socket';

<<<<<<< HEAD
describe('TextChat component', function () {
  before( function(done) {
    window.mockServerAddress = 'test';
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
=======
//describe('TextChat component', function () {
//  before( function(done) {
//    window.mockServerAddress = 'test';
//    window.mockServer = new Server(mockServerAddress);
//    window.io = SocketIO;
//    window.socket = new window.io(mockServerAddress);
//    window.socket.on('connect', function() {
//      done();
//    });
//  });
//
//  it('Should contain sendMessage function that emits message state using socket.io', function(done) {
//    window.mockServer.on('sendMessage', function (message) {
//      expect(message).to.equal('');
//      done();
//    });
//
//    const wrapper = shallow(<TextChat />);
//    var instance = wrapper.instance();
//    instance.sendMessage({
//      preventDefault: () => {}
//    });
//    wrapper.update();
//  });
//
//  it('Should contain updateInput function that updates message state', function() {
//    const wrapper = shallow(<TextChat />);
//    wrapper.instance().updateInput({
//      target: {
//        value: 10
//      }
//    });
//    wrapper.update();
//    expect(wrapper.state('message')).to.equal(10);
//  });
//
//  after( function() {
//    window.mockServer.stop();
//    window.socket.disconnect();
//  });
//});
//
//describe('HomeView component', function () {
//  before( function(done) {
//    window.mockServerAddress = 'test'
//    window.mockServer = new Server(mockServerAddress);
//    window.io = SocketIO;
//    window.socket = new window.io(mockServerAddress);
//    window.socket.on('connect', function() {
//      done();
//    });
//  });
//
//  it('Should contain createRoomButton function that emits createRoom state using socket.io', function(done) {
//    mockServer.on('createRoom', function (message) {
//      expect(message).to.equal('');
//      done();
//    });
//    const wrapper = shallow(<HomeView />);
//    wrapper.instance().createRoomButton();
//    wrapper.update();
//  });
//
//  it('Should contain joinRoomButton function that emits joinRoom state using socket.io', function(done) {
//    mockServer.on('joinRoom', function (message) {
//      expect(message).to.equal('');
//      done();
//    });
//    const wrapper = shallow(<HomeView />);
//    wrapper.instance().joinRoomButton();
//    wrapper.update();
//  });
//
//  it('Should have its view vanished after creating or joining a room', function(done) {
//    mockServer.on('createRoom', function (message) {
//      expect(message).to.equal('');
//    });
//    var wrapper = shallow(<HomeView />);
//    wrapper.instance().createRoomButton();
//    wrapper.update();
//    expect(wrapper.state().view).to.equal('vanish');
//
//    mockServer.on('joinRoom', function (message) {
//      expect(message).to.equal('');
//      done();
//    });
//    var wrapper = shallow(<HomeView />);
//    wrapper.instance().joinRoomButton();
//    wrapper.update();
//    expect(wrapper.state().view).to.equal('vanish');
//  });
//
//  after( function() {
//    window.mockServer.stop();
//    window.socket.disconnect();
//  });
//});
//
//
//describe('Signup component', function () {
//  before( function(done) {
//    window.mockServerAddress = 'test'
//    window.mockServer = new Server(mockServerAddress);
//    window.io = SocketIO;
//    window.socket = new window.io(mockServerAddress);
//    window.socket.on('connect', function() {
//      done();
//    });
//  });
//
//  it('Should contain signUp function that sends user information to the server via socket.io', function(done) {
//    mockServer.on('signup', function (newUser) {
//      expect(newUser.username).to.equal('dj');
//      expect(newUser.password).to.equal('kim');
//      done();
//    });
//    var wrapper = shallow(<Signup />);
//    var instance = wrapper.instance();
//    instance.refs = {
//      username: {
//        value: 'dj'
//      },
//      password: {
//        value: 'kim'
//      }
//    };
//    instance.signUp({
//      preventDefault: () => {}
//    });
//  });
//
//  after( function() {
//    window.mockServer.stop();
//    window.socket.disconnect();
//  });
//});
//describe('VideoChat component', function () {
//  beforeEach(function () {
//    this.VideoChatView = createComponent(VideoChat);
//  });
//
//  it('should exist when mounted', function () {
//    const wrapper = shallow(<ChatView/>);
//    expect(wrapper.find(VideoChat)).to.have.length(1);
//  });
//});

  describe('ProgressBar component', function () {
    const wrapper = shallow(<ProgressBar/>);
    it('should add the progress class prop to the progress bar', function () {
      assert.equal(wrapper.prop('className'), 'progress');
>>>>>>> tests for progressbar

    });
    it('should have a value of 0 when initialized', function () {
      assert.equal(wrapper.find('.progress-bar').prop('aria-valuenow'), "0");
    });
    it('should have a width equal to the percentage passed in', function () {
      wrapper.setState({
        percentage: 20
      })
      assert.equal(wrapper.find('.progress-bar').prop('style').width, "20%");
      //this test should also incorporate changing progress bar-tbd
    });
  });
<<<<<<< HEAD

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
});

  describe('ProgressBar component', function () {
    const wrapper = shallow(<ProgressBar/>);
    it('should add the progress class prop to the progress bar', function () {
      assert.equal(wrapper.prop('className'), 'progress');

    });
    it('should have a value of 0 when initialized', function () {
      assert.equal(wrapper.find('.progress-bar').prop('aria-valuenow'), "0");
    });
    it('should have a width equal to the percentage passed in', function () {
      wrapper.setState({
        percentage: 20
      })
      assert.equal(wrapper.find('.progress-bar').prop('style').width, "20%");
      //this test should also incorporate changing progress bar-tbd
    });
  });
=======
>>>>>>> tests for progressbar
    describe('Lobby component', function () {
      const wrapper = shallow(<Lobby/>);
      it('should exist when mounted', function () {
        assert.equal(wrapper.length, 1)
<<<<<<< HEAD
      });
      it('should update state when rooms are passed in', function () {
        wrapper.setState({
          roomnames: ["1"],
          rooms: {"1": "1"}
        })
        assert.equal(wrapper.state().roomnames[0], "1");
      });
      it('should render rooms in the lobby when rooms are passed in', function () {
        wrapper.setState({
          roomnames: ["1"],
          rooms: {"1": "1"}
        })
        assert.equal(wrapper.state().rooms["1"], "1");
      });
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
=======
      });
      it('should update state when rooms are passed in', function () {
        wrapper.setState({
          roomnames: ["1"],
          rooms: {"1": "1"}
        })
        assert.equal(wrapper.state().roomnames[0], "1");
      });
      it('should render rooms in the lobby when rooms are passed in', function () {
        wrapper.setState({
          roomnames: ["1"],
          rooms: {"1": "1"}
        })
        assert.equal(wrapper.state().rooms["1"], "1");
      });
    });
//
//
//  describe('Login component', function () {
//    before(function (done) {
//      window.mockServerAddress = 'test'
//      window.mockServer = new Server(mockServerAddress);
//      window.io = SocketIO;
//      window.socket = new window.io(mockServerAddress);
//      window.socket.on('connect', function () {
//        done();
//      });
//    });
//
//    it('Should contain signIn function that sends user information to the server via socket.io', function (done) {
//      mockServer.on('signin', function (user) {
//        expect(user.username).to.equal('dj');
//        expect(user.password).to.equal('kim');
//        done();
//      });
//      var wrapper = shallow(<Login />);
//      var instance = wrapper.instance({
//        preventDefault: () => {
//        }
//      });
//      instance.refs = {
//        username: {
//          value: 'dj'
//        },
//        password: {
//          value: 'kim'
//        }
//      };
//      instance.signIn({
//        preventDefault: () => {
//        }
//      });
//      wrapper.update();
//    });
//
//    after(function () {
//      window.mockServer.stop();
//      window.socket.disconnect();
//    });
//  });
//});
>>>>>>> tests for progressbar
