

const makeLogger = source => msg => {

  const logMessage = '### ' + source + ' ### ' + msg;
  console.log(logMessage);
};

const defaultLogger = makeLogger('ScoScore');

export default defaultLogger;
