export const categories = ["development", "design", "news", "photography", "lifestyle", "other"] as const;

export type CategoryType = (typeof categories)[number];


export const categoryLabels: Record<CategoryType, string> = {
	development: "Розробка",
	design: "Дизайн",
	news: "Новини",
	photography: "Фотографія",
	lifestyle: "Стиль життя",
	other: "Інше",
}