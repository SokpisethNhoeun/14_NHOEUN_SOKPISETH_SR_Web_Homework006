'use client';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMain({ items }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <SidebarGroup>
      <SidebarGroupLabel className={`tracking-widest font-extrabold text-xs`}>
        MAIN MENU
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild className="group/collapsible">
            <Link href={item.url}>
              {' '}
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={` duration-400 transition-all p-5 rounded-xl text-black/50 hover:text-black hover:bg-sky-200 font-bold ${pathName == item.url ? 'hover:bg-sky-500 bg-sky-300 text-white text-bold' : ''}`}
                  >
                    <div className={`${pathName == item.url ? 'text-white' : 'text-sky-500'}`}>
                      {' '}
                      {item.icon}{' '}
                    </div>

                    <span className={`${pathName == item.url ? 'text-white font-bold' : ''}`}>
                      {' '}
                      {item.title}
                    </span>
                    {pathName == item.url && (
                      <div className="w-full flex justify-end">
                        <ChevronRight color="white"/>
                      
                      </div>
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent></CollapsibleContent>
              </SidebarMenuItem>
            </Link>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
