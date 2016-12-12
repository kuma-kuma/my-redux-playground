import {connect} from "react-redux";
import ParsedText from "../components/ParsedText";
import {NON_DISPLAYED_MEMO} from "../actions/actions";

const marked = require('marked');

const mapStateToProps = (state) => {
	switch (state.displayedMemoId) {
		case NON_DISPLAYED_MEMO:
			return {text: ''};
		default:
			return {text: parseMarkDown(state.memos[state.displayedMemoId].text)}
	}
};

const parseMarkDown = (text) => {
	return marked(text)
};

const ParsedTextContainer = connect(mapStateToProps)(ParsedText);

export default ParsedTextContainer
