import * as yup from "yup";

export const courseCreateValidation=yup.object({
    name:yup
    .string()
    .required("name is required"),

    discription:yup
    .string()
    .required("discription is required")
    .min(10,"discription must contain at least five characters"),

    language:yup
    .string()
    .required("language is required"),

    document: yup
    .mixed()
    .required("Document is required")
    .test(
      "fileType",
      "Only PDF files are allowed",
      (value:any) => value && value[0] && value[0].type === "application/pdf"
    )
    .test(
      "fileSize",
      "File size should be less than 50MB",
      (value:any) => value && value[0] && value[0].size <= 50 * 1024 * 1024 
    ),

    thumbnail: yup
    .mixed()
    .required("Thumbnail is required")
    .test(
      "fileType",
      "Only JPEG and PNG files are allowed",
      (value:any) =>
        value &&
        value[0] &&
        (value[0].type === "image/jpeg" || value[0].type === "image/png")
    )
    .test(
      "fileSize",
      "File size should be less than 50MB",
      (value:any) => value && value[0] && value[0].size <= 50 * 1024 * 1024 // 50MB size limit
    ),
    
    video: yup
    .mixed()
    .required("Video is required")
    .test(
      "fileType",
      "Only MP4 and AVI files are allowed",
      (value:any) =>
        value &&
        value[0] &&
        (value[0].type === "video/mp4" || value[0].type === "video/x-msvideo")
    )
    .test(
      "fileSize",
      "File size should be less than 50MB",
      (value:any) => value && value[0] && value[0].size <= 50 * 1024 * 1024 // 50MB size limit
    ),
    category: yup.string().required("Category is required"),
     price:yup.number().required("price is required"),
     offerprice:yup.number().required("offerprice is required")
})

