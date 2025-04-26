// TODO: make rss feed serverless worker of cloudflare

/*
    DO NOT PUSH THIS UNLESS IT WORKS !!!
*/

import { Feed } from 'feed';

   export async function onRequestGet(context: { request: { url: any; }; }) {
     // 1. Get the data (from API or KV)
     const posts = await fetch('https://api.skya-project.website/feed').then(res => res.json());

     // 2. Generate RSS
     const feed = new Feed({
       title: "SKYA RSS FEED",
       description: "RSS FEED news in SKYA_PROJECT website",
       id: context.request.url,
       link: context.request.url,
       language: "en",
       image: "${site_url}/SKYA_web_Welcome.svg",
       copyright: "ALL RIGHTS RESERVED 2025, Gulfieen",
       feedLinks: {
        atom: "https://skya-project.website/feed/atom",
        rss: "https://skya-project.website/feed/rss",
        json: "https://skya-project.website/feed/json"
       },
       author: {
        name: "Gulfieen N0rris",
        link: "https://gulfieen.skya-project.website"
       }
     });

     posts.forEach((post: { title: any; url: any; createdAt: string | number | Date; }) => {
       feed.addItem({
         title: post.title,
         link: post.url,
         date: new Date(post.createdAt),
       });
     });

     // 3. response (rss2 default)
     return new Response(feed.rss2(), {
       headers: { 
         'Content-Type': 'application/rss+xml',
         'Cache-Control': 'public, max-age=3600' // optional
       }
     });
   }