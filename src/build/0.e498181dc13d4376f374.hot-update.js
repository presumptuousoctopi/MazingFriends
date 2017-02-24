webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(189);
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _TextChat = __webpack_require__(271);
	
	var _TextChat2 = _interopRequireDefault(_TextChat);
	
	var _VideoChat = __webpack_require__(275);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat() {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));
	
	    _this.state = {
	      text: "video"
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat(value) {
	      this.setState({
	        text: value
	      });
	      if (value === 'video') {
	        socket.emit('changedToVideo', '');
	      }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      location.reload();
	      browserHistory.push({ pathname: '/home' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'Options' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Mazing Friends'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons' },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	            'Quit Game'
	          ),
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Chat Options'
	            ),
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'text', onChange: this.switchChat.bind(this, "text") }),
	            'Text',
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this, "video") }),
	            'Video'
	          )
	        ),
	        this.state.text === "video" ? _react2.default.createElement(_VideoChat2.default, null) : _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameOver = function (_React$Component) {
	  _inherits(GameOver, _React$Component);
	
	  function GameOver() {
	    _classCallCheck(this, GameOver);
	
	    return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).call(this));
	  }
	
	  _createClass(GameOver, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "GameOver" },
	        _react2.default.createElement(
	          "h1",
	          null,
	          "GameOver!"
	        ),
	        " ",
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          "h3",
	          null,
	          "Your time: "
	        ),
	        " ",
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          "button",
	          { className: "homeButtons" },
	          "Play Again"
	        ),
	        " ",
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          "button",
	          { className: "homeButtons" },
	          "Quit"
	        )
	      );
	    }
	  }]);
	
	  return GameOver;
	}(_react2.default.Component);
	
	exports.default = GameOver;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameOver.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZU92ZXIuanN4PzY5N2EiXSwibmFtZXMiOlsiQ2hhdCIsInN0YXRlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNldFN0YXRlIiwic29ja2V0IiwiZW1pdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiYnJvd3Nlckhpc3RvcnkiLCJwdXNoIiwicGF0aG5hbWUiLCJzdG9wR2FtZSIsImJpbmQiLCJzd2l0Y2hDaGF0IiwiQ29tcG9uZW50IiwiR2FtZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0osbUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTTtBQURLLE1BQWI7QUFHQUMsYUFBUUMsR0FBUixDQUFZLE1BQUtILEtBQUwsQ0FBV0MsSUFBdkI7QUFMWTtBQU1iOzs7O2dDQUVVRyxLLEVBQU87QUFDaEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pKLGVBQU1HO0FBRE0sUUFBZDtBQUdBLFdBQUlBLFVBQVUsT0FBZCxFQUF1QjtBQUNyQkUsZ0JBQU9DLElBQVAsQ0FBWSxnQkFBWixFQUE4QixFQUE5QjtBQUNEO0FBQ0Y7OztnQ0FFVTtBQUNUQyxnQkFBU0MsTUFBVDtBQUNBQyxzQkFBZUMsSUFBZixDQUFvQixFQUFFQyxVQUFVLE9BQVosRUFBcEI7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFFRTtBQUFBO0FBQUEsZUFBUSxXQUFVLGVBQWxCO0FBQUE7QUFBQSxZQUZGO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUEzQztBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUVFLHNEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE1BQXpCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsVUFBVSxLQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUF2RCxHQUZGO0FBQUE7QUFHRSxzREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIsT0FBM0IsQ0FBeEQsR0FIRjtBQUFBO0FBQUE7QUFKRixVQURGO0FBV0csY0FBS2QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLE9BQXBCLEdBQThCLHdEQUE5QixHQUE2QztBQVhoRCxRQURGO0FBZUQ7Ozs7R0F2Q2dCLGdCQUFNZSxTOztBQXdDeEI7O21CQUdjakIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGY7Ozs7Ozs7Ozs7OztLQUVNa0IsUTs7O0FBQ0wsdUJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzhCQUVTO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFBQTtBQUNvQixrREFEcEI7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkQ7QUFBQTtBQUV3QixrREFGeEI7QUFHQztBQUFBO0FBQUEsYUFBUSxXQUFVLGFBQWxCO0FBQUE7QUFBQSxVQUhEO0FBQUE7QUFHcUQsa0RBSHJEO0FBSUM7QUFBQTtBQUFBLGFBQVEsV0FBVSxhQUFsQjtBQUFBO0FBQUE7QUFKRCxRQURGO0FBUUQ7Ozs7R0Fkb0IsZ0JBQU1ELFM7O21CQWlCZEMsUSIsImZpbGUiOiIwLmU0OTgxODFkYzEzZDQzNzZmMzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcblxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6IFwidmlkZW9cIlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXG4gIH1cblxuICBzd2l0Y2hDaGF0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiB2YWx1ZVxuICAgIH0pXG4gICAgaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XG4gICAgICBzb2NrZXQuZW1pdCgnY2hhbmdlZFRvVmlkZW8nLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgc3RvcEdhbWUoKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiAnL2hvbWUnfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxuICAgICAgICAgIDxoMT5NYXppbmcgRnJpZW5kczwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCI+Q29udHJvbHM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnN0b3BHYW1lLmJpbmQodGhpcyl9PlF1aXQgR2FtZTwvYnV0dG9uPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgzPkNoYXQgT3B0aW9uczwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcywgXCJ0ZXh0XCIpfS8+VGV4dFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaGF0XCIgdmFsdWU9XCJ2aWRlb1wiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzLCBcInZpZGVvXCIpfS8+VmlkZW9cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS50ZXh0ID09PSBcInZpZGVvXCIgPyA8VmlkZW9DaGF0Lz4gOiA8VGV4dENoYXQvPiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBHYW1lT3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lT3ZlclwiPlxuICAgICAgXHQ8aDE+R2FtZU92ZXIhPC9oMT4gPGJyLz5cbiAgICAgIFx0PGgzPllvdXIgdGltZToge308L2gzPiA8YnIvPlxuICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCI+UGxheSBBZ2FpbjwvYnV0dG9uPiA8YnIvPlxuICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCI+UXVpdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lT3ZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVPdmVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=