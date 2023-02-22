import React, { FC } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  className?: string;
}

const Card: FC<CardProps> = ({ title, imageSrc, imageAlt, description, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageSrc} className="card-img-top" alt={imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;

// for using this component just use like this
// <Card title="Card Title" imageSrc="https://picsum.photos/200" imageAlt="Card image cap" description="Some quick example text to build on the card title and make up the bulk of the card's content." className="my-2" /> 