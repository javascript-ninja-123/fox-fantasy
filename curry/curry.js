

const curry = fn => {
  const artisy = fn.length;
  return function f1(...args){
    if(args.length >= artisy){
      return fn(...args);
    }
    else{
      return function f2(...moreArgs){
        const newArgs = [...args, ...moreArgs];
        return f1(...newArgs);
      }
    }
  }
}


module.exports = curry;
