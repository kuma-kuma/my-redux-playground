import React from "react";
import {connect} from "react-redux";
import MemoList from "../components/MemoList";
import {displayMemo} from "../actions/actions";

const mapStateToProps = state => {
	return state
};

const mapDispatchToProps = dispatch => {
	return {
		onMemoClick: (id) => {
			dispatch(displayMemo(id));
		}
	}
}

const MemoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MemoList);

export default MemoListContainer
