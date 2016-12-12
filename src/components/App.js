import React from "react";
import MemoListContainer from "../containers/MemoListContainer";
import ParsedTextContainer from "../containers/ParsedTextContainer";
import MemoContainer from "../containers/MemoContainer";

const App = () => (
	<div>
		<MemoListContainer/>
		<MemoContainer/>

		<ParsedTextContainer/>
	</div>
);

export default App
