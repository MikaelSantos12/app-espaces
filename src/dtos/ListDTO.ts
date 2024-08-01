interface Author {
  name: string;
  userPhoto: {
    image: string;
  };
  username: string;
}

export interface ListDTO {
  author: Author;
  authorId: string;
  created_at: string;
  description: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updated_at: string | null;
}
