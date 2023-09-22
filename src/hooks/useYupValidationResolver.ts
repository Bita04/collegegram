import { useCallback } from "react";
import * as yup from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ValidationResult<A extends yup.ObjectSchema<any>> = {
  values: yup.InferType<A>;
  errors: Record<string, { type: string; message: string }>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ValidationResolver<A extends yup.ObjectSchema<any>> = (
  data: unknown
) => Promise<ValidationResult<A>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useYupValidationResolver: <A extends yup.ObjectSchema<any>>(
  validationSchema: A
) => ValidationResolver<A> = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (validationErrors) {
        const errors = (validationErrors as yup.ValidationError).inner.reduce(
          (allErrors, currentError) => ({
            ...allErrors,
            [currentError.path!]: {
              type: currentError.type ?? "validation",
              message: currentError.message,
            },
          }),
          {} as Record<string, { type: string; message: string }>
        );

        return {
          values: {},
          errors,
        };
      }
    },
    [validationSchema]
  );

export default useYupValidationResolver;
