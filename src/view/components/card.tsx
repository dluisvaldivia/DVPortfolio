import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  link?: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <motion.article
      className="card"
      tabIndex={0}
      aria-labelledby={`card-title-${title}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="card__content flex flex-col h-full">
        <h2 id={`card-title-${title}`} className="card__title">{title}</h2>
        <p className="card__description flex-1">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="card__link mt-auto pt-3 inline-block"
            aria-label={`Visit ${title}, opens in new tab`}
            rel="noopener noreferrer"
          >
            <button className="button-primary">Visit {title}</button>
          </a>
        )}
      </div>
    </motion.article>
  );
}
