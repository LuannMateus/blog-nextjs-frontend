import { useEffect } from 'react';
import { loadPosts } from '../api/loadPosts';

export default function Index() {
  useEffect(() => {
    loadPosts({ authorSlug: 'luan-mateus' }).then(console.log);
  }, []);

  return <h1>HOME</h1>;
}
