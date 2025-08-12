// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { TrendingUp, Package, ShoppingCart, DollarSign } from 'lucide-react';

// interface ProductStatsProps {
//   productName: string;
//   totalSales: string;
//   revenue: string;
//   inStock: string;
//   orders: string;
// }

// const ProductStats: React.FC<ProductStatsProps> = ({ 
//   productName, 
//   totalSales, 
//   revenue, 
//   inStock, 
//   orders 
// }) => {
//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
//       <Card className="hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium text-muted-foreground">
//             Total Sales
//           </CardTitle>
//           <ShoppingCart className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{totalSales}</div>
//           <div className="flex items-center gap-1 text-sm mt-1">
//             <TrendingUp className="h-3 w-3 text-green-500" />
//             <span className="text-green-500">+12.5%</span>
//             <span className="text-muted-foreground ml-1">from last month</span>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium text-muted-foreground">
//             Revenue
//           </CardTitle>
//           <DollarSign className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{revenue}</div>
//           <div className="flex items-center gap-1 text-sm mt-1">
//             <TrendingUp className="h-3 w-3 text-green-500" />
//             <span className="text-green-500">+8.2%</span>
//             <span className="text-muted-foreground ml-1">from last month</span>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium text-muted-foreground">
//             In Stock
//           </CardTitle>
//           <Package className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{inStock}</div>
//           <div className="flex items-center gap-1 text-sm mt-1">
//             <Badge variant="outline" className="text-xs">
//               Available
//             </Badge>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium text-muted-foreground">
//             Orders
//           </CardTitle>
//           <ShoppingCart className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{orders}</div>
//           <div className="flex items-center gap-1 text-sm mt-1">
//             <TrendingUp className="h-3 w-3 text-green-500" />
//             <span className="text-green-500">+15.3%</span>
//             <span className="text-muted-foreground ml-1">from last week</span>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export const HatDashboard: React.FC = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold tracking-tight">Hat Products</h1>
//         <p className="text-muted-foreground">
//           Manage and track your hat inventory and sales performance.
//         </p>
//       </div>
      
//       <ProductStats 
//         productName="Hat"
//         totalSales="2,450"
//         revenue="$24,500"
//         inStock="850"
//         orders="156"
//       />

//       <Card>
//         <CardHeader>
//           <CardTitle>Hat Categories</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Baseball Caps</h3>
//               <p className="text-sm text-muted-foreground mb-2">Most popular category</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">1,200</span>
//                 <Badge>Best Seller</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Beanies</h3>
//               <p className="text-sm text-muted-foreground mb-2">Winter collection</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">800</span>
//                 <Badge variant="secondary">Seasonal</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Sun Hats</h3>
//               <p className="text-sm text-muted-foreground mb-2">Summer collection</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">450</span>
//                 <Badge variant="outline">Limited</Badge>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export const MugDashboard: React.FC = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold tracking-tight">Mug Products</h1>
//         <p className="text-muted-foreground">
//           Track your mug collection sales and inventory levels.
//         </p>
//       </div>
      
//       <ProductStats 
//         productName="Mug"
//         totalSales="3,200"
//         revenue="$19,200"
//         inStock="1,200"
//         orders="89"
//       />

//       <Card>
//         <CardHeader>
//           <CardTitle>Mug Types</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Coffee Mugs</h3>
//               <p className="text-sm text-muted-foreground mb-2">Classic design</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">1,800</span>
//                 <Badge>Popular</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Travel Mugs</h3>
//               <p className="text-sm text-muted-foreground mb-2">Insulated design</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">900</span>
//                 <Badge variant="secondary">Premium</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Custom Mugs</h3>
//               <p className="text-sm text-muted-foreground mb-2">Personalized</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">500</span>
//                 <Badge variant="outline">Custom</Badge>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export const KeychainsDashboard: React.FC = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold tracking-tight">Keychain Products</h1>
//         <p className="text-muted-foreground">
//           Monitor your keychain accessories and promotional items.
//         </p>
//       </div>
      
//       <ProductStats 
//         productName="Keychains"
//         totalSales="5,800"
//         revenue="$11,600"
//         inStock="2,400"
//         orders="234"
//       />

//       <Card>
//         <CardHeader>
//           <CardTitle>Keychain Categories</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Metal Keychains</h3>
//               <p className="text-sm text-muted-foreground mb-2">Durable material</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">2,200</span>
//                 <Badge>Durable</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Plastic Keychains</h3>
//               <p className="text-sm text-muted-foreground mb-2">Colorful designs</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">2,800</span>
//                 <Badge variant="secondary">Colorful</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">LED Keychains</h3>
//               <p className="text-sm text-muted-foreground mb-2">With light feature</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">800</span>
//                 <Badge variant="outline">Tech</Badge>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export const BagDashboard: React.FC = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold tracking-tight">Bag Products</h1>
//         <p className="text-muted-foreground">
//           Manage your bag collection and track sales performance.
//         </p>
//       </div>
      
//       <ProductStats 
//         productName="Bags"
//         totalSales="1,850"
//         revenue="$55,500"
//         inStock="650"
//         orders="78"
//       />

//       <Card>
//         <CardHeader>
//           <CardTitle>Bag Types</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Tote Bags</h3>
//               <p className="text-sm text-muted-foreground mb-2">Eco-friendly option</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">800</span>
//                 <Badge>Eco-Friendly</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Backpacks</h3>
//               <p className="text-sm text-muted-foreground mb-2">Multi-purpose</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">600</span>
//                 <Badge variant="secondary">Versatile</Badge>
//               </div>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold mb-2">Laptop Bags</h3>
//               <p className="text-sm text-muted-foreground mb-2">Professional use</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">450</span>
//                 <Badge variant="outline">Professional</Badge>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };