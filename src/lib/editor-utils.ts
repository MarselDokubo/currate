import { EditorCanvasCardType } from "./types";

import { DragEvent } from "react";

export const onDragStart = (
  event: DragEvent<HTMLElement>,
  nodeType: EditorCanvasCardType["type"],
) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};
