webpackHotUpdate(0,{

/***/ 289:
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
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home(props) {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	
	    _this.state = {
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false,
	      gameLevel: 2,
	      email: ""
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.changeEmail = _this.changeEmail.bind(_this);
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
	      console.log('currentuser in props: ', this.props.currentUser);
	
	      var roomInfo = {
	        roomname: this.state.createRoomName,
	        level: this.state.gameLevel,
	        user: this.props.currentUser
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
	    key: 'changeEmail',
	    value: function changeEmail(e) {
	      this.setState({
	        email: e.target.value
	      });
	    }
	  }, {
	    key: 'invite',
	    value: function invite(e) {
	      var context = this;
	      e.preventDefault();
	      socket.emit("invite", { user: sessionStorage.getItem('user'), email: context.state.email });
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
	            'ul',
	            { 'class': 'donate-now' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'radio', id: 'a25', name: 'amount' }),
	              _react2.default.createElement(
	                'label',
	                { 'for': 'a25' },
	                '$25'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'radio', id: 'a50', name: 'amount' }),
	              _react2.default.createElement(
	                'label',
	                { 'for': 'a50' },
	                '$50'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'radio', id: 'a75', name: 'amount', checked: 'checked' }),
	              _react2.default.createElement(
	                'label',
	                { 'for': 'a75' },
	                '$75'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'radio', id: 'a100', name: 'amount' }),
	              _react2.default.createElement(
	                'label',
	                { 'for': 'a100' },
	                '$100'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'radio', id: 'other', name: 'amount' }),
	              _react2.default.createElement(
	                'label',
	                { 'for': 'other' },
	                'other:'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('input', { type: 'text', id: 'otherAmount', name: 'numAmount' })
	            )
	          ),
	          _react2.default.createElement('br', null),
	          'Invite: ',
	          _react2.default.createElement('input', { type: 'text', onChange: this.changeEmail, placeholder: 'enter an email' }),
	          ' ',
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', onClick: this.invite.bind(this) },
	            'Send'
	          ),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'Link', to: "/game/" + this.state.createRoomName },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImVtYWlsIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJjaGFuZ2VFbWFpbCIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsInVzZXIiLCJ3aW5kb3ciLCJlbWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbnZpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFnQixFQURQO0FBRVRDLHFCQUFjLEVBRkw7QUFHVEMscUJBQWMsS0FITDtBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLGNBQU87QUFMRSxNQUFiO0FBT0UsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFYZ0I7QUFZbEI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlHLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0FDLGVBQU1ILE9BQU47QUFDRCxRQUxEO0FBTUQ7Ozt3Q0FFaUI7QUFDaEJJLGVBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxLQUFLbkIsS0FBTCxDQUFXb0IsV0FBakQ7O0FBRUMsV0FBSUMsV0FBVztBQUNiQyxtQkFBVSxLQUFLckIsS0FBTCxDQUFXQyxjQURSO0FBRWJxQixnQkFBTyxLQUFLdEIsS0FBTCxDQUFXSSxTQUZMO0FBR2JtQixlQUFNLEtBQUt4QixLQUFMLENBQVdvQjtBQUhKLFFBQWY7O0FBTUFLLGNBQU9iLE1BQVAsQ0FBY2MsSUFBZCxDQUFtQixZQUFuQixFQUFpQ0wsUUFBakM7QUFDREgsZUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtsQixLQUFMLENBQVdDLGNBQXpDO0FBQ0Y7OztrQ0FFYXlCLEMsRUFBRztBQUNkLFlBQUtDLFFBQUwscUJBQ0dELEVBQUVFLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkgsRUFBRUUsTUFBRixDQUFTRSxLQUQ1QjtBQUdBYixlQUFRQyxHQUFSLENBQVksS0FBS2xCLEtBQWpCO0FBQ0Q7OztpQ0FDVzBCLEMsRUFBRztBQUNYLFlBQUtDLFFBQUwsQ0FBYztBQUNSdEIsZ0JBQU9xQixFQUFFRSxNQUFGLENBQVNFO0FBRFIsUUFBZDtBQUdIOzs7NEJBQ01KLEMsRUFBRztBQUNOLFdBQUloQixVQUFVLElBQWQ7QUFDQWdCLFNBQUVLLGNBQUY7QUFDQXBCLGNBQU9jLElBQVAsQ0FBWSxRQUFaLEVBQXNCLEVBQUNGLE1BQU1TLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBUCxFQUF1QzVCLE9BQU9LLFFBQVFWLEtBQVIsQ0FBY0ssS0FBNUQsRUFBdEI7QUFDSDs7OzhCQUNRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUEsYUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFDWSxvREFBTyxVQUFVLEtBQUtHLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRFo7QUFBQTtBQUMrRSxvREFEL0U7QUFBQTtBQUdJO0FBQUE7QUFBQSxlQUFJLFNBQU0sWUFBVjtBQUNaO0FBQUE7QUFBQTtBQUNJLHdEQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLEtBQXZCLEVBQTZCLE1BQUssUUFBbEMsR0FESjtBQUVJO0FBQUE7QUFBQSxtQkFBTyxPQUFJLEtBQVg7QUFBQTtBQUFBO0FBRkosY0FEWTtBQUtaO0FBQUE7QUFBQTtBQUNJLHdEQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLEtBQXZCLEVBQTZCLE1BQUssUUFBbEMsR0FESjtBQUVJO0FBQUE7QUFBQSxtQkFBTyxPQUFJLEtBQVg7QUFBQTtBQUFBO0FBRkosY0FMWTtBQVNaO0FBQUE7QUFBQTtBQUNJLHdEQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLEtBQXZCLEVBQTZCLE1BQUssUUFBbEMsRUFBMkMsU0FBUSxTQUFuRCxHQURKO0FBRUk7QUFBQTtBQUFBLG1CQUFPLE9BQUksS0FBWDtBQUFBO0FBQUE7QUFGSixjQVRZO0FBYVo7QUFBQTtBQUFBO0FBQ0ksd0RBQU8sTUFBSyxPQUFaLEVBQW9CLElBQUcsTUFBdkIsRUFBOEIsTUFBSyxRQUFuQyxHQURKO0FBRUk7QUFBQTtBQUFBLG1CQUFPLE9BQUksTUFBWDtBQUFBO0FBQUE7QUFGSixjQWJZO0FBaUJaO0FBQUE7QUFBQTtBQUNJLHdEQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLE9BQXZCLEVBQStCLE1BQUssUUFBcEMsR0FESjtBQUVJO0FBQUE7QUFBQSxtQkFBTyxPQUFJLE9BQVg7QUFBQTtBQUFBO0FBRkosY0FqQlk7QUFxQlo7QUFBQTtBQUFBO0FBQ0ksd0RBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsYUFBdEIsRUFBb0MsTUFBSyxXQUF6QztBQURKO0FBckJZLFlBSEo7QUE0QkMsb0RBNUJEO0FBQUE7QUE2QlUsb0RBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0MsV0FBbEMsRUFBK0MsYUFBWSxnQkFBM0QsR0E3QlY7QUFBQTtBQTZCeUY7QUFBQTtBQUFBLGVBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsS0FBS3lCLE1BQUwsQ0FBWTNCLElBQVosQ0FBaUIsSUFBakIsQ0FBL0I7QUFBQTtBQUFBLFlBN0J6RjtBQUFBO0FBNkI4SixvREE3QjlKO0FBOEJFO0FBQUE7QUFBQSxlQUFNLFdBQVUsTUFBaEIsRUFBdUIsSUFBSSxXQUFXLEtBQUtQLEtBQUwsQ0FBV0MsY0FBakQ7QUFBaUU7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLSyxnQkFBaEQ7QUFBQTtBQUFBO0FBQWpFO0FBOUJGO0FBRkYsUUFERjtBQXNDRDs7OztHQTdGZ0IsZ0JBQU02QixTOzttQkFnR1ZyQyxJIiwiZmlsZSI6IjAuMDJlZmE3MGE3NmFiODU2MWMyNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXG4gICAgICBqb2luUm9vbU5hbWU6ICcnLFxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZSxcbiAgICAgIGdhbWVMZXZlbDogMixcbiAgICAgIGVtYWlsOiBcIlwiXG4gICAgICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICAgIH0pO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50dXNlciBpbiBwcm9wczogJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcilcblxuICAgICB2YXIgcm9vbUluZm8gPSB7XG4gICAgICAgcm9vbW5hbWU6IHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUsXG4gICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUuZ2FtZUxldmVsLFxuICAgICAgIHVzZXI6IHRoaXMucHJvcHMuY3VycmVudFVzZXJcbiAgICAgfTtcbiBcbiAgICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgcm9vbUluZm8pO1xuICAgIGNvbnNvbGUubG9nKCdyb29tIGNyZWF0ZWQ6ICcsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpXG5cdH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG4gIGNoYW5nZUVtYWlsKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgfVxuICBpbnZpdGUoZSkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc29ja2V0LmVtaXQoXCJpbnZpdGVcIiwge3VzZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSwgZW1haWw6IGNvbnRleHQuc3RhdGUuZW1haWx9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3R2FtZVwiPlxuICAgICAgICA8aDM+Q3JlYXRlIE5ldyBHYW1lPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiTmV3R2FtZUZvcm1cIj5cbiAgICAgICAgICBSb29tIE5hbWU6PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICBMZXZlbDpcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImRvbmF0ZS1ub3dcIj5cbjxsaT5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhMjVcIiBuYW1lPVwiYW1vdW50XCIgLz5cbiAgICA8bGFiZWwgZm9yPVwiYTI1XCI+JDI1PC9sYWJlbD5cbjwvbGk+XG48bGk+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiYTUwXCIgbmFtZT1cImFtb3VudFwiIC8+XG4gICAgPGxhYmVsIGZvcj1cImE1MFwiPiQ1MDwvbGFiZWw+XG48L2xpPlxuPGxpPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImE3NVwiIG5hbWU9XCJhbW91bnRcIiBjaGVja2VkPVwiY2hlY2tlZFwiIC8+XG4gICAgPGxhYmVsIGZvcj1cImE3NVwiPiQ3NTwvbGFiZWw+XG48L2xpPlxuPGxpPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImExMDBcIiBuYW1lPVwiYW1vdW50XCIgLz5cbiAgICA8bGFiZWwgZm9yPVwiYTEwMFwiPiQxMDA8L2xhYmVsPlxuPC9saT5cbjxsaT5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJvdGhlclwiIG5hbWU9XCJhbW91bnRcIiAvPlxuICAgIDxsYWJlbCBmb3I9XCJvdGhlclwiPm90aGVyOjwvbGFiZWw+XG48L2xpPlxuPGxpPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwib3RoZXJBbW91bnRcIiBuYW1lPVwibnVtQW1vdW50XCIgLz5cbjwvbGk+XG48L3VsPlxuICAgICAgICAgPGJyLz5cbiAgICAgICAgICBJbnZpdGU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUVtYWlsfSBwbGFjZWhvbGRlcj1cImVudGVyIGFuIGVtYWlsXCIgLz4gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5pbnZpdGUuYmluZCh0aGlzKX0+U2VuZDwvYnV0dG9uPiA8YnIvPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIkxpbmtcIiB0bz17XCIvZ2FtZS9cIiArIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWV9PjxidXR0b24gY2xhc3NOYW1lPVwibmV3R2FtZUJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIEdhbWU8L2J1dHRvbj48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=