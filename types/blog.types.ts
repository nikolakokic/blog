export interface BlogPost {
    id: number;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    publishedDate: string;
    viewCount: number;
    readingTime: number;
    tags?: string[];
  }
  
  export interface BlogCardProps {
    post: BlogPost;
  }