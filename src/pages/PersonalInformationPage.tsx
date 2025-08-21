import { useState } from "react";
import { ArrowLeft, User, Mail, Phone, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router";

export default function PersonalInformationPage() {
  const navigate = useNavigate();
  // Mock user data - replace with actual user data from your state management
  const [userData] = useState({
    name: "Shoron",
    email: "shoron@gmail.com",
    phone: "+1 555 000 0000",
    profileImage: "/placeholder.svg?height=80&width=80",
  });

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 border p-3 bg-white rounded-xl">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto mr-3"
            onClick={handleBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-medium text-gray-900">
            Personal Information
          </h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex gap-4 items-center space-y-6">
            {/* Profile Image */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative">
                <Avatar className="h-30 w-30">
                  <AvatarImage
                    src={userData.profileImage || "/placeholder.svg"}
                    alt={userData.name}
                  />
                  <AvatarFallback className="text-lg">
                    {userData.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* User Name */}
              <h2 className="text-xl font-medium text-gray-900 text-center">
                {userData.name}
              </h2>
            </div>

            {/* Form Fields */}
            <div className="w-full space-y-4">
              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={userData.name}
                  readOnly
                  className="w-full pl-10 bg-gray-50 border-gray-200 text-gray-600 cursor-default"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={userData.email}
                  readOnly
                  className="w-full pl-10 bg-gray-50 border-gray-200 text-gray-600 cursor-default"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={userData.phone}
                  readOnly
                  className="w-full pl-10 bg-gray-50 border-gray-200 text-gray-600 cursor-default"
                />
              </div>
              {/* Edit Profile Button */}
              <div className="w-full pt-4 text-right">
                <Link
                  to="/settings/personal-information/edit"
                  className="block"
                >
                  <Button className=" bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                    Edit Profile
                    <Edit className="inline-block ml-2 h-4 w-4 text-gray-500" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
