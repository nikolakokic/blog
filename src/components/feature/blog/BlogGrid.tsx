// src/components/blog/BlogGrid.tsx
import { BlogPost as BlogPostType} from '@/types';
import { BlogPost } from './BlogPost';

interface BlogGridProps {
  posts: BlogPostType[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="blog-grid" role="feed" aria-busy="false">
      <div className="blog-grid__container">
        {posts.map((post, index) => (
          <div className="blog-grid__item" key={post.id}>
            <BlogPost post={post} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}