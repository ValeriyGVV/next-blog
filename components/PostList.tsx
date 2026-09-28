import { categoryLabels } from "@/lib/categories";
import { excerpt } from "@/lib/format";
import { Post } from "@/types/blog";
import Link from "next/link";
import PostCover from "./PostCover";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  // Якщо постів нема=====================================

  if (posts.length === 0)
    return (
      <div className="post-list">
        <h2>Публікацій поки відсутні...</h2>
        <p>Коли поступлять нові публікації, вони появляться тут...</p>
      </div>
    );

  //     ВИВІД ПОСТІВ++++++++++++++++++++++++++++++++++++
  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post-list__item" key={post.id}>
          {/* <div className="">PostCover</div> */}
            <PostCover 
						className="post-list__cover"
						src={post.cover_url}
						alt={`Обкладинка публікації:${post.title}`}
						width={900}
						height={600}
						priority
		
						/>



          <div className="post-list__content">
            <span className="category">
							{ categoryLabels[post.category] }
							</span>
            <h2>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
						<p>{(excerpt(post.content))}</p>
            </div>
						<Link className="post-list__read meta"
						href={`/posts/${post.id}`}
						> Читати далі<span>-</span>
						</Link>

        </article>
      ))}
    </div>
  );
};
export default PostList;
