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
	
	var _reactBootstrap = __webpack_require__(307);
	
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
	          _react2.default.createElement(
	            _reactBootstrap.ButtonToolbar,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              null,
	              'Level:',
	              _react2.default.createElement(
	                'select',
	                { onChange: this.handleChange, value: this.state.gameLevel, name: 'gameLevel', required: true },
	                _react2.default.createElement(
	                  _reactBootstrap.Button,
	                  null,
	                  _react2.default.createElement(
	                    'option',
	                    { value: '1' },
	                    'Easy'
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactBootstrap.Button,
	                  null,
	                  _react2.default.createElement(
	                    'option',
	                    { value: '2' },
	                    'Normal'
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactBootstrap.Button,
	                  null,
	                  _react2.default.createElement(
	                    'option',
	                    { value: '3' },
	                    'Hard'
	                  )
	                )
	              )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImVtYWlsIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJjaGFuZ2VFbWFpbCIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsInVzZXIiLCJ3aW5kb3ciLCJlbWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbnZpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFnQixFQURQO0FBRVRDLHFCQUFjLEVBRkw7QUFHVEMscUJBQWMsS0FITDtBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLGNBQU87QUFMRSxNQUFiO0FBT0UsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFYZ0I7QUFZbEI7Ozs7eUNBRW9C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IjoiMC5lNzMyODlmMmQ0MmI4OWMwNDc4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJ1dHRvblRvb2xiYXIsIEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXG4gICAgICBqb2luUm9vbU5hbWU6ICcnLFxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZSxcbiAgICAgIGdhbWVMZXZlbDogMixcbiAgICAgIGVtYWlsOiBcIlwiXG4gICAgICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICAgIH0pO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50dXNlciBpbiBwcm9wczogJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcilcblxuICAgICB2YXIgcm9vbUluZm8gPSB7XG4gICAgICAgcm9vbW5hbWU6IHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUsXG4gICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUuZ2FtZUxldmVsLFxuICAgICAgIHVzZXI6IHRoaXMucHJvcHMuY3VycmVudFVzZXJcbiAgICAgfTtcbiBcbiAgICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgcm9vbUluZm8pO1xuICAgIGNvbnNvbGUubG9nKCdyb29tIGNyZWF0ZWQ6ICcsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpXG5cdH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG4gIGNoYW5nZUVtYWlsKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgfVxuICBpbnZpdGUoZSkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc29ja2V0LmVtaXQoXCJpbnZpdGVcIiwge3VzZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSwgZW1haWw6IGNvbnRleHQuc3RhdGUuZW1haWx9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3R2FtZVwiPlxuICAgICAgICA8aDM+Q3JlYXRlIE5ldyBHYW1lPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiTmV3R2FtZUZvcm1cIj5cbiAgICAgICAgICBSb29tIE5hbWU6PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICAgPEJ1dHRvblRvb2xiYXI+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVMZXZlbH0gIG5hbWU9XCJnYW1lTGV2ZWxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbj48b3B0aW9uIHZhbHVlPVwiMVwiPkVhc3k8L29wdGlvbj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj48b3B0aW9uIHZhbHVlPVwiMlwiPk5vcm1hbDwvb3B0aW9uPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uPjxvcHRpb24gdmFsdWU9XCIzXCI+SGFyZDwvb3B0aW9uPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciBhbiBlbWFpbFwiIC8+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaW52aXRlLmJpbmQodGhpcyl9PlNlbmQ8L2J1dHRvbj4gPGJyLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89e1wiL2dhbWUvXCIgKyB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9