"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  LineChart,
  LucideIcon,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { OrderSection } from "./ordersection";
import { CategoryFilter } from "./categoryfilter";
import { FoodCarousel } from "./foodcarouselsection";
import { CategoryRecipe, RecipeProduct, TableRecipe } from "@prisma/client";
import CurrencyConverterModal from "./currency-converter-modal";

export function getInitials(name: string | null | undefined): string {
  if (name) {
    // Split the name into an array of words
    const nameParts = name.split(" ");

    // Map each word to its first letter and convert to uppercase
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase());

    // Join the initials to form the final string
    return initials.join("");
  } else {
    return "CN";
  }
}
export interface PatientProps {
  patientId: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  gender: string;
  occupation: string;
  dob: string;
}
export type DoctorAnalyticsProps = {
  title: string;
  count: number;
  icon: LucideIcon;
  unit: string;
  detailLink: string;
};

export default function FrontEndDashBoard({fetchedProducts, fetchedCategories, fetchedTableRecipes}:{ fetchedProducts:RecipeProduct[];fetchedCategories:CategoryRecipe[], fetchedTableRecipes: TableRecipe[]  }) {
    // Add state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All")
    
    // {
    //   title: "Average Wait Time",
    //   count: 15,
    //   icon: Clock,
    //   unit: "",
    //   detailLink: "/analytics/wait-time",
    // },
  
  const patients: PatientProps[] = [
    {
      patientId: "PT001",
      name: "Emma Thompson",
      email: "emma.thompson@email.com",
      phone: "+1-555-0123",
      location: "123 Park Avenue, New York, NY",
      gender: "Female",
      occupation: "Software Developer",
      dob: "1992-05-15",
    },
    {
      patientId: "PT002",
      name: "James Rodriguez",
      email: "james.r@email.com",
      phone: "+1-555-0124",
      location: "456 Beach Drive, Miami, FL",
      gender: "Male",
      occupation: "Chef",
      dob: "1988-09-23",
    },
    {
      patientId: "PT003",
      name: "Sarah Chen",
      email: "sarah.chen@email.com",
      phone: "+1-555-0125",
      location: "789 Tech Boulevard, San Francisco, CA",
      gender: "Female",
      occupation: "Marketing Manager",
      dob: "1995-12-07",
    },
    {
      patientId: "PT004",
      name: "Michael O'Connor",
      email: "michael.oc@email.com",
      phone: "+1-555-0126",
      location: "321 Lake Street, Chicago, IL",
      gender: "Male",
      occupation: "Teacher",
      dob: "1983-03-30",
    },
  ];
  
  

//   const status = "APPROVED";
  return (
    <div className="min-h-screen">
        <div className="w-full">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                        >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Restaurant Inc</span>
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <Home className="h-5 w-5" />
                        Dashboard
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                        <ShoppingCart className="h-5 w-5" />
                        Orders
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                        </Badge>
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <Package className="h-5 w-5" />
                        Products
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <Users className="h-5 w-5" />
                        Customers
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <LineChart className="h-5 w-5" />
                        Analytics
                        </Link>
                    </nav>
                    <div className="mt-auto">
                        <Card>
                        <CardHeader>
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                            Unlock all features and get unlimited access to our
                            support team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="sm" className="w-full">
                            Upgrade
                            </Button>
                        </CardContent>
                        </Card>
                    </div>
                    </SheetContent>
                </Sheet>
            <div className="w-full flex-1">
                <form>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
                </form>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-center">
                    Jb web developer
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-center font-light text-sm text-slate-500">
                    jbwebdeveloper@gmail.com
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </header>
        </div>
        <div className="md:flex md:flex-row">
            <div className="w-full md:w-[60%]">
                <div className="flex min-h-screen w-full flex-col">
                    <div className="px-8 py-4">
                        <div className="text-center flex flex-col justify-center items-center md:flex md:items-center md:justify-between">
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight mb-3">
                                Welcome To Our Kandolindoli Reciepe
                            </h1>
                            {/* <div className="">
                                <button
                                className={cn(
                                    "py-2 px-3 rounded-md text-xs flex items-center space-x-2",
                                    status === "APPROVED"
                                    ? "bg-green-500 text-white"
                                    : status === "PENDING"
                                    ? "bg-orange-400"
                                    : "bg-red-500 text-white"
                                )}
                                >
                                {status === "APPROVED" ? (
                                    <Check />
                                ) : status === "PENDING" ? (
                                    <RefreshCcw />
                                ) : (
                                    <X />
                                )}

                                {status}
                                </button>
                            </div> */}
                        </div>
                        <div className="">
                            <CategoryFilter selectedCategory = {selectedCategory} onSelectedCategory = {setSelectedCategory} fetchedCategories = {fetchedCategories}/>
                        </div>
                        
                        <div className="py-6">
                            <FoodCarousel selectedCategory = {selectedCategory} fetchedProducts = {fetchedProducts}/>
                        </div>
                        <div className="w-full  p-6 bg-white rounded-3xl shadow-sm">
                            <h1 className="text-2xl font-bold mb-6 text-center">Currency Converter</h1>
                            <p className="text-gray-500 mb-6 text-center">Click the button below to open the currency converter</p>
                            <div className="flex justify-center">
                                <CurrencyConverterModal />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            {/* <CurrencyCalculator /> */}
                            {/* <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Recent Appointments</CardTitle> 
                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                {appointments &&
                                    appointments.slice(0, 5).map((item) => {
                                    return (
                                        <Link
                                        key={item.id}
                                        href={`/dashboard/doctor/appointments/view/${item.id}`}
                                        className={
                                            "border mb-2 border-gray-300 shadow-sm text-xs bg-white py-3 px-2 inline-block w-full rounded-md dark:text-slate-900"
                                        }
                                        >
                                        <div className="flex justify-between items-center pb-2">
                                            <h2>
                                            {item.firstName} {item.lastName}
                                            </h2>
                                            <div className="flex items-center ">
                                            <History className="w-4 h-4 mr-2" />
                                            <span>2m ago</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center font-semibold">
                                            <CalendarCheck className="w-4 h-4 mr-2" />
                                            <span>{item.appointmentFormattedDate}</span>
                                            </div>
                                            <span className="font-semibold">
                                            {item.appointmentTime}
                                            </span>
                                            <div
                                            className={cn(
                                                "flex items-center text-blue-600",
                                                item.status === "approved" &&
                                                "text-green-600 font-semibold"
                                            )}
                                            >
                                            {item.status === "pending" ? (
                                                <CircleEllipsis className="mr-2 w-4 h-4" />
                                            ) : item.status === "approved" ? (
                                                <Check className="mr-2 w-4 h-4" />
                                            ) : (
                                                <X className="mr-2 w-4 h-4" />
                                            )}
                                            <span>{item.status}</span>
                                            </div>
                                        </div>
                                        </Link>
                                    );
                                    })}
                                </CardContent>
                            </Card> */}
                            <Card>
                                <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Recent Patients</CardTitle>
                                    <Button asChild>
                                    <Link href="/dashboard/doctor/patients">View All</Link>
                                    </Button>
                                </div>
                                </CardHeader>
                                <CardContent className="grid gap-8">
                                {patients &&
                                    patients.slice(0, 5).map((patient) => {
                                    const initials = getInitials(patient.name);
                                    return (
                                        <div
                                        key={patient.email}
                                        className="flex items-center gap-4"
                                        >
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src={""} alt="Avatar" />
                                            <AvatarFallback>{initials}</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                            {patient.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                            {patient.email}
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium flex space-x-2 items-center">
                                            <Button size={"sm"} asChild variant={"outline"}>
                                            <Link
                                                href={`/dashboard/doctor/patients/view/${patient.patientId}`}
                                            >
                                                View
                                            </Link>
                                            </Button>
                                        </div>
                                        </div>
                                    );
                                    })}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%]">
                <OrderSection  fetchedTableRecipes={fetchedTableRecipes}/>
            </div>
        </div>
    </div>
  );
}
