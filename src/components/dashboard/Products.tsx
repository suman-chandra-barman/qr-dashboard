"use client"
import { Search, Trash2, ChevronLeft, ChevronRight, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const mockProducts = {
  Hat: [
    {
      id: "DZ1231",
      name: "Beigi Coffe (Navy)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Beigi Coffe (Navy)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Story Honzo (Cream)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Kanky Kitadakate (Green)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Story Honzo (Black)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Story Honzo (Cream)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Beigi Coffe (Navy)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "DZ1231",
      name: "Kanky Kitadakate (Green)",
      price: 20.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
  ],
  Mug: [
    {
      id: "MG001",
      name: "Coffee Mug (White)",
      price: 15.0,
      size: 350,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "MG002",
      name: "Tea Mug (Blue)",
      price: 18.0,
      size: 300,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
  ],
  Keychains: [
    {
      id: "KC001",
      name: "Metal Keychain",
      price: 5.0,
      size: 5,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "KC002",
      name: "Leather Keychain",
      price: 8.0,
      size: 7,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
  ],
  Bag: [
    {
      id: "BG001",
      name: "Canvas Bag",
      price: 25.0,
      size: 40,
      date: "04/17/23 at 8:25 PM",
      status: "Available",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "BG002",
      name: "Leather Bag",
      price: 45.0,
      size: 35,
      date: "04/17/23 at 8:25 PM",
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
  ],
}
const categories = [
  { name: "Hat", count: 50, active: true },
  { name: "Mug", count: 26, active: false },
  { name: "Keychains", count: 121, active: false },
  { name: "Bag", count: 21, active: false },
]
const Products = ({categoryName, onItemClick}:{categoryName:string, onItemClick: (item: string) => void })=> {
  const [selectedCategory, setSelectedCategory] = useState("Hat")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Mock filtered products based on search and category
  const filteredProducts = mockProducts[selectedCategory as keyof typeof mockProducts] || []
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(paginatedProducts.map((p) => p.id))
    } else {
      setSelectedProducts([])
    }
  }

  const handleSelectProduct = (productId: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, productId])
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    }
  }

  const handleDeleteProduct = (productId: string) => {
    // Implement delete logic here
    console.log("Delete product:", productId)
  }

  const handleBulkDelete = () => {
    // Implement bulk delete logic here
    console.log("Bulk delete products:", selectedProducts)
    setSelectedProducts([])
  }

  useEffect(() => {
    setSelectedCategory(categoryName);
  }, [categoryName]);

    return (
         <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Product</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Dashboard</span>
              <span>›</span>
              <span>Product</span>
              <span>›</span>
              <span className="text-blue-600">{selectedCategory}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            {/* Search and Category Tabs */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search for id, name product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {selectedProducts.length > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleBulkDelete}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Selected ({selectedProducts.length})
                  </Button>
                )}
              </div>

              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() =>{
                       setSelectedCategory(category.name)
                       onItemClick(`products-${category.name.toLowerCase()}`)
                    }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      selectedCategory === category.name
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                    )}
                  >
                    {category.name === "Hat" ? "New Balance Hat" : category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="w-12 px-6 py-3 text-left">
                      <Checkbox
                        checked={selectedProducts.length === paginatedProducts.length && paginatedProducts.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedProducts.map((product, index) => (
                    <tr key={`${product.id}-${index}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Checkbox
                          checked={selectedProducts.includes(product.id)}
                          onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <div className="text-sm text-blue-600 font-medium">{product.id}</div>
                            <div className="text-sm text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.date}</td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={product.status === "Available" ? "default" : "destructive"}
                          className={
                            product.status === "Available" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""
                          }
                        >
                          {product.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Trash2 size={16} onClick={() => handleDeleteProduct(product.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
                {filteredProducts.length} Pages
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">This page on</span>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Products;