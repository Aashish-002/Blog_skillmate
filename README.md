![Skillmate Blog](https://github-readme-tech-stack.vercel.app/api/cards?title=Skillmate+Blog&align=center&fontFamily=Sora&fontSize=20&lineCount=2&line1=next.js%2CNextJs%2Cffffff%3Btypescript%2CTypescript%2C0054ff%3Btailwindcss%2CTailwind+CSS%2C0070ff%3B&line2=mongodb%2CMongoDB%2C0dba4a%3BPrisma%2CPrisma%2Cffffff%3Bnode.js%2CNodeJs%2C0dba4a%3B)

## TODO
 - [ ] Landing Page corrections
   - [ ] Header UI correction from design
   - [ ] popular tags
   - [x] adjust right-column widht
   - [x] Hover effects for blog card
   - [x] add user pro-pic
   - [x] add responsive nav
 - [ ] Readable formate in mobile view
   - [ ] image container adjustments
   - [ ] small breadcrumbs
 - [ ] Edit page route
 - [x] SEO implementations
 - [ ] Like system




## SEO implementations checklist
- [x] sitemap.xml
- [x] Robot.xml
- [x] Static metadata (page.tsx)
  - [x] Individual Metadata
- [x] Dynamic metadata (posts/[slug]/page.tsx)
  - [x] blog posts 

## Features
 - [ ] like 
 - [x] comment 
 - [x] share 
 - [ ] follow author 
 - [ ] Number of followers/following 
 - [ ] report author 
 - [ ] mute author 
 - [ ] report post 
 - [ ] write the blog 
 - [ ] read the blog (reading minutes based on characters) 
 - [ ] save the blog (fav) 
 - [ ] user profile edit/read/modify 
 - [ ] settings - password/linked accounts modification 
 - [ ] category wise reading the blogs 
 - [ ] edit/modify the blog post 
 - [ ] apply for a membership 
 - [ ] apply for a verified author 
 - [ ] gift a membership

![image](https://github.com/user-attachments/assets/279ced4a-9742-4a1e-b3ba-ac18f41c7832)






### Folder Structure

```
.
|____(root)
| |____write
| | |____layout.tsx
| | |____error.tsx
| | |____page.tsx
| |____posts
| | |____[slug]
| | | |____layout.tsx
| | | |____page.tsx
| |____blog
| | |____layout.tsx
| | |____[id]
| | | |____page.tsx
| | |____page.tsx
| |____uploadblog
| | |____backup_medium
| |____(auth)
| | |____admin
| | | |____login
| | | | |____page.tsx
| | |____login
| | | |____layout.tsx
| | | |____page.tsx
| |____myblog
| | |____page.tsx
| | |____[slug]
| | | |____s.tsx
| | | |____page.tsx
|____(back-end)
| |____api
| | |____comments
| | | |____route.ts
| | |____blogs
| | | |____post
| | | | |____route.ts
| | | | |____[slug]
| | | | | |____route.ts
| | | |____get
| | | | |____single
| | | | | |____route.ts
| | | | |____route.ts
| | | |____[slug]
| | | | |____route.ts
| | |____posts
| | | |____route.ts
| | | |____[slug]
| | | | |____route.ts
| | |____auth
| | | |____[...nextauth]
| | | | |____route.ts
| | |____categories
| | | |____route.ts
| | | |____backup
| | |____upload
| | | |____route.ts
| | | |____backup
|____layout.tsx
|____backup
|____page.tsx
|____globals.css
```
