import { z } from 'zod';
const PW_REGEX = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$";
const validationSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'email should be string',
      required_error: 'email name is required',
    })
    .email('please provide a valid email'),
  password: z.string({
    invalid_type_error: 'password should be string',
    required_error: 'password is required',
  }).regex(
    PW_REGEX,
    "password should be alphanumeric and sould be atleast 6 letters long"
  ),
});

export default validationSchema;
