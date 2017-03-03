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
	            { to: '/game/:rooomname', params: { roomname: this.state.createRoomName } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImNyZWF0ZVJvb21CdXR0b24iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwibWVzc2FnZSIsInB1c2giLCJwYXRobmFtZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwicm9vbUluZm8iLCJyb29tbmFtZSIsImxldmVsIiwidXNlciIsIndpbmRvdyIsImVtaXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1pBLEtBRFk7O0FBRWxCLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBZ0IsRUFEUDtBQUVUQyxxQkFBYyxFQUZMO0FBR1RDLHFCQUFjLEtBSEw7QUFJVEMsa0JBQVc7QUFKRixNQUFiO0FBTUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRnQjtBQVVsQjs7Ozt5Q0FFb0I7QUFDbEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQVNDLE9BQVQsRUFBa0I7QUFDM0MscUNBQWVDLElBQWYsQ0FBb0I7QUFDbEJDLHFCQUFVO0FBRFEsVUFBcEI7QUFHQUMsZUFBTUgsT0FBTjtBQUNELFFBTEQ7QUFNRDs7O3dDQUVpQjtBQUNoQkksZUFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEtBQUtqQixLQUFMLENBQVdrQixXQUFqRDs7QUFFQyxXQUFJQyxXQUFXO0FBQ2JDLG1CQUFVLEtBQUtuQixLQUFMLENBQVdDLGNBRFI7QUFFYm1CLGdCQUFPLEtBQUtwQixLQUFMLENBQVdJLFNBRkw7QUFHYmlCLGVBQU0sS0FBS3RCLEtBQUwsQ0FBV2tCO0FBSEosUUFBZjs7QUFNQUssY0FBT2IsTUFBUCxDQUFjYyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDTCxRQUFqQztBQUNESCxlQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBS2hCLEtBQUwsQ0FBV0MsY0FBekM7QUFDRjs7O2tDQUVhdUIsQyxFQUFHO0FBQ2QsWUFBS0MsUUFBTCxxQkFDR0QsRUFBRUUsTUFBRixDQUFTQyxJQURaLEVBQ21CSCxFQUFFRSxNQUFGLENBQVNFLEtBRDVCO0FBR0FiLGVBQVFDLEdBQVIsQ0FBWSxLQUFLaEIsS0FBakI7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUEsYUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFDWSxvREFBTyxVQUFVLEtBQUtPLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRFo7QUFBQTtBQUMrRSxvREFEL0U7QUFBQTtBQUdHO0FBQUE7QUFBQSxlQUFRLFVBQVUsS0FBS0EsWUFBdkIsRUFBcUMsT0FBTyxLQUFLUCxLQUFMLENBQVdJLFNBQXZELEVBQW1FLE1BQUssV0FBeEUsRUFBb0YsY0FBcEY7QUFDRTtBQUFBO0FBQUEsaUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxjQURGO0FBRUU7QUFBQTtBQUFBLGlCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsY0FGRjtBQUdFO0FBQUE7QUFBQSxpQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBSEYsWUFISDtBQVFDLG9EQVJEO0FBQUE7QUFTVSxvREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxVQUEvQixHQVRWO0FBQUE7QUFTdUQsb0RBVHZEO0FBVUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxrQkFBVCxFQUE0QixRQUFRLEVBQUNlLFVBQVUsS0FBS25CLEtBQUwsQ0FBV0MsY0FBdEIsRUFBcEM7QUFBMkU7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLSSxnQkFBaEQ7QUFBQTtBQUFBO0FBQTNFO0FBVkY7QUFGRixRQURGO0FBaUJEOzs7O0dBN0RnQixnQkFBTXdCLFM7O21CQWdFVi9CLEkiLCJmaWxlIjoiMC4yNDhiZTIyNGQzYWU1ZWIzYjkwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcbiAgICAgIGpvaW5Sb29tTmFtZTogJycsXG4gICAgICBjb250cm9sc1ZpZXc6IGZhbHNlLFxuICAgICAgZ2FtZUxldmVsOiAyXG5cdFx0fVxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3Jvb21Kb2luRXJyb3InLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICAgIH0pO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50dXNlciBpbiBwcm9wczogJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcilcblxuICAgICB2YXIgcm9vbUluZm8gPSB7XG4gICAgICAgcm9vbW5hbWU6IHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUsXG4gICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUuZ2FtZUxldmVsLFxuICAgICAgIHVzZXI6IHRoaXMucHJvcHMuY3VycmVudFVzZXJcbiAgICAgfTtcbiBcbiAgICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgcm9vbUluZm8pO1xuICAgIGNvbnNvbGUubG9nKCdyb29tIGNyZWF0ZWQ6ICcsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpXG5cdH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0dhbWVGb3JtXCI+XG4gICAgICAgICAgUm9vbSBOYW1lOjxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lTGV2ZWx9ICBuYW1lPVwiZ2FtZUxldmVsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkhhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICA8YnIvPlxuICAgICAgICAgIEludml0ZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJvcHRpb25hbFwiIC8+IDxici8+XG4gICAgICAgICAgPExpbmsgdG89XCIvZ2FtZS86cm9vb21uYW1lXCIgcGFyYW1zPXt7cm9vbW5hbWU6IHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWV9fT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==