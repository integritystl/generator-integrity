[Return to Readme](README.md)

# Creating database migrations
Unlike some ORMs where you create a migration file and then write in your changes, be they in javascript or raw SQL commands, Prisma's approach is different.  Prisma expects you to **first change your `schema.prisma` file to be what you want your new data model to be**.  Then a command will generate a migration file for you that reconciles the differences between what your schema used to be and what it is now.

So the flow of evolving your database in Prisma looks like this:
1. Make the changes to your data model in the `schema.prisma` file.
2. Issue a command for Prisma to generate a migration file (that you don't need to edit). `./scripts/create-migration.sh add-my-new-column-or-whatever`.
3. Regenerate the `@prisma/client` by rerunning `./local-start.sh`.

> Important - you will need to regenerate the client as in step #3 if you want the IDE intellisense to continue working. This is how the imported types in `import { MyModel } from '@prisma/client` are updated with whatever you just changed via a migration.
