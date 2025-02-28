import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Home, LogOut, Package, PanelBottom, Settings, ShoppingBag, User } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export function Sidebar() {
    const side = "left"
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <aside className="fixed inset-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                            href="#">
                            <Package className="size-5" />
                            <span className="sr-only">Dashboard Avatar</span>

                        </Link>

                        <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <Home className="size-5" />
                                <span className="sr-only">Início</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Início
                           </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <ShoppingBag className="size-5" />
                                <span className="sr-only">Pedidos</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Pedidos
                           </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <Package className="size-5" />
                                <span className="sr-only">Produtos</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Produtos
                           </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <User className="size-5" />
                                <span className="sr-only">Clientes</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Clientes
                           </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <Settings className="size-5" />
                                <span className="sr-only">Configurações</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Configurações
                           </TooltipContent>
                        </Tooltip>

                    </TooltipProvider>



                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                         <Tooltip>
                           <TooltipTrigger asChild>
                           <Link className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                href="#">
                                <LogOut className="size-5 text-red-500" />
                                <span className="sr-only">Sair</span>

                            </Link>
                           </TooltipTrigger>
                           <TooltipContent side="right">
                            Sair
                           </TooltipContent>
                        </Tooltip>

                    </TooltipProvider>

                </nav>

            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:p-y sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:boder-o sm:bg-transparent sm:px-6">
                    <Sheet key={side}>
                        <SheetTrigger>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="size-5" />
                                <span className="sr-only">Abrir / fechar menu</span>
                            </Button>

                        </SheetTrigger>
                        <SheetContent className="sm:max-w-xs" side={side}>
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="#"
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg 
                                items-center justify-center text-primary-foreground md:text-base
                                gap-2"
                                    prefetch={false}
                                >
                                    <Package className="size-5 transition-all" />
                                    <span className="sr-only">Logo</span>
                                </Link>
                                <Link href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Home className="size-5 transition-all" />
                                    <span>Home</span>
                                </Link>

                                <Link href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <ShoppingBag className="size-5 transition-all" />
                                    <span>Pedidos</span>
                                </Link>

                                <Link href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Package className="size-5 transition-all" />
                                    <span>Produtos</span>
                                </Link>

                                <Link href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <User className="size-5 transition-all" />
                                    <span>Clientes</span>
                                </Link>

                                <Link href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Settings className="size-5 transition-all" />
                                    <span>Configurações</span>
                                </Link>

                            </nav>


                        </SheetContent>
                    </Sheet>
                    Menu
                </header>

            </div>

        </div>
    )
}