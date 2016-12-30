import React from "react";
import {connect} from "react-redux";
import DirectoryItem from "../components/DirectoryItem";

const DirectoryItemContainer = connect()(DirectoryItem);

export default DirectoryItemContainer;