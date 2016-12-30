import React, {PropTypes} from "react";
import DirectoryItem from "../containers/DirectoryItemContainer";
import MemoItem from "./MemoItem";

const Directory = ({directoryItems, memoItems}) => (
	<div>
		<div>
			{directoryItems.map((directory) =>
				<DirectoryItem
					key={directory.id}
					item={directory}
				/>
			)}
		</div>
		<div>
			{memoItems.map((memo) =>
				<MemoItem
					key={memo.id}
					item={memo}
				/>
			)}
		</div>
	</div>
);

Directory.propTypes = {
	directoryItems: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired
	}).isRequired).isRequired,

	memoItems: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired
	}).isRequired).isRequired,
};

export default Directory;

