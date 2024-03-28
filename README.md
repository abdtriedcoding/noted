# Jotion: All-in-one workspace application that helps you for note-making, project management, collaboration, and more.

![Thumbnail](https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicImages/_public/cbfd0d0e-bb59-4cf4-b57e-8d4df7fe7568.jpeg)

Key Features:

- Real-time database  🔗 
- Notion-style editor 📝 
- Light and Dark mode 🌓
- Trash can & soft delete 🗑️
- Authentication 🔐 
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Landing page 🛬
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/abdtriedcoding/jotion.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```
