import { Search, Plus } from "lucide-react";
import ProductCard from "./ProductCard";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { AddProductModal } from "./AddProductModal";
import img from "../../assets/hat.png";

export interface TProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

const productData: TProduct[] = [
  {
    id: "1",
    name: "Classic Denim Jacket with Faux Shearling Lining",
    price: 89.99,
    image: img,
  },
  {
    id: "2",
    name: "Minimalist Leather Backpack for Daily Commute",
    price: 125.0,
    image: img,
  },
  {
    id: "3",
    name: "Vintage-Inspired High-Top Sneakers",
    price: 75.5,
    image: img,
  },
  {
    id: "4",
    name: "Slim-Fit Chinos in Olive Green",
    price: 59.99,
    image: img,
  },
  {
    id: "5",
    name: "Handmade Ceramic Mug Set",
    price: 32.0,
    image: img,
  },
  {
    id: "6",
    name: "Noise-Cancelling Wireless Headphones",
    price: 199.99,
    image: img,
  },
  {
    id: "7",
    name: "Stainless Steel Smartwatch with Health Tracking",
    price: 249.0,
    image: img,
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker with Long Battery Life",
    price: 65.75,
    image: img,
  },
  {
    id: "9",
    name: "Organic Cotton T-Shirt, 3-Pack",
    price: 45.0,
    image: img,
  },
  {
    id: "10",
    name: "Glass Water Bottle with Protective Silicone Sleeve",
    price: 22.5,
    image: img,
  },
];

const Categories = () => {
  console.log("hi");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSaveProduct = (productData: any) => {
    console.log("New product:", productData);
    // Implement your API call to save the product here
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Product</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <span>›</span>
          <span className="text-blue-600">Upload</span>
        </div>
      </div>

      {/* Search and Category Tabs */}
      <div className="py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex justify-between">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for id, name product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-[400px]"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-[#FFD700] text-[#003366] hover:bg-amber-400"
          >
            Add Product <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 `}
      >
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onClick={() => console.log(`Clicked on product ${product.id}`)}
          />
        ))}
      </div>
      {/* AddProductModal component */}
      <AddProductModal
        open={showAddModal}
        onOpenChange={setShowAddModal}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default Categories;
