function sum() {
  let args = Array.prototype.slice.call(arguments);

  return args.reduce((sum, num) => sum + num, 0);
}

Object.prototype.myBind = function() {
  let bindtimeArgs = [].slice.call(arguments);
  let ctx = bindtimeArgs.shift();
  self = this;

  return () => {
    let runtimeArgs = [].slice.call(arguments);
    self.apply(ctx, bindtimeArgs + runtimeArgs);
  }
}

function curriedSum(nums) {
  let sum = 0;

  let curryFunction = function(num) {
    sum += num;
    nums--;

    if (nums > 0)
      return curryFunction;
    else if (nums === 0)
      return sum;
    else
      return undefined;
  };

  return curryFunction;
}
