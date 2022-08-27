import { ForwardRefExoticComponent, forwardRef } from "react";

import { Column, Container, Header } from "./styles/StandardSession";

interface StandardSessionLayoutType extends ForwardRefExoticComponent<any> {
  Header: typeof Header;
  Column: typeof Column;
}

const standardSessionLayoutForwardRef = forwardRef<HTMLElement, any>(
  (props, ref) => <Container forwardedRef={ref} {...props} />,
);

export default {
  ...standardSessionLayoutForwardRef,
  Header,
  Column,
} as StandardSessionLayoutType;
