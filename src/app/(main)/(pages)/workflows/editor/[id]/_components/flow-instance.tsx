"use client";
import { ReactNode } from "react";
import { Button } from "~/components/ui/button";
//import { EditorNodeType } from "~/lib/types";
//import { Edge } from "@xyflow/react";

//type Props = {
//  children: ReactNode;
//  edges: Edge[];
//  nodes: EditorNodeType[];
//};

const FlowInstance = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button>Save</Button>
        <Button>Publish</Button>
      </div>
      {children}
    </div>
  );
};

export default FlowInstance;
