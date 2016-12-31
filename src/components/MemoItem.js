import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {displayMemo} from "../actions/actions";

const MemoItem = ({item, dispatch}) => (
	<div onClick={e => {
		e.preventDefault();
		dispatch(displayMemo(item.id));
	}}>
		<p>{item.title}</p>
	</div>
);

export default connect()(MemoItem);