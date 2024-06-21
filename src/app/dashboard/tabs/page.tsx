import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tab1 } from "./ui/tab1";
import { Tab2 } from "./ui/tab2";

export default function TabsPage() {
  return (
    <div className="max-w-[400px] mx-auto flex flex-col items-center">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1 />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
      </Tabs>
    </div>
  );
}
