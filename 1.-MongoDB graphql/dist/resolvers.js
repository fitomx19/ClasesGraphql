"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _sample = require("./sample");

var _Mascotas = require("./Models/Mascotas");

var _Mascotas2 = _interopRequireDefault(_Mascotas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = exports.resolvers = {
    Query: {
        hello: function hello() {
            return 'Hola mundo con GraphQL';
        },
        tasks: function tasks() {
            return _sample.task;
        },
        search: function search(root, args) {
            var result = _sample.task.filter(function (v) {
                return v._id == args._id;
            });
            return result;
        },
        QueryMascotas: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _Mascotas2.default.find();

                            case 2:
                                return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function QueryMascotas() {
                return _ref.apply(this, arguments);
            }

            return QueryMascotas;
        }()
    },
    Mutation: {
        createTask: function createTask(_, _ref2) {
            var input = _ref2.input;

            //console.log(input)
            input._id = _sample.task.length;
            _sample.task.push(input);
            console.log(_sample.task);
            return input;
        },
        createMascotas: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref3) {
                var input = _ref3.input;
                var nuevaMascota;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                nuevaMascota = (0, _Mascotas2.default)(input);
                                _context2.prev = 1;
                                _context2.next = 4;
                                return nuevaMascota.save();

                            case 4:
                                console.log(nuevaMascota);
                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2["catch"](1);

                                console.log(_context2.t0);

                            case 10:
                                return _context2.abrupt("return", nuevaMascota);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 7]]);
            }));

            function createMascotas(_x, _x2) {
                return _ref4.apply(this, arguments);
            }

            return createMascotas;
        }(),
        updateMascotas: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref5) {
                var _id = _ref5._id,
                    input = _ref5.input;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _Mascotas2.default.findByIdAndUpdate(_id, input, { new: true });

                            case 2:
                                return _context3.abrupt("return", _context3.sent);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function updateMascotas(_x3, _x4) {
                return _ref6.apply(this, arguments);
            }

            return updateMascotas;
        }(),
        deleteMascotas: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref7) {
                var _id = _ref7._id;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _Mascotas2.default.findByIdAndDelete(_id);

                            case 2:
                                return _context4.abrupt("return", _context4.sent);

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function deleteMascotas(_x5, _x6) {
                return _ref8.apply(this, arguments);
            }

            return deleteMascotas;
        }()
    }
};
//# sourceMappingURL=resolvers.js.map