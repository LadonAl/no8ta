import { PropsWithChildren, forwardRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Container, Icon, Input } from "./styles/SearchBar";

export interface SearchBarProps extends PropsWithChildren {
  w: string;
}

export default forwardRef<HTMLInputElement, SearchBarProps>(function (
  props,
  ref,
) {
  const { w, ...rest } = props;
  return (
    <Container w={w}>
      <Icon />
      <Input ref={ref} {...rest}></Input>
    </Container>
  );
});
