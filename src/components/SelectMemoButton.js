import React, {PropTypes} from "react";

const SelectMemoButton = ({title, onSelectButtonClick}) => (
	<div>
		<button onClick={onSelectButtonClick}>{title}</button>
	</div>
);


SelectMemoButton.PropTypes = {
	title: PropTypes.string.isRequired,
	onSelectButtonClick: PropTypes.func.isRequired,
};

export default SelectMemoButton;