import Input from '@mui/joy/Input';

export default function FloatingInput(props) {
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
