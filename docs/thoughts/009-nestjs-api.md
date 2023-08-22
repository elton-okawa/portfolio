# Aug 22, 2023 - NestJS api

### Replacing serverless api route to NestJS

The initial idea would be running everything on Vercel using Next.js serverless api routes but after planning all features that I would want to add and concepts that I would want to learn such as `NestJS`, I realized that it'd be better to have a separated api.

From all alternatives of hosting I found, the one that caught my attention was [Cyclic](https://www.cyclic.sh/) because it has a free tier and all apps are **available immediately** which means that you don't need to wait the usual `30 seconds` of cold start of other free alternatives.

### The importance of documenting everything

After deciding to remove the database access from the api routes, I can now remove many dependencies and changes on `next.config.js`. As I wrote my thoughts over each change, I can confidently remove what it is not needed anymore
