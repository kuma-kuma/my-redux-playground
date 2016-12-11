import React, {PropTypes} from "react";
import Memo from "./Memo";

const MemoList = ({memos}) => (
	<div>
		{memos.map((memo) =>
			<Memo
				key={memo.id}
				{...memo}
			/>
		)}
	</div>
)

export default MemoList;
