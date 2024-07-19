import { title } from "@/components/primitives";

export default function RentalsPage() {

  const items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
  ];

  return (
    <div>
      <h1 className={title()}>Rentals</h1>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Grid/List View Example</h1>

      </div>
    </div>
  );
}
