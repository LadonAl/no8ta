import { forwardRef, PropsWithChildren } from "react";
import { Container, Input, Icon } from "./styles/SearchBar";
import { AiOutlineSearch } from "react-icons/ai";

export interface SearchBarProps extends PropsWithChildren {
  w: string;
}

export default forwardRef<HTMLInputElement, SearchBarProps>(function (props, ref) {
  const { w, ...rest } = props;
  return (
    <Container w={w}>
      <Icon />
      <Input ref={ref} {...rest}></Input>
    </Container>
  );
});
