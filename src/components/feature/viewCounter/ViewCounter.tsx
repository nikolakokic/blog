'use client';

import { useEffect, useState } from 'react';

export function ViewCounter({ postId }: { postId: string }) {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    const hasViewed = localStorage.getItem(`viewed-${postId}`);
    
    if (!hasViewed) {
      fetch(`/api/views?id=${postId}`, {
        method: 'POST',
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem(`viewed-${postId}`, 'true');
          setViewCount(data.viewCount);
        })
        .catch(error => {
          console.error('Failed to increment view count:', error);
        });
    } else {
      fetch(`http://localhost:3001/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
          setViewCount(data.viewCount);
        })
        .catch(error => {
          console.error('Failed to fetch view count:', error);
        });
    }
  }, [postId]);

  if (viewCount === null) return null;

  return (
    <span className="single-post__views">
      {viewCount.toLocaleString()} views
    </span>
  );
}