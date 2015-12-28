'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _AppHandler = require('./components/AppHandler');

var _AppHandler2 = _interopRequireDefault(_AppHandler);

var _home = require('./components/sections/home');

var _home2 = _interopRequireDefault(_home);

var _aboutus = require('./components/sections/aboutus');

var _aboutus2 = _interopRequireDefault(_aboutus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  null,
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _AppHandler2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _aboutus2.default })
  )
);