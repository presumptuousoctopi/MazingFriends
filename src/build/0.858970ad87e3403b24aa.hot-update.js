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
	      window.socket.emit('createRoom', this.state.createRoomName);
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
	              { onChange: this.handleChange, value: this.state.gameLeve.value, name: 'gameLevel', required: true },
	              _react2.default.createElement(
	                'option',
	                null,
	                'Easy'
	              ),
	              _react2.default.createElement(
	                'option',
	                { selected: true },
	                'Normal'
	              ),
	              _react2.default.createElement(
	                'option',
	                null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeD81ZDliIl0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInZpZXciLCJqb2luIiwibmV3IiwiZ2FtZUxldmVsIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImpvaW5Sb29tQnV0dG9uIiwibmV3QnV0dG9uQ2xpY2siLCJqb2luQnV0dG9uQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJ3aW5kb3ciLCJlbWl0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImdhbWVMZXZlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQU0sTUFETTtBQUVaQyxhQUFNLFFBRk07QUFHWkMsWUFBSyxRQUhPO0FBSVRDLGtCQUFXLENBSkY7QUFLVEMsdUJBQWdCLEVBTFA7QUFNVEMscUJBQWM7QUFOTCxNQUFiO0FBUUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFdBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLE9BQXZCO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixPQUFw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ODU4OTcwYWQ4N2UzNDAzYjI0YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXHJcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgTG9iYnkgZnJvbSAnLi8uLi9HYW1lL0xvYmJ5LmpzeCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dmlldzogJ0hvbWUnLFxyXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcclxuXHRcdFx0bmV3OiAndmFuaXNoJyxcclxuICAgICAgZ2FtZUxldmVsOiAyLFxyXG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXHJcbiAgICAgIGpvaW5Sb29tTmFtZTogJydcclxuXHRcdH1cclxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMubmV3QnV0dG9uQ2xpY2sgPSB0aGlzLm5ld0J1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmpvaW5CdXR0b25DbGljayA9IHRoaXMuam9pbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHZpZXc6ICdIb21lJ1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHZpZXc6ICd2YW5pc2gnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgam9pblJvb21CdXR0b24oKSB7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgdGhpcy5zdGF0ZS5qb2luUm9vbU5hbWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpZXc6ICd2YW5pc2gnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblx0bmV3QnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmV3OiAnTmV3VmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRqb2luQnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0am9pbjogJ0pvaW5WaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxyXG4gICAgICBcdDxUaXRsZSAvPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lTGV2ZS52YWx1ZX0gIG5hbWU9XCJnYW1lTGV2ZWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPG9wdGlvbj5FYXN5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+SGFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgXHQ8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgUm9vbTwvYnV0dG9uPjwvTGluaz5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgXHRcdDxici8+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiPkNvbnRyb2xzPC9idXR0b24+XHJcbiAgICAgIFx0PC9kaXY+XHJcblx0XHQgIDxMb2JieS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==