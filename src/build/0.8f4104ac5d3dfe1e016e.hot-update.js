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
	
	var Modal = __webpack_require__(/*! boron/DropModal */ 314);
	
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

/***/ },

/***/ 314:
/*!******************************!*\
  !*** ./~/boron/DropModal.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var modalFactory = __webpack_require__(/*! ./modalFactory */ 315);
	var insertKeyframesRule = __webpack_require__(/*! domkit/insertKeyframesRule */ 320);
	var appendVendorPrefix = __webpack_require__(/*! domkit/appendVendorPrefix */ 317);
	
	var animation = {
	    show: {
	        animationDuration: '0.4s',
	        animationTimingFunction: 'cubic-bezier(0.7,0,0.3,1)'
	    },
	
	    hide: {
	        animationDuration: '0.4s',
	        animationTimingFunction: 'cubic-bezier(0.7,0,0.3,1)'
	    },
	
	    showModalAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0,
	            transform: 'translate3d(-50%, -300px, 0)'
	        },
	        '100%': {
	            opacity: 1,
	            transform: 'translate3d(-50%, -50%, 0)'
	        }
	    }),
	
	    hideModalAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 1,
	            transform: 'translate3d(-50%, -50%, 0)'
	        },
	        '100%': {
	            opacity: 0,
	            transform: 'translate3d(-50%, 100px, 0)'
	        }
	    }),
	
	    showBackdropAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0
	        },
	        '100%': {
	            opacity: 0.9
	        }
	    }),
	
	    hideBackdropAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0.9
	        },
	        '100%': {
	            opacity: 0
	        }
	    }),
	
	    showContentAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0,
	            transform: 'translate3d(0, -20px, 0)'
	        },
	        '100%': {
	            opacity: 1,
	            transform: 'translate3d(0, 0, 0)'
	        }
	    }),
	
	    hideContentAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 1,
	            transform: 'translate3d(0, 0, 0)'
	        },
	        '100%': {
	            opacity: 0,
	            transform: 'translate3d(0, 50px, 0)'
	        }
	    })
	};
	
	var showAnimation = animation.show;
	var hideAnimation = animation.hide;
	var showModalAnimation = animation.showModalAnimation;
	var hideModalAnimation = animation.hideModalAnimation;
	var showBackdropAnimation = animation.showBackdropAnimation;
	var hideBackdropAnimation = animation.hideBackdropAnimation;
	var showContentAnimation = animation.showContentAnimation;
	var hideContentAnimation = animation.hideContentAnimation;
	
	module.exports = modalFactory({
	    getRef: function(willHidden) {
	        return 'modal';
	    },
	    getModalStyle: function(willHidden) {
	        return appendVendorPrefix({
	            position: "fixed",
	            width: "500px",
	            transform: "translate3d(-50%, -50%, 0)",
	            top: "50%",
	            left: "50%",
	            backgroundColor: "white",
	            zIndex: 1050,
	            animationDuration: (willHidden ? hideAnimation : showAnimation).animationDuration,
	            animationFillMode: 'forwards',
	            animationName: willHidden ? hideModalAnimation : showModalAnimation,
	            animationTimingFunction: (willHidden ? hideAnimation : showAnimation).animationTimingFunction
	        })
	    },
	    getBackdropStyle: function(willHidden) {
	        return appendVendorPrefix({
	            position: "fixed",
	            top: 0,
	            right: 0,
	            bottom: 0,
	            left: 0,
	            zIndex: 1040,
	            backgroundColor: "#373A47",
	            animationDuration: (willHidden ? hideAnimation : showAnimation).animationDuration,
	            animationFillMode: 'forwards',
	            animationName: willHidden ? hideBackdropAnimation : showBackdropAnimation,
	            animationTimingFunction: (willHidden ? hideAnimation : showAnimation).animationTimingFunction
	        });
	    },
	    getContentStyle: function(willHidden) {
	        return appendVendorPrefix({
	            margin: 0,
	            opacity: 0,
	            animationDuration: (willHidden ? hideAnimation : showAnimation).animationDuration,
	            animationFillMode: 'forwards',
	            animationDelay: '0.25s',
	            animationName: showContentAnimation,
	            animationTimingFunction: (willHidden ? hideAnimation : showAnimation).animationTimingFunction
	        })
	    }
	});


/***/ },

/***/ 315:
/*!*********************************!*\
  !*** ./~/boron/modalFactory.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 103);
	var transitionEvents = __webpack_require__(/*! domkit/transitionEvents */ 316);
	var appendVendorPrefix = __webpack_require__(/*! domkit/appendVendorPrefix */ 317);
	
	module.exports = function(animation){
	
	    return React.createClass({
	        propTypes: {
	            className: React.PropTypes.string,
	            // Close the modal when esc is pressed? Defaults to true.
	            keyboard: React.PropTypes.bool,
	            onShow: React.PropTypes.func,
	            onHide: React.PropTypes.func,
	            animation: React.PropTypes.object,
	            backdrop: React.PropTypes.bool,
	            closeOnClick: React.PropTypes.bool,
	            modalStyle: React.PropTypes.object,
	            backdropStyle: React.PropTypes.object,
	            contentStyle: React.PropTypes.object,
	        },
	
	        getDefaultProps: function() {
	            return {
	                className: "",
	                onShow: function(){},
	                onHide: function(){},
	                animation: animation,
	                keyboard: true,
	                backdrop: true,
	                closeOnClick: true,
	                modalStyle: {},
	                backdropStyle: {},
	                contentStyle: {},
	            };
	        },
	
	        getInitialState: function(){
	            return {
	                willHidden: false,
	                hidden: true
	            }
	        },
	
	        hasHidden: function(){
	            return this.state.hidden;
	        },
	
	        addTransitionListener: function(node, handle){
	            if (node) {
	              var endListener = function(e) {
	                  if (e && e.target !== node) {
	                      return;
	                  }
	                  transitionEvents.removeEndEventListener(node, endListener);
	                  handle();
	              };
	              transitionEvents.addEndEventListener(node, endListener);
	            }
	        },
	
	        handleBackdropClick: function() {
	            if (this.props.closeOnClick) {
	                this.hide();
	            }
	        },
	
	        render: function() {
	
	            var hidden = this.hasHidden();
	            if (hidden) return null;
	
	            var willHidden = this.state.willHidden;
	            var animation = this.props.animation;
	            var modalStyle = animation.getModalStyle(willHidden);
	            var backdropStyle = animation.getBackdropStyle(willHidden);
	            var contentStyle = animation.getContentStyle(willHidden);
	            var ref = animation.getRef(willHidden);
	            var sharp = animation.getSharp && animation.getSharp(willHidden);
	
	            // Apply custom style properties
	            if (this.props.modalStyle) {
	                var prefixedModalStyle = appendVendorPrefix(this.props.modalStyle);
	                for (var style in prefixedModalStyle) {
	                    modalStyle[style] = prefixedModalStyle[style];
	                }
	            }
	
	            if (this.props.backdropStyle) {
	              var prefixedBackdropStyle = appendVendorPrefix(this.props.backdropStyle);
	                for (var style in prefixedBackdropStyle) {
	                    backdropStyle[style] = prefixedBackdropStyle[style];
	                }
	            }
	
	            if (this.props.contentStyle) {
	              var prefixedContentStyle = appendVendorPrefix(this.props.contentStyle);
	                for (var style in prefixedContentStyle) {
	                    contentStyle[style] = prefixedContentStyle[style];
	                }
	            }
	
	            var backdrop = this.props.backdrop? React.createElement("div", {style: backdropStyle, onClick: this.props.closeOnClick? this.handleBackdropClick: null}): undefined;
	
	            if(willHidden) {
	                var node = this.refs[ref];
	                this.addTransitionListener(node, this.leave);
	            }
	
	            return (React.createElement("span", null, 
	                React.createElement("div", {ref: "modal", style: modalStyle, className: this.props.className}, 
	                    sharp, 
	                    React.createElement("div", {ref: "content", tabIndex: "-1", style: contentStyle}, 
	                        this.props.children
	                    )
	                ), 
	                backdrop
	             ))
	            ;
	        },
	
	        leave: function(){
	            this.setState({
	                hidden: true
	            });
	            this.props.onHide();
	        },
	
	        enter: function(){
	            this.props.onShow();
	        },
	
	        show: function(){
	            if (!this.hasHidden()) return;
	
	            this.setState({
	                willHidden: false,
	                hidden: false
	            });
	
	            setTimeout(function(){
	              var ref = this.props.animation.getRef();
	              var node = this.refs[ref];
	              this.addTransitionListener(node, this.enter);
	            }.bind(this), 0);
	        },
	
	        hide: function(){
	            if (this.hasHidden()) return;
	
	            this.setState({
	                willHidden: true
	            });
	        },
	
	        toggle: function(){
	            if (this.hasHidden())
	                this.show();
	            else
	                this.hide();
	        },
	
	        listenKeyboard: function(event) {
	            if (this.props.keyboard &&
	                    (event.key === "Escape" ||
	                     event.keyCode === 27)) {
	                this.hide();
	            }
	        },
	
	        componentDidMount: function(){
	            window.addEventListener("keydown", this.listenKeyboard, true);
	        },
	
	        componentWillUnmount: function() {
	            window.removeEventListener("keydown", this.listenKeyboard, true);
	        }
	    });
	}


/***/ },

/***/ 316:
/*!**********************************************!*\
  !*** ./~/boron/~/domkit/transitionEvents.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	module.exports = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};


/***/ },

/***/ 317:
/*!************************************************!*\
  !*** ./~/boron/~/domkit/appendVendorPrefix.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getVendorPropertyName = __webpack_require__(/*! ./getVendorPropertyName */ 318);
	
	module.exports = function(target, sources) {
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  var prefixed = {};
	  for (var key in to) {
	    prefixed[getVendorPropertyName(key)] = to[key]
	  }
	
	  return prefixed
	}


/***/ },

/***/ 318:
/*!***************************************************!*\
  !*** ./~/boron/~/domkit/getVendorPropertyName.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var builtinStyle = __webpack_require__(/*! ./builtinStyle */ 319);
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	var domVendorPrefix;
	
	// Helper function to get the proper vendor property name. (transition => WebkitTransition)
	module.exports = function(prop, isSupportTest) {
	
	  var vendorProp;
	  if (prop in builtinStyle) return prop;
	
	  var UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);
	
	  if (domVendorPrefix) {
	
	    vendorProp = domVendorPrefix + UpperProp;
	    if (vendorProp in builtinStyle) {
	      return vendorProp;
	    }
	  } else {
	
	    for (var i = 0; i < prefixes.length; ++i) {
	      vendorProp = prefixes[i] + UpperProp;
	      if (vendorProp in builtinStyle) {
	        domVendorPrefix = prefixes[i];
	        return vendorProp;
	      }
	    }
	  }
	
	  // if support test, not fallback to origin prop name
	  if (!isSupportTest) {
	    return prop;
	  }
	
	}


/***/ },

/***/ 319:
/*!******************************************!*\
  !*** ./~/boron/~/domkit/builtinStyle.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = document.createElement('div').style;


/***/ },

/***/ 320:
/*!*************************************************!*\
  !*** ./~/boron/~/domkit/insertKeyframesRule.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var insertRule = __webpack_require__(/*! ./insertRule */ 321);
	var vendorPrefix = __webpack_require__(/*! ./getVendorPrefix */ 322)();
	var index = 0;
	
	module.exports = function(keyframes) {
	  // random name
	  var name = 'anim_' + (++index) + (+new Date);
	  var css = "@" + vendorPrefix + "keyframes " + name + " {";
	
	  for (var key in keyframes) {
	    css += key + " {";
	
	    for (var property in keyframes[key]) {
	      var part = ":" + keyframes[key][property] + ";";
	      // We do vendor prefix for every property
	      css += vendorPrefix + property + part;
	      css += property + part;
	    }
	
	    css += "}";
	  }
	
	  css += "}";
	
	  insertRule(css);
	
	  return name
	}


/***/ },

/***/ 321:
/*!****************************************!*\
  !*** ./~/boron/~/domkit/insertRule.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	var extraSheet;
	
	module.exports = function(css) {
	
	  if (!extraSheet) {
	    // First time, create an extra stylesheet for adding rules
	    extraSheet = document.createElement('style');
	    document.getElementsByTagName('head')[0].appendChild(extraSheet);
	    // Keep reference to actual StyleSheet object (`styleSheet` for IE < 9)
	    extraSheet = extraSheet.sheet || extraSheet.styleSheet;
	  }
	
	  var index = (extraSheet.cssRules || extraSheet.rules).length;
	  extraSheet.insertRule(css, index);
	
	  return extraSheet;
	}


/***/ },

/***/ 322:
/*!*********************************************!*\
  !*** ./~/boron/~/domkit/getVendorPrefix.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	var cssVendorPrefix;
	
	module.exports = function() {
	
	  if (cssVendorPrefix) return cssVendorPrefix;
	
	  var styles = window.getComputedStyle(document.documentElement, '');
	  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];
	
	  return cssVendorPrefix = '-' + pre + '-';
	}


/***/ }

})
//# sourceMappingURL=0.8f4104ac5d3dfe1e016e.hot-update.js.map