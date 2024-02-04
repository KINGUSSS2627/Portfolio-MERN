import Textarea from '@mui/joy/Textarea';

export default function TextArea() {
  return (
    <Textarea
      placeholder="Type in here…"
      minRows={3}
      sx={{
        '&::before': {
          display: 'none',
        },
        '&:focus-within': {
          outline: '2px solid var(--Textarea-focusedHighlight)',
          outlineOffset: '2px',
        },
      }}
    />
  );
}
