import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
  const data = Array.from({ length: 9 });

  return (
    <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 gap-2">
      {data.map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="rounded-full mr-2 w-10 h-10" />

            <div>
              <Skeleton className="w-32 h-2 mb-2" />
              <Skeleton className="w-full h-20" />
            </div>
          </CardHeader>

          <CardFooter>
            <Skeleton className="w-20 h-9" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
