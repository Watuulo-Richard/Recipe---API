"use client"

import { cn } from '@/lib/utils';
import { Badge, Bell, ChefHat, ExternalLink, Folders, LayoutGrid, LineChart, Menu, Package, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
  const sidebarLinks = [
    {
      title: "Menu",
      href: "/dashboard",
      icon: Menu,
    },
    {
      title: "List Of Orders",
      href: "/dashboard/orders",
      icon: Folders,
      count: 6,
    },
    {
      title: "Categories",
      href: "/recipecategories",
      icon: ChefHat,
      count: 5,
    },
    {
      title: "Recipes",
      href: "/dashboard/allrecipes",
      icon: Package,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: LayoutGrid,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: LineChart,
    },
  ];
export default function FrontSideBar() {
    const pathname = usePathname();

    if(pathname.includes('dashboard')){
      return null
    }
  return (
    <div>
        <div className="hidden h-screen border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                    <div className="w-12 h-12 rounded-full">
                      <Image src="/Chef-Doom.jpg" alt="" className="w-full h-full object-contain" width={500} height={300} />
                    </div>
                    <span className="">Restaurant Inc</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarLinks.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = item.href === pathname;
                    return (
                    <Link
                        key={i}
                        href={item.href}
                        className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        isActive && " bg-muted  text-primary"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        {item.title}
                        {item.count && (
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            {item.count}
                        </Badge>
                        )}
                    </Link>
                    );
                })}
                <Link
                    href="/"
                    className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    )}
                >
                    <ExternalLink className="h-4 w-4" />
                    Live Website
                </Link>
                </nav>
            </div>
            <div className="mt-auto p-4">
                <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                    <Button size="sm" className="w-full">
                    Upgrade
                    </Button>
                </CardContent>
                </Card>
            </div>
            </div>
        </div>
    </div>
  )
}
