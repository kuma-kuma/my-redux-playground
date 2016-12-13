import React, {PropTypes} from "react";
import SelectMemoButton from "./SelectMemoButton";


const MemoList = ({memos, onMemoSelect}) => (
	<div>
		{memos.map((memo) =>
			<SelectMemoButton
				key={memo.id}
				{...memo}
				onClick={() => onMemoSelect(memo.id)}
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
	onMemoSelect: PropTypes.func.isRequired,
};

export default MemoList;
