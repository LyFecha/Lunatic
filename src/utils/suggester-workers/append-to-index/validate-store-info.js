function validateStoreName(storeInfo, errors) {
	const { name } = storeInfo;
	if (!name || typeof name !== 'string') {
		return [...errors, 'StoreInfo.name est manquant ou du mauvais type.'];
	}
	return errors;
}

function validateStoreFields(storeInfo, errors) {
	const { fields } = storeInfo;
	// if (!fields || !Array.isArray(fields)) {
	// 	throw new Error('StoreInfo.fields est manquant ou du mauvais type.');
	// }

	return errors;
}

function compose(...validate) {
	return validate.reverse().reduce(
		(a, b) =>
			(storeInfo, errors = []) =>
				a(storeInfo, b(storeInfo, errors)),
		(_, e) => e
	);
}

function validateStoreInfo(storeInfo) {
	if (!storeInfo || typeof storeInfo !== 'object') {
		throw new Error("StoreInfo est manquant ou n'est pas de type object.");
	}
	const errors = compose(validateStoreName, validateStoreFields)(storeInfo);
	console.log(errors);
	// validateStoreName(storeInfo);
	// validateStoreFields(storeInfo);
	if (errors.length) {
		console.errors(errors);
		throw new Error('storeInfo invalide', errors);
	}
}

export default validateStoreInfo;
