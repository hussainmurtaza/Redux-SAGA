import {createStore, applyMiddleware} from 'redux';
import createSagamiddleware from 'redux-saga';
import RootReducer from './Redux/RootReducer';

const sagaMiddleware = createSagamiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;