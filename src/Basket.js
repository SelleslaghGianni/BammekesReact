import React, { useState } from "react";

//In the real implementation I'd have this from the user being logged in
const CUR_USER = 2;

const Basket = ({ itemOrder, items, users, orders }) => {
  // I want to filter the items for the user in this current implementaion
  // Since this is something done in the backend for me, I wouldn't have to do
  // this in a real implementation, but it was a good exercise in JS.
  const filteredItems = itemOrder.filter(
    (itemO) =>
      itemO.order_id ===
      orders.find((order) => {
        return CUR_USER === order.user;
      }).id
  );
  return (
    <div className="grid grid-cols-1 gap-4">
      {filteredItems.map((item) => (
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
