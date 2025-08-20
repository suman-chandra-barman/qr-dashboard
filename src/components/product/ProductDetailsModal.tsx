import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import jsPDF from "jspdf";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  size: number;
  date: string;
  time: string;
  image: string;
}

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({
  product,
  isOpen,
  onClose,
}: ProductDetailsModalProps) {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen || !product) return null;

  const handleDownload = async () => {
    setDownloading(true);

    // Simulate processing delay
    setTimeout(() => {
      const doc = new jsPDF();

      // Set page background color (light gray)
      doc.setFillColor(248, 250, 252);
      doc.rect(0, 0, 210, 297, "F");

      // Header section with blue background
      doc.setFillColor(59, 130, 246);
      doc.rect(0, 0, 210, 50, "F");

      // Company/Header title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text("PRODUCT DETAILS", 105, 25, { align: "center" });

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("Generated on " + new Date().toLocaleDateString(), 105, 35, {
        align: "center",
      });

      doc.setFillColor(255, 255, 255);
      doc.rect(15, 65, 180, 180, "F");

      // Add border to the info section
      doc.setDrawColor(229, 231, 235);
      doc.setLineWidth(1);
      doc.rect(15, 65, 180, 180, "S");

      // Section title
      doc.setTextColor(31, 41, 55);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Product Information", 25, 85);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      const details = [
        { label: "User Name:", value: "Enrique" },
        { label: "Product Name:", value: product.name },
        { label: "Phone Number:", value: "098 893459" },
        { label: "Date:", value: product.date },
        { label: "Price:", value: `$${product.price.toFixed(2)}` },
        { label: "Product ID:", value: product.id },
        { label: "Category:", value: product.category },
        { label: "Size:", value: `${product.size} units` }, // Added units to size for clarity
      ];

      let yPosition = 105;
      details.forEach((detail, index) => {
        // Alternate row background colors
        if (index % 2 === 0) {
          doc.setFillColor(249, 250, 251);
          doc.rect(20, yPosition - 10, 170, 18, "F");
        }

        // Label in bold
        doc.setFont("helvetica", "bold");
        doc.setTextColor(75, 85, 99);
        doc.text(detail.label, 25, yPosition);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(31, 41, 55);

        // Handle long text by splitting if necessary
        const maxWidth = 70;
        const textLines = doc.splitTextToSize(detail.value, maxWidth);
        doc.text(textLines, 120, yPosition);

        yPosition += 18; // Increased spacing between rows
      });

      doc.setDrawColor(59, 130, 246);
      doc.setLineWidth(2);
      doc.line(25, 235, 185, 235);

      doc.setTextColor(156, 163, 175);
      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.text("Product Management System", 105, 250, { align: "center" });

      // Save the PDF
      doc.save(`product-details-${product.id}.pdf`);
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal content */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Product Details
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">User Name:</span>
              <span className="text-gray-800 font-medium">Enrique</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Product Name:</span>
              <span className="text-gray-800 font-medium">{product.name}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Phone Number:</span>
              <span className="text-gray-800 font-medium">098 893459</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-800 font-medium">{product.date}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Price:</span>
              <span className="text-gray-800 font-medium">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Product ID:</span>
              <span className="text-gray-800 font-medium">{product.id}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Category:</span>
              <span className="text-gray-800 font-medium">
                {product.category}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Size:</span>
              <span className="text-gray-800 font-medium">
                {product.size} units
              </span>
            </div>
          </div>

          {/* Download button */}
          <Button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 mt-6 rounded-full"
          >
            {downloading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              "Download"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
