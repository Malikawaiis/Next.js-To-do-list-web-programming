import React from 'react';

export default function SideNav() {
  return (
    <nav className="bg-gray-800 text-white h-full p-4">
      <ul>
        <li className="mb-2"><a href="/dashboard" className="hover:underline">Dashboard Home</a></li>
        <li className="mb-2"><a href="/dashboard/customers" className="hover:underline">Customers</a></li>
        <li className="mb-2"><a href="/dashboard/invoices" className="hover:underline">Invoices</a></li>
      </ul>
    </nav>
  );
}
