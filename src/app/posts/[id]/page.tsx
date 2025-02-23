import Image from 'next/image';
import { BlogPost } from '@/types';
import { notFound } from 'next/navigation';
import { calculateReadingTime } from '@/lib/utils';

import type { Metadata } from 'next'

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPost(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
  };
}


async function getPost(id: string) {
  try {
    const res = await fetch(`http://localhost:3001/posts`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();
    const post = posts.find((p: BlogPost) => p.id === parseInt(id));

    if (!post) {
      return notFound();
    }

    return {
      ...post,
      readingTime: calculateReadingTime(post.content)
    };
  } catch (error) {
    throw new Error(`Failed to fetch post ${error}` );
  }
}

export default async function SinglePostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const post: BlogPost = await getPost(params.id);

  return (
    <article className="single-post">
      <div className="wrapper">

        <div className="single-post__header">
          <div className="single-post__meta">
            {post.tags && (
              <ul className="post__tags" aria-label="Post categories">
                {post.tags.map(tag => (
                  <li key={tag} className="post__tag-item">
                    <span className="post__tag">{tag}</span>
                  </li>
                ))}
              </ul>
            )}
            <h1 className="single-post__title">{post.title}</h1>
            <div className="single-post__info">
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString()}
              </time>
              <span className='single-post__reading'>{post.readingTime} min read</span>
            </div>
          </div>
        </div>

        <div className="single-post__featured-image">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="single-post__image"
            priority
          />
        </div>

        <div className="single-post__content">
          <div className="single-post__body">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
}