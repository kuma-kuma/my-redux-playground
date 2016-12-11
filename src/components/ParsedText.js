import React, {PropTypes} from "react";

const ParsedText = ({text}) => (
	<div dangerouslySetInnerHTML={{__html: text}}>

	</div>
);

ParsedText.PropTypes = {
	text: PropTypes.string.isRequired
};
export default  ParsedText
