webpackHotUpdate(0,{

/***/ 309:
/*!*********************************************!*\
  !*** ./src/components/Home/ImageUpload.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
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
	
	var ImageUpload = function (_React$Component) {
	    _inherits(ImageUpload, _React$Component);
	
	    function ImageUpload(props) {
	        _classCallCheck(this, ImageUpload);
	
	        var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));
	
	        _this.state = {
	            file: '',
	            imagePreviewUrl: ''
	        };
	        return _this;
	    }
	
	    _createClass(ImageUpload, [{
	        key: '_handleSubmit',
	        value: function _handleSubmit(e) {
	            e.preventDefault();
	            // TODO: do something with -> this.state.file
	            //console.log('handle uploading-', this.state.imagePreviewUrl);
	            this.props.loadImage(this.state.imagePreviewUrl);
	            socket.emit("saveImage", { imageUrl: this.state.imagePreviewUrl, user: sessionStorage.getItem('user') });
	            this.setState({
	                imagePreviewUrl: ''
	            });
	        }
	    }, {
	        key: '_handleImageChange',
	        value: function _handleImageChange(e) {
	            var _this2 = this;
	
	            e.preventDefault();
	
	            var reader = new FileReader();
	            var file = e.target.files[0];
	
	            reader.onloadend = function () {
	                _this2.setState({
	                    file: file,
	                    imagePreviewUrl: reader.result
	                });
	            };
	            reader.readAsDataURL(file);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var imagePreviewUrl = this.state.imagePreviewUrl;
	
	            var $imagePreview = null;
	            if (imagePreviewUrl) {
	                $imagePreview = _react2.default.createElement('img', { 'class': 'preview', src: imagePreviewUrl });
	            } else {
	                $imagePreview = _react2.default.createElement(
	                    'div',
	                    { className: 'previewText' },
	                    'Please select an Image for Preview'
	                );
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'previewComponent' },
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: function onSubmit(e) {
	                            return _this3._handleSubmit(e);
	                        } },
	                    _react2.default.createElement('input', { className: 'fileInput',
	                        type: 'file',
	                        onChange: function onChange(e) {
	                            return _this3._handleImageChange(e);
	                        } }),
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'submitButton',
	                            type: 'submit',
	                            onClick: function onClick(e) {
	                                return _this3._handleSubmit(e);
	                            } },
	                        'Upload Image'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'imgPreview' },
	                    $imagePreview
	                )
	            );
	        }
	    }]);
	
	    return ImageUpload;
	}(_react2.default.Component);
	
	exports.default = ImageUpload;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageUpload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.8af3463a1cabffa8695b.hot-update.js.map