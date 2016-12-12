import {connect} from "react-redux";
import MemoList from "../components/MemoList";
import {displayMemo, modifyText} from "../actions/actions";

const mapStateToProps = state => {
	return state
};

const mapDispatchToProps = dispatch => {
	return {
		onMemoClick: (id) => {
			dispatch(displayMemo(id));
		},
		onMemoChange: (id, text) => {
			dispatch(modifyText(id, text))
		}
	}
};

const MemoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MemoList);

export default MemoListContainer
