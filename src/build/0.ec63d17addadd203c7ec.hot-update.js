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
	          'Level:',
	          _react2.default.createElement(
	            _reactBootstrap.ButtonToolbar,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              { id: 'radio' },
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                null,
	                _react2.default.createElement('input', { type: 'radio', id: 'radio1', name: 'radio' }),
	                _react2.default.createElement(
	                  'label',
	                  { 'for': 'radio1' },
	                  'Easy'
	                )
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                null,
	                _react2.default.createElement('input', { type: 'radio', id: 'radio2', name: 'radio' }),
	                _react2.default.createElement(
	                  'label',
	                  { 'for': 'radio1', checked: true },
	                  'Normal'
	                )
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                null,
	                _react2.default.createElement('input', { type: 'radio', id: 'radio3', name: 'radio' }),
	                _react2.default.createElement(
	                  'label',
	                  { 'for': 'radio1' },
	                  'Hard'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImVtYWlsIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJjaGFuZ2VFbWFpbCIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsInVzZXIiLCJ3aW5kb3ciLCJlbWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbnZpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFnQixFQURQO0FBRVRDLHFCQUFjLEVBRkw7QUFHVEMscUJBQWMsS0FITDtBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLGNBQU87QUFMRSxNQUFiO0FBT0UsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFYZ0I7QUFZbEI7Ozs7eUNBRW9C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QUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0ssZ0JBQWhEO0FBQUE7QUFBQTtBQUFqRTtBQVpGO0FBRkYsUUFERjtBQW9CRDs7OztHQTNFZ0IsZ0JBQU02QixTOzttQkE4RVZyQyxJIiwiZmlsZSI6IjAuZWM2M2QxN2FkZGFkZDIwM2M3ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCdXR0b25Ub29sYmFyLCBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2UsXG4gICAgICBnYW1lTGV2ZWw6IDIsXG4gICAgICBlbWFpbDogXCJcIlxuICAgICAgICB9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudHVzZXIgaW4gcHJvcHM6ICcsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpXG5cbiAgICAgdmFyIHJvb21JbmZvID0ge1xuICAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxuICAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmdhbWVMZXZlbCxcbiAgICAgICB1c2VyOiB0aGlzLnByb3BzLmN1cnJlbnRVc2VyXG4gICAgIH07XG4gXG4gICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHJvb21JbmZvKTtcbiAgICBjb25zb2xlLmxvZygncm9vbSBjcmVhdGVkOiAnLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKVxuXHR9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuICBjaGFuZ2VFbWFpbChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gIH1cbiAgaW52aXRlKGUpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNvY2tldC5lbWl0KFwiaW52aXRlXCIsIHt1c2VyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyksIGVtYWlsOiBjb250ZXh0LnN0YXRlLmVtYWlsfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0dhbWVGb3JtXCI+XG4gICAgICAgICAgUm9vbSBOYW1lOjxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGlkPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj48aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYWRpbzFcIiBuYW1lPVwicmFkaW9cIiAvPjxsYWJlbCBmb3I9XCJyYWRpbzFcIj5FYXN5PC9sYWJlbD48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj48aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYWRpbzJcIiBuYW1lPVwicmFkaW9cIiAvPjxsYWJlbCBmb3I9XCJyYWRpbzFcIiBjaGVja2VkPk5vcm1hbDwvbGFiZWw+PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicmFkaW8zXCIgbmFtZT1cInJhZGlvXCIgLz48bGFiZWwgZm9yPVwicmFkaW8xXCI+SGFyZDwvbGFiZWw+PC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciBhbiBlbWFpbFwiIC8+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaW52aXRlLmJpbmQodGhpcyl9PlNlbmQ8L2J1dHRvbj4gPGJyLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89e1wiL2dhbWUvXCIgKyB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9