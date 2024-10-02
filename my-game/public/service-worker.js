self.addEventListener('install', (event) => {
		event.waitUntil(
				caches.open('my-cache').then((cache) => {
						return cache.addAll([
								'/', // Кэширование главной страницы
								'/index.html', // Кэширование HTML файла
								'/favicon.ico', // Кэширование иконки
						]);
				})
		);
});

self.addEventListener('fetch', (event) => {
		event.respondWith(
				caches.match(event.request).then((response) => {
						return response || fetch(event.request);
				})
		);
});
