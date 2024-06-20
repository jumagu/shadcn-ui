import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destrucrive</Badge>
      <Badge variant="success">Success</Badge>
      
      {/* custom property textUppercase */}
      <Badge textUppercase variant="info">
        Info
      </Badge>{" "}
    </div>
  );
}
