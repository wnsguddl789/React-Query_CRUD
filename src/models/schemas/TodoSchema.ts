import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CreateTodoSchema = yup
  .object({
    title: yup.string().required("title is required"),
    content: yup.string().required("content is required"),
  })
  .required();

const UpdateTodoSchema = yup
  .object({
    title: yup.string().required("title is required"),
    content: yup.string().required("content is required"),
  })
  .required();

const resolver = {
  create: yupResolver(CreateTodoSchema),
  update: yupResolver(UpdateTodoSchema),
};

export default resolver;
