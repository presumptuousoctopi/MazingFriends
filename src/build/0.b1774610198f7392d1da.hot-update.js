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
	            { to: '/game', params: { room: this.state.createRoomName } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImNyZWF0ZVJvb21CdXR0b24iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwibWVzc2FnZSIsInB1c2giLCJwYXRobmFtZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwicm9vbUluZm8iLCJyb29tbmFtZSIsImxldmVsIiwidXNlciIsIndpbmRvdyIsImVtaXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJyb29tIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZHQUNaQSxLQURZOztBQUVsQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsdUJBQWdCLEVBRFA7QUFFVEMscUJBQWMsRUFGTDtBQUdUQyxxQkFBYyxLQUhMO0FBSVRDLGtCQUFXO0FBSkYsTUFBYjtBQU1FLFdBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFUZ0I7QUFVbEI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlFLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0FDLGVBQU1ILE9BQU47QUFDRCxRQUxEO0FBTUQ7Ozt3Q0FFaUI7QUFDaEJJLGVBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxLQUFLakIsS0FBTCxDQUFXa0IsV0FBakQ7O0FBRUMsV0FBSUMsV0FBVztBQUNiQyxtQkFBVSxLQUFLbkIsS0FBTCxDQUFXQyxjQURSO0FBRWJtQixnQkFBTyxLQUFLcEIsS0FBTCxDQUFXSSxTQUZMO0FBR2JpQixlQUFNLEtBQUt0QixLQUFMLENBQVdrQjtBQUhKLFFBQWY7O0FBTUFLLGNBQU9iLE1BQVAsQ0FBY2MsSUFBZCxDQUFtQixZQUFuQixFQUFpQ0wsUUFBakM7QUFDREgsZUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtoQixLQUFMLENBQVdDLGNBQXpDO0FBQ0Y7OztrQ0FFYXVCLEMsRUFBRztBQUNkLFlBQUtDLFFBQUwscUJBQ0dELEVBQUVFLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkgsRUFBRUUsTUFBRixDQUFTRSxLQUQ1QjtBQUdBYixlQUFRQyxHQUFSLENBQVksS0FBS2hCLEtBQWpCO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBLGFBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQ1ksb0RBQU8sVUFBVSxLQUFLTyxZQUF0QixFQUFvQyxNQUFLLGdCQUF6QyxHQURaO0FBQUE7QUFDK0Usb0RBRC9FO0FBQUE7QUFHRztBQUFBO0FBQUEsZUFBUSxVQUFVLEtBQUtBLFlBQXZCLEVBQXFDLE9BQU8sS0FBS1AsS0FBTCxDQUFXSSxTQUF2RCxFQUFtRSxNQUFLLFdBQXhFLEVBQW9GLGNBQXBGO0FBQ0U7QUFBQTtBQUFBLGlCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsY0FERjtBQUVFO0FBQUE7QUFBQSxpQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGNBRkY7QUFHRTtBQUFBO0FBQUEsaUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQTtBQUhGLFlBSEg7QUFRQyxvREFSRDtBQUFBO0FBU1Usb0RBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksVUFBL0IsR0FUVjtBQUFBO0FBU3VELG9EQVR2RDtBQVVFO0FBQUE7QUFBQSxlQUFNLElBQUcsT0FBVCxFQUFpQixRQUFRLEVBQUN5QixNQUFNLEtBQUs3QixLQUFMLENBQVdDLGNBQWxCLEVBQXpCO0FBQTREO0FBQUE7QUFBQSxpQkFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0ksZ0JBQWhEO0FBQUE7QUFBQTtBQUE1RDtBQVZGO0FBRkYsUUFERjtBQWlCRDs7OztHQTdEZ0IsZ0JBQU15QixTOzttQkFnRVZoQyxJIiwiZmlsZSI6IjAuYjE3NzQ2MTAxOThmNzM5MmQxZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXG4gICAgICBqb2luUm9vbU5hbWU6ICcnLFxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZSxcbiAgICAgIGdhbWVMZXZlbDogMlxuXHRcdH1cbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudHVzZXIgaW4gcHJvcHM6ICcsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpXG5cbiAgICAgdmFyIHJvb21JbmZvID0ge1xuICAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxuICAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmdhbWVMZXZlbCxcbiAgICAgICB1c2VyOiB0aGlzLnByb3BzLmN1cnJlbnRVc2VyXG4gICAgIH07XG4gXG4gICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHJvb21JbmZvKTtcbiAgICBjb25zb2xlLmxvZygncm9vbSBjcmVhdGVkOiAnLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKVxuXHR9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdHYW1lXCI+XG4gICAgICAgIDxoMz5DcmVhdGUgTmV3IEdhbWU8L2gzPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJOZXdHYW1lRm9ybVwiPlxuICAgICAgICAgIFJvb20gTmFtZTo8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PiA8YnIvPlxuICAgICAgICAgIExldmVsOlxuICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZUxldmVsfSAgbmFtZT1cImdhbWVMZXZlbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+RWFzeTwvb3B0aW9uPlxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5IYXJkPC9vcHRpb24+XG4gICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgPGJyLz5cbiAgICAgICAgICBJbnZpdGU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3B0aW9uYWxcIiAvPiA8YnIvPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2dhbWVcIiBwYXJhbXM9e3tyb29tOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfX0+PGJ1dHRvbiBjbGFzc05hbWU9XCJuZXdHYW1lQnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgR2FtZTwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=