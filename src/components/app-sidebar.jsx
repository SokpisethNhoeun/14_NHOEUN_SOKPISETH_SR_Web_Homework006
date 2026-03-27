"use client";

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { BookOpen, LayoutDashboard, Settings, ShoppingBag, Users } from 'lucide-react';
import Link from 'next/link';

// This is sample data.
const data = {
  teams: [
    {
      name: 'HRD',
      subName: 'SHOP',
      logo: <ShoppingBag />,
      plan: 'ADMIN V2.0',
    },
  ],
  navMain: [
    {
      title: 'Products',
      url: '/products',
      icon: <LayoutDashboard />,
    },
    {
      title: 'Customers',
      url: '/customers',
      icon: <Users />,
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: <BookOpen />,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: <Settings />,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Link href={'/'}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
      </Link>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
