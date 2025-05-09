export function Emoji() {
  return function (target: Object, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      return val;
    };
    const setter = next => {
      // console.log('updating flavor...');
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function NewClass(): ClassDecorator {
  return function (target: Function) {
    const original = target;
    // a utility function to generate instances of a class
    function construct(constructor: Function, args: any[]) {
      const c: any = function () {
        return constructor.apply(this, args);
      };
      c.prototype = constructor.prototype;
      return new c();
    }

    // the new constructor behaviour
    const newConstructor: any = function (...args: any[]) {
      // console.log("New: " + original.name);
      return construct(original, args);
    };

    // copy prototype so intanceof operator still works
    newConstructor.prototype = original.prototype;

    // return new constructor (will override original)
    return newConstructor;
  };
}
