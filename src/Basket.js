import React, { useState } from "react";

const Basket = ({ itemOrder, items }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {itemOrder.map((item) => (
        <div key={item.id} className="p-4 border rounded-xl">
          <p>
            {
              items.find((itm) => {
                return itm.id === Number(item.id);
              }).name
            }
            {" x"}
            {item.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
