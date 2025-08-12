import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  product: string;
  orderId: string;
  date: string;
  customer: {
    name: string;
    avatar?: string;
  };
  status: 'Delivered' | 'Canceled';
  amount: string;
}

const orders: Order[] = [
  {
    id: '1',
    product: 'Lorem Ipsum',
    orderId: '#2420',
    date: 'Nov 8th, 2023',
    customer: { name: 'Kattt', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Delivered',
    amount: '$200.00'
  },
  {
    id: '2',
    product: 'Lorem Ipsum',
    orderId: '#2420',
    date: 'Nov 7th, 2023',
    customer: { name: 'Kartnal', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Canceled',
    amount: '$200.00'
  },
  {
    id: '3',
    product: 'Lorem Ipsum',
    orderId: '#2424',
    date: 'Nov 6th, 2023',
    customer: { name: 'Ashad', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Delivered',
    amount: '$200.00'
  },
  {
    id: '4',
    product: 'Lorem Ipsum',
    orderId: '#2423',
    date: 'Nov 5th, 2023',
    customer: { name: 'Shyam', avatar: 'https://images.pexels.com/photos/2378171/pexels-photo-2378171.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Canceled',
    amount: '$200.00'
  },
  {
    id: '5',
    product: 'Lorem Ipsum',
    orderId: '#2422',
    date: 'Nov 4th, 2023',
    customer: { name: 'Shubok', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Delivered',
    amount: '$200.00'
  },
  {
    id: '6',
    product: 'Lorem Ipsum',
    orderId: '#2421',
    date: 'Nov 2nd, 2023',
    customer: { name: 'Tagore', avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop' },
    status: 'Delivered',
    amount: '$200.00'
  }
];

const OrdersTable: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <input type="checkbox" className="rounded" />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/50">
                <TableCell>
                  <input type="checkbox" className="rounded" />
                </TableCell>
                <TableCell className="font-medium">{order.product}</TableCell>
                <TableCell className="text-muted-foreground">{order.orderId}</TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={order.customer.avatar} />
                      <AvatarFallback>
                        {order.customer.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span>{order.customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={order.status === 'Delivered' ? 'default' : 'destructive'}
                    className={order.status === 'Delivered' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                  >
                    ● {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            1-10 of 13 Pages
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              The page you're on
            </span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>1</option>
            </select>
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;