"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

var _routes = require("../shared/routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// import Router from "react-router";

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // let content = renderToString(<RoutingContext {...renderProps} />);
      // res.render('index', { content: content });
      res.status(200).send((0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps)));
    } else {
      res.status(404).send('Not found');
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});