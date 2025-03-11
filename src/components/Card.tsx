import { ReactNode } from "react";

import './Card.css';

interface CardProps {
  title: string;
  description: ReactNode;
  images: {
    src: string;
    alt: string;
    id: string;
  }[];
}

function Card({ title, description, images }: CardProps) {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <div className="card__images">
        {images.map((image) => (
          <div className="card__image" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="card__description">{description}</div>
    </div>
  );
}

export default Card;