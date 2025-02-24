export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    publishedDate: string;
    viewCount: number;
    readingTime: number;
    tags: string[];
    main: boolean;
  }
