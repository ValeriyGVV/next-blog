import { posts } from "@/data/posts";


export function getPostById( id: string){
	return posts.find((post) => post.id === id) ?? null;
}