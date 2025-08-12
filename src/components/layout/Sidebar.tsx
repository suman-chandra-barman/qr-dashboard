import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  LayoutDashboard,
  Package,
  Upload,
  CreditCard,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface SidebarProps {
  className?: string;
  activeItem: string;
  onItemClick: (item: string) => void;
}

interface NavItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
  hasSubmenu?: boolean;
  submenu?: SubNavItem[];
}

interface SubNavItem {
  title: string;
  href: string;
}

const generalNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },
  {
    title: "Products",
    icon: Package,
    href: "products",
    badge: "130k",
    hasSubmenu: true,
    submenu: [
      { title: "Hat", href: "products-hat" },
      { title: "Mug", href: "products-mug" },
      { title: "Keychains", href: "products-keychains" },
      { title: "Bag", href: "products-bag" },
    ],
  },
  {
    title: "Product Uploads",
    icon: Upload,
    href: "uploads",
  },
  {
    title: "Transactions",
    icon: CreditCard,
    href: "transactions",
  },
  {
    title: "Customers",
    icon: Users,
    href: "customers",
  },
];

const toolsNavItems: NavItem[] = [
  {
    title: "Account & Settings",
    icon: Settings,
    href: "settings",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  className,
  activeItem,
  onItemClick,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(["products"]);

  const toggleExpanded = (itemHref: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemHref)
        ? prev.filter((item) => item !== itemHref)
        : [...prev, itemHref]
    );
  };

  const NavItemComponent = ({ item }: { item: NavItem }) => {
    const isActive =
      activeItem === item.href ||
      (item.submenu && item.submenu.some((sub) => activeItem === sub.href));
    const isExpanded = expandedItems.includes(item.href);

    if (item.hasSubmenu && !isCollapsed) {
      return (
        <Collapsible
          open={isExpanded}
          onOpenChange={() => toggleExpanded(item.href)}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                isActive
                  ? "bg-[#D9EDFF] text-[#454545] hover:bg-[#D9EDFF]"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.title}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto mr-2">
                  {item.badge}
                </Badge>
              )}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isExpanded && "rotate-180"
                )}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-1">
            {item.submenu?.map((subItem) => (
              <div className="ml-6">
                <Button
                  key={subItem.href}
                  variant={activeItem === subItem.href ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-9",
                    activeItem === subItem.href
                      ? "text-[#1A71F6] bg-transparent hover:bg-transparent"
                      : "hover:bg-none hover:text-accent-foreground"
                  )}
                  onClick={() => onItemClick(subItem.href)}
                >
                  <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                  <span className="flex-1 text-left text-sm">
                    {subItem.title}
                  </span>
                </Button>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    const content = (
      <Button
        variant={isActive ? "default" : "ghost"}
        className={cn(
          "w-full justify-start gap-3 h-10",
          isActive
            ? "bg-[#D9EDFF] text-[#454545] hover:bg-[#D9EDFF]"
            : "hover:bg-accent hover:text-accent-foreground",
          isCollapsed && "justify-center px-2"
        )}
        onClick={() => onItemClick(item.href)}
      >
        <item.icon className={cn("h-4 w-4", isCollapsed ? "h-5 w-5" : "")} />
        {!isCollapsed && (
          <>
            <span className="flex-1 text-left">{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto">
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Button>
    );

    if (isCollapsed) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{content}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return content;
  };

  const NavSection = ({
    title,
    items,
  }: {
    title: string;
    items: NavItem[];
  }) => (
    <div className="space-y-2">
      {!isCollapsed && (
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {items.map((item) => (
          <NavItemComponent key={item.title} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-border relative">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "h-8 w-8 p-0 absolute -right-4 cursor-pointer bg-gray-100 hover:bg-gray-200",
            isCollapsed && "mx-auto mt-2"
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <NavSection title="General" items={generalNavItems} />
        <NavSection title="Tools" items={toolsNavItems} />
      </div>

      {/* User Profile  */}
      <div className="p-4 border-t border-border">
        <Button variant="default" className="w-full">Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
