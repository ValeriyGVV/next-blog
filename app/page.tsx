import PostList from "@/components/PostList";
import { posts } from "@/data/posts";
// import { PostList } from "@/types/blog";

export default function Home() {
	// console.log("Posts:", posts); 
	return (
		<>
		<section className="hero container">
			<p className="eyebrow">
				<span />
				БЛОГ НА NEXT.JS
			</p>
			<h1>Остатні записи <em>{}публікацій</em></h1>
			<p className="her0__description">
				Публікації над проектом: що зроблено та що залишилось.Та кіцевий результат проекта
			</p>
				</section>

				<section className="container">
			{/* <h2>ПОСТИ...</h2> */}
			<PostList posts={posts} />
					</section>
	</>			
	);
}