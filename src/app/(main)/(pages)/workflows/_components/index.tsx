import React from "react";
import WorkflowButton from "./workflow-button";
import { Button } from "~/components/ui/button";
import Workflow from "./workflow";

const Workflows = async () => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <Workflow
          description={"Description of workflow"}
          name="Automation Builder"
          id="567654"
          publish={true}
        />
        <div className="mt-56 flex text-muted-foreground items-center justify-center">
          <Button
            asChild
            variant={"outline"}
            className="py-6 pl-3 pr-1 max-w-max"
          >
            <div className="flex justify-between">
              <span>Create a new Workflow</span>
              <WorkflowButton />
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Workflows;
