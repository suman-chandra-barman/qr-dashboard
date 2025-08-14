import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { ForgotPasswordModal } from "@/components/setting/ForgotPasswordModal";
import { Checkbox } from "@/components/ui/checkbox";
import signinImage from "@/assets/signin.png";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
    const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Sign in data:", data);
      // Show success toast using Sonner
      toast.success("You have been signed in successfully!");
    } catch (error) {
      // Show error toast using Sonner
      toast.error("Failed to sign in. Please check your credentials.");
    }
  };

   const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={signinImage}
              alt="Shopping illustration"
              className="max-w-xl h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Sign In Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="flex items-center mb-8">
              <Button variant="ghost" size="sm" className="p-0 h-auto mr-3" onClick={handleBack}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">Sign In</h1>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email..."
                            className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            className="pl-10 pr-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-auto p-0"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          {/* Add some styles to the checkbox */}
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                          />
                        </FormControl>
                        <label className="text-sm text-gray-600">
                          Remember me
                        </label>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700"
                    onClick={() => setIsForgotPasswordOpen(true)}
                  >
                    Forgot password?
                  </Button>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-xl"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Signing In..." : "Sign In"}
                </Button>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        open={isForgotPasswordOpen}
        onOpenChange={setIsForgotPasswordOpen}
      />
    </div>
  );
}
