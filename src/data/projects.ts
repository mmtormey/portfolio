export type Project = {
  id: string;
  client: string;
  title: string;
  image: string;
  href: string;
  size: "half" | "full";
};

export const projects: Project[] = [
  {
    id: "inventory-loss",
    client: "Movie Theater Concessions",
    title: "Investigating Inventory Loss",
    image: "/images/inventory-loss.jpg",
    href: "/projects/inventory-loss",
    size: "half",
  },
  {
    id: "multifamily-business-value-discovery",
    client: "Multifamily Property Management",
    title: "Business Value Discovery",
    image: "/images/business-value-discovery.jpg",
    href: "/projects/multifamily-business-value-discovery",
    size: "half",
  },
  {
    id: "physician-utilization",
    client: "Orthopedic Clinic Network",
    title: "Understanding Physician Utilization",
    image: "/images/physician-utilization.jpg",
    href: "/projects/physician-utilization",
    size: "full",
  },
];