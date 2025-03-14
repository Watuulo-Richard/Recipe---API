// import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Check, ChevronsUpDown } from "lucide-react"
// import { Button } from "./ui/button"
// import { useState } from "react"
// import { cn } from "@/lib/utils"
// import { CurrencyItemType } from "@/app/(frontend)/page"

// type functionTypes = {
//   value:any,
//   onChange:any,
//   currencyArray: CurrencyItemType[]
//   setBaseCurrency:(currency: string) => void
//   isLoading:boolean
// }
// export default function CurrencySelect({ value, onChange, currencyArray ,  }: functionTypes) {
//     const [open, setOpen] = useState(false)

//     return (
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className="w-full justify-between bg-slate-800/50 border-slate-700 hover:bg-slate-700"
//           >
//             <span className="flex items-center gap-2">
//               <span>{value.flag}</span>
//               {value.value}
//             </span>
//             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-full p-0">
//           <Command>
//             <CommandInput placeholder="Search currency..." />
//             <CommandList>
//               <CommandEmpty>No currency found.</CommandEmpty>
//               <CommandGroup className="max-h-[200px] overflow-auto">
//                 {currencyArray.map((currency) => (
//                   <CommandItem
//                     key={currency.value}
//                     value={currency.value}
//                     onSelect={() => {
//                       onChange(currency)
//                       setOpen(false)
//                     }}
//                   >
//                     <Check className={cn("mr-2 h-4 w-4", value.value === currency.value ? "opacity-100" : "opacity-0")} />
//                     <span className="flex items-center gap-2">
//                       {/* <span>{currency.flag}</span> */}
//                       {currency.label}
//                     </span>
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     )
//   }