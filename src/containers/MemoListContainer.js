import React from "react";
import {connect} from "react-redux";
import MemoList from "../components/MemoList";

const mapStateToProps = state => {
	return state
}

const MemoListContainer = connect(
	mapStateToProps
)(MemoList)

export default MemoListContainer
