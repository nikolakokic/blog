import { Suspense } from 'react';
import { BlogGrid } from '@/components/feature/blog/BlogGrid';
import { LoadingSpinner } from '@/components/ui/Loading';
import { FeaturedPost } from '@/components/feature/blog/FeaturedPost';
import { BlogPost } from '@/types';
import { calculateReadingTime } from '@/lib/utils';

async function getPosts() {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const posts = await res.json();
  
  return posts.map((post: BlogPost) => ({
    ...post,
    readingTime: calculateReadingTime(post.content)
  }));
}

export default async function HomePage() {
  const posts: BlogPost[] = await getPosts();
  const featuredPost = posts.find(post => post.main === true) || posts[0]
  return (
    <main className="blog">
      <div className="wrapper">        
        <Suspense fallback={<LoadingSpinner />}>
          <div className="blog__featured">
            <FeaturedPost post={featuredPost} />
          </div>
        </Suspense>

        <section className="blog__latest" aria-labelledby="latest-posts-title">
          <h2 id="latest-posts-title" className="blog__latest-title">
            Latest Posts
          </h2>
          <Suspense fallback={<LoadingSpinner />}>
            <div className="blog__latest-grid">
              <BlogGrid posts={posts} />
            </div>
          </Suspense>
        </section>
      </div>
    </main>
  );
}