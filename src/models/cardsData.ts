import thatsVeryAdhd from "../assets/thatsveryadhd.png";
import expensevue from "../assets/expensevue.png";
import bloom from "../assets/BloomIcon.ico";


export interface Card {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const cardsData: Card[] = [
  {
    id: 1,
    title: "That's Very ADHD",
    description: "Coaching site for ADHD individuals.",
    image: thatsVeryAdhd,
    link: "https://www.thatsveryadhd.com/"
  },
  {
    id: 2,
    title: "ExpenseVue",
    description: "expense management application with integration to banking data.",
    image: expensevue,
    link: "https://sample-service-name-ikx9.onrender.com/"
  },
  {
    id: 3,
    title: "Vizuly",
    description: "voice-to-image app that transforms spoken words into images.",
    /* image: */
    /*  link: "/scss-guide" */
  },
  {
    id: 4,
    title: "Bloom",
    description: "Growth hacking platform.",
    image: bloom,
    /*  link: "/scss-guide" */
  }
];
