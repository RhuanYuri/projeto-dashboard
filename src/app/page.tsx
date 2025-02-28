import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import  { Button } from './../components/ui/button'
import { BadgeDollarSign, DollarSign, Package, Percent, Users } from 'lucide-react'
import { Charts } from '@/components/charts'
import { Sales } from '@/components/sales'

export default function Home() {
  return (
    <div className='sm:ml-14 p-4'>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>Total Vendas</CardTitle>
              <DollarSign className='ml-auto size-5' />
            </div>
            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Novos clientes
              </CardTitle>
              <Users className='ml-auto size-5' />
            </div>
            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-base sm:text-lg font-bold'>234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Pedidos hoje
              </CardTitle>
              <Percent className='ml-auto size-5' />
            </div>
            <CardDescription>
              Total pedidos hoje em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-base sm:text-lg font-bold'>65%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total pedidos
              </CardTitle>
              <Package className='ml-auto size-5' />
            </div>
            <CardDescription>
              Total pedidos em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-base sm:text-lg font-bold'>1100</p>
          </CardContent>
        </Card>

      </section>

      <section className='mt-4 flex  flex-col md:flex-row gap-4'>
        <Charts />
        <Sales />

      </section>
    </div>
    
  )
}