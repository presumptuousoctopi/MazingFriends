webpackHotUpdate(0,{

/***/ 290:
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
	        key: "addFriend",
	        value: function addFriend() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var button = null;
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
	                ),
	                this.state.searchResult !== "" && _react2.default.createElement(
	                    "button",
	                    { onClick: this.addFriend },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFNlYXJjaC5qc3g/MzUxOCJdLCJuYW1lcyI6WyJGcmllbmRTZWFyY2giLCJzdGF0ZSIsImZyaWVuZCIsInNlYXJjaFJlc3VsdCIsInVwZGF0ZUZyaWVuZCIsImJpbmQiLCJldmVudCIsImNvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInNvY2tldCIsImVtaXQiLCJvbiIsIm9iaiIsImRhdGEiLCJ1c2VybmFtZSIsInNldFN0YXRlIiwiYWxlcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInNlYXJjaEZvckZyaWVuZHMiLCJhZGRGcmllbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FHTUEsWTs7O0FBQ0YsNkJBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVEsRUFEQztBQUVUQywyQkFBYztBQUZMLFVBQWI7QUFJQSxlQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBTlU7QUFPYjs7OzswQ0FDZ0JDLEssRUFBTztBQUNwQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FELG1CQUFNRSxjQUFOO0FBQ0FDLG9CQUFPQyxJQUFQLENBQVksVUFBWixFQUF3QixLQUFLVCxLQUFMLENBQVdDLE1BQW5DO0FBQ0FPLG9CQUFPRSxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTQyxHQUFULEVBQWE7QUFDNUIscUJBQUlBLElBQUlDLElBQUosQ0FBU0MsUUFBYixFQUF1QjtBQUNuQlAsNkJBQVFRLFFBQVIsQ0FBaUI7QUFDYlosdUNBQWNTLElBQUlDLElBQUosQ0FBU0M7QUFEVixzQkFBakI7QUFHSCxrQkFKRCxNQUtLO0FBQ0RFLDJCQUFNLDhCQUFOO0FBQ0g7QUFDSixjQVREO0FBVUg7OztzQ0FDWVYsSyxFQUFNO0FBQ2Ysa0JBQUtTLFFBQUwsQ0FBYztBQUNWYix5QkFBUUksTUFBTVcsTUFBTixDQUFhQztBQURYLGNBQWQ7QUFHSDs7O3FDQUNZLENBRVo7OztrQ0FDUTtBQUNMLGlCQUFJQyxTQUFTLElBQWI7QUFDQSxvQkFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDSSw4REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLbEIsS0FBTCxDQUFXQyxNQUFyQyxFQUE2QyxVQUFVLEtBQUtFLFlBQTVELEVBQTBFLGFBQVksb0JBQXRGLEdBREo7QUFFSTtBQUFBO0FBQUEsMkJBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsS0FBS2dCLGdCQUFMLENBQXNCZixJQUF0QixDQUEyQixJQUEzQixDQUEvQjtBQUFBO0FBQUE7QUFGSixrQkFEQTtBQUtBO0FBQUE7QUFBQTtBQUFLLDBCQUFLSixLQUFMLENBQVdFO0FBQWhCLGtCQUxBO0FBTUssc0JBQUtGLEtBQUwsQ0FBV0UsWUFBWCxLQUE0QixFQUE1QixJQUNHO0FBQUE7QUFBQSx1QkFBUSxTQUFTLEtBQUtrQixTQUF0QjtBQUFBO0FBQUE7QUFQUixjQURKO0FBWUg7Ozs7R0E5Q3NCLGdCQUFNQyxTOzttQkFnRGxCdEIsWSIsImZpbGUiOiIwLjRiMTM3ZDg0YTFiMWI2MzE2ODJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEZyaWVuZFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmcmllbmQ6IFwiXCIsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmllbmQgPSB0aGlzLnVwZGF0ZUZyaWVuZC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZWFyY2hGb3JGcmllbmRzKGV2ZW50KSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRVc2Vyc1wiLCB0aGlzLnN0YXRlLmZyaWVuZCk7XG4gICAgICAgIHNvY2tldC5vbihcInVzZXJzXCIsIGZ1bmN0aW9uKG9iail7XG4gICAgICAgICAgICBpZiAob2JqLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0OiBvYmouZGF0YS51c2VybmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vIHN1Y2ggdXNlciBpbiB0aGUgZGF0YWJhc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVGcmllbmQoZXZlbnQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZyaWVuZDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFkZEZyaWVuZCAoKSB7XG5cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mcmllbmR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZyaWVuZH0gcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGZyaWVuZHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoRm9yRnJpZW5kcy5iaW5kKHRoaXMpfT5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHR9PC9oND5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQgIT09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEZyaWVuZH0+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRTZWFyY2guanN4Il0sInNvdXJjZVJvb3QiOiIifQ==