"use client"
import { useForm } from "react-hook-form"
import TextInput from "./textinput"
import { useState } from "react"
import { UserType } from "@/Types/types"
import { baseUrl } from "./backend/recipieform"
import ImageInput from "./singleImageUpload"
import SubmitButton from "./submitbutton"
import CustomCarousel from "./recepiecarousel"
import { useRouter } from "next/navigation"

export default function SignupForm() {
  const [loading, setLoading] = useState(false)
  const initialImage = "/6.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>()
const router = useRouter()
  async function onSubmit(data:UserType){
    console.log(data);
    data.profile = imageUrl
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/api/v1/users`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      if(response.ok){
        router.push('/login')
      }
      setLoading(false)
      console.log(response);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  return (
    <div className="flex w-full h-full">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        {/* <h2 className="text-2xl font-bold mb-6">Create an Account</h2> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <div className="">
            <TextInput
              register={register}
              errors={errors}
              label="Full Name"
              name="name"
            />
          </div>
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
          <div className="my-2">
            <ImageInput
              title="Profile Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="imageUploader"
            />
          </div>
          <SubmitButton
            className="w-full"
            // title={editingId ? `Update ${title}` : `Save ${title}`}
            title = "Sign Up"
            loading={loading}
          />
        </form>
      </div>
      <div className="hidden md:w-1/2 md:overflow-hidden md:flex items-center justify-center">
        <CustomCarousel/>
      </div>
    </div>
  )
}

