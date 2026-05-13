export interface Card {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export const cardsData: Card[] = [
  {
    id: 1,
    title: "Bloom",
    description: "Growth hacking platform.",
    link: "http://147.93.114.210:3001/"
  },
  {
    id: 2,
    title: "YogaBuddy",
    description: "Yoga companion app for kids.",
    link: "https://dluisvaldivia.github.io/yogabuddy/"
  },
  {
    id: 3,
    title: "So Divergent",
    description: "Coaching site for ADHD individuals.",
    link: "https://www.thatsveryadhd.com/"
  },
  {
    id: 4,
    title: "ExpenseVue",
    description: "Expense management application with integration to banking data.",
    link: "https://sample-service-name-ikx9.onrender.com/"
  }
];
