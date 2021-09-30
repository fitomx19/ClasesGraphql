"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = undefined;

var connect = exports.connect = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _mongoose2.default.connect("mongodb+srv://root:tool@cluster0.kmxmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
                            useNewUrlParser: true, useUnifiedTopology: true
                        });

                    case 3:
                        console.log("Base de datos funcionando =>");
                        console.log(process.env.DB_URL);
                        _context.next = 11;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);

                        console.log(_context.t0);
                        console.log("No conecta ala base de datos :c");

                    case 11:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function connect() {
        return _ref.apply(this, arguments);
    };
}();

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=database.js.map