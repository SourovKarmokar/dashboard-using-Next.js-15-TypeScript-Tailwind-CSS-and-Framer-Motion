"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import { RotateCcw, UserCheck, UserIcon } from "lucide-react";
import UsersTable from "@/components/UsersTable";

const Userpage = () => {
  return (
    <div className="flex-1 overflow-auto relative x-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}

          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        
        >
         <StatCard name="Total Clients" icon={UserIcon} value="7670"/>
         <StatCard name="New Clients" icon={UserIcon} value="860"/>
         <StatCard name="Active Clients" icon={UserCheck} value="7670"/>
         <StatCard name="Total Clients" icon={RotateCcw} value="7670"/>
          
        </motion.div>
        <UsersTable/>
      </main>
    </div>
  );
};

export default Userpage;
