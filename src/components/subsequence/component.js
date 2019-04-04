import React from 'react';
import PropTypes from 'prop-types';
import Declarations from '../declarations';
import * as C from '../../utils/constants';
import { declarationsPropTypes } from '../../utils/prop-types';
import { buildStyleObject } from '../../utils/string-utils';
import './subsequence.scss';

const Subsequence = ({ id, label, declarations, style }) => (
	<React.Fragment>
		<Declarations
			id={id}
			type={C.BEFORE_QUESTION_TEXT}
			declarations={declarations}
		/>
		<div
			aria-label={`subsequence-${id}`}
			className="subsequence-lunatic"
			style={buildStyleObject(style)}
		>
			{label}
		</div>
		<Declarations
			id={id}
			type={C.AFTER_QUESTION_TEXT}
			declarations={declarations}
		/>
		<Declarations id={id} type={C.DETACHABLE} declarations={declarations} />
	</React.Fragment>
);

Subsequence.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	declarations: declarationsPropTypes,
	style: PropTypes.object,
};

Subsequence.defaultProps = {
	declarations: [],
	style: {},
};

export default Subsequence;