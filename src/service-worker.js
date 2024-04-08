/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

console.log({ build, files, version });

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

// Add an event listener to the service worker installation phase
self.addEventListener('install', (event) => {
	// Add files to cache
    async function addToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }
  
    event.waitUntil(addToCache());
});

// Add an event listener to the service worker activation phase
self.addEventListener('activate', (event) => {
    // Delete outdated caches
    async function deleteOldCaches() {
        const keys = await caches.keys();
        for (const key of keys) {
            if (key !== CACHE) await caches.delete(key);
        }
    }
  
    event.waitUntil(deleteOldCaches());
});

/**
 * Checks if a URL is present in the cache.
 * @param {string} url - The URL to check.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the URL is in the cache, `false` otherwise.
 */
async function isInCache(url) {
    const cache = await caches.open(CACHE);
    const response = await cache.match(url);
    return !!response;
}

/**
 * Returns a response from either the network or the cache. If neither exists, returns null.
 * @param {Request} request - The request to respond to.
 * @returns {Promise<Response | null>} - A promise that resolves to a response or null.
 */
function respondWithFile(request) {
    return new Response('Hello from the service worker!');
}

// Add an event listener to the fetch event
self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    async function respond() {
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);
    
        if (ASSETS.includes(url.pathname)) {
            const cachedResponse = await cache.match(url.pathname);
            if (cachedResponse) return cachedResponse;
        }

        try {
            const response = await fetch(event.request);
            const isNotExtension = url.protocol === "http:" || url.protocol === "https:";
            const isSuccess = response.ok || response.type === "opaque";
            if (isSuccess && isNotExtension) {
                cache.put(url.pathname, response.clone());
            }
            return response;
        } catch (error) {
            const cachedResponse = await cache.match(url.pathname);
            return cachedResponse;
        }
    }


    // Check if the request is in the cache
    event.respondWith(respond());
});

// Add an event listener to the message event to skip waiting
self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});