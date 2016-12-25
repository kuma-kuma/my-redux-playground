import React from "react";
import Directory from "./Directory";

const Directories = ({containsOfDirectory}) => (
	<div>
		{containsOfDirectory.map((contains, index) =>
			<Directory
				key={index}
				{...contains}
			/>
		)}
	</div>
);

export default Directories;