"use client";
import CustomModal from "~/app/_components/custom-modal";
import { Button } from "~/components/ui/button";
import { useModal } from "~/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";
import WorkflowForm from "~/app/_components/workflow-form";

const WorkflowButton = () => {
  const { setOpen } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>,
    );
  };

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
