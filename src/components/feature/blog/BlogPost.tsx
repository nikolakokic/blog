import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types';

interface BlogPostProps {
    post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
    return (
        <article className="post">
            <div className="post__image-container">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="post__image"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <div className="post__content">
                <div className="post__top">
                    {post.tags && (
                        <ul className="post__tags" aria-label="Post categories">
                            {post.tags.map(tag => (
                                <li key={tag} className="post__tag-item">
                                    <span className="post__tag">{tag}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <h3 className="post__title">
                        {post.title}
                    </h3>
                    <p className="post__description">{post.description}</p> 
                </div>


                <div className="post__footer">
                    <time className="post__date" dateTime={post.publishedDate}>
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <span
                        className="post__reading-time"
                        aria-label={`${post.readingTime} minutes read`}
                    >
                        {post.readingTime} min read
                    </span>
                    <Link href={`/posts/${post.id}`} className="post__link hover">
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    );
}