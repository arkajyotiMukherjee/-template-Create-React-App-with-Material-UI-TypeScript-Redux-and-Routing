import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";

export function Loader() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress className={classes.spinner} />;
		</div>
	);
}
