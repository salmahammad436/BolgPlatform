
export interface FormData {
  author: string;
  title: string;
  content: string;
}

 export interface FormErrors {
  author?: string;
  title?: string;
  content?: string;
}

 export interface TouchedFields {
  author: boolean;
  title: boolean;
  content: boolean;
}

export interface PostType {
    _id: string;
    title: string;
    author: string;
    content: string;
    createdAt: string;
 }
 