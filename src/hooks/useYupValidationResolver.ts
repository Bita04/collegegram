import * as yup from "yup";

type FormValues = Record<string, any>;

type ValidationResult = {
  values: FormValues;
  errors: Record<string, { type: string; message: string }>;
};

type ValidationResolver = (data: FormValues) => Promise<ValidationResult>;

const useYupValidationResolver: (
  validationSchema: yup.ObjectSchema<any>
) => ValidationResolver = validationSchema =>
  async data => {
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
        (allErrors: any, currentError: any) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? 'validation',
            message: currentError.message,
          },
        }),
        {}
      );

      return {
        values: {},
        errors,
      };
    }
  };

  export default useYupValidationResolver;