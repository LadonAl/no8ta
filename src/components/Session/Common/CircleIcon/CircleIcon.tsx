import { FC } from "react";

import { CircleFrame } from "../CircleFrame";

export interface IconProps {
  color?: string;
}

export interface CircleIconProps extends IconProps {
  Icon: FC<IconProps>;
}

export default function CircleIcon(props: CircleIconProps) {
  const { Icon, ...rest } = props;
  return (
    <CircleFrame {...rest}>
      <Icon {...rest} />
    </CircleFrame>
  );
}
