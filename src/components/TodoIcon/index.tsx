import React from "react";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { Todo } from "../../redux/model";
import { Badge } from "@material-ui/core";
import { useStyles } from "./styles";

export function TodoIcon(props: { todoList: Todo[] }) {
	let uncompletedTodos = props.todoList.filter((t) => t.completed === false);
	const classes = useStyles();

	if (uncompletedTodos.length > 0) {
		return (
			<Badge color="secondary" badgeContent={uncompletedTodos.length}>
				<FormatListNumberedIcon className={classes.button} />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}
