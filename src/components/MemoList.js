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

export default MemoList;
