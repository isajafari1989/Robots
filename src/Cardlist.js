import React from "react";
import Card from "./Card";
// import { error } from "@babel/eslint-parser/lib/convert/index.cjs";
const Cardlist = ({ robots }) => {
  // if (true) {
  //   throw new Error("Oooooops");
  // }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
