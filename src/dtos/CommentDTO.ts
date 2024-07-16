export interface CommentDTO {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  postId: string;
  author: {
    name: string;
  };
  _count: {
    likes: number;
  };
  isLiked: boolean;
  fromMe: boolean;
  isAuthorOfPost: boolean;
}
