import React, {PropTypes} from "react";

const Memo = ({text, title, displayMemoId, onMemoChange}) => (
	<div>
		<textarea value={title}> </textarea>
		<textarea
			onChange={e => {
				onMemoChange(displayMemoId, e.target.value)
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
	onMemoChange: PropTypes.func.isRequired,
};

export default Memo;