import React, {PropTypes} from "react";

const Memo = ({text, title}) => (
	<div>
		<textarea>{title}</textarea>
		<textarea>{text}</textarea>
	</div>
)

Memo.propTypes = {
	text: PropTypes.string.isRequired
}

export default Memo;