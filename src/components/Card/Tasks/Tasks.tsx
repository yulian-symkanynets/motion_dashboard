import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import Task from "./Task";

function Tasks() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const tasks = [
    "Buy groceries",
    "Finish dashboard UI",
    "Review PR",
    "Learn Tailwind grid",
    "Fix checkbox design",
    "Plan weekend",
    "Work on AI coach",
  ];

  return (
    <div className="h-64 overflow-y-auto overscroll-contain pr-2 space-y-2">
      {tasks.map((task, index) => (
        <Task key={index} title={task} />
      ))}
    </div>
  );
}

export default Tasks;
