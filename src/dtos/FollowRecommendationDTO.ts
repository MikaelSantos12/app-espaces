export interface FollowRecommendationDTO {
  id: string;
  name: string;
  email: string;
  username: string;
  city: string;
  birthday: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  UserPhoto: [
    {
      id: string;
      image: string;
    }
  ];
  postCount: number;
  isFollowing: boolean;
}
