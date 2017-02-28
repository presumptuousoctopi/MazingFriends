webpackHotUpdate(0,{

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _reactRouter = __webpack_require__(189);
	
	var _Lobby = __webpack_require__(284);
	
	var _Lobby2 = _interopRequireDefault(_Lobby);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	
	    _this.state = {
	      view: 'Home',
	      join: 'vanish',
	      new: 'vanish',
	      gameLevel: 2,
	      createRoomName: '',
	      joinRoomName: ''
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
	    _this.joinRoomButton = _this.joinRoomButton.bind(_this);
	    _this.newButtonClick = _this.newButtonClick.bind(_this);
	    _this.joinButtonClick = _this.joinButtonClick.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.on('roomJoinError', function (message) {
	        _reactRouter.browserHistory.push({
	          pathname: '/home'
	        });
	        // context.setState({
	        //   view: 'Home'
	        // });
	        alert(message);
	      });
	    }
	  }, {
	    key: 'createRoomButton',
	    value: function createRoomButton() {
	      var roomInfo = {
	        roomname: this.state.createRoomName,
	        level: this.state.gameLevel
	      };
	
	      window.socket.emit('createRoom', roomInfo);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'joinRoomButton',
	    value: function joinRoomButton() {
	      window.socket.emit('joinRoom', this.state.joinRoomName);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'newButtonClick',
	    value: function newButtonClick() {
	      this.setState({
	        new: 'NewView'
	      });
	    }
	  }, {
	    key: 'joinButtonClick',
	    value: function joinButtonClick() {
	      this.setState({
	        join: 'JoinView'
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.state.view },
	        _react2.default.createElement(_TitleView2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'NewView' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.newButtonClick },
	            'New Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.new },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	            _react2.default.createElement(
	              'select',
	              { onChange: this.handleChange, value: this.state.gameLevel, name: 'gameLevel', required: true },
	              _react2.default.createElement(
	                'option',
	                { value: '1' },
	                'Easy'
	              ),
	              _react2.default.createElement(
	                'option',
	                { value: '2' },
	                'Normal'
	              ),
	              _react2.default.createElement(
	                'option',
	                { value: '3' },
	                'Hard'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/game' },
	              _react2.default.createElement(
	                'button',
	                { className: 'Play', onClick: this.createRoomButton },
	                'Create Room'
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'JoinView' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.joinButtonClick },
	            'Join Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.join },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'joinRoomName' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/game' },
	              _react2.default.createElement(
	                'button',
	                { className: 'Play', onClick: this.joinRoomButton },
	                'Join Room'
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null)
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons' },
	            'Controls'
	          )
	        ),
	        _react2.default.createElement(_Lobby2.default, null)
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeD81ZDliIl0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInZpZXciLCJqb2luIiwibmV3IiwiZ2FtZUxldmVsIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImpvaW5Sb29tQnV0dG9uIiwibmV3QnV0dG9uQ2xpY2siLCJqb2luQnV0dG9uQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJyb29tSW5mbyIsInJvb21uYW1lIiwibGV2ZWwiLCJ3aW5kb3ciLCJlbWl0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxtQkFBYztBQUFBOztBQUFBOztBQUViLFdBQUtDLEtBQUwsR0FBYTtBQUNaQyxhQUFNLE1BRE07QUFFWkMsYUFBTSxRQUZNO0FBR1pDLFlBQUssUUFITztBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLHVCQUFnQixFQUxQO0FBTVRDLHFCQUFjO0FBTkwsTUFBYjtBQVFFLFdBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsV0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFdBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFB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QUFVRztBQUFBO0FBQUEsZUFBUSxXQUFVLGFBQWxCO0FBQUE7QUFBQTtBQVZILFVBakJEO0FBNkJGO0FBN0JFLFFBREY7QUFpQ0Q7Ozs7R0F0R2dCLGdCQUFNdUIsUzs7bUJBeUdWakMsSSIsImZpbGUiOiIwLjNmZDZlYTkyMjY1MDMyNTk3NzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xyXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IExvYmJ5IGZyb20gJy4vLi4vR2FtZS9Mb2JieS5qc3gnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKClcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHZpZXc6ICdIb21lJyxcclxuXHRcdFx0am9pbjogJ3ZhbmlzaCcsXHJcblx0XHRcdG5ldzogJ3ZhbmlzaCcsXHJcbiAgICAgIGdhbWVMZXZlbDogMixcclxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxyXG4gICAgICBqb2luUm9vbU5hbWU6ICcnXHJcblx0XHR9XHJcbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5qb2luQnV0dG9uQ2xpY2sgPSB0aGlzLmpvaW5CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgLy8gICB2aWV3OiAnSG9tZSdcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cdGNyZWF0ZVJvb21CdXR0b24oKSB7XHJcbiAgICB2YXIgcm9vbUluZm8gPSB7XHJcbiAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxyXG4gICAgICBsZXZlbDogdGhpcy5zdGF0ZS5nYW1lTGV2ZWxcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgcm9vbUluZm8pO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHZpZXc6ICd2YW5pc2gnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgam9pblJvb21CdXR0b24oKSB7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgdGhpcy5zdGF0ZS5qb2luUm9vbU5hbWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpZXc6ICd2YW5pc2gnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblx0bmV3QnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmV3OiAnTmV3VmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRqb2luQnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0am9pbjogJ0pvaW5WaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxyXG4gICAgICBcdDxUaXRsZSAvPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lTGV2ZWx9ICBuYW1lPVwiZ2FtZUxldmVsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cdCAgICAgIFx0PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIFJvb208L2J1dHRvbj48L0xpbms+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiSm9pblZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLmpvaW5CdXR0b25DbGlja30+Sm9pbiBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5qb2lufT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJqb2luUm9vbU5hbWVcIj48L2lucHV0PlxyXG5cdFx0XHRcdDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9ufT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG4gICAgICBcdFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIj5Db250cm9sczwvYnV0dG9uPlxyXG4gICAgICBcdDwvZGl2PlxyXG5cdFx0ICA8TG9iYnkvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=