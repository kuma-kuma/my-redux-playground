import React, {PropTypes} from "react";
import MemoContainer from "../containers/MemoContainer";


const MemoList = ({memos}) => (
	<div>
		{memos.map((memo) =>
			<MemoContainer
				key={memo.id}
				{...memo}
			/>
		)}
	</div>
);

MemoList.propTypes = {
	memos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onMemoClick: PropTypes.func.isRequired
}

export default MemoList;
