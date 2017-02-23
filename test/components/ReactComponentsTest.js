/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';  
import createComponent from '../helpers/shallowRenderHelper';
import App from 'components/App';
import ChatView from 'components/ChatView';
import GameOverView from 'components/GameOverView';
import HomeView from 'components/HomeView';
import LeaderboardView from 'components/LeaderboardView';
import VideoChat from 'components/VideoChat'
import TitleView from 'components/TitleView';
import { shallow, mount, render } from 'enzyme';
const wrapper = shallow(<App />);

var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = TestUtils;

describe('<')

describe('App component', function () {
  beforeEach(function () {
    this.App = createComponent(App);
  });

  it('Should have its component name as \'App\'', function () {
    expect(this.App.props.className).to.equal('App');
  });

  it('Should have two children components', function () {
    expect(this.App.props.children.length).to.equal(2);
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
  
});

describe('ChatView component', function () {
  beforeEach(function () {
    this.ChatView = createComponent(ChatView);
  });

  it('Should have its component name as \'ChatView\'', function () {
    expect(this.ChatView.props.className).to.equal('Chat');
  });


});

describe('GameOverView component', function () {
  beforeEach(function () {
    this.GameOverView = createComponent(GameOverView);
  });

  it('Should have its component name as \'GameOverView\'', function () {
    expect(this.GameOverView.props.className).to.equal('GameOver');
  });


});

describe('HomeView component', function () {
  beforeEach(function () {
    this.HomeView = createComponent(HomeView);
  });

  it('Should have its component name as \'HomeView\'', function () {
    expect(this.HomeView.props.className).to.equal('Home');
  });


});

describe('LeaderboardView component', function () {
  beforeEach(function () {
    this.LeaderboardView = createComponent(LeaderboardView);
  });

  it('Should have its component name as \'LeaderboardView\'', function () {
    expect(this.LeaderboardView.props.className).to.equal('Leaderboard');
  });


});
describe('VideoChat component', function () {
  beforeEach(function () {
    this.VideoChatView = createComponent(VideoChat);
  });

  it('should exist when mounted', function () {
    const wrapper = mount(<VideoChat/>);
    expect(wrapper.find(VideoChat)).to.have.length(1);
  });


});
describe('TitleView component', function () {
  beforeEach(function () {
    this.TitleView = createComponent(TitleView);
  });

  it('Should have its component name as \'TitleView\'', function () {
    expect(this.TitleView.props.className).to.equal('Title');
  });


});