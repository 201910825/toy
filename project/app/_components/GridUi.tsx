import { BentoCard, BentoGrid } from "@/components/ui/bentoGrid";
import {
  InfoCircledIcon,
  CalendarIcon,
  FileTextIcon,
  Pencil2Icon,
  ChatBubbleIcon,
  } from "@radix-ui/react-icons";
  
  
  const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ChatBubbleIcon,
    name: "Interview",
    description: "Meet Online",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Pencil2Icon,
    name: "To do List",
    description: "Write to do",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Write your schedule on Calendar",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: InfoCircledIcon,
    name: "About Info",
    description:
    "It is just my toy",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  ];
  
  export function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
    {features.map((feature) => (
      <BentoCard key={feature.name} {...feature} />
    ))}
    </BentoGrid>
  );
  }
  
