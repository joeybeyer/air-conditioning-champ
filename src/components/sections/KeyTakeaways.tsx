import { CheckCircle } from 'lucide-react';

interface KeyTakeawaysProps {
  items: string[];
  title?: string;
}

export function KeyTakeaways({ items, title = 'Key Takeaways' }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-lg p-6 my-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
