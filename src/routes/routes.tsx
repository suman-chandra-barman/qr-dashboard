import App from "@/App";
import Dashboard from "@/components/dashboard/Dashboard";
import { ChangePasswordModal } from "@/components/setting/ChangePasswordModal";
import EditPersonalInformation from "@/components/setting/EditPersonalInformation";
import PersonalInformation from "@/components/setting/PersonalInformation";
import AboutUsPage from "@/pages/AboutUs";
import SettingsPage from "@/pages/AccoutAndSetting";
import EditAboutUsPage from "@/pages/EditAboutUs";
import EditPrivacyPolicyPage from "@/pages/EditPrivacyPolicy";
import EditTermsCondition from "@/pages/EditTermsCondition";
import ForgotPasswordPage from "@/pages/FotgotPasswordPage";
import NotFound from "@/pages/NotFound";
import OTPVerificationPage from "@/pages/OTPVerificationPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
import SignInPage from "@/pages/SigninPage";
import TermsCondition from "@/pages/TermsCondition";
import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "@/pages/ProductsPage";
import CategoriesPage from "@/pages/CategoriesPage";
import CustomersPage from "@/pages/CustomersPage";

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
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/customers",
        element: <CustomersPage />,
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
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "otp-verification",
    element: <OTPVerificationPage />,
  },
  {
    path: "reset-password",
    element: <ResetPasswordPage />,
  },
]);

export default router;
