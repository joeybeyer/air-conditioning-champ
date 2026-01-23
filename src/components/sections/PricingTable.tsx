interface PricingItem {
  service: string;
  priceRange: string;
  duration: string;
}

interface PricingTableProps {
  items: PricingItem[];
  title?: string;
  note?: string;
}

export function PricingTable({ items, title, note }: PricingTableProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary-600 text-white">
              <th className="px-4 py-3 text-left font-semibold">Service</th>
              <th className="px-4 py-3 text-left font-semibold">Price Range</th>
              <th className="px-4 py-3 text-left font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-4 py-3 font-medium text-gray-900">{item.service}</td>
                <td className="px-4 py-3 text-primary-600 font-semibold">{item.priceRange}</td>
                <td className="px-4 py-3 text-gray-600">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-sm text-gray-500 mt-2 italic">* {note}</p>}
    </div>
  );
}
