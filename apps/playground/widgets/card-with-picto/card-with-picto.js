import React from "react";
import {Container} from "@vactory/ui/container";
import {Heading} from "@vactory/ui/heading";
import {Card} from "@vactory/ui/card"
import {cards} from "./data";

export const CardWithPicto = ({title ,items = cards, ...props}) => {
  return (
    <Container className="py-14" {...props}>
    <Heading level="2" className="text-center mb-9">
      {title}
    </Heading>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            variant="chaibi"
            title={item.title}
            excerpt={item.excerpt}
            url="/"
            image={<img src={item.icon} className="mx-auto" alt={item.iconalt} />}
          />
        )
      })}
    </div>
  </Container>
  )
};

export default CardWithPicto;
