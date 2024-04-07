"use client";
import {X} from "lucide-react"
import Image from "next/image"
import { UploadDropzone } from "@/lib/upload-thing";
import "@uploadthing/react/styles.css";

interface FileUploadProps { onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const filetype = value?.split(".").pop();
  if (value && filetype!="pdf") {
    return (
      <div className="realtive h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
      </div>
    )
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
        console.log(value)
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
