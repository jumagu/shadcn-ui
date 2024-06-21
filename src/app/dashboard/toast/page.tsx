"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function ToastPage() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col flex-wrap sm:flex-row gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast with Title
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast with Action
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast Destructive
      </Button>
      
      <Button
        variant="success"
        onClick={() => {
          toast({
            variant: "success",
            title: "Success!",
            description: "Your message has been sent.",
            action: <ToastAction altText="Undo">Undo</ToastAction>,
          });
        }}
      >
        Show Toast Success
      </Button>
    </div>
  );
}
