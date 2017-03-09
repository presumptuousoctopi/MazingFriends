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
	            'div',
	            { 'class': 'btn-group', 'data-toggle': 'buttons' },
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary active' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option1', autocomplete: 'off' }),
	              ' Easy'
	            ),
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option2', autocomplete: 'off' }),
	              ' Normal'
	            ),
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option3', autocomplete: 'off' }),
	              ' Hard'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImVtYWlsIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJjaGFuZ2VFbWFpbCIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsInVzZXIiLCJ3aW5kb3ciLCJlbWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbnZpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFnQixFQURQO0FBRVRDLHFCQUFjLEVBRkw7QUFHVEMscUJBQWMsS0FITDtBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLGNBQU87QUFMRSxNQUFiO0FBT0UsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFYZ0I7QUFZbEI7Ozs7eUNBRW9CO0FBQ2xC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QUE7QUFBQTtBQUFqRTtBQWhCRjtBQUZGLFFBREY7QUF3QkQ7Ozs7R0EvRWdCLGdCQUFNNkIsUzs7bUJBa0ZWckMsSSIsImZpbGUiOiIwLmVkMmY4YWM1NTY5MjJhYTFjZDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vVGl0bGVWaWV3LmpzeCdcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2UsXG4gICAgICBnYW1lTGV2ZWw6IDIsXG4gICAgICBlbWFpbDogXCJcIlxuICAgICAgICB9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudHVzZXIgaW4gcHJvcHM6ICcsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpXG5cbiAgICAgdmFyIHJvb21JbmZvID0ge1xuICAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxuICAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmdhbWVMZXZlbCxcbiAgICAgICB1c2VyOiB0aGlzLnByb3BzLmN1cnJlbnRVc2VyXG4gICAgIH07XG4gXG4gICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHJvb21JbmZvKTtcbiAgICBjb25zb2xlLmxvZygncm9vbSBjcmVhdGVkOiAnLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKVxuXHR9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuICBjaGFuZ2VFbWFpbChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gIH1cbiAgaW52aXRlKGUpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNvY2tldC5lbWl0KFwiaW52aXRlXCIsIHt1c2VyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyksIGVtYWlsOiBjb250ZXh0LnN0YXRlLmVtYWlsfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0dhbWVGb3JtXCI+XG4gICAgICAgICAgUm9vbSBOYW1lOjxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiBpZD1cIm9wdGlvbjFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPiBFYXN5XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uMlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz4gTm9ybWFsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uM1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz4gSGFyZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciBhbiBlbWFpbFwiIC8+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaW52aXRlLmJpbmQodGhpcyl9PlNlbmQ8L2J1dHRvbj4gPGJyLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89e1wiL2dhbWUvXCIgKyB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9