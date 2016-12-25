import {connect} from "react-redux";
import Directories from "../../src/components/Directories";
import _ from "lodash";

const mapStateToProps = state => {

	const separatedLocation = _.compact(state.location.split('/'));
	let containsOfDirectory = [makeContain(rootDirectoryItems(state), rootMemoItems(state))];
	separatedLocation.forEach((id) => {
		containsOfDirectory.push(makeContain(
			directoryItems(id, state),
			memoItems(id, state)
		));
	});
	return {
		containsOfDirectory: containsOfDirectory,
	}
};

function rootDirectoryItems(state) {
	return state.directories.filter(d =>
		d.path.match(/^\/\d+\/$/)
	)
}

function rootMemoItems(state) {
	return state.directories.filter(d =>
		d.path.match(/^\/\d+$/)
	)
}

function makeContain(directoryItems, memoItems) {
	return {
		directoryItems: directoryItems,
		memoItems: memoItems,
	}
}

function directoryItems(id, state) {
	const rgx = new RegExp('/' + id + '/\\d+/$');
	return state.directories.filter(d =>
		d.path.match(rgx)
	)
}

function memoItems(id, state) {
	const rgx = new RegExp('/' + id + '/\\d+$');
	return state.memos.filter(m =>
		m.path.match(rgx)
	)
}

const DirectoriesContainer = connect(mapStateToProps)(Directories);

export default DirectoriesContainer;