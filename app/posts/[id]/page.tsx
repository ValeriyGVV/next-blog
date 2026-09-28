import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";
import { categoryLabels } from "@/lib/categories";
import Link from "next/link";
import PostCover from "@/components/PostCover";
import { formatDate } from "@/lib/format";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  console.log(id);

  // 1. Додано await, оскільки отримання поста є асинхронною операцією
  const post = await getPostById(id);
  console.log("POST:", post);

  if (!post) notFound();

  // 2. Обгорнуто JSX у круглі дужки (), щоб return працював коректно
  return (
    <article className="reading-column">
      <p className="meta">
        {/* {post.category ? categoryLabels[post.category] : "Без категорії"}{" "}
        {post.date} */}
        {categoryLabels[post.category]} {formatDate(post.date)}
      </p>
      <h1>{post.title}</h1>
      <PostCover
        className="post-page__cover"
        src={post.cover_url}
        alt={`Обкладинка: ${post.title}`}
      />
      <p className="post-page__content">{post.content}</p>
      <Link className="back-link" href="/">
        Назад
      </Link>
    </article>
  );
}
