import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend,
  subtitle,
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm mt-1">
            <div className="flex items-center gap-1 justify-end">
              {trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span
                className={trend === "up" ? "text-green-500" : "text-red-500"}
              >
                {change}
              </span>
            </div>
            {subtitle && (
              <p className="text-muted-foreground ml-1 text-end">{subtitle}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      <StatCard
        title="Total Revenue"
        value="$81,000"
        change="+2.5%"
        trend="up"
        subtitle="from last week"
      />
      <StatCard
        title="Total Customer"
        value="5,000"
        change="+1.6%"
        trend="up"
        subtitle="from last week"
      />
      <StatCard
        title="Total Transactions"
        value="12,000"
        change="+6.8%"
        trend="up"
        subtitle="from last week"
      />
      <StatCard
        title="Total Product"
        value="5,000"
        change="-1.1%"
        trend="down"
        subtitle="from last week"
      />
    </div>
  );
};

export default StatsCards;
