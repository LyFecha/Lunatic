import React, { useState } from 'react';
import * as lunatic from 'components';
import * as utils from 'utils/to-expose';

const OrchestratorForStories = ({ source, management, ...props }) => {
	const savingType = management ? 'EDITED' : 'COLLECTED';
	const preferences = management
		? ['COLLECTED', 'FORCED', 'EDITED']
		: ['COLLECTED'];
	const [questionnaire, setQuestionnaire] = useState(
		utils.mergeQuestionnaireAndData(source)({})
	);

	const onChange = (updatedValue) => {
		setQuestionnaire(
			utils.updateQuestionnaire(savingType)(questionnaire)(preferences)(
				updatedValue
			)
		);
	};

	const components = questionnaire.components.map((q) => {
		const { id, componentType } = q;
		const Component = lunatic[componentType];
		return (
			<div className="lunatic-input" key={`component-${id}`}>
				<Component
					{...q}
					handleChange={onChange}
					labelPosition="TOP"
					preferences={preferences}
					management={management}
					{...props}
				/>
			</div>
		);
	});
	return <div className="lunatic-forms">{components}</div>;
};

export default OrchestratorForStories;
