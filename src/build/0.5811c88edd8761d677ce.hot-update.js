webpackHotUpdate(0,{

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserStats = __webpack_require__(285);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(286);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	var _FriendView = __webpack_require__(290);
	
	var _FriendView2 = _interopRequireDefault(_FriendView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile(props) {
	    _classCallCheck(this, Profile);
	
	    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	
	    _this.state = {
	      currentUser: null
	    };
	    return _this;
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Profile' },
	        _react2.default.createElement(
	          'div',
	          { className: 'profileHeader' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Mazing Friends '
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            this.props.currentUser
	          )
	        ),
	        _react2.default.createElement(_FriendSearch2.default, null),
	        _react2.default.createElement(_UserStats2.default, null),
	        _react2.default.createElement(_FriendView2.default, null)
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProfileView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 290:
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
	
	var FriendView = function (_React$Component) {
	    _inherits(FriendView, _React$Component);
	
	    function FriendView() {
	        _classCallCheck(this, FriendView);
	
	        var _this = _possibleConstructorReturn(this, (FriendView.__proto__ || Object.getPrototypeOf(FriendView)).call(this));
	
	        _this.state = {
	            friends: []
	        };
	        return _this;
	    }
	
	    _createClass(FriendView, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            socket.emit("getFriends", sessionStorage.getItem('user'));
	            socket.on("friendData", function (data) {
	                console.log(data);
	                context.setState({
	                    friends: data
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.state.friends.map(function (data) {
	                    return _react2.default.createElement(
	                        'h2',
	                        null,
	                        data.friend
	                    );
	                })
	            );
	        }
	    }]);
	
	    return FriendView;
	}(_react2.default.Component);
	
	exports.default = FriendView;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvRnJpZW5kVmlldy5qc3g/N2QyNCJdLCJuYW1lcyI6WyJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiQ29tcG9uZW50IiwiRnJpZW5kVmlldyIsImZyaWVuZHMiLCJjb250ZXh0Iiwic29ja2V0IiwiZW1pdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1hcCIsImZyaWVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDTCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNaQSxLQURZOztBQUVsQixXQUFLQyxLQUFMLEdBQWE7QUFDWkMsb0JBQWE7QUFERCxNQUFiO0FBRmtCO0FBS2xCOzs7OzhCQUVTO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxrQkFBS0YsS0FBTCxDQUFXRTtBQUFoQjtBQUZELFVBREQ7QUFLRSxvRUFMRjtBQU1DLGlFQU5EO0FBT0U7QUFQRixRQURGO0FBV0Q7Ozs7R0FwQm1CLGdCQUFNQyxTOzttQkF1QmJKLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOzs7Ozs7Ozs7Ozs7S0FHTUssVTs7O0FBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLSCxLQUFMLEdBQWE7QUFDVEksc0JBQVM7QUFEQSxVQUFiO0FBRlU7QUFLYjs7Ozs2Q0FDbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBQyxvQkFBT0MsSUFBUCxDQUFZLFlBQVosRUFBMEJDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBMUI7QUFDQUgsb0JBQU9JLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQVNDLElBQVQsRUFBYztBQUNsQ0MseUJBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBTix5QkFBUVMsUUFBUixDQUFpQjtBQUNiViw4QkFBU087QUFESSxrQkFBakI7QUFHSCxjQUxEO0FBTUg7OztrQ0FDUTtBQUNMLG9CQUNJO0FBQUE7QUFBQTtBQUNDLHNCQUFLWCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJXLEdBQW5CLENBQXVCLFVBQUNKLElBQUQsRUFBVTtBQUM5Qiw0QkFDSTtBQUFBO0FBQUE7QUFBS0EsOEJBQUtLO0FBQVYsc0JBREo7QUFHSCxrQkFKQTtBQURELGNBREo7QUFTSDs7OztHQTNCb0IsZ0JBQU1kLFM7O21CQTZCaEJDLFUiLCJmaWxlIjoiMC41ODExYzg4ZWRkODc2MWQ2NzdjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyU3RhdHMgZnJvbSAnLi9Vc2VyU3RhdHMuanN4J1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnXG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4J1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudFVzZXI6IG51bGxcblx0XHR9O1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGVyXCI+XG5cdCAgICAgIFx0PGgxPk1hemluZyBGcmllbmRzIDwvaDE+XG5cdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+XG4gICAgICBcdDwvZGl2PlxuICAgICBcdCAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICBcdDxVc2VyU3RhdHMgLz5cbiAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBGcmllbmRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZyaWVuZHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRGcmllbmRzXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICAgIHNvY2tldC5vbihcImZyaWVuZERhdGFcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZyaWVuZHM6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5mcmllbmRzLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxoMj57ZGF0YS5mcmllbmR9PC9oMj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGcmllbmRWaWV3XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==