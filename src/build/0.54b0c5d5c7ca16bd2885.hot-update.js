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
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat(props) {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));
	
	    _this.state = {
	      video: true
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat() {
	      this.setState({
	        video: false
	      });
	      // if (value === 'video') {
	      //   socket.emit('changedToVideo', '');
	      // }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      document.getElementById("canvas").remove();
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
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
	          this.props.timer ? _react2.default.createElement(
	            'h2',
	            null,
	            this.props.time
	          ) : _react2.default.createElement(
	            'p',
	            null,
	            'Waiting for second player...'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.props.controlsClickHandler },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement(
	              'button',
	              { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	              'Quit Game'
	            )
	          )
	        ),
	        this.state.video ? _react2.default.createElement(_VideoChat2.default, null) : '',
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this) }),
	          'Video Off'
	        ),
	        _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIl0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwidmlkZW8iLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidGltZXIiLCJ0aW1lIiwiY29udHJvbHNDbGlja0hhbmRsZXIiLCJzdG9wR2FtZSIsImJpbmQiLCJzd2l0Y2hDaGF0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU87QUFESSxNQUFiO0FBR0FDLGFBQVFDLEdBQVIsQ0FBWSxNQUFLSCxLQUFMLENBQVdJLElBQXZCO0FBTGlCO0FBTWxCOzs7O2tDQUVZO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pKLGdCQUFPO0FBREssUUFBZDtBQUdBO0FBQ0E7QUFDQTtBQUNEOzs7Z0NBRVU7QUFDVEssZ0JBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLE1BQWxDO0FBQ0FDLGdCQUFTQyxNQUFUO0FBQ0Q7Ozs4QkFFUTtBQUNQUixlQUFRQyxHQUFSLENBQVksS0FBS0osS0FBakI7QUFDQSxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxhQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVHLGdCQUFLQSxLQUFMLENBQVdZLEtBQVgsR0FBbUI7QUFBQTtBQUFBO0FBQUssa0JBQUtaLEtBQUwsQ0FBV2E7QUFBaEIsWUFBbkIsR0FBZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZuRDtBQUdFO0FBQUE7QUFBQSxlQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLYixLQUFMLENBQVdjLG9CQUF0RDtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQSxlQUFNLElBQUcsR0FBVDtBQUFhO0FBQUE7QUFBQSxpQkFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTNDO0FBQUE7QUFBQTtBQUFiO0FBSkYsVUFERjtBQU9HLGNBQUtmLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQix3REFBbkIsR0FBa0MsRUFQckM7QUFRSTtBQUFBO0FBQUE7QUFDRSxvREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS2UsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEQsR0FERjtBQUFBO0FBQUEsVUFSSjtBQVdFO0FBWEYsUUFERjtBQWVEOzs7O0dBeENnQixnQkFBTUUsUzs7QUF5Q3hCOzttQkFHY25CLEkiLCJmaWxlIjoiMC41NGIwYzVkNWM3Y2ExNmJkMjg4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXHJcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXHJcbiAgfVxyXG5cclxuICBzd2l0Y2hDaGF0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpZGVvOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIC8vIGlmICh2YWx1ZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgLy8gICBzb2NrZXQuZW1pdCgnY2hhbmdlZFRvVmlkZW8nLCAnJyk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBzdG9wR2FtZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLnJlbW92ZSgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVyID8gPGgyPnt0aGlzLnByb3BzLnRpbWV9PC9oMj4gOiA8cD5XYWl0aW5nIGZvciBzZWNvbmQgcGxheWVyLi4uPC9wPn1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29udHJvbHNDbGlja0hhbmRsZXJ9PkNvbnRyb2xzPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9cIj48YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnN0b3BHYW1lLmJpbmQodGhpcyl9PlF1aXQgR2FtZTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS52aWRlbyA/IDxWaWRlb0NoYXQvPiA6ICcnIH1cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInZpZGVvXCIgb25DaGFuZ2U9e3RoaXMuc3dpdGNoQ2hhdC5iaW5kKHRoaXMpfS8+VmlkZW8gT2ZmXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPFRleHRDaGF0Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==