/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import React from "react";
type ImageInputProps = {
title: string;
imageUrl: string;
setImageUrl: any;
endpoint: any;
};
export default function ImageInput({
title,
imageUrl,
setImageUrl,
endpoint,
}: ImageInputProps) {
return (
<div className="overflow-hidden">
  <div>
    <p>{title}</p>
  </div>
  <div>
    <Card className="">
        <div className="flex items-center justify-center my-2">
            <div className="h-40 w-40 rounded-full border-2 border-gray-500">
              <Image
                alt={title}
                className="w-full h-full object-contain"
                height={300}
                src={imageUrl}
                width={500}
              />
            </div>
        </div>

      <UploadButton
        className="ut-button:bg-black ut-button:w-full mx-2"
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
 
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </Card>
  </div>
</div>
 
);
}
 