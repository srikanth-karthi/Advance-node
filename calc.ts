function logger( target: any,key:any, descriptor:any) {
    console.log('target',target);
    console.log('key',key);
    console.log('descriptor',descriptor);
    const originalMethod = target[key];
    // console.log(descriptor.value)
    descriptor.value = function(...args:any) {
        // console.log(`Calling ${key} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        // console.log(`${key} returned: ${result}`);
        return result;
    };
    return descriptor;
}

class Calculator {
    @logger
    add(args:any) {
        return args.reduce((a, b) => a + b, 0);
    }
}

const calculator = new Calculator();
console.log(calculator.add([2, 3]));
console.log(calculator.add([2, 3,6]));