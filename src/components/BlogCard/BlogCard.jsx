import { formatDistanceToNow } from 'date-fns';

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  StyleDate,
} from './BlogCard.styled';

export const BlogCard = ({
  poster,
  tag,
  description,
  title,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName} />
          <UserInfo>
            <UserName>{userName}</UserName>
            <StyleDate>
              {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
            </StyleDate>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
