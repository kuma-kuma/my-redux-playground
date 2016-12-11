import React, {PropTypes} from "react";

const ParsedText = (text) => (
	<div>
		<p>{text}</p>
	</div>
);

ParsedText.PropTypes = {
	text: PropTypes.string.isRequired
};
export default  ParsedText
