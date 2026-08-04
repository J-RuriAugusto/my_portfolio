export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Building Resilience",
    issuer: "LinkedIn Learning",
    date: "2023",
    image: "/certificates/cert-1.png",
  },
  {
    id: "cert-2",
    title: "C for Everyone, Part 1: Programming Fundamentals",
    issuer: "Coursera",
    date: "2023",
    image: "/certificates/cert-2.jpeg",
  },
  {
    id: "cert-3",
    title: "Predictive Project Management Badge",
    issuer: "Project Management Institute",
    date: "2025",
    image: "/certificates/cert-3.jpg",
  },
  {
    id: "cert-4",
    title: "Agile Project Management Badge",
    issuer: "Project Management Institute",
    date: "2025",
    image: "/certificates/cert-4.jpg",
  },
  {
    id: "cert-5",
    title: "Google Cloud Badges",
    issuer: "Google Cloud Pinas 2",
    date: "2022",
    image: "/certificates/cert-5.jpg",
  },
];
