import { Container, Text } from "./styles/Category";
import CircleIcon from "@components/Session/Common/CircleIcon/CircleIcon";
import IconMapper from "@helpers/IconMapper";
import { Category as CategoryType } from "@queries/categories";

export interface CategoryProps {
  category: CategoryType;
}

export default function Category({ category }: CategoryProps) {
  let { name, icon } = category;
  if (!icon) icon = "";
  const Icon = IconMapper[icon as keyof typeof IconMapper];
  return (
    <Container>
      <div>
        <CircleIcon Icon={Icon} />
      </div>
      <div>
        <Text>{name}</Text>
      </div>
    </Container>
  );
}
