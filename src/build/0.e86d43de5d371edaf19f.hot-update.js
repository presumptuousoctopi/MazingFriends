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
	
	var _Controls = __webpack_require__(278);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
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
	    // this.joinRoomButton = this.joinRoomButton.bind(this);
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
	      window.socket.emit('createRoom', this.state.createRoomName);
	    }
	
	    // joinRoomButton() {
	    //   window.socket.emit('joinRoom', this.state.joinRoomName);
	    // }
	
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
	          null,
	          'Room Name:',
	          _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Level:',
	          _react2.default.createElement('br', null),
	          'Invite ',
	          _react2.default.createElement('input', { type: 'text', placeholder: 'optional' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/game' },
	            _react2.default.createElement(
	              'button',
	              { className: 'Play', onClick: this.createRoomButton },
	              'Create Game'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	/*
	      <div classNameName={this.state.view}>
	        <div className="NewView">
	          <button className="homeButtons" onClick={this.newButtonClick}>New Game</button>
	          <div className={this.state.new}>
	          Room Name:
	          <input onChange={this.handleChange} name="createRoomName"></input>
	          <Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Room</button></Link>
	          </div>
	        </div>
	        <div className="JoinView">
	          <button className="homeButtons" onClick={this.joinButtonClick}>Join Game</button>
	          <div className={this.state.join}>
	          Room Name:
	          <input onChange={this.handleChange} name="joinRoomName"></input>
	        <Link to="/game"><button className="Play" onClick={this.joinRoomButton}>Join Room</button></Link>
	          </div>
	          <br/>
	        </div>
	      </div>
	*/
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjb250cm9sc1ZpZXciLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsIndpbmRvdyIsImVtaXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1o7QUFDR0MsdUJBQWdCLEVBRlA7QUFHVEMscUJBQWMsRUFITDtBQUlUQyxxQkFBYztBQUpMLE1BQWI7QUFNRSxXQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQTtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFWVztBQVdiOzs7O3lDQUVvQjtBQUNsQixXQUFJRSxVQUFVLElBQWQ7QUFDQUMsY0FBT0MsRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBU0MsT0FBVCxFQUFrQjtBQUMzQyxxQ0FBZUMsSUFBZixDQUFvQjtBQUNsQkMscUJBQVU7QUFEUSxVQUFwQjtBQUdBQyxlQUFNSCxPQUFOO0FBQ0QsUUFMRDtBQU1EOzs7d0NBRWlCO0FBQ2hCSSxjQUFPTixNQUFQLENBQWNPLElBQWQsQ0FBbUIsWUFBbkIsRUFBaUMsS0FBS2YsS0FBTCxDQUFXQyxjQUE1QztBQUNGOztBQUVBO0FBQ0E7QUFDQTs7OztrQ0FFYWUsQyxFQUFHO0FBQ2QsWUFBS0MsUUFBTCxxQkFDR0QsRUFBRUUsTUFBRixDQUFTQyxJQURaLEVBQ21CSCxFQUFFRSxNQUFGLENBQVNFLEtBRDVCO0FBR0FDLGVBQVFDLEdBQVIsQ0FBWSxLQUFLdEIsS0FBakI7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUNZLG9EQUFPLFVBQVUsS0FBS00sWUFBdEIsRUFBb0MsTUFBSyxnQkFBekMsR0FEWjtBQUFBO0FBQytFLG9EQUQvRTtBQUFBO0FBR0Msb0RBSEQ7QUFBQTtBQUlTLG9EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CLEdBSlQ7QUFBQTtBQUlzRCxvREFKdEQ7QUFLRTtBQUFBO0FBQUEsZUFBTSxJQUFHLE9BQVQ7QUFBaUI7QUFBQTtBQUFBLGlCQUFRLFdBQVUsTUFBbEIsRUFBeUIsU0FBUyxLQUFLRixnQkFBdkM7QUFBQTtBQUFBO0FBQWpCO0FBTEY7QUFGRixRQURGO0FBWUQ7Ozs7R0FwRGdCLGdCQUFNbUIsUzs7QUF1RHpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXNCZXhCLEkiLCJmaWxlIjoiMC5lODZkNDNkZTVkMzcxZWRhZjE5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250cm9scyBmcm9tICcuLy4uL0dhbWUvQ29udHJvbHMuanN4J1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQvL3ZpZXc6ICdIb21lJyxcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcbiAgICAgIGpvaW5Sb29tTmFtZTogJycsXG4gICAgICBjb250cm9sc1ZpZXc6IGZhbHNlXG5cdFx0fVxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgfSk7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuICBcblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKTtcblx0fVxuXG4gIC8vIGpvaW5Sb29tQnV0dG9uKCkge1xuICAvLyAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XG4gIC8vIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIFJvb20gTmFtZTo8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PiA8YnIvPlxuICAgICAgICAgIExldmVsOlxuICAgICAgICAgPGJyLz5cbiAgICAgICAgICBJbnZpdGUgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJvcHRpb25hbFwiIC8+IDxici8+XG4gICAgICAgICAgPExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIEdhbWU8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLypcbiAgICAgIDxkaXYgY2xhc3NOYW1lTmFtZT17dGhpcy5zdGF0ZS52aWV3fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdWaWV3XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmV3fT5cbiAgICAgICAgICBSb29tIE5hbWU6XG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD5cbiAgICAgICAgICA8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgUm9vbTwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSm9pblZpZXdcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCIgb25DbGljaz17dGhpcy5qb2luQnV0dG9uQ2xpY2t9PkpvaW4gR2FtZTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxuICAgICAgICAgIFJvb20gTmFtZTpcbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiam9pblJvb21OYW1lXCI+PC9pbnB1dD5cbiAgICAgICAgPExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9