"use client"
import { useForm } from "react-hook-form"
import SocialLogin from "./social-login"
import { UserLoginType } from "@/Types/types"
import TextInput from "./textinput"
import SubmitButton from "./submitbutton"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomCarousel from "./recepiecarousel"
import { LogIn } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react";
import toast from "react-hot-toast"

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginType>()

  // async function onSubmit(data:UserLoginType){
  //   try {
  //     setLoading(true)
  //     const response = await fetch(`${baseUrl}/api/v1/userlogins`,{
  //       method: "POST",
  //       headers: {"Content-Type":"application/json"},
  //       body: JSON.stringify(data)
  //     })
  //     if(response.status === 403){
  //       setError("Wrong Credentials")
  //     } else if (response.status === 200) {
  //       router.push("/dashboard")
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     setLoading(false)
  //   }
  // }
  async function onSubmit(data: UserLoginType) {
    try {
      setLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
        // setShowNotification(true);
      } else {
        // Sign-in was successful
        // setShowNotification(false);
        reset();
        setLoading(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Field Required")
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <div className="flex w-full h-full">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      {error && <span className="text-xs text-red-600/45">{error}</span>}
        <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="">
            <TextInput
              register={register}
              errors={errors}
              label="Email"
              name="email"
            />
          </div>
            <div className="">
              <TextInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
              />
              </div>
          <SubmitButton
            className="w-full"
            buttonIcon={LogIn}
            // title={editingId ? `Update ${title}` : `Save ${title}`}
            title = "Login"
            loading={loading}
          />
        </form>
        <div className="mt-6">
          <SocialLogin />
        </div>
        <p className="text-xs text-center mt-2">Don`&apos;`t Have An Account, <Link className="underline" href="/register">Register</Link></p>
      </div>
      <div className="hidden md:w-1/2 bg-gray-100 md:flex items-center justify-center">
        <CustomCarousel/>
      </div>
    </div>
  )
}

