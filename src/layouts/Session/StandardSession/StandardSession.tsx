import { forwardRef, ForwardRefExoticComponent } from "react";
import { Container, Header, Column } from "./styles/StandardSession";

interface StandardSessionLayoutType extends ForwardRefExoticComponent<any> {
  Header: typeof Header;
  Column: typeof Column;
}

const standardSessionLayoutForwardRef = forwardRef<HTMLElement, any>((props, ref) => <Container forwardedRef={ref} {...props} />);

export default {
  ...standardSessionLayoutForwardRef,
  Header,
  Column,
} as StandardSessionLayoutType;
