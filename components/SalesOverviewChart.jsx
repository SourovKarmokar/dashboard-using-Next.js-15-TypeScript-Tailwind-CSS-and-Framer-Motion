"use client"
import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {motion} from "framer-motion"

const SalesOverviewChart = () => {
    const [salesData, setSalesData] = useState([]);


    useEffect(() => {
        fetch("data/data.json")
            .then((res) => res.json())
            .then((data) => setSalesData(data.sales));
    }, [])


    return (
        <motion.div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
        
        initial={{opacity: 0, y: 20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2,duration:0.5}}

        >
            <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
                Sales Overview
            </h2>
            <div className='h-64 md:h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={salesData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#db5563" opacity={0.3} />
                        <XAxis
                            dataKey="name"
                            stroke="#9ca3af"
                            tick={{ fontSize: 12 }}
                            interval="preserveEnd"
                        />
                        <YAxis
                            stroke="#9ca3af"
                            tick={{ fontSize: 12 }}
                            width={40}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#db5563',
                                fontSize: '12px',
                                color: '#e5e7eb'
                            }}
                            itemStyle={{ color: '#e5e7eb' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#9c27b0"
                            strokeWidth={3}
                            dot={{ fill: '#9c27b0', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}

export default SalesOverviewChart