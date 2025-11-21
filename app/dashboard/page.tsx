'use client';
import { useState } from 'react';
import DashboardShell from '../../components/DashboardShell';

export default function DashboardPage() {
  const [route, setRoute] = useState<'home'|'users'|'settings'>('home');

  return (
    <DashboardShell onNavigate={setRoute}>
      {route === 'home' && <div>Welcome to the dashboard (SPA area)</div>}
      {route === 'users' && <div>Users list (fetch from GAS)</div>}
      {route === 'settings' && <div>Settings</div>}
    </DashboardShell>
  );
}
