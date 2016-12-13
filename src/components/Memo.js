import React, {PropTypes} from "react";

const Memo = ({text, title, displayMemoId, onChange}) => (
	<div>
		<textarea value={title}> </textarea>
		<textarea
			onChange={e => {
				onChange(displayMemoId, e.target.value)
			}}
			value={text}
		>
		</textarea>
	</div>
);

Memo.propTypes = {
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	displayMemoId: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Memo;