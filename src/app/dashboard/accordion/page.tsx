import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "What is the capital of France?",
    content: "Paris",
  },
  {
    id: "2",
    title: "What is the capital of Spain?",
    content: "Madrid",
  },
  {
    id: "3",
    title: "What is the capital of Italy?",
    content: "Rome",
  },
];

export default function AccordionPage() {
  return (
    <Accordion type="multiple" className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
