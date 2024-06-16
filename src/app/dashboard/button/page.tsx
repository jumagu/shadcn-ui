import {
  ReloadIcon,
  PaperPlaneIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Button>Deafult</Button>
      <Button variant="destructive">Desctructive</Button>
      <Button variant="success">Success</Button> {/* Custom */}
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" size="icon">
        <PaperPlaneIcon />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
