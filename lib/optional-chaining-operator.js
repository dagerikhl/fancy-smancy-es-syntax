"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var nestedStructure, level2Value, _nestedStructure$leve, _nestedStructure$leve2, _nestedStructure$leve3, _level2Value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nestedStructure = {
              level1: {
                nestedInnerLevel: {
                  values: {
                    value: 22
                  }
                }
              }
            };

            try {
              console.log("Accessing level 2...");
              level2Value = nestedStructure.level2.nestedInnerLevel.values.value;
              console.log("Level 2 value:", level2Value);
            } catch (error) {
              console.error("I will crash because of a null reference :O");
              console.error(error);
            }

            try {
              console.log("Accessing level 2 safely...");
              _level2Value = (_nestedStructure$leve = nestedStructure.level2) === null || _nestedStructure$leve === void 0 ? void 0 : (_nestedStructure$leve2 = _nestedStructure$leve.nestedInnerLevel) === null || _nestedStructure$leve2 === void 0 ? void 0 : (_nestedStructure$leve3 = _nestedStructure$leve2.values) === null || _nestedStructure$leve3 === void 0 ? void 0 : _nestedStructure$leve3.value;
              console.log("Level 2 value:", _level2Value);
            } catch (error) {
              console.error("But I will not :D");
              console.error(error);
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

exports.main = main;