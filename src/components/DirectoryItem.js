import React from "react";
import {changeLocation} from "../actions/actions";
import {connect} from "react-redux";

const DirectoryItem = ({item, dispatch}) => (
	<div onClick={e => {
		e.preventDefault();
		dispatch(changeLocation(item.path));
	}}>
		<p>{item.title}</p>
	</div>
);

export default connect()(DirectoryItem);