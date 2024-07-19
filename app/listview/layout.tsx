// import React, { useState } from 'react';
// import { FaTh, FaList } from 'react-icons/fa';
// import Grid from './grid/page';
// import List from './page';

// const LayoutSwitcher = ({ items }: any) => {
//   const [isGrid, setIsGrid] = useState(true);

//   const handleToggleLayout = () => {
//     setIsGrid(!isGrid);
//   };

//   return (
//     <div className="flex justify-end mb-4">
//       <button
//         onClick={handleToggleLayout}
//         className="mr-2 p-2 rounded hover:bg-gray-200 focus:outline-none"
//       >
//         <FaTh size={24} color={!isGrid ? '#718096' : undefined} />
//       </button>
//       <button
//         onClick={handleToggleLayout}
//         className="p-2 rounded hover:bg-gray-200 focus:outline-none"
//       >
//         <FaList size={24} color={isGrid ? '#718096' : undefined} />
//       </button>
//       {isGrid ? <Grid items={items} /> : <List items={items} />}
//     </div>
//   );
// };

// export default LayoutSwitcher;
