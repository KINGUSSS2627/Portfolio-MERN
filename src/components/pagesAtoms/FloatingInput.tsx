import React from 'react';
import Input from '@mui/joy/Input';

interface FloatingInputProps {
  startDecorator?: React.ComponentType; // Specify the type for startDecorator
  placeholder?: string; // Specify the type for placeholder
}

export default function FloatingInput(props: FloatingInputProps) {
  const { startDecorator: StartDecorator, placeholder } = props;

  return (
    <Input
      startDecorator={StartDecorator && <StartDecorator />}
      sx={{
        "--Input-placeholderOpacity": 0.5
      }}
      placeholder={placeholder}
    />
  );
}
