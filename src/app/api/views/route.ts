import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const getPost = await fetch(`http://localhost:3001/posts/${id}`);
    
    if (!getPost.ok) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const post = await getPost.json();
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        viewCount: post.viewCount + 1
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const updatedPost = await res.json();
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating view count:', error);
    return NextResponse.json(
      { error: 'Failed to update view count' },
      { status: 500 }
    );
  }
}