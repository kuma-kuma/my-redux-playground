import React from "react";
import {changeLocation} from "../actions/actions";

const DirectoryItem = ({item, dispatch}) => (
	<div onClick={e => {
		e.preventDefault();
		dispatch(changeLocation(item.path));
	}}>
		<p>{item.title}</p>
	</div>
);

export default DirectoryItem;