import App from "@/App"
import CustomerDashboard from "@/components/dashboard/CustomerDeshboard"
import Dashboard from "@/components/dashboard/Dashboard"
import Products from "@/components/dashboard/Products"
import ProductUploads from "@/components/dashboard/ProductUploads"
import { ChangePasswordModal } from "@/components/setting/ChangePasswordModal"
import EditPersonalInformation from "@/components/setting/EditPersonalInformation"
import PersonalInformation from "@/components/setting/PersonalInformation"
import AboutUsPage from "@/pages/AboutUs"
import SettingsPage from "@/pages/AccoutAndSetting"
import EditAboutUsPage from "@/pages/EditAboutUs"
import EditPrivacyPolicyPage from "@/pages/EditPrivacyPolicy"
import EditTermsCondition from "@/pages/EditTermsCondition"
import NotFound from "@/pages/NotFound"
import PrivacyPolicyPage from "@/pages/PrivacyPolicy"
import SignInPage from "@/pages/SigninPage"
import TermsCondition from "@/pages/TermsCondition"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product-uploads",
        element: <ProductUploads />,
      },
      {
        path: "/customers",
        element: <CustomerDashboard />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/settings/personal-information",
        element: <PersonalInformation />,
      },
      {
        path: "/settings/personal-information/edit",
        element: <EditPersonalInformation />,
      },
      {
        path: "/settings/change-password",
        element: <ChangePasswordModal />,
      },
      {
        path: "/settings/terms-condition",
        element: <TermsCondition />,
      },
      {
        path: "/settings/terms-condition/edit",
        element: <EditTermsCondition />,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/settings/privacy-policy/edit",
        element: <EditPrivacyPolicyPage />,
      },
      {
        path: "/settings/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/settings/about-us/edit",
        element: <EditAboutUsPage />,
      },
      {
        path: "/products",
        element: <Products categoryName="all" onItemClick={() => {}} />,
      },
      {
        path: "/products/:category",
        element: <Products categoryName="" onItemClick={() => {}} />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
])

export default router
