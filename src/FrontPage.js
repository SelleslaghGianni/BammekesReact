import React, { useState } from "react";

const FrontPage = ({ items, categories }) => {
  const [query, setQuery] = useState("");

  // Query uitvoeren op lijst
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Grouperen van de 2 lijsten, zodat er per categorie kan worden weergegeven wat er in zit.
  const grouped = Object.entries(
    filteredItems.reduce((previousValue, currentValue) => {
      if (previousValue[currentValue.category_id]) {
        previousValue[currentValue.category_id].push(currentValue);
      } else {
        previousValue[currentValue.category_id] = [currentValue];
      }

      return previousValue;
    }, {})
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 dark:text-gray-200 p-12 space-y-8">
      <label className="flex flex-col">
        <span>Zoeken naar:</span>
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          className="dark:bg-gray-800 px-3 py-2 rounded focus:outline-none"
        ></input>
      </label>
      {grouped.map(([id, items]) => (
        <div key={id}>
          <h2 className="font-bold text-2xl">
            {
              categories.find((category) => {
                return category.id === Number(id);
              }).name
            }
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.id} className="p-4 border rounded-xl">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontPage;
