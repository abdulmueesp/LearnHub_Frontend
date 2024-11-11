import * as yup from "yup";

export const courseCreateValidation=yup.object({
    name:yup
    .string()
    .required("name is required"),

    description:yup
    .string()
    .required("discription is required"),

    language:yup
    .string()
    .required("language is required"),

    document: yup
    .mixed()
    .required("Document is required"),

    thumbnail: yup
    .mixed()
    .required("Thumbnail is required"),
    
    video: yup
    .mixed()
    .required("Video is required"),
    
    category: yup.string().required("Category is required"),
     price:yup.number().required("price is required"),
     offerprice:yup.number().required("offerprice is required")
})

