interface UserPhoto {
  createdAt: string;
  id: string;
  image: string;
  updatedAt: string;
  userId: string;
}

interface Author {
  name: string;
  userPhoto: UserPhoto;
  username: string;
}

export interface CompanyListDTO {
  company_id: string;
  content: string;
  created_at: string;
  id: string;
  listImages: any[]; // Use the appropriate type for listImages array elements
  list_id: string;
  order: number;
  updated_at: string | null;
  name: string;
  photo: string;
  isFollowed: boolean;
  lat: number;
  lng: number;
}

export interface ListDTO {
  author: Author;
  authorId: string;
  companyList: CompanyListDTO[];
  created_at: string;
  description: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updated_at: string | null;
}
