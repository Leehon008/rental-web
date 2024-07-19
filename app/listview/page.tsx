import React from 'react';

const List = ({ items }: any) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {items.map((item: any, index: any) => (
          <li key={index} className="p-4">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
