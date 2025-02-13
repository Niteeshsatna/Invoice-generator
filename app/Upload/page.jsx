"use client"
import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

export default function page() {
  const [imageUrl, setImageUrl] = useState("")
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="mb-12">Uploading Files Using cloudinary.

      </h2>

      <CldUploadButton
        onSuccess={(data) => {
          console.log(data);
          setImageUrl(data.info.secure_url)
        }}
        className="bg-purple-600 text-white py-3 px-6 rounded mb-18"
        uploadPreset="InvoicePreset"
      />

      {imageUrl && (
        <CldImage
          width="240"
          height="240"
          src={imageUrl}
          sizes="100vw"
          alt="Description of my image"
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
