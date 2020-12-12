"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HelloWorld = void 0;

var _react = _interopRequireDefault(require("react"));

require("./hello_world.css");

var _useActiveToggle = _interopRequireDefault(require("./use-active-toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorld = function HelloWorld(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "myColor"
  }, "Hello, ", name ? name : 'World', "!!"));
};

exports.HelloWorld = HelloWorld;
var _default = _useActiveToggle.default;
exports.default = _default;