import {IS_DEBUG} from '../config/settings';

const consoleLog = (log) => {
  if (__DEV__ && IS_DEBUG().enableConsoleLog) {
    console.log(log);
  }
};

export {consoleLog};
