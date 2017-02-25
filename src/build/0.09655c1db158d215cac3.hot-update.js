webpackHotUpdate(0,{

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
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
	
	var TextChat = function (_React$Component) {
	  _inherits(TextChat, _React$Component);
	
	  function TextChat() {
	    _classCallCheck(this, TextChat);
	
	    var _this = _possibleConstructorReturn(this, (TextChat.__proto__ || Object.getPrototypeOf(TextChat)).call(this));
	
	    _this.state = {
	      message: '',
	      messages: []
	    };
	    return _this;
	  }
	
	  _createClass(TextChat, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('receiveMessage', function (message) {
	        context.setState({
	          messages: message
	        });
	        console.log('in receiveMessage : ', context.state);
	      });
	
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(e) {
	      e.preventDefault();
	      window.socket.emit('sendMessage', this.state.message);
	    }
	  }, {
	    key: 'updateInput',
	    value: function updateInput(e) {
	      e.preventDefault();
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      // disabling 'wasd' for game movement
	      window.camera.keysUp = [];
	      window.camera.keysDown = [];
	      window.camera.keysLeft = [];
	      window.camera.keysRight = [];
	
	      window.addEventListener("keydown", function () {});
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      // enabling 'wasd' for game movement
	      camera.keysUp = [87];
	      camera.keysDown = [83];
	      camera.keysLeft = [65];
	      camera.keysRight = [68];
	
	      window.addEventListener("keydown", onKeyDown);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'TextChat' },
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.sendMessage.bind(this) },
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onFocus: this.onFocus.bind(this), onChange: this.updateInput.bind(this), onBlur: this.onBlur.bind(this) }),
	          _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'chatBox' },
	          this.state.messages.map(function (messageObj) {
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h3',
	                null,
	                messageObj['userId']
	              ),
	              _react2.default.createElement(
	                'div',
	                null,
	                messageObj.message
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return TextChat;
	}(_react2.default.Component);
	
	;
	
	exports.default = TextChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TextChat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJjYW1lcmEiLCJrZXlzVXAiLCJrZXlzRG93biIsImtleXNMZWZ0Iiwia2V5c1JpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5RG93biIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm9uQmx1ciIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVTtBQUZDLE1BQWI7QUFGWTtBQU1iOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0wsT0FBVCxFQUFrQjtBQUM1Q0ksaUJBQVFFLFFBQVIsQ0FBaUI7QUFDZkwscUJBQVVEO0FBREssVUFBakI7QUFHQU8saUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osUUFBUUwsS0FBNUM7QUFDRCxRQUxEOztBQU9BLFlBQUtPLFFBQUwsQ0FBYztBQUNaSixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7OztpQ0FFV08sQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQVAsY0FBT0QsTUFBUCxDQUFjUyxJQUFkLENBQW1CLGFBQW5CLEVBQWtDLEtBQUtaLEtBQUwsQ0FBV0MsT0FBN0M7QUFDRDs7O2lDQUVXUyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtKLFFBQUwsQ0FBYyxFQUFDTixTQUFTUyxFQUFFRyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7OytCQUVTO0FBQ1I7QUFDQVYsY0FBT1csTUFBUCxDQUFjQyxNQUFkLEdBQXVCLEVBQXZCO0FBQ0FaLGNBQU9XLE1BQVAsQ0FBY0UsUUFBZCxHQUF5QixFQUF6QjtBQUNBYixjQUFPVyxNQUFQLENBQWNHLFFBQWQsR0FBeUIsRUFBekI7QUFDQWQsY0FBT1csTUFBUCxDQUFjSSxTQUFkLEdBQTBCLEVBQTFCOztBQUVBZixjQUFPZ0IsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsWUFBTSxDQUFFLENBQTNDO0FBRUQ7Ozs4QkFFUTtBQUNQO0FBQ0FMLGNBQU9DLE1BQVAsR0FBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0FELGNBQU9FLFFBQVAsR0FBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0FGLGNBQU9HLFFBQVAsR0FBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0FILGNBQU9JLFNBQVAsR0FBbUIsQ0FBQyxFQUFELENBQW5COztBQUVBZixjQUFPZ0IsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DO0FBRUQ7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQU0sVUFBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUt2QixLQUFMLENBQVdDLE9BQXJDLEVBQThDLFNBQVMsS0FBS3VCLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUF2RCxFQUFnRixVQUFVLEtBQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQTFGLEVBQXVILFFBQVEsS0FBS0csTUFBTCxDQUFZSCxJQUFaLENBQWlCLElBQWpCLENBQS9ILEdBREY7QUFFRSxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGLFVBREY7QUFLRTtBQUFBO0FBQUEsYUFBSyxJQUFHLFNBQVI7QUFDRyxnQkFBS3ZCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQnlCLEdBQXBCLENBQXlCLFVBQUNDLFVBQUQ7QUFBQSxvQkFDeEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLDRCQUFXLFFBQVg7QUFBTCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFNQSw0QkFBVzNCO0FBQWpCO0FBRkYsY0FEd0I7QUFBQSxZQUF6QjtBQURIO0FBTEYsUUFERjtBQWdCRDs7OztHQXpFb0IsZ0JBQU00QixTOztBQTBFNUI7O21CQUdjOUIsUSIsImZpbGUiOiIwLjA5NjU1YzFkYjE1OGQyMTVjYWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBtZXNzYWdlczogW11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiByZWNlaXZlTWVzc2FnZSA6ICcsIGNvbnRleHQuc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNvY2tldDogc29ja2V0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIC8vIGRpc2FibGluZyAnd2FzZCcgZm9yIGdhbWUgbW92ZW1lbnRcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c1VwID0gW107XHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNEb3duID0gW107IFxyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzTGVmdCA9IFtdOyBcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c1JpZ2h0ID0gW107XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHt9ICk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIC8vIGVuYWJsaW5nICd3YXNkJyBmb3IgZ2FtZSBtb3ZlbWVudFxyXG4gICAgY2FtZXJhLmtleXNVcCA9IFs4N107XHJcbiAgICBjYW1lcmEua2V5c0Rvd24gPSBbODNdOyBcclxuICAgIGNhbWVyYS5rZXlzTGVmdCA9IFs2NV07IFxyXG4gICAgY2FtZXJhLmtleXNSaWdodCA9IFs2OF07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q2hhdFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXRCb3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCggKG1lc3NhZ2VPYmopID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDM+e21lc3NhZ2VPYmpbJ3VzZXJJZCddfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZU9iai5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==