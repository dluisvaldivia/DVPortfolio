export interface Card {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export const cardsData: Card[] = [
  {
    id: 1,
    title: "That's Very ADHD",
    description: "Coaching site for ADHD individuals.",
    link: "https://www.thatsveryadhd.com/"
  },
  {
    id: 2,
    title: "ExpenseVue",
    description: "expense management application with integration to banking data.",
    link: "https://sample-service-name-ikx9.onrender.com/"
  },
  {
    id: 3,
    title: "Vizuly",
    description: "voice-to-image app that transforms spoken words into images.",
    /*  link: "/scss-guide" */
  },
  {
    id: 4,
    title: "Bloom",
    description: "Growth hacking platform.",
    link: "http://147.93.114.210:3001/"
  }
];
