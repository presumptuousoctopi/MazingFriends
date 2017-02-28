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
	              { onChange: this.handleChange, value: this.state.gameLevel, name: 'gameLevel', required: true },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeD81ZDliIl0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInZpZXciLCJqb2luIiwibmV3IiwiZ2FtZUxldmVsIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImpvaW5Sb29tQnV0dG9uIiwibmV3QnV0dG9uQ2xpY2siLCJqb2luQnV0dG9uQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJ3aW5kb3ciLCJlbWl0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxtQkFBYztBQUFBOztBQUFBOztBQUViLFdBQUtDLEtBQUwsR0FBYTtBQUNaQyxhQUFNLE1BRE07QUFFWkMsYUFBTSxRQUZNO0FBR1pDLFlBQUssUUFITztBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLHVCQUFnQixFQUxQO0FBTVRDLHFCQUFjO0FBTkwsTUFBYjtBQVFFLFdBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsV0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFdBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFkVztBQWVi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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vVGl0bGVWaWV3LmpzeCdcclxuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCBMb2JieSBmcm9tICcuLy4uL0dhbWUvTG9iYnkuanN4J1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR2aWV3OiAnSG9tZScsXHJcblx0XHRcdGpvaW46ICd2YW5pc2gnLFxyXG5cdFx0XHRuZXc6ICd2YW5pc2gnLFxyXG4gICAgICBnYW1lTGV2ZWw6IDIsXHJcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcclxuICAgICAgam9pblJvb21OYW1lOiAnJ1xyXG5cdFx0fVxyXG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXdCdXR0b25DbGljayA9IHRoaXMubmV3QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuam9pbkJ1dHRvbkNsaWNrID0gdGhpcy5qb2luQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgdmlldzogJ0hvbWUnXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dmlldzogJ3ZhbmlzaCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBqb2luUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlldzogJ3ZhbmlzaCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHRuZXdCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGpvaW5CdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmlld30+XHJcbiAgICAgIFx0PFRpdGxlIC8+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJOZXdWaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCIgb25DbGljaz17dGhpcy5uZXdCdXR0b25DbGlja30+TmV3IEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld30+XHJcblx0ICAgICAgXHRSb29tIE5hbWU6XHJcblx0ICAgICAgXHQ8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVMZXZlbH0gIG5hbWU9XCJnYW1lTGV2ZWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPG9wdGlvbj5FYXN5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+SGFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgXHQ8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgUm9vbTwvYnV0dG9uPjwvTGluaz5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XHJcblx0XHRcdFx0PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgXHRcdDxici8+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiPkNvbnRyb2xzPC9idXR0b24+XHJcbiAgICAgIFx0PC9kaXY+XHJcblx0XHQgIDxMb2JieS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==