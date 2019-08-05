import 'regenerator-runtime/runtime'
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import mainSagas from './sagas/mainSagas';
import reducers from './reducers';
import MainContainer from './containers/MainContainer/MainContainer';

const App = () => {
	const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), devTools));
	sagaMiddleware.run(mainSagas);

	return (
		<Provider store={store}>
			<MainContainer />
		</Provider>
	);
};

export default App;
