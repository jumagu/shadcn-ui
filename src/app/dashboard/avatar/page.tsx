import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>JG</AvatarFallback>
      </Avatar>

      <span className="font-bold">@jumagu</span>
    </div>
  );
}
