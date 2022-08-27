import { Image, Placeholder } from "./styles/Avatar";

export interface AvatarProps {
  user: { image?: string; login: string };
}

export default function Avatar(props: AvatarProps) {
  const { user } = props;
  if (user.image)
    return <Image src={user.image} alt={`${user.login}'s avatar`} />;

  return <Placeholder>{user.login[0]}</Placeholder>;
}
