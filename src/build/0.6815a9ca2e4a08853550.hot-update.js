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
	            _reactBootstrap.FormGroup,
	            { controlId: 'formControlsSelect' },
	            _react2.default.createElement(
	              _reactBootstrap.FormControl,
	              { componentClass: 'select', placeholder: 'Normal' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImVtYWlsIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJjaGFuZ2VFbWFpbCIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsInVzZXIiLCJ3aW5kb3ciLCJlbWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbnZpdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFnQixFQURQO0FBRVRDLHFCQUFjLEVBRkw7QUFHVEMscUJBQWMsS0FITDtBQUlUQyxrQkFBVyxDQUpGO0FBS1RDLGNBQU87QUFMRSxNQUFiO0FBT0UsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFYZ0I7QUFZbEI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlHLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0FDLGVBQU1ILE9BQU47QUFDRCxRQUxEO0FBTUQ7Ozt3Q0FFaUI7QUFDaEJJLGVBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxLQUFLbkIsS0FBTCxDQUFXb0IsV0FBakQ7O0FBRUMsV0FBSUMsV0FBVztBQUNiQyxtQkFBVSxLQUFLckIsS0FBTCxDQUFXQyxjQURSO0FBRWJxQixnQkFBTyxLQUFLdEIsS0FBTCxDQUFXSSxTQUZMO0FBR2JtQixlQUFNLEtBQUt4QixLQUFMLENBQVdvQjtBQUhKLFFBQWY7O0FBTUFLLGNBQU9iLE1BQVAsQ0FBY2MsSUFBZCxDQUFtQixZQUFuQixFQUFpQ0wsUUFBakM7QUFDREgsZUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtsQixLQUFMLENBQVdDLGNBQXpDO0FBQ0Y7OztrQ0FFYXlCLEMsRUFBRztBQUNkLFlBQUtDLFFBQUwscUJBQ0dELEVBQUVFLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkgsRUFBRUUsTUFBRixDQUFTRSxLQUQ1QjtBQUdBYixlQUFRQyxHQUFSLENBQVksS0FBS2xCLEtBQWpCO0FBQ0Q7OztpQ0FDVzBCLEMsRUFBRztBQUNYLFlBQUtDLFFBQUwsQ0FBYztBQUNSdEIsZ0JBQU9xQixFQUFFRSxNQUFGLENBQVNFO0FBRFIsUUFBZDtBQUdIOzs7NEJBQ01KLEMsRUFBRztBQUNOLFdBQUloQixVQUFVLElBQWQ7QUFDQWdCLFNBQUVLLGNBQUY7QUFDQXBCLGNBQU9jLElBQVAsQ0FBWSxRQUFaLEVBQXNCLEVBQUNGLE1BQU1TLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBUCxFQUF1QzVCLE9BQU9LLFFBQVFWLEtBQVIsQ0FBY0ssS0FBNUQsRUFBdEI7QUFDSDs7OzhCQUNRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUEsYUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFDWSxvREFBTyxVQUFVLEtBQUtHLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRFo7QUFBQTtBQUMrRSxvREFEL0U7QUFBQTtBQUdJO0FBQUE7QUFBQSxlQUFXLFdBQVUsb0JBQXJCO0FBQ0U7QUFBQTtBQUFBLGlCQUFhLGdCQUFlLFFBQTVCLEVBQXFDLGFBQVksUUFBakQ7QUFDRTtBQUFBO0FBQUEsbUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxnQkFERjtBQUVFO0FBQUE7QUFBQSxtQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGdCQUZGO0FBR0U7QUFBQTtBQUFBLG1CQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFIRjtBQURGLFlBSEo7QUFVRSxvREFWRjtBQUFBO0FBV1Usb0RBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0MsV0FBbEMsRUFBK0MsYUFBWSxnQkFBM0QsR0FYVjtBQUFBO0FBV3lGO0FBQUE7QUFBQSxlQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUt5QixNQUFMLENBQVkzQixJQUFaLENBQWlCLElBQWpCLENBQS9CO0FBQUE7QUFBQSxZQVh6RjtBQUFBO0FBVzhKLG9EQVg5SjtBQVlFO0FBQUE7QUFBQSxlQUFNLFdBQVUsTUFBaEIsRUFBdUIsSUFBSSxXQUFXLEtBQUtQLEtBQUwsQ0FBV0MsY0FBakQ7QUFBaUU7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLSyxnQkFBaEQ7QUFBQTtBQUFBO0FBQWpFO0FBWkY7QUFGRixRQURGO0FBb0JEOzs7O0dBM0VnQixnQkFBTTZCLFM7O21CQThFVnJDLEkiLCJmaWxlIjoiMC42ODE1YTljYTJlNGEwODg1MzU1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEZvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcbiAgICAgIGpvaW5Sb29tTmFtZTogJycsXG4gICAgICBjb250cm9sc1ZpZXc6IGZhbHNlLFxuICAgICAgZ2FtZUxldmVsOiAyLFxuICAgICAgZW1haWw6IFwiXCJcbiAgICAgICAgfVxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gdGhpcy5jaGFuZ2VFbWFpbC5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgfSk7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG5cdGNyZWF0ZVJvb21CdXR0b24oKSB7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnR1c2VyIGluIHByb3BzOiAnLCB0aGlzLnByb3BzLmN1cnJlbnRVc2VyKVxuXG4gICAgIHZhciByb29tSW5mbyA9IHtcbiAgICAgICByb29tbmFtZTogdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSxcbiAgICAgICBsZXZlbDogdGhpcy5zdGF0ZS5nYW1lTGV2ZWwsXG4gICAgICAgdXNlcjogdGhpcy5wcm9wcy5jdXJyZW50VXNlclxuICAgICB9O1xuIFxuICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCByb29tSW5mbyk7XG4gICAgY29uc29sZS5sb2coJ3Jvb20gY3JlYXRlZDogJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSlcblx0fVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cbiAgY2hhbmdlRW1haWwoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICB9XG4gIGludml0ZShlKSB7XG4gICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzb2NrZXQuZW1pdChcImludml0ZVwiLCB7dXNlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLCBlbWFpbDogY29udGV4dC5zdGF0ZS5lbWFpbH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdHYW1lXCI+XG4gICAgICAgIDxoMz5DcmVhdGUgTmV3IEdhbWU8L2gzPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJOZXdHYW1lRm9ybVwiPlxuICAgICAgICAgIFJvb20gTmFtZTo8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PiA8YnIvPlxuICAgICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1NlbGVjdFwiPlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiBwbGFjZWhvbGRlcj1cIk5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+RWFzeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5IYXJkPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIEludml0ZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRW1haWx9IHBsYWNlaG9sZGVyPVwiZW50ZXIgYW4gZW1haWxcIiAvPiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmludml0ZS5iaW5kKHRoaXMpfT5TZW5kPC9idXR0b24+IDxici8+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPXtcIi9nYW1lL1wiICsgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZX0+PGJ1dHRvbiBjbGFzc05hbWU9XCJuZXdHYW1lQnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgR2FtZTwvYnV0dG9uPjwvTGluaz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==