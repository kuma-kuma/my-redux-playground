import React, {PropTypes} from "react";

const SelectMemoButton = ({title, onClick}) => (
	<div>
		<button onClick={onClick}>{title}</button>
	</div>
);


SelectMemoButton.PropTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default SelectMemoButton;