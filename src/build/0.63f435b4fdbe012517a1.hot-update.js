webpackHotUpdate(0,{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FriendSearch = __webpack_require__(300);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
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
	                { className: 'FriendView' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'friendTable' },
	                    this.state.friends.map(function (data) {
	                        return _react2.default.createElement(
	                            'a',
	                            { href: '#', className: 'friend' },
	                            data.friend
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return FriendView;
	}(_react2.default.Component);
	
	exports.default = FriendView;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 302:
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
	
	var ImageUpload = function (_React$Component) {
	    _inherits(ImageUpload, _React$Component);
	
	    function ImageUpload(props) {
	        _classCallCheck(this, ImageUpload);
	
	        var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));
	
	        _this.state = {
	            file: '',
	            imagePreviewUrl: '',
	            uploaded: false
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
	
	            this.setState({
	                uploaded: true
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
	                $imagePreview = _react2.default.createElement('img', { className: 'preview', src: imagePreviewUrl });
	            } else {
	                $imagePreview = _react2.default.createElement(
	                    'div',
	                    { className: 'previewText' },
	                    'Please select an Image for Preview'
	                );
	            }
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.state.uploaded ? _react2.default.createElement(
	                    'h1',
	                    null,
	                    'New image set!'
	                ) : _react2.default.createElement(
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
	                )
	            );
	        }
	    }]);
	
	    return ImageUpload;
	}(_react2.default.Component);
	
	exports.default = ImageUpload;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageUpload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZVVwbG9hZC5qc3g/YzMzMiJdLCJuYW1lcyI6WyJGcmllbmRWaWV3Iiwic3RhdGUiLCJmcmllbmRzIiwiY29udGV4dCIsInNvY2tldCIsImVtaXQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJtYXAiLCJmcmllbmQiLCJDb21wb25lbnQiLCJJbWFnZVVwbG9hZCIsInByb3BzIiwiZmlsZSIsImltYWdlUHJldmlld1VybCIsInVwbG9hZGVkIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9hZEltYWdlIiwiaW1hZ2VVcmwiLCJ1c2VyIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIiRpbWFnZVByZXZpZXciLCJfaGFuZGxlU3VibWl0IiwiX2hhbmRsZUltYWdlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVM7QUFEQSxVQUFiO0FBRlU7QUFLYjs7Ozs2Q0FDbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBQyxvQkFBT0MsSUFBUCxDQUFZLFlBQVosRUFBMEJDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBMUI7QUFDQUgsb0JBQU9JLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQVNDLElBQVQsRUFBYztBQUNsQ0MseUJBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBTix5QkFBUVMsUUFBUixDQUFpQjtBQUNiViw4QkFBU087QUFESSxrQkFBakI7QUFH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LDJCQUFLLFdBQVUsWUFBZjtBQUNLWTtBQURMO0FBVEo7QUFGQSxjQURKO0FBbUJIOzs7O0dBcEVxQixnQkFBTWxCLFM7O21CQXVFakJDLFciLCJmaWxlIjoiMC42M2Y0MzViNGZkYmUwMTI1MTdhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2gnXG5cbmNsYXNzIEZyaWVuZFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZnJpZW5kczogW11cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQuZW1pdChcImdldEZyaWVuZHNcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgc29ja2V0Lm9uKFwiZnJpZW5kRGF0YVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZnJpZW5kczogZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRnJpZW5kVmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJpZW5kVGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnJpZW5kcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmcmllbmRcIj57ZGF0YS5mcmllbmR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFZpZXdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvRnJpZW5kVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogJycsXG4gICAgICAgICAgICB1cGxvYWRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgd2l0aCAtPiB0aGlzLnN0YXRlLmZpbGVcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlIHVwbG9hZGluZy0nLCB0aGlzLnN0YXRlLmltYWdlUHJldmlld1VybCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZEltYWdlKHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3VXJsKTtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzYXZlSW1hZ2VcIiwge2ltYWdlVXJsOiB0aGlzLnN0YXRlLmltYWdlUHJldmlld1VybCwgdXNlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiAnJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVwbG9hZGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVJbWFnZUNoYW5nZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2ltYWdlUHJldmlld1VybH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgICAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3XCIgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRpbWFnZVByZXZpZXcgPSAoPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3VGV4dFwiPlBsZWFzZSBzZWxlY3QgYW4gSW1hZ2UgZm9yIFByZXZpZXc8L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51cGxvYWRlZCA/IDxoMT5OZXcgaW1hZ2Ugc2V0ITwvaDE+IDpcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmaWxlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGhpcy5faGFuZGxlSW1hZ2VDaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+VXBsb2FkIEltYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICB7JGltYWdlUHJldmlld31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZVVwbG9hZC5qc3giXSwic291cmNlUm9vdCI6IiJ9