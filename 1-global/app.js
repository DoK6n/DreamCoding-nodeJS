console.log(global);

global.hello = () => {
  console.log('hello');
	global.console.log('global hello');
};

global.hello();
hello();