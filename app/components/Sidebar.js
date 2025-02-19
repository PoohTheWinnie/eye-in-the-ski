"use client";

import { useContext, useState } from 'react';
import Link from 'next/link';
import { Home, Images, Video, Users2, LogOut } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { logout } = useContext(AuthContext);

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: (
        <Home className="h-5 w-5" />
      )
    },
    {
      id: 'image',
      label: 'Image Model',
      href: '/image',
      icon: (
        <Images className="h-5 w-5" />
      )
    },
    {
      id: 'video',
      label: 'Video Model',
      href: '/video',
      icon: (
        <Video className="h-5 w-5" />
      )
    },
    {
      id: 'account',
      label: 'Account',
      href: '/account',
      icon: (
        <Users2 className="h-5 w-5" />
      )
    }
  ];

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            L
          </span>
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex justify-center rounded-sm px-2 py-1.5 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                {tab.icon}
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    {tab.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <button
          onClick={logout}
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <LogOut className="h-5 w-5" />
          <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 