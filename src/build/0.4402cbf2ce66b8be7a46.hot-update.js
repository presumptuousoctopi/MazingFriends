webpackHotUpdate(0,{

/***/ 288:
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
	      //view: 'Home',
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false,
	      gameLevel: 2
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
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
	      console.log('room created: ', this.state.createRoomName);
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
	        { className: 'NewGame' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create New Game'
	        ),
	        _react2.default.createElement(
	          'form',
	          { className: 'NewGameForm' },
	          'Room Name:',
	          _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Level:',
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
	          _react2.default.createElement('br', null),
	          'Invite: ',
	          _react2.default.createElement('input', { type: 'text', placeholder: 'optional' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/game' },
	            _react2.default.createElement(
	              'button',
	              { className: 'newGameButton', onClick: this.createRoomButton },
	              'Create Game'
	            )
	          )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjb250cm9sc1ZpZXciLCJnYW1lTGV2ZWwiLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsIndpbmRvdyIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxtQkFBYztBQUFBOztBQUFBOztBQUViLFdBQUtDLEtBQUwsR0FBYTtBQUNaO0FBQ0dDLHVCQUFnQixFQUZQO0FBR1RDLHFCQUFjLEVBSEw7QUFJVEMscUJBQWMsS0FKTDtBQUtUQyxrQkFBVztBQUxGLE1BQWI7QUFPRSxXQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBVlc7QUFXYjs7Ozt5Q0FFb0I7QUFDbEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQVNDLE9BQVQsRUFBa0I7QUFDM0MscUNBQWVDLElBQWYsQ0FBb0I7QUFDbEJDLHFCQUFVO0FBRFEsVUFBcEI7QUFHQUMsZUFBTUgsT0FBTjtBQUNELFFBTEQ7QUFNRDs7O3dDQUVpQjtBQUNmLFdBQUlJLFdBQVc7QUFDYkMsbUJBQVUsS0FBS2hCLEtBQUwsQ0FBV0MsY0FEUjtBQUViZ0IsZ0JBQU8sS0FBS2pCLEtBQUwsQ0FBV0k7QUFGTCxRQUFmOztBQUtBYyxjQUFPVCxNQUFQLENBQWNVLElBQWQsQ0FBbUIsWUFBbkIsRUFBaUNKLFFBQWpDO0FBQ0RLLGVBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixLQUFLckIsS0FBTCxDQUFXQyxjQUF6QztBQUNGOzs7a0NBRWFxQixDLEVBQUc7QUFDZCxZQUFLQyxRQUFMLHFCQUNHRCxFQUFFRSxNQUFGLENBQVNDLElBRFosRUFDbUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FENUI7QUFHQU4sZUFBUUMsR0FBUixDQUFZLEtBQUtyQixLQUFqQjtBQUNEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUVFO0FBQUE7QUFBQSxhQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUNZLG9EQUFPLFVBQVUsS0FBS08sWUFBdEIsRUFBb0MsTUFBSyxnQkFBekMsR0FEWjtBQUFBO0FBQytFLG9EQUQvRTtBQUFBO0FBR0c7QUFBQTtBQUFBLGVBQVEsVUFBVSxLQUFLQSxZQUF2QixFQUFxQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksU0FBdkQsRUFBbUUsTUFBSyxXQUF4RSxFQUFvRixjQUFwRjtBQUNFO0FBQUE7QUFBQSxpQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGNBREY7QUFFRTtBQUFBO0FBQUEsaUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxjQUZGO0FBR0U7QUFBQTtBQUFBLGlCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFIRixZQUhIO0FBUUMsb0RBUkQ7QUFBQTtBQVNVLG9EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CLEdBVFY7QUFBQTtBQVN1RCxvREFUdkQ7QUFVRTtBQUFBO0FBQUEsZUFBTSxJQUFHLE9BQVQ7QUFBaUI7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLQyxnQkFBaEQ7QUFBQTtBQUFBO0FBQWpCO0FBVkY7QUFGRixRQURGO0FBaUJEOzs7O0dBM0RnQixnQkFBTXNCLFM7O21CQThEVjVCLEkiLCJmaWxlIjoiMC40NDAyY2JmMmNlNjZiOGJlN2E0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Ly92aWV3OiAnSG9tZScsXG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXG4gICAgICBqb2luUm9vbU5hbWU6ICcnLFxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZSxcbiAgICAgIGdhbWVMZXZlbDogMlxuXHRcdH1cbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICAgdmFyIHJvb21JbmZvID0ge1xuICAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxuICAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmdhbWVMZXZlbFxuICAgICB9O1xuIFxuICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCByb29tSW5mbyk7XG4gICAgY29uc29sZS5sb2coJ3Jvb20gY3JlYXRlZDogJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSlcblx0fVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3R2FtZVwiPlxuICAgICAgICA8aDM+Q3JlYXRlIE5ldyBHYW1lPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiTmV3R2FtZUZvcm1cIj5cbiAgICAgICAgICBSb29tIE5hbWU6PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICBMZXZlbDpcbiAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVMZXZlbH0gIG5hbWU9XCJnYW1lTGV2ZWxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkVhc3k8L29wdGlvbj5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+SGFyZDwvb3B0aW9uPlxuICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvbmFsXCIgLz4gPGJyLz5cbiAgICAgICAgICA8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJuZXdHYW1lQnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgR2FtZTwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=