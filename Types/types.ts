export type CategoryRecipeType = {
    slug: string;
    categoryTitle: string;
    categoryImages: string[];
    categoryDescription: string;
}

export type RecipeType = {
    slug: string;
    recipeName: string;
    recipePrice: number;
    recipeDescription: string;
    recipeImages: string[];
    categoryRecipeId:  string; 
}

export type UserType = {
    name: string
    email: string
    password: string
    profile: string
}

export type UserLoginType = {
    email: string
    password: string
}

export type ExchangeRatesType = {
    base_code: "string",
    conversion_rates: ConversionRates
}

type ConversionRates = {
    [currencyCode: string] : number
}

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export type TableRecipeTypes = {
    slug:string;
    tableTitle:string;
}













// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Input } from "@/components/ui/input"
// import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Check, ChevronsUpDown, ArrowLeftRight } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { ExchangeRateType } from "@/Types/types"

// const currencies = [
//   { value: "USD", label: "USD - US Dollar", flag: "🇺🇸" },
//   { value: "EUR", label: "EUR - Euro", flag: "🇪🇺" },
//   { value: "GBP", label: "GBP - British Pound", flag: "🇬🇧" },
//   { value: "INR", label: "INR - Indian Rupee", flag: "🇮🇳" },
//   // Add more currencies as needed
// ]

// export default function CurrencyCalculator({receivedRates}:{receivedRates:ExchangeRateType}) {
//     // console.log(receivedRates,".jjjjjjjjjjjjjjjjj");
//     // console.log(receivedRates.conversion_rates,"these are the conservaton rates")

//   const [open, setOpen] = useState(false)
//   const [fromCurrency, setFromCurrency] = useState(currencies[0])
//   const [toCurrency, setToCurrency] = useState(currencies[3])
//   const [amount, setAmount] = useState("100")
//   const [display, setDisplay] = useState("")
//   const currencyArray: CurrencyItemType[] = Object.entries(receivedRates.conversion_rates).map(
//     ([key, rate]) => ({
//       value: key,
//     //   label: `${key} - ${rate}`,
//       rate,
//     })
//   );
// //   console.log(currencyArray , "this is the cureency aarya");
//   const handleNumberClick = (num: string) => {
//     setDisplay((prev) => prev + num)
//   }

//   return (
//     <div className="bg-white p-4">
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline" className="w-full text-md">
//             Open Converter & Calculator
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="flex items-center justify-center sm:max-w-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
//           <Tabs defaultValue="converter" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
//               <TabsTrigger value="converter">Currency Converter</TabsTrigger>
//               <TabsTrigger value="calculator">Calculator</TabsTrigger>
//             </TabsList>
//             <TabsContent value="converter" className="space-y-6 p-4">
//               <h2 className="text-2xl font-bold text-center mb-6">Currency Converter</h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">Enter Amount</label>
//                   <Input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     className="bg-slate-800/50 border-slate-700 text-white"
//                   />
//                 </div>
//                 <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
//                   <CurrencySelect value={fromCurrency} onChange={setFromCurrency} currencyArray={currencyArray}/>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="rounded-full hover:bg-slate-800"
//                     onClick={() => {
//                       setFromCurrency(toCurrency)
//                       setToCurrency(fromCurrency)
//                     }}
//                   >
//                     <ArrowLeftRight className="h-4 w-4" />
//                   </Button>
//                   <CurrencySelect value={toCurrency} onChange={setToCurrency} currencyArray={currencyArray}/>
//                 </div>
//                 <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Get Exchange Rate</Button>
//                 <div className="mt-4 p-4 rounded-lg bg-slate-800/50 text-center">
//                   <p className="text-lg">
//                     {amount} {fromCurrency.value} = {(Number(amount) * 83.5793).toFixed(2)} {toCurrency.value}
//                   </p>
//                 </div>
//               </div>
//             </TabsContent>
//             <TabsContent value="calculator" className="space-y-4 p-4">
//               <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
//                 <Input
//                   value={display}
//                   readOnly
//                   className="text-right text-2xl bg-transparent border-none focus-visible:ring-0"
//                 />
//               </div>
//               <div className="grid grid-cols-4 gap-2">
//                 {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
//                   <Button
//                     key={btn}
//                     onClick={() => handleNumberClick(btn)}
//                     className="h-14 text-lg bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105"
//                   >
//                     {btn}
//                   </Button>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }
// type functionTypes={
//     value:any,
//     onChange:any,
//     currencyArray: CurrencyItemType[]
// }
// type CurrencyItemType = {
//     value: string; rate: unknown;
//   };
// function CurrencySelect({ value, onChange,currencyArray }: functionTypes) {
//   const [open, setOpen] = useState(false)


//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between bg-slate-800/50 border-slate-700 hover:bg-slate-700"
//         >
//           <span className="flex items-center gap-2">
//             <span>{value.flag}</span>
//             {value.value}
//           </span>
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-full p-0">
//         <Command>
//           <CommandInput placeholder="Search currency..." />
//           <CommandList>
//             <CommandEmpty>No currency found.</CommandEmpty>
//             <CommandGroup className="max-h-[200px] overflow-auto">
//               {currencyArray.map((currency) => (
//                 <CommandItem
//                   key={currency.value}
//                   value={currency.value}
//                   onSelect={() => {
//                     onChange(currency)
//                     setOpen(false)
//                   }}
//                 >
//                   <Check className={cn("mr-2 h-4 w-4", value.value === currency.value ? "opacity-100" : "opacity-0")} />
//                   <span className="flex items-center gap-2">
//                     {/* <span>{currency.flag}</span> */}
//                     {currency.value}
//                   </span>
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }

