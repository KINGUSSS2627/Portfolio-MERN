import React from 'react';
import { CFooter, CFooterProps } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CustomFooterProps extends CFooterProps {
  style?: React.CSSProperties & {
    '--my-css-var'?: number;
    '--my-another-css-var'?: string;
    '--cui-footer-bg'?: string;
  };
}

function Footer() {
  const vari: CustomFooterProps['style'] = {
    '--my-css-var': 10,
    '--my-another-css-var': 'red',
    '--cui-footer-bg': 'transparent',
  };

  const year = new Date().getFullYear();

  return (
    <>
      <CFooter position="fixed" style={vari}>
        <div>
          <span>Portfolio &copy; {year}</span>
        </div>
        <div>
          <span>Developed By Shreshth Gupta</span>
        </div>
      </CFooter>
    </>
  );
}

export default Footer;
