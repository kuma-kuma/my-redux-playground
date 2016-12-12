import React, {PropTypes} from "react";

const Memo = ({text, title, id, onChange}) => (
	<div>
		<textarea>{title}</textarea>
		<textarea onChange={e => {
			onChange(e.target.value)
		}}>
			{text}
		</textarea>
	</div>
);

Memo.propTypes = {
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Memo;