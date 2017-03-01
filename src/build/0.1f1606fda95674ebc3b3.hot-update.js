webpackHotUpdate(0,{

/***/ 291:
/*!**********************************************!*\
  !*** ./src/components/Game/FriendSearch.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FriendSearch = function (_React$Component) {
	    _inherits(FriendSearch, _React$Component);
	
	    function FriendSearch() {
	        _classCallCheck(this, FriendSearch);
	
	        var _this = _possibleConstructorReturn(this, (FriendSearch.__proto__ || Object.getPrototypeOf(FriendSearch)).call(this));
	
	        _this.state = {
	            friend: "",
	            searchResult: ""
	        };
	        _this.updateFriend = _this.updateFriend.bind(_this);
	        return _this;
	    }
	
	    _createClass(FriendSearch, [{
	        key: "searchForFriends",
	        value: function searchForFriends(event) {
	            var context = this;
	            event.preventDefault();
	            socket.emit("getUsers", this.state.friend);
	            socket.on("users", function (obj) {
	                if (obj.data.username) {
	                    context.setState({
	                        searchResult: obj.data.username
	                    });
	                } else {
	                    alert("no such user in the database");
	                }
	            });
	        }
	    }, {
	        key: "updateFriend",
	        value: function updateFriend(event) {
	            this.setState({
	                friend: event.target.value
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    _react2.default.createElement("input", { type: "text", value: this.state.friend, onChange: this.updateFriend, placeholder: "search for friends" }),
	                    _react2.default.createElement(
	                        "button",
	                        { type: "submit", onClick: this.searchForFriends.bind(this) },
	                        "Search"
	                    )
	                ),
	                _react2.default.createElement(
	                    "h4",
	                    null,
	                    this.state.searchResult
	                )
	            );
	        }
	    }]);
	
	    return FriendSearch;
	}(_react2.default.Component);
	
	exports.default = FriendSearch;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendSearch.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.1f1606fda95674ebc3b3.hot-update.js.map