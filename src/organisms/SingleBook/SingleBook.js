import React from "react";
import Text from "../../atoms/Text/Text";
import BookImage from "../../molecules/BookImage/BookImage";
import "./styles.css";

const SingleBook = ({ imageUrl, discountRate, title, description, price }) => {
  const rightLabels = [];
  const leftLabels = [];
  return (
    <div className="single-book-listing padder">
      <BookImage
        imageUrl={imageUrl}
        discountRate={description}
        rightLabels={rightLabels}
        leftLabels={leftLabels}
      />
      <Text text={title} type="subheading" gutterBottom />
      <Text text={discountRate} type="paragraph style" />
      <Text text={price} type="paragraph style1" />
    </div>
  );
};

export default SingleBook;
