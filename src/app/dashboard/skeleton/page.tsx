export const revalidate = 0;

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Array.from({ length: 9 });
};

export default async function SkeletonPage() {
  const data = await getData();

  return (
    <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 gap-2">
      {data.map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Image
              src="https://github.com/shadcn.png"
              width={50}
              height={50}
              alt="Avatar"
              className="rounded-full mr-2 w-10 h-10"
            />

            <div>
              <CardTitle>Lorem Ipsum</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                deleniti aperiam incidunt dolores ea excepturi.
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter>
            <Button>Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
