import { useReducer, useEffect, useCallback } from 'react';
import INITIAL_STATE from './initial-state';
import * as actions from './actions';
import reducer from './reducer';
import { loadSuggester } from './commons';
import { useComponentsFromState, getPageTag, isFirstLastPage } from './commons';

function useLunatic({ source, data, initialPage, features }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { pager, executeExpression, waiting } = state;
	const components = useComponentsFromState(state);
	const { suggesters } = source;

	useEffect(
		function () {
			async function doIt() {
				if (suggesters) {
					dispatch(actions.onSetWaiting(true));
					const status = await loadSuggester(suggesters);
					dispatch(actions.onSetWaiting(false));
				}
			}
			doIt();
		},
		[suggesters]
	);

	useEffect(
		function () {
			dispatch(actions.onInit({ source, data, initialPage, features }));
		},
		[source, data, initialPage, features]
	);

	const goNextPage = useCallback(
		function () {
			dispatch(actions.goNextPage());
		},
		[dispatch]
	);

	const goPreviousPage = useCallback(
		function () {
			dispatch(actions.goPreviousPage());
		},
		[dispatch]
	);

	const getComponents = useCallback(
		function () {
			return components;
		},
		[components]
	);
	const handleChange = useCallback(
		function (response, value, args) {
			dispatch(actions.handleChange(response, value, args));
		},
		[dispatch]
	);

	const pageTag = getPageTag(pager);
	const { isFirstPage, isLastPage } = isFirstLastPage(pager);

	return {
		getComponents,
		handleChange,
		goNextPage,
		goPreviousPage,
		executeExpression,
		pageTag,
		isFirstPage,
		isLastPage,
		pager,
		waiting,
	};
}

export default useLunatic;