import React, {PropTypes} from "react";
import SelectMemoButton from "./SelectMemoButton";
import Memo from "./Memo";


const MemoList = ({memos, onMemoClick, onMemoChange}) => (
	<div>
		{memos.map((memo) => [
			<Memo
				key={memo.id}
				{...memo}
				onChange={(text) => onMemoChange(memo.id, text)}
			/>,
			<SelectMemoButton
				{...memo}
				onClick={() => onMemoClick(memo.id)}
			/>

		])}
	</div>
);

MemoList.propTypes = {
	memos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onMemoClick: PropTypes.func.isRequired,
	onMemoChangeClick: PropTypes.func.isRequired
};

export default MemoList;
