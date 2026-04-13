import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  UserCheck, 
  Users, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  Search,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const stats = [
  { title: "Total Orders", value: "1,284", trend: "+12.5%", up: true },
  { title: "Active Vendors", value: "48", trend: "+3.2%", up: true },
  { title: "Revenue", value: "$42,500", trend: "-2.4%", up: false },
];

const recentOrders = [
  { id: "#ORD-001", customer: "Arun Kumar", vendor: "Tech Logistics", status: "Delivered", amount: "$120.00" },
  { id: "#ORD-002", customer: "Divya S.", vendor: "Swift Delivery", status: "Pending", amount: "$85.50" },
  { id: "#ORD-003", customer: "Rahul M.", vendor: "Global Express", status: "In Transit", amount: "$210.00" },
  { id: "#ORD-004", customer: "Priya K.", vendor: "Local Hub", status: "Delivered", amount: "$45.00" },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="glass-dark border-r border-white/10 flex flex-col relative z-20"
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <span className="font-display font-bold text-xl">LyK<span className="text-accent">Spire</span></span>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Overview" },
            { icon: ShoppingBag, label: "Orders" },
            { icon: UserCheck, label: "Vendors" },
            { icon: Users, label: "Customers" },
            { icon: BarChart3, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-accent/20 hover:text-accent transition-all group"
            >
              <item.icon size={22} className="shrink-0" />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-20 glass border-b border-white/10 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 glass rounded-xl px-4 py-2 w-96">
            <Search size={18} className="text-white/40" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-xs text-white/40">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-bold">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
              <p className="text-white/40">Welcome back, here's what's happening today.</p>
            </div>
            <button className="bg-accent px-6 py-3 rounded-xl font-bold text-sm glow-accent hover:scale-105 transition-transform">
              Download Report
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-3xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-white/60 text-sm">{stat.title}</p>
                  <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {stat.trend}
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Chart & Table Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-8 rounded-[40px]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Revenue Analytics</h3>
                <button className="p-2 rounded-lg hover:bg-white/10">
                  <MoreVertical size={20} />
                </button>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7C45A3" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#7C45A3" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A1A2E', border: '1px solid #ffffff20', borderRadius: '12px' }}
                      itemStyle={{ color: '#7C45A3' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#7C45A3" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Recent Orders Table */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-8 rounded-[40px]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Recent Orders</h3>
                <button className="text-accent text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                        {order.id.split('-')[1]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{order.customer}</p>
                        <p className="text-xs text-white/40">{order.vendor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">{order.amount}</p>
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${
                        order.status === 'Delivered' ? 'text-green-400' : 
                        order.status === 'Pending' ? 'text-yellow-400' : 'text-blue-400'
                      }`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
