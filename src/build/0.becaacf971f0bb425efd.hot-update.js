webpackHotUpdate(0,{

/***/ 286:
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
	        _this.addFriend = _this.addFriend.bind(_this);
	        return _this;
	    }
	
	    _createClass(FriendSearch, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var context = this;
	            socket.on("alreadyAdded", function () {
	                alert("That user is already in your friend database");
	            });
	        }
	    }, {
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
	        key: "addFriend",
	        value: function addFriend() {
	            console.log("adding friend:", this.state.friend);
	            socket.emit("addFriend", { user: sessionStorage.getItem('user'), friend: this.state.searchResult });
	            this.setState({
	                searchResult: ""
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var button = null;
	            var context = this;
	            return _react2.default.createElement(
	                "div",
	                { className: "FriendSearch" },
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
	                ),
	                this.state.searchResult !== "" && _react2.default.createElement(
	                    "button",
	                    { onClick: context.addFriend },
	                    "Add"
	                )
	            );
	        }
	    }]);
	
	    return FriendSearch;
	}(_react2.default.Component);
	
	exports.default = FriendSearch;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendSearch.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFNlYXJjaC5qc3g/MzUxOCJdLCJuYW1lcyI6WyJGcmllbmRTZWFyY2giLCJzdGF0ZSIsImZyaWVuZCIsInNlYXJjaFJlc3VsdCIsInVwZGF0ZUZyaWVuZCIsImJpbmQiLCJhZGRGcmllbmQiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJhbGVydCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbWl0Iiwib2JqIiwiZGF0YSIsInVzZXJuYW1lIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYnV0dG9uIiwic2VhcmNoRm9yRnJpZW5kcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUdNQSxZOzs7QUFDRiw2QkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUSxFQURDO0FBRVRDLDJCQUFjO0FBRkwsVUFBYjtBQUlBLGVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxlQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQVBVO0FBUWI7Ozs7OENBQ29CLENBQ3BCOzs7NkNBQ21CO0FBQ2hCLGlCQUFJRSxVQUFVLElBQWQ7QUFDQUMsb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFlBQVU7QUFDaENDLHVCQUFNLDhDQUFOO0FBQ0gsY0FGRDtBQUlIOzs7MENBQ2dCQyxLLEVBQU87QUFDcEIsaUJBQUlKLFVBQVUsSUFBZDtBQUNBSSxtQkFBTUMsY0FBTjtBQUNBSixvQkFBT0ssSUFBUCxDQUFZLFVBQVosRUFBd0IsS0FBS1osS0FBTCxDQUFXQyxNQUFuQztBQUNBTSxvQkFBT0MsRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU0ssR0FBVCxFQUFhO0FBQzVCLHFCQUFJQSxJQUFJQyxJQUFKLENBQVNDLFFBQWIsRUFBdUI7QUFDbkJULDZCQUFRVSxRQUFSLENBQWlCO0FBQ2JkLHVDQUFjVyxJQUFJQyxJQUFKLENBQVNDO0FBRFYsc0JBQWpCO0FBR0gsa0JBSkQsTUFLSztBQUNETiwyQkFBTSw4QkFBTjtBQUNIO0FBQ0osY0FURDtBQVVIOzs7c0NBQ1lDLEssRUFBTTtBQUNmLGtCQUFLTSxRQUFMLENBQWM7QUFDVmYseUJBQVFTLE1BQU1PLE1BQU4sQ0FBYUM7QUFEWCxjQUFkO0FBR0g7OztxQ0FDWTtBQUNUQyxxQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtwQixLQUFMLENBQVdDLE1BQXpDO0FBQ0FNLG9CQUFPSyxJQUFQLENBQVksV0FBWixFQUF5QixFQUFDUyxNQUFNQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVAsRUFBdUN0QixRQUFRLEtBQUtELEtBQUwsQ0FBV0UsWUFBMUQsRUFBekI7QUFDQSxrQkFBS2MsUUFBTCxDQUFjO0FBQ1ZkLCtCQUFjO0FBREosY0FBZDtBQUdIOzs7a0NBQ1E7QUFDTCxpQkFBSXNCLFNBQVMsSUFBYjtBQUNBLGlCQUFJbEIsVUFBVSxJQUFkO0FBQ0Esb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsY0FBZjtBQUNBO0FBQUE7QUFBQTtBQUNJLDhEQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtOLEtBQUwsQ0FBV0MsTUFBckMsRUFBNkMsVUFBVSxLQUFLRSxZQUE1RCxFQUEwRSxhQUFZLG9CQUF0RixHQURKO0FBRUk7QUFBQTtBQUFBLDJCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUtzQixnQkFBTCxDQUFzQnJCLElBQXRCLENBQTJCLElBQTNCLENBQS9CO0FBQUE7QUFBQTtBQUZKLGtCQURBO0FBS0E7QUFBQTtBQUFBO0FBQUssMEJBQUtKLEtBQUwsQ0FBV0U7QUFBaEIsa0JBTEE7QUFNSyxzQkFBS0YsS0FBTCxDQUFXRSxZQUFYLEtBQTRCLEVBQTVCLElBQ0c7QUFBQTtBQUFBLHVCQUFRLFNBQVNJLFFBQVFELFNBQXpCO0FBQUE7QUFBQTtBQVBSLGNBREo7QUFZSDs7OztHQTdEc0IsZ0JBQU1xQixTOzttQkErRGxCM0IsWSIsImZpbGUiOiIwLmJlY2FhY2Y5NzFmMGJiNDI1ZWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEZyaWVuZFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmcmllbmQ6IFwiXCIsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmllbmQgPSB0aGlzLnVwZGF0ZUZyaWVuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEZyaWVuZCA9IHRoaXMuYWRkRnJpZW5kLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKFwiYWxyZWFkeUFkZGVkXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIlRoYXQgdXNlciBpcyBhbHJlYWR5IGluIHlvdXIgZnJpZW5kIGRhdGFiYXNlXCIpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBzZWFyY2hGb3JGcmllbmRzKGV2ZW50KSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRVc2Vyc1wiLCB0aGlzLnN0YXRlLmZyaWVuZCk7XG4gICAgICAgIHNvY2tldC5vbihcInVzZXJzXCIsIGZ1bmN0aW9uKG9iail7XG4gICAgICAgICAgICBpZiAob2JqLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0OiBvYmouZGF0YS51c2VybmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vIHN1Y2ggdXNlciBpbiB0aGUgZGF0YWJhc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVGcmllbmQoZXZlbnQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZyaWVuZDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFkZEZyaWVuZCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIGZyaWVuZDpcIiwgdGhpcy5zdGF0ZS5mcmllbmQpO1xuICAgICAgICBzb2NrZXQuZW1pdChcImFkZEZyaWVuZFwiLCB7dXNlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLCBmcmllbmQ6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0fSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoUmVzdWx0OiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZyaWVuZFNlYXJjaFwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZnJpZW5kfSBvbkNoYW5nZT17dGhpcy51cGRhdGVGcmllbmR9IHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBmcmllbmRzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaEZvckZyaWVuZHMuYmluZCh0aGlzKX0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0fTwvaDQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0ICE9PSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29udGV4dC5hZGRGcmllbmR9PkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFNlYXJjaFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvRnJpZW5kU2VhcmNoLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=