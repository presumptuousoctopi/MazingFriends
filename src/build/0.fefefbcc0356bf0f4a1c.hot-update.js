webpackHotUpdate(0,{

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _reactRouter = __webpack_require__(189);
	
	var _Controls = __webpack_require__(277);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	
	    _this.state = {
	      view: 'Home',
	      join: 'vanish',
	      new: 'vanish',
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
	    _this.joinRoomButton = _this.joinRoomButton.bind(_this);
	    _this.newButtonClick = _this.newButtonClick.bind(_this);
	    _this.joinButtonClick = _this.joinButtonClick.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.on('roomJoinError', function (message) {
	        _reactRouter.browserHistory.push({
	          pathname: '/home'
	        });
	        // context.setState({
	        //   view: 'Home'
	        // });
	        alert(message);
	      });
	    }
	  }, {
	    key: 'createRoomButton',
	    value: function createRoomButton() {
	      window.socket.emit('createRoom', this.state.createRoomName);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'joinRoomButton',
	    value: function joinRoomButton() {
	      window.socket.emit('joinRoom', this.state.joinRoomName);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'newButtonClick',
	    value: function newButtonClick() {
	      this.setState({
	        new: 'NewView'
	      });
	    }
	  }, {
	    key: 'joinButtonClick',
	    value: function joinButtonClick() {
	      this.setState({
	        join: 'JoinView'
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'NewGame' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create New Game'
	        ),
	        _react2.default.createElement(
	          'form',
	          null,
	          'Room Name: ',
	          _react2.default.createElement('input', { type: 'text' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Level:',
	          _react2.default.createElement(
	            'div',
	            { className: 'btn-group', 'data-toggle': 'buttons' },
	            _react2.default.createElement(
	              'label',
	              { className: 'btn btn-default active' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option1', autocomplete: 'off', checked: true }),
	              ' Radio 1 (preselected)'
	            ),
	            _react2.default.createElement(
	              'label',
	              { className: 'btn btn-default' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option2', autocomplete: 'off' }),
	              ' Radio 2'
	            ),
	            _react2.default.createElement(
	              'label',
	              { className: 'btn btn-default' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option3', autocomplete: 'off' }),
	              ' Radio 3'
	            )
	          ),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Invite ',
	          _react2.default.createElement('input', { type: 'text', placeholder: 'optional' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'button',
	            null,
	            'Create Game'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	/*
	      <div classNameName={this.state.view}>
	        <div className="NewView">
	          <button className="homeButtons" onClick={this.newButtonClick}>New Game</button>
	          <div className={this.state.new}>
	          Room Name:
	          <input onChange={this.handleChange} name="createRoomName"></input>
	          <Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Room</button></Link>
	          </div>
	        </div>
	        <div className="JoinView">
	          <button className="homeButtons" onClick={this.joinButtonClick}>Join Game</button>
	          <div className={this.state.join}>
	          Room Name:
	          <input onChange={this.handleChange} name="joinRoomName"></input>
	        <Link to="/game"><button className="Play" onClick={this.joinRoomButton}>Join Room</button></Link>
	          </div>
	          <br/>
	        </div>
	      </div>
	*/
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwidmlldyIsImpvaW4iLCJuZXciLCJjcmVhdGVSb29tTmFtZSIsImpvaW5Sb29tTmFtZSIsImNvbnRyb2xzVmlldyIsImNyZWF0ZVJvb21CdXR0b24iLCJiaW5kIiwiam9pblJvb21CdXR0b24iLCJuZXdCdXR0b25DbGljayIsImpvaW5CdXR0b25DbGljayIsImhhbmRsZUNoYW5nZSIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsIndpbmRvdyIsImVtaXQiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQU0sTUFETTtBQUVaQyxhQUFNLFFBRk07QUFHWkMsWUFBSyxRQUhPO0FBSVRDLHVCQUFnQixFQUpQO0FBS1RDLHFCQUFjLEVBTEw7QUFNVEMscUJBQWM7QUFOTCxNQUFiO0FBUUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFdBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLE9BQXZCO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixPQUFwQjtBQWRXO0FBZWI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlLLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0E7QUFDQTtBQUNBO0FBQ0FDLGVBQU1ILE9BQU47QUFDRCxRQVJEO0FBU0Q7Ozt3Q0FDaUI7QUFDaEJJLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixZQUFuQixFQUFpQyxLQUFLckIsS0FBTCxDQUFXSSxjQUE1QztBQUNGLFlBQUtrQixRQUFMLENBQWM7QUFDYnJCLGVBQU07QUFETyxRQUFkO0FBR0E7OztzQ0FFaUI7QUFDZm1CLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixVQUFuQixFQUErQixLQUFLckIsS0FBTCxDQUFXSyxZQUExQztBQUNBLFlBQUtpQixRQUFMLENBQWM7QUFDWnJCLGVBQU07QUFETSxRQUFkO0FBR0Q7OztzQ0FFZTtBQUNoQixZQUFLcUIsUUFBTCxDQUFjO0FBQ2JuQixjQUFLO0FBRFEsUUFBZDtBQUdBOzs7dUNBRWlCO0FBQ2pCLFlBQUttQixRQUFMLENBQWM7QUFDYnBCLGVBQU07QUFETyxRQUFkO0FBR0E7OztrQ0FFYXFCLEMsRUFBRztBQUNkLFlBQUtELFFBQUwscUJBQ0dDLEVBQUVDLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkYsRUFBRUMsTUFBRixDQUFTRSxLQUQ1QjtBQUdBQyxlQUFRQyxHQUFSLENBQVksS0FBSzVCLEtBQWpCO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFDYSxvREFBTyxNQUFLLE1BQVosR0FEYjtBQUFBO0FBQ2tDLG9EQURsQztBQUFBO0FBR0U7QUFBQTtBQUFBLGVBQUssV0FBVSxXQUFmLEVBQTJCLGVBQVksU0FBdkM7QUFDRTtBQUFBO0FBQUEsaUJBQU8sV0FBVSx3QkFBakI7QUFDRSx3REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxTQUF6QixFQUFtQyxJQUFHLFNBQXRDLEVBQWdELGNBQWEsS0FBN0QsRUFBbUUsYUFBbkUsR0FERjtBQUFBO0FBQUEsY0FERjtBQUlFO0FBQUE7QUFBQSxpQkFBTyxXQUFVLGlCQUFqQjtBQUNFLHdEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFNBQXpCLEVBQW1DLElBQUcsU0FBdEMsRUFBZ0QsY0FBYSxLQUE3RCxHQURGO0FBQUE7QUFBQSxjQUpGO0FBT0U7QUFBQTtBQUFBLGlCQUFPLFdBQVUsaUJBQWpCO0FBQ0Usd0RBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssU0FBekIsRUFBbUMsSUFBRyxTQUF0QyxFQUFnRCxjQUFhLEtBQTdELEdBREY7QUFBQTtBQUFBO0FBUEYsWUFIRjtBQUFBO0FBYVMsb0RBYlQ7QUFBQTtBQWNTLG9EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CLEdBZFQ7QUFBQTtBQWNzRCxvREFkdEQ7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFGRixRQURGO0FBc0JEOzs7O0dBdEZnQixnQkFBTTZCLFM7O0FBeUZ6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFzQmU5QixJIiwiZmlsZSI6IjAuZmVmZWZiY2MwMzU2YmYwZjRhMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi8uLi9HYW1lL0NvbnRyb2xzLmpzeCdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmlldzogJ0hvbWUnLFxuXHRcdFx0am9pbjogJ3ZhbmlzaCcsXG5cdFx0XHRuZXc6ICd2YW5pc2gnLFxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2Vcblx0XHR9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuam9pbkJ1dHRvbkNsaWNrID0gdGhpcy5qb2luQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgLy8gICB2aWV3OiAnSG9tZSdcbiAgICAgIC8vIH0pO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZpZXc6ICd2YW5pc2gnXG5cdFx0fSlcblx0fVxuXG4gIGpvaW5Sb29tQnV0dG9uKCkge1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3OiAndmFuaXNoJ1xuICAgIH0pXG4gIH1cblxuXHRuZXdCdXR0b25DbGljaygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG5ldzogJ05ld1ZpZXcnXG5cdFx0fSlcblx0fVxuXG5cdGpvaW5CdXR0b25DbGljaygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGpvaW46ICdKb2luVmlldydcblx0XHR9KVxuXHR9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdHYW1lXCI+XG4gICAgICAgIDxoMz5DcmVhdGUgTmV3IEdhbWU8L2gzPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICBSb29tIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiLz4gPGJyLz5cbiAgICAgICAgICBMZXZlbDpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25zXCIgaWQ9XCJvcHRpb24xXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZC8+IFJhZGlvIDEgKHByZXNlbGVjdGVkKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25zXCIgaWQ9XCJvcHRpb24yXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIvPiBSYWRpbyAyXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiBpZD1cIm9wdGlvbjNcIiBhdXRvY29tcGxldGU9XCJvZmZcIi8+IFJhZGlvIDNcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+IDxici8+XG4gICAgICAgICAgSW52aXRlIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3B0aW9uYWxcIiAvPiA8YnIvPlxuICAgICAgICAgIDxidXR0b24+Q3JlYXRlIEdhbWU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vKlxuICAgICAgPGRpdiBjbGFzc05hbWVOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld1ZpZXdcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCIgb25DbGljaz17dGhpcy5uZXdCdXR0b25DbGlja30+TmV3IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxuICAgICAgICAgIFJvb20gTmFtZTpcbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBSb29tPC9idXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLmpvaW5CdXR0b25DbGlja30+Sm9pbiBHYW1lPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuam9pbn0+XG4gICAgICAgICAgUm9vbSBOYW1lOlxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJqb2luUm9vbU5hbWVcIj48L2lucHV0PlxuICAgICAgICA8TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbn0+Sm9pbiBSb29tPC9idXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxici8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=