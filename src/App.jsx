import { useState } from "react";
import { Button } from "@hdcmv/ui-button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@hdcmv/ui-dialog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center min-h-screen py-2">
        <Button>Hello there</Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
            <div>
              <p>Children goes here</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default App;
