"use client"

import React from 'react'
import {motion} from "framer-motion"
import StatCard from '@/components/StatCard'
import { DollarSign, ShoppingBag, SquareActivity } from 'lucide-react'
import ProductsTable from '@/components/ProductsTable'

const ProductsPage = () => {
    
  return (
    <div className='flex-1 overflow-auto relative x-10 '>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 '>
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 '
        initial={{opacity: 0, y: 20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3,duration:0.5}}
        >
            <StatCard name='Total Products' icon={ShoppingBag} value={"4352"}/>
            <StatCard name='Total Stock' icon={SquareActivity} value={"14,450"}/>
            <StatCard  name='Total Sold' icon={DollarSign} value={"12,450"}/>
            <StatCard  name='Total Categories' icon={SquareActivity} value={"8"}/>

        </motion.div>
        <ProductsTable/>
      </main>
    </div>
  )
}

export default ProductsPage
