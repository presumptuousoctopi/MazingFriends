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
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	    displayName: "Modal",
	    getInitialState: function getInitialState() {
	        return { show: false };
	    },
	    render: function render() {
	        var _this = this;
	
	        var close = function close() {
	            return _this.setState({ show: false });
	        };
	
	        return _react2.default.createElement(
	            "div",
	            { className: "modal-container", style: { height: 200 } },
	            _react2.default.createElement(
	                Button,
	                {
	                    bsStyle: "primary",
	                    bsSize: "large",
	                    onClick: function onClick() {
	                        return _this.setState({ show: true });
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
	                        Button,
	                        { onClick: close },
	                        "Close"
	                    )
	                )
	            )
	        );
	    }
	});
	
	exports.default = Modal;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Modal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.320c02659e319bdb099f.hot-update.js.map