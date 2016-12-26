import React from "react";
import DirectoriesContainer from "../containers/DirectoriesContainer";
import ParsedTextContainer from "../containers/ParsedTextContainer";
import MemoContainer from "../containers/MemoContainer";

const App = () => (
	<div>
		<DirectoriesContainer/>
		<MemoContainer/>

		<ParsedTextContainer/>
	</div>
);

export default App
