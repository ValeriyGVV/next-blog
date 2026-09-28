"use client";
import { subscribe } from "diagnostics_channel";
import { useSyncExternalStore } from "react";
const storageKey = "blog-theme";
const changeEvent = "blog-theme-change";

function subscribeToTheme(callback: () => void) {
	window.addEventListener(changeEvent, callback);
	return () => window.removeEventListener(changeEvent, callback);
}


const ThemeToggle = () => {

	const dark = useSyncExternalStore(
		subscribeToTheme,
		() => document.documentElement.classList.contains("dark-mode"),
		() => false,
	);

	function toggleTheme() {
		// console.log('Theme toggled');
		const next = !dark;
		document.documentElement.classList.toggle("dark-mode", next);
		window.dispatchEvent(new Event(changeEvent));
		try {
			localStorage.setItem(storageKey, next ? "dark" : "light");
		} catch {

		}
	}
	return (
		<button className="theme-toggle"
			type="button"
			onClick={toggleTheme}
			// aria-label="{dark ? "Включити світлу тему" : "Включити темну тему"}
				>
			 	{ dark? "Світла тема": "Темна тема" }
		</button >
		// <h4>ThemeToggle</h4>
	);
};

export default ThemeToggle;
