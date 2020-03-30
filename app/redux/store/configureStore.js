import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import {IS_DEBUG} from '../../config/settings';

const middleware = [ReduxThunk];

if (__DEV__ && IS_DEBUG().enableLogger) {
  const logger = createLogger({
    predicate: (getState, action) => __DEV__,
  });
  middleware.push(logger);
}

const createRNReduxStore = applyMiddleware(...middleware)(createStore);

const store = createRNReduxStore(rootReducer);

// store.dispatch();

export default store;
