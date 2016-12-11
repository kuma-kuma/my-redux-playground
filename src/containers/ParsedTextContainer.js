import React from "react";
import {connect} from "react-redux";
import ParsedText from "../components/ParsedText";

const marked = require('marked');

const mapStateToProps = (state, id) => {
	return parseMarkDown(state.memos[id].text)
};

const parseMarkDown = (text) => {
	return marked(text)
};

const ParsedTextContainer = connect(mapStateToProps)(ParsedText);

export default ParsedTextContainer
