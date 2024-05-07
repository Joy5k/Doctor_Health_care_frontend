import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
  placeholder,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field,fieldState:{error} }) => (
          <TextField
            sx={{ ...sx }}
            label={label}
            type={type}
            size={size}
            variant="outlined"
            fullWidth={fullWidth}
            placeholder={label}
                required={required}
                error={!!error?.message}
                helperText={error?.message}
          />
        )}
      />
    </>
  );
};

export default PHInput;
