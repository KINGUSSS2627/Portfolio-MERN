import * as React from 'react';
import { Button, ButtonProps, buttonClasses } from '@mui/base/Button';
import { styled, Theme } from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>,
) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonProps,
  ref: React.ForwardedRef<any>,
) {
  return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

export default function Btn() {
  return <SvgButton>Button</SvgButton>;
}

const green = {
  50: '#E0F7E0',
  100: '#C1F0C1',
  200: '#A3E8A3',
  400: '#66D966',
  500: '#4CAF50',
  600: '#43A047',
  700: '#388E3C',
  800: '#2E7D32',
  900: '#1B5E20',
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: hidden; // Set overflow to hidden
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? green[600] : green[200]};
  --hover-color: ${theme.palette.mode === 'light' ? '#A3E8A3' : '#2E7D32'}; // Dark green on hover
  --internal-color: ${theme.palette.mode === 'light' ? '#E0F7E0' : '#C1F0C1'}; // Light internal color
  --active-color: ${theme.palette.mode === 'light' ? green[100] : green[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
    fill: var(--internal-color); // Use internal color for fill
    border-radius: 8px; // Adjusted to make the button slightly rounded
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color); // Change internal color on hover
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === 'dark' ? green[700] : green[200]};
    outline-offset: 2px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 4px;
    }
  }`,
);