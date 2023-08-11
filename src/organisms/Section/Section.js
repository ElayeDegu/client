import React from "react";
import Text from "../../atoms/Text/Text";
import Flex, { FlexItem } from "../../atoms/Flex/Flex";
import SingleBook from "../SingleBook/SingleBook";

const Section = ({ sectionTitle, books = [] }) => {
  return (
    <div>
      <Text text={sectionTitle} type="heading" gutterBottom />
      <Flex>
        {books.map(
          ({ imageUrl, discountRate, title, description, price }, index) => (
            <FlexItem key={index}>
              <SingleBook
                imageUrl={imageUrl}
                discountRate={discountRate}
                title={title}
                price={price}
                description={description}
              />
            </FlexItem>
          )
        )}
      </Flex>
    </div>
  );
};

export default Section;
