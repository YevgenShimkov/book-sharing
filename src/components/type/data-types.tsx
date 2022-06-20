export type DUMMY_BOOK_OBJ = {
  id: number;
  title: string;
  image: string;
  author: string;
  genre: string[];
  language: string[];
  alreadyReadTimes?: number;
  availabilityStatus: boolean;
  rating: number;
  pledge?: number;
  publisher: string;
  year: number;
};

export type DUMMY_BOOKHANDLER_OBJ = {
  id: number;
  name: string;
  status: boolean;
  city: string;
  deals: number;
  following: number;
  followers: number;
  avatar: string;
  books?: DUMMY_BOOK_OBJ[];
  rating?: number;
};
