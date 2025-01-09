import React,
 { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  BarChart2,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Smile,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/activity", icon: Home, label: "Actividad" },
    { path: "/calendar", icon: Calendar, label: "Calendario" },
    { path: "/stats", icon: BarChart2, label: "Estadísticas" },
    { path: "/team", icon: Users, label: "Equipo" },
  ];

  return (
    <aside
      className={`bg-blue-600 text-white transition-all duration-300 relative
        ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-blue-600 rounded-full p-1 shadow-lg"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-white" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-white" />
        )}
      </button>

      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <Smile className="w-8 h-8 text-yellow-400 flex-shrink-0" />
        {!isCollapsed && <span className="text-xl font-bold">MrAppy</span>}
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 transition-colors
              ${
                location.pathname === item.path
                  ? "bg-blue-700 border-l-4 border-yellow-400"
                  : "hover:bg-blue-500"
              }`}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Link
          to="/logout"
          className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
        >
          <LogOut className="w-6 h-6 flex-shrink-0" />
          {!isCollapsed && <span>Cerrar sesión</span>}
        </Link>
      </div>
    </aside>
  );
}