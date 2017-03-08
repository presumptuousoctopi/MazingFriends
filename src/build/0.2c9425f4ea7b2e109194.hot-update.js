webpackHotUpdate(0,{

/***/ 323:
/*!*****************************************!*\
  !*** ./src/components/Common/Modal.jsx ***!
  \*****************************************/
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
	
	var Modal = function (_React$component) {
	    _inherits(Modal, _React$component);
	
	    function Modal(props) {
	        _classCallCheck(this, Modal);
	
	        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	        _this.state = { show: false };
	        return _this;
	    }
	
	    _createClass(Modal, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var close = function close() {
	                return _this2.setState({ show: false });
	            };
	
	            return _react2.default.createElement(
	                "div",
	                { className: "modal-container", style: { height: 200 } },
	                _react2.default.createElement(
	                    "button",
	                    {
	                        onClick: function onClick() {
	                            return _this2.setState({ show: true });
	                        }
	                    },
	                    "Launch contained modal"
	                ),
	                _react2.default.createElement(
	                    Modal,
	                    {
	                        show: this.state.show,
	                        onHide: close,
	                        container: this,
	                        "aria-labelledby": "contained-modal-title"
	                    },
	                    _react2.default.createElement(
	                        Modal.Header,
	                        { closeButton: true },
	                        _react2.default.createElement(
	                            Modal.Title,
	                            { id: "contained-modal-title" },
	                            "Contained Modal"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        Modal.Body,
	                        null,
	                        "Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati."
	                    ),
	                    _react2.default.createElement(
	                        Modal.Footer,
	                        null,
	                        _react2.default.createElement(
	                            "button",
	                            { onClick: close },
	                            "Close"
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Modal;
	}(_react2.default.component);
	
	exports.default = Modal;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Modal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.2c9425f4ea7b2e109194.hot-update.js.map