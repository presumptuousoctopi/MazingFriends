webpackHotUpdate(0,{

/***/ 287:
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
	
	var _Controls = __webpack_require__(277);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
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
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false
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
	    key: 'controlsViewToggle',
	    value: function controlsViewToggle() {
	      this.setState({
	        controlsView: !this.state.controlsView
	      });
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
	              _reactRouter.Link,
	              { to: '/game' },
	              _react2.default.createElement(
	                'button',
	                { className: 'Play', onClick: this.createRoomButton },
	                'Create Room'
	              )
	            )
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
	            )
	          ),
	          _react2.default.createElement('br', null)
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwidmlldyIsImpvaW4iLCJuZXciLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImNyZWF0ZVJvb21CdXR0b24iLCJiaW5kIiwiam9pblJvb21CdXR0b24iLCJuZXdCdXR0b25DbGljayIsImpvaW5CdXR0b25DbGljayIsImhhbmRsZUNoYW5nZSIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsIndpbmRvdyIsImVtaXQiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQU0sTUFETTtBQUVaQyxhQUFNLFFBRk07QUFHWkMsWUFBSyxRQUhPO0FBSVRDLHVCQUFnQixFQUpQO0FBS1RDLHFCQUFjLEVBTEw7QUFNVEMscUJBQWM7QUFOTCxNQUFiO0FBUUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFdBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLE9BQXZCO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixPQUFwQjtBQWRXO0FBZWI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlLLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0E7QUFDQTtBQUNBO0FBQ0FDLGVBQU1ILE9BQU47QUFDRCxRQVJEO0FBU0Q7Ozt3Q0FDaUI7QUFDaEJJLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixZQUFuQixFQUFpQyxLQUFLckIsS0FBTCxDQUFXSSxjQUE1QztBQUNGLFlBQUtrQixRQUFMLENBQWM7QUFDYnJCLGVBQU07QUFETyxRQUFkO0FBR0E7OztzQ0FFaUI7QUFDZm1CLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixVQUFuQixFQUErQixLQUFLckIsS0FBTCxDQUFXSyxZQUExQztBQUNBLFlBQUtpQixRQUFMLENBQWM7QUFDWnJCLGVBQU07QUFETSxRQUFkO0FBR0Q7OztzQ0FFZTtBQUNoQixZQUFLcUIsUUFBTCxDQUFjO0FBQ2JuQixjQUFLO0FBRFEsUUFBZDtBQUdBOzs7dUNBRWlCO0FBQ2pCLFlBQUttQixRQUFMLENBQWM7QUFDYnBCLGVBQU07QUFETyxRQUFkO0FBR0E7OztrQ0FFYXFCLEMsRUFBRztBQUNkLFlBQUtELFFBQUwscUJBQ0dDLEVBQUVDLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkYsRUFBRUMsTUFBRixDQUFTRSxLQUQ1QjtBQUdBQyxlQUFRQyxHQUFSLENBQVksS0FBSzVCLEtBQWpCO0FBQ0Q7OzswQ0FFb0I7QUFDbkIsWUFBS3NCLFFBQUwsQ0FBYztBQUNaaEIsdUJBQWMsQ0FBQyxLQUFLTixLQUFMLENBQVdNO0FBRGQsUUFBZDtBQUdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVcsS0FBS04sS0FBTCxDQUFXQyxJQUEzQjtBQUNDLGlFQUREO0FBRUM7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQVEsV0FBVSxhQUFsQixFQUFnQyxTQUFTLEtBQUtTLGNBQTlDO0FBQUE7QUFBQSxZQUREO0FBRUM7QUFBQTtBQUFBLGVBQUssV0FBVyxLQUFLVixLQUFMLENBQVdHLEdBQTNCO0FBQUE7QUFFQSxzREFBTyxVQUFVLEtBQUtTLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRkE7QUFHQTtBQUFBO0FBQUEsaUJBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSxtQkFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0wsZ0JBQXZDO0FBQUE7QUFBQTtBQUFqQjtBQUhBO0FBRkQsVUFGRDtBQVVDO0FBQUE7QUFBQSxhQUFLLFdBQVUsVUFBZjtBQUNDO0FBQUE7QUFBQSxlQUFRLFdBQVUsYUFBbEIsRUFBZ0MsU0FBUyxLQUFLSSxlQUE5QztBQUFBO0FBQUEsWUFERDtBQUVDO0FBQUE7QUFBQSxlQUFLLFdBQVcsS0FBS1gsS0FBTCxDQUFXRSxJQUEzQjtBQUFBO0FBRUEsc0RBQU8sVUFBVSxLQUFLVSxZQUF0QixFQUFvQyxNQUFLLGNBQXpDLEdBRkE7QUFHSjtBQUFBO0FBQUEsaUJBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSxtQkFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0gsY0FBdkM7QUFBQTtBQUFBO0FBQWpCO0FBSEksWUFGRDtBQU9HO0FBUEg7QUFWRCxRQURGO0FBc0JEOzs7O0dBNUZnQixnQkFBTW9CLFM7O21CQStGVjlCLEkiLCJmaWxlIjoiMC41MGQ0NWM1MTUzYjgxZjQyOTQwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250cm9scyBmcm9tICcuLy4uL0dhbWUvQ29udHJvbHMuanN4J1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWV3OiAnSG9tZScsXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcblx0XHRcdG5ldzogJ3ZhbmlzaCcsXG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXG4gICAgICBqb2luUm9vbU5hbWU6ICcnLFxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZVxuXHRcdH1cbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV3QnV0dG9uQ2xpY2sgPSB0aGlzLm5ld0J1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5qb2luQnV0dG9uQ2xpY2sgPSB0aGlzLmpvaW5CdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICAgIH0pO1xuICAgICAgLy8gY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAvLyAgIHZpZXc6ICdIb21lJ1xuICAgICAgLy8gfSk7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmlldzogJ3ZhbmlzaCdcblx0XHR9KVxuXHR9XG5cbiAgam9pblJvb21CdXR0b24oKSB7XG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdqb2luUm9vbScsIHRoaXMuc3RhdGUuam9pblJvb21OYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXc6ICd2YW5pc2gnXG4gICAgfSlcbiAgfVxuXG5cdG5ld0J1dHRvbkNsaWNrKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bmV3OiAnTmV3Vmlldydcblx0XHR9KVxuXHR9XG5cblx0am9pbkJ1dHRvbkNsaWNrKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0am9pbjogJ0pvaW5WaWV3J1xuXHRcdH0pXG5cdH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY29udHJvbHNWaWV3VG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udHJvbHNWaWV3OiAhdGhpcy5zdGF0ZS5jb250cm9sc1ZpZXdcbiAgICB9KSBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmlld30+XG4gICAgICBcdDxUaXRsZSAvPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIk5ld1ZpZXdcIj5cblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCIgb25DbGljaz17dGhpcy5uZXdCdXR0b25DbGlja30+TmV3IEdhbWU8L2J1dHRvbj5cblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxuXHQgICAgICBcdFJvb20gTmFtZTpcblx0ICAgICAgXHQ8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PlxuXHQgICAgICBcdDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBSb29tPC9idXR0b24+PC9MaW5rPlxuXHQgICAgICBcdDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLmpvaW5CdXR0b25DbGlja30+Sm9pbiBHYW1lPC9idXR0b24+XG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuam9pbn0+XG5cdCAgICAgIFx0Um9vbSBOYW1lOlxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJqb2luUm9vbU5hbWVcIj48L2lucHV0PlxuXHRcdFx0XHQ8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbn0+Sm9pbiBSb29tPC9idXR0b24+PC9MaW5rPlxuXHQgICAgICBcdDwvZGl2PlxuICAgICAgICAgIDxici8+XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=