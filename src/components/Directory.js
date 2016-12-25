import React, {PropTypes} from "react";
import DirectoryItem from "./DirectoryItem";
import MemoItem from "./MemoItem";

const Directory = ({directoryItems, memoItems}) => (
	<div>
		<div>
			{directoryItems.map((directory) =>
				<DirectoryItem
					key={directory.id}
					{...directory}
				/>
			)}
		</div>
		<div>
			{memoItems.map((memo) =>
				<MemoItem
					key={memo.id}
					{...memo}
				/>
			)}
		</div>
	</div>
);

export default Directory;
