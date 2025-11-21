'use client';
import React from 'react';

export default function DashboardShell({ children, onNavigate } : { children: React.ReactNode, onNavigate: (r: any)=>void }) {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <nav>
          <button onClick={() => onNavigate('home')} className="mr-2">Home</button>
          <button onClick={() => onNavigate('users')} className="mr-2">Users</button>
          <button onClick={() => onNavigate('settings')}>Settings</button>
        </nav>
      </header>

      <main className="mt-6">{children}</main>
    </div>
  );
}
