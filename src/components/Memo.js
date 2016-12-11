import React, {PropTypes} from "react";

const Memo = ({text, title, onChange, id}) => (
	<div>
		<textarea>{title}</textarea>
		<textarea
			onChange={e => {
				e.preventDefault()
				onChange(e.target.value, id)
			}}
		>

			{text}

		</textarea>
	</div>
);

Memo.propTypes = {
	text: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
};

export default Memo;