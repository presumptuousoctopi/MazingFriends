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
	            { to: '/game', params: this.state.createRoomName },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3RhdGUiLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImdhbWVMZXZlbCIsImNyZWF0ZVJvb21CdXR0b24iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwibWVzc2FnZSIsInB1c2giLCJwYXRobmFtZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwicm9vbUluZm8iLCJyb29tbmFtZSIsImxldmVsIiwidXNlciIsIndpbmRvdyIsImVtaXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1pBLEtBRFk7O0FBRWxCLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBZ0IsRUFEUDtBQUVUQyxxQkFBYyxFQUZMO0FBR1RDLHFCQUFjLEtBSEw7QUFJVEMsa0JBQVc7QUFKRixNQUFiO0FBTUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRnQjtBQVVsQjs7Ozt5Q0FFb0I7QUFDbEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQVNDLE9BQVQsRUFBa0I7QUFDM0MscUNBQWVDLElBQWYsQ0FBb0I7QUFDbEJDLHFCQUFVO0FBRFEsVUFBcEI7QUFHQUMsZUFBTUgsT0FBTjtBQUNELFFBTEQ7QUFNRDs7O3dDQUVpQjtBQUNoQkksZUFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEtBQUtqQixLQUFMLENBQVdrQixXQUFqRDs7QUFFQyxXQUFJQyxXQUFXO0FBQ2JDLG1CQUFVLEtBQUtuQixLQUFMLENBQVdDLGNBRFI7QUFFYm1CLGdCQUFPLEtBQUtwQixLQUFMLENBQVdJLFNBRkw7QUFHYmlCLGVBQU0sS0FBS3RCLEtBQUwsQ0FBV2tCO0FBSEosUUFBZjs7QUFNQUssY0FBT2IsTUFBUCxDQUFjYyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDTCxRQUFqQztBQUNESCxlQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBS2hCLEtBQUwsQ0FBV0MsY0FBekM7QUFDRjs7O2tDQUVhdUIsQyxFQUFHO0FBQ2QsWUFBS0MsUUFBTCxxQkFDR0QsRUFBRUUsTUFBRixDQUFTQyxJQURaLEVBQ21CSCxFQUFFRSxNQUFGLENBQVNFLEtBRDVCO0FBR0FiLGVBQVFDLEdBQVIsQ0FBWSxLQUFLaEIsS0FBakI7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUEsYUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFDWSxvREFBTyxVQUFVLEtBQUtPLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRFo7QUFBQTtBQUMrRSxvREFEL0U7QUFBQTtBQUdHO0FBQUE7QUFBQSxlQUFRLFVBQVUsS0FBS0EsWUFBdkIsRUFBcUMsT0FBTyxLQUFLUCxLQUFMLENBQVdJLFNBQXZELEVBQW1FLE1BQUssV0FBeEUsRUFBb0YsY0FBcEY7QUFDRTtBQUFBO0FBQUEsaUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxjQURGO0FBRUU7QUFBQTtBQUFBLGlCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsY0FGRjtBQUdFO0FBQUE7QUFBQSxpQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBSEYsWUFISDtBQVFDLG9EQVJEO0FBQUE7QUFTVSxvREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxVQUEvQixHQVRWO0FBQUE7QUFTdUQsb0RBVHZEO0FBVUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxPQUFULEVBQWlCLFFBQVEsS0FBS0osS0FBTCxDQUFXQyxjQUFwQztBQUFvRDtBQUFBO0FBQUEsaUJBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtJLGdCQUFoRDtBQUFBO0FBQUE7QUFBcEQ7QUFWRjtBQUZGLFFBREY7QUFpQkQ7Ozs7R0E3RGdCLGdCQUFNd0IsUzs7bUJBZ0VWL0IsSSIsImZpbGUiOiIwLmViZWJkYjQzZGUwYmNjMjQ1YmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vVGl0bGVWaWV3LmpzeCdcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2UsXG4gICAgICBnYW1lTGV2ZWw6IDJcblx0XHR9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgfSk7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG5cdGNyZWF0ZVJvb21CdXR0b24oKSB7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnR1c2VyIGluIHByb3BzOiAnLCB0aGlzLnByb3BzLmN1cnJlbnRVc2VyKVxuXG4gICAgIHZhciByb29tSW5mbyA9IHtcbiAgICAgICByb29tbmFtZTogdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSxcbiAgICAgICBsZXZlbDogdGhpcy5zdGF0ZS5nYW1lTGV2ZWwsXG4gICAgICAgdXNlcjogdGhpcy5wcm9wcy5jdXJyZW50VXNlclxuICAgICB9O1xuIFxuICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCByb29tSW5mbyk7XG4gICAgY29uc29sZS5sb2coJ3Jvb20gY3JlYXRlZDogJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSlcblx0fVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3R2FtZVwiPlxuICAgICAgICA8aDM+Q3JlYXRlIE5ldyBHYW1lPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiTmV3R2FtZUZvcm1cIj5cbiAgICAgICAgICBSb29tIE5hbWU6PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICBMZXZlbDpcbiAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVMZXZlbH0gIG5hbWU9XCJnYW1lTGV2ZWxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkVhc3k8L29wdGlvbj5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+SGFyZDwvb3B0aW9uPlxuICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvbmFsXCIgLz4gPGJyLz5cbiAgICAgICAgICA8TGluayB0bz1cIi9nYW1lXCIgcGFyYW1zPXt0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==