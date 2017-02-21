webpackHotUpdate(0,{

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(102); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(102);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(236);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
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
	      socket.on('roomJoinError', function (message) {});
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
	            { className: 'optionsButton', onClick: this.newButtonClick },
	            'New Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.new },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'Play', onClick: this.createRoomButton },
	              'Create Room'
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
	            { className: 'optionsButton', onClick: this.joinButtonClick },
	            'Join Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.join },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'joinRoomName' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'Play', onClick: this.joinRoomButton },
	              'Join Room'
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(232); if (makeExportsHot(module, __webpack_require__(102))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJqb2luUm9vbUJ1dHRvbiIsIm5ld0J1dHRvbkNsaWNrIiwiam9pbkJ1dHRvbkNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwid2luZG93IiwiZW1pdCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQU0sTUFETTtBQUVaQyxhQUFNLFFBRk07QUFHWkMsWUFBSyxRQUhPO0FBSVRDLHVCQUFnQixFQUpQO0FBS1RDLHFCQUFjO0FBTEwsTUFBYjtBQU9FLFdBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsV0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFdBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFiVztBQWNiOzs7O3lDQUVvQjtBQUNsQkssY0FBT0MsRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBU0MsT0FBVCxFQUFrQixDQUU1QyxDQUZEO0FBR0Q7Ozt3Q0FFaUI7QUFDaEJDLGNBQU9ILE1BQVAsQ0FBY0ksSUFBZCxDQUFtQixZQUFuQixFQUFpQyxLQUFLaEIsS0FBTCxDQUFXSSxjQUE1QztBQUNGLFlBQUthLFFBQUwsQ0FBYztBQUNiaEIsZUFBTTtBQURPLFFBQWQ7QUFHQTs7O3NDQUVpQjtBQUNmYyxjQUFPSCxNQUFQLENBQWNJLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsS0FBS2hCLEtBQUwsQ0FBV0ssWUFBMUM7QUFDQSxZQUFLWSxRQUFMLENBQWM7QUFDWmhCLGVBQU07QUFETSxRQUFkO0FBR0Q7OztzQ0FFZTtBQUNoQixZQUFLZ0IsUUFBTCxDQUFjO0FBQ2JkLGNBQUs7QUFEUSxRQUFkO0FBR0E7Ozt1Q0FFaUI7QUFDakIsWUFBS2MsUUFBTCxDQUFjO0FBQ2JmLGVBQU07QUFETyxRQUFkO0FBR0E7OztrQ0FFYWdCLEMsRUFBRztBQUNkLFlBQUtELFFBQUwscUJBQ0dDLEVBQUVDLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkYsRUFBRUMsTUFBRixDQUFTRSxLQUQ1QjtBQUdBQyxlQUFRQyxHQUFSLENBQVksS0FBS3ZCLEtBQWpCO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVyxLQUFLQSxLQUFMLENBQVdDLElBQTNCO0FBQ0MsaUVBREQ7QUFFQztBQUFBO0FBQUEsYUFBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsZUFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS1EsY0FBaEQ7QUFBQTtBQUFBLFlBREQ7QUFFQztBQUFBO0FBQUEsZUFBSyxXQUFXLEtBQUtULEtBQUwsQ0FBV0csR0FBM0I7QUFBQTtBQUVBLHNEQUFPLFVBQVUsS0FBS1EsWUFBdEIsRUFBb0MsTUFBSyxnQkFBekMsR0FGQTtBQUdBO0FBQUE7QUFBQSxpQkFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0wsZ0JBQXZDO0FBQUE7QUFBQSxjQUhBO0FBSUEsc0RBSkE7QUFLQTtBQUxBO0FBRkQsVUFGRDtBQVlDO0FBQUE7QUFBQSxhQUFLLFdBQVUsVUFBZjtBQUNDO0FBQUE7QUFBQSxlQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLSSxlQUFoRDtBQUFBO0FBQUEsWUFERDtBQUVDO0FBQUE7QUFBQSxlQUFLLFdBQVcsS0FBS1YsS0FBTCxDQUFXRSxJQUEzQjtBQUFBO0FBRUEsc0RBQU8sVUFBVSxLQUFLUyxZQUF0QixFQUFvQyxNQUFLLGNBQXpDLEdBRkE7QUFHQTtBQUFBO0FBQUEsaUJBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtILGNBQXZDO0FBQUE7QUFBQSxjQUhBO0FBSUEsc0RBSkE7QUFLQTtBQUxBO0FBRkQ7QUFaRCxRQURGO0FBeUJEOzs7O0dBbEZnQixnQkFBTWdCLFM7O21CQXFGVnpCLEkiLCJmaWxlIjoiMC44MGY0MDMyOGNhZGJiMzA1YjE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVWaWV3LmpzeCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dmlldzogJ0hvbWUnLFxyXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcclxuXHRcdFx0bmV3OiAndmFuaXNoJyxcclxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxyXG4gICAgICBqb2luUm9vbU5hbWU6ICcnXHJcblx0XHR9XHJcbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5qb2luQnV0dG9uQ2xpY2sgPSB0aGlzLmpvaW5CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dmlldzogJ3ZhbmlzaCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBqb2luUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlldzogJ3ZhbmlzaCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHRuZXdCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGpvaW5CdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmlld30+XHJcbiAgICAgIFx0PFRpdGxlIC8+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJOZXdWaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbnNCdXR0b25cIiBvbkNsaWNrPXt0aGlzLm5ld0J1dHRvbkNsaWNrfT5OZXcgR2FtZTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmV3fT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBSb29tPC9idXR0b24+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiSm9pblZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uc0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9ufT5Kb2luIFJvb208L2J1dHRvbj5cclxuICAgICAgXHRcdDxici8+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=