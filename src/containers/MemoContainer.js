import React from "react";
import {connect} from "react-redux";
import {modifyText} from "../actions/actions";
import Memo from "../components/Memo";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (text, id) => {
			dispatch(modifyText(text, id))
		}

	}
};

const MemoContainer = connect(mapStateToProps, mapDispatchToProps)(Memo);

export default MemoContainer;