import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1 max-h-[400px]">
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>Últimos clientes</CardTitle>
                    <CircleDollarSign className='ml-auto size-5' />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>
            <CardContent className=" overflow-auto
                                      [&::-webkit-scrollbar]:w-1
                                    [&::-webkit-scrollbar-track]:bg-gray-100
                                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="size-8">
                        <AvatarImage src="https://github.com/rhuanyuri.png" />
                        <AvatarFallback>RY</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base">Desenvolvedor FullStack</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">rhuanyuri12@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="size-8">
                        <AvatarImage src="https://scontent.cdninstagram.com/v/t51.2885-19/471369627_614388734301305_1417330446882112712_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=oxil1NlHM9gQ7kNvgH061CH&_nc_oc=AdiatY6M5WvRa92z1H2l4A5NeoPYYRSlktA_hDjlFq7jgAzxM9tCjFxyFPETku8_uBg&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYA-3qShjL8nFevaU5mYfSpK0uut2Sli99vCxJ3VPdJDIQ&oe=67C79B68" />
                        <AvatarFallback>KP</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base">Desenvolvedor FullStack</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">kauane@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="size-8">
                        <AvatarImage src="https://scontent.cdninstagram.com/v/t51.2885-19/473578697_523402710750321_4378651686254726364_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=SWlU46KppLIQ7kNvgEVbWk3&_nc_oc=AdgRZqGIV3RRIzquwVaB9E9KbV44Bq8eR0gI11GshGLuvor83JgI9Q88BrXqCH7IBs0&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYAuALQ1a9mEsBu_l41uWRwIUIYNTrLBBOIS0-RHefxTNw&oe=67C7ACE5" />
                        <AvatarFallback>LU</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base">Desenvolvedor FullStack</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">luciano@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="size-8">
                        <AvatarImage src="https://scontent.cdninstagram.com/v/t51.2885-19/391172740_841958964064872_6620980971101711464_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=VN3TAVCS9eYQ7kNvgEPo2Sg&_nc_oc=Adj5-coAkFCuTt1MP5X-ovLI4WVVCxc6qteRX4hBEZITyx-3Ooek43JSqpZbRxOWIJs&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYBLLHz1sDXXRvf6DIZp-eYKBwotdWr7a28REt4VYfkziw&oe=67C7A9E7" />
                        <AvatarFallback>IM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base">Desenvolvedor FullStack</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">ivan@gmail.com</span>
                    </div>
                </article>

            </CardContent>
        </Card>

    )
} 