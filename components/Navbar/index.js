import { useState } from 'react';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  const tabs = [
    { id: 1, text: 'Paris', url: 'paris' },
    { id: 2, text: 'Istanbul', url: 'istanbul' },
    { id: 3, text: 'Tokyo', url: 'tokyo' },
    { id: 4, text: 'New York', url: 'new york' },
    { id: 5, text: 'London', url: 'london' },
    { id: 6, text: 'Berlin', url: 'berlin' },
    { id: 7, text: 'Kyiv', url: 'kyiv' },
  ];
  return (
    <nav className="flex flex-col sm:flex-row mt-5 bg-white border rounded">
      {tabs.map((tab) => (
        <button
          className={`flex-1 py-3 px-4 rounded transition hover:scale-110 ${
            activeTab === tab.id
              ? 'text-white border-b-2 font-medium border-blue-500 bg-blue-500'
              : 'text-gray-700'
          }`}
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            router.push(`/?city=${tab.url}`);
          }}
        >
          {tab.text}
        </button>
      ))}
    </nav>
  );
};
