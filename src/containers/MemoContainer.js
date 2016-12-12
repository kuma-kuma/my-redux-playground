import {connect} from "react-redux";
import {modifyText, NON_DISPLAYED_MEMO} from "../actions/actions";
import Memo from "../components/Memo";

const mapStateToProps = state => {
	switch (state.displayedMemoId) {
		case NON_DISPLAYED_MEMO:
			return {};
		default:
			return state;
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onChangeMemo: (id, text) => dispatch(modifyText(id, text))
	}
};

const MemoContainer = connect(mapStateToProps, mapDispatchToProps)(Memo);

export default MemoContainer;
