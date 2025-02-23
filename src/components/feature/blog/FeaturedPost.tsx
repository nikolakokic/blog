import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface FeaturedPostProps {
    post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <article className="featured-post">
            <div className="featured-post__image-container">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    priority
                    className="featured-post__image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <div className="featured-post__content">
                <header className="featured-post__header">
                    {post.tags && (
                        <ul className="featured-post__tags" aria-label="Post categories">
                            {post.tags.map(tag => (
                                <li key={tag} className="featured-post__tag-item">
                                    <span className="featured-post__tag">{tag}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <h1 className="featured-post__title">
                        {post.title}
                    </h1>
                </header>

                <footer className="featured-post__footer">
                    <time
                        className="featured-post__date"
                        dateTime={post.publishedDate}
                    >
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <span
                        className="featured-post__reading-time"
                        aria-label={`${post.readingTime} minutes read`}
                    >
                        {post.readingTime} min read
                    </span>
                    <Link href={`/posts/${post.id}`} className="featured-post__link hover">
                        Read more
                    </Link>
                </footer>
            </div>
        </article>
    );
}