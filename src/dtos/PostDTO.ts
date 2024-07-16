export interface PostsDTO {
  posts: Post[];
}

export interface Post {
  authorId: string;
  companyId: string;
  content: string;
  createdAt: string;
  id: string;
  postImages: {
    createdAt: Date;

    id: string;
    image: string;
    postId: string;
  }[];
  rating?: number;
  updatedAt: string;
  visitedAt?: string;
  isLiked: boolean;
  _count: {
    Like: number;
    Comment: number;
  };
}
