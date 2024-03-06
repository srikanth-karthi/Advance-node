var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(target, key, descriptor) {
    console.log('target', target);
    console.log('key', key);
    console.log('descriptor', descriptor);
    var originalMethod = target[key];
    // console.log(descriptor.value)
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // console.log(`Calling ${key} with arguments: ${args}`);
        var result = originalMethod.apply(this, args);
        // console.log(`${key} returned: ${result}`);
        return result;
    };
    return descriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (args) {
        return args.reduce(function (a, b) { return a + b; }, 0);
    };
    __decorate([
        logger
    ], Calculator.prototype, "add", null);
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add([2, 3])); // Outputs logging information and then 5
console.log(calculator.add([2, 3, 6]));
