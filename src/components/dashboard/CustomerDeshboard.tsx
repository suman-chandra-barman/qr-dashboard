"use client"

import { useState } from "react"
import {
  Search,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ArrowDown,
  Edit,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock customer data
const mockCustomers = [
  {
    id: "ID 12451",
    name: "Leslie Alexander",
    email: "georgia@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  {
    id: "ID 12452",
    name: "Guy Hawkins",
    email: "guys@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
  {
    id: "ID 12453",
    name: "Kristin Watson",
    email: "kristin@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  },
  {
    id: "ID 12453",
    name: "Kristin Watson",
    email: "kristin@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  },
  {
    id: "ID 12452",
    name: "Guy Hawkins",
    email: "guys@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
  {
    id: "ID 12451",
    name: "Leslie Alexander",
    email: "georgia@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  {
    id: "ID 12453",
    name: "Kristin Watson",
    email: "kristin@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  },
  {
    id: "ID 12451",
    name: "Leslie Alexander",
    email: "georgia@example.com",
    phone: "+62 819 1314 1435",
    purchases: 21.78,
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
]

type SortOrder = "asc" | "desc" | null

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [purchasesSort, setPurchasesSort] = useState<SortOrder>(null)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCustomers(paginatedCustomers.map((c) => c.id))
    } else {
      setSelectedCustomers([])
    }
  }

  const handleSelectCustomer = (customerId: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomers([...selectedCustomers, customerId])
    } else {
      setSelectedCustomers(selectedCustomers.filter((id) => id !== customerId))
    }
  }

  const handleEditCustomer = (customerId: string) => {
    console.log("Edit customer:", customerId)
  }

  const handleDeleteCustomer = (customerId: string) => {
    console.log("Delete customer:", customerId)
  }

  const handleBulkDelete = () => {
    console.log("Bulk delete customers:", selectedCustomers)
    setSelectedCustomers([])
  }

  const updatePurchasesSort = (value: SortOrder) => {
    setPurchasesSort(value)
    console.log("Purchases sort updated:", value)
  }

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (purchasesSort === "asc") {
      return a.purchases - b.purchases
    } else if (purchasesSort === "desc") {
      return b.purchases - a.purchases
    }
    return 0
  })

  const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCustomers = sortedCustomers.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Customer</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Dashboard</span>
              <span>›</span>
              <span className="text-blue-600">Customer</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search for id, name Customer"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {selectedCustomers.length > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleBulkDelete}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Selected ({selectedCustomers.length})
                  </Button>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/50 border-b border-gray-200">
                  <tr className="h-12">
                    <th className="w-12 px-6 py-3 text-left">
                      <Checkbox
                        checked={
                          selectedCustomers.length === paginatedCustomers.length && paginatedCustomers.length > 0
                        }
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-sm font-medium text-gray-700">Name Customer</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-sm font-medium text-gray-700">Contact</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Purchases</span>
                        <div className="flex flex-col">
                          <button
                            onClick={() => updatePurchasesSort("desc")}
                            className={`p-0.5 hover:bg-gray-100 rounded ${
                              purchasesSort === "desc" ? "text-blue-600" : "text-gray-400"
                            }`}
                          >
                            <ChevronUp className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => updatePurchasesSort("asc")}
                            className={`p-0.5 hover:bg-gray-100 rounded ${
                              purchasesSort === "asc" ? "text-blue-600" : "text-gray-400"
                            }`}
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-sm font-medium text-gray-700">Address</span>
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedCustomers.map((customer, index) => (
                    <tr key={`${customer.id}-${index}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Checkbox
                          checked={selectedCustomers.includes(customer.id)}
                          onCheckedChange={(checked) => handleSelectCustomer(customer.id, checked as boolean)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-blue-600 font-medium">{customer.id}</div>
                          <div className="text-sm text-gray-900">{customer.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-gray-900">{customer.email}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">${customer.purchases.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{customer.address}</td>
                      <td className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditCustomer(customer.id)}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDeleteCustomer(customer.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedCustomers.length)} of{" "}
                {sortedCustomers.length} Pages
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
    </div>
  )
}
