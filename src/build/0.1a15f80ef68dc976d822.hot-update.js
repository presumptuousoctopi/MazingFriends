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
	      controlsView: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjb250cm9sc1ZpZXciLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsInJvb21JbmZvIiwicm9vbW5hbWUiLCJsZXZlbCIsImdhbWVMZXZlbCIsIndpbmRvdyIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxtQkFBYztBQUFBOztBQUFBOztBQUViLFdBQUtDLEtBQUwsR0FBYTtBQUNaO0FBQ0dDLHVCQUFnQixFQUZQO0FBR1RDLHFCQUFjLEVBSEw7QUFJVEMscUJBQWM7QUFKTCxNQUFiO0FBTUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRXO0FBVWI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlFLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0FDLGVBQU1ILE9BQU47QUFDRCxRQUxEO0FBTUQ7Ozt3Q0FFaUI7QUFDZixXQUFJSSxXQUFXO0FBQ2JDLG1CQUFVLEtBQUtmLEtBQUwsQ0FBV0MsY0FEUjtBQUViZSxnQkFBTyxLQUFLaEIsS0FBTCxDQUFXaUI7QUFGTCxRQUFmOztBQUtBQyxjQUFPVixNQUFQLENBQWNXLElBQWQsQ0FBbUIsWUFBbkIsRUFBaUNMLFFBQWpDO0FBQ0RNLGVBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixLQUFLckIsS0FBTCxDQUFXQyxjQUF6QztBQUNGOzs7a0NBRWFxQixDLEVBQUc7QUFDZCxZQUFLQyxRQUFMLHFCQUNHRCxFQUFFRSxNQUFGLENBQVNDLElBRFosRUFDbUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FENUI7QUFHQU4sZUFBUUMsR0FBUixDQUFZLEtBQUtyQixLQUFqQjtBQUNEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUVFO0FBQUE7QUFBQSxhQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUNZLG9EQUFPLFVBQVUsS0FBS00sWUFBdEIsRUFBb0MsTUFBSyxnQkFBekMsR0FEWjtBQUFBO0FBQytFLG9EQUQvRTtBQUFBO0FBR0c7QUFBQTtBQUFBLGVBQVEsVUFBVSxLQUFLQSxZQUF2QixFQUFxQyxPQUFPLEtBQUtOLEtBQUwsQ0FBV2lCLFNBQXZELEVBQW1FLE1BQUssV0FBeEUsRUFBb0YsY0FBcEY7QUFDRTtBQUFBO0FBQUEsaUJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxjQURGO0FBRUU7QUFBQTtBQUFBLGlCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsY0FGRjtBQUdFO0FBQUE7QUFBQSxpQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBSEYsWUFISDtBQVFDLG9EQVJEO0FBQUE7QUFTVSxvREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxVQUEvQixHQVRWO0FBQUE7QUFTdUQsb0RBVHZEO0FBVUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSxpQkFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS2IsZ0JBQWhEO0FBQUE7QUFBQTtBQUFqQjtBQVZGO0FBRkYsUUFERjtBQWlCRDs7OztHQTFEZ0IsZ0JBQU11QixTOzttQkE2RFY1QixJIiwiZmlsZSI6IjAuMWExNWY4MGVmNjhkYzk3NmQ4MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC8vdmlldzogJ0hvbWUnLFxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2Vcblx0XHR9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgfSk7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG5cdGNyZWF0ZVJvb21CdXR0b24oKSB7XG4gICAgIHZhciByb29tSW5mbyA9IHtcbiAgICAgICByb29tbmFtZTogdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSxcbiAgICAgICBsZXZlbDogdGhpcy5zdGF0ZS5nYW1lTGV2ZWxcbiAgICAgfTtcbiBcbiAgICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgcm9vbUluZm8pO1xuICAgIGNvbnNvbGUubG9nKCdyb29tIGNyZWF0ZWQ6ICcsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpXG5cdH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0dhbWVGb3JtXCI+XG4gICAgICAgICAgUm9vbSBOYW1lOjxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lTGV2ZWx9ICBuYW1lPVwiZ2FtZUxldmVsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkhhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICA8YnIvPlxuICAgICAgICAgIEludml0ZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJvcHRpb25hbFwiIC8+IDxici8+XG4gICAgICAgICAgPExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwibmV3R2FtZUJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIEdhbWU8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9