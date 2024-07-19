import React from 'react';

const Grid = ({ items }: any) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item: any, index: any) => (
        <div key={index} className="bg-gray-200 p-4">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Grid;
