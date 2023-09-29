# Project 2 - To Do App

This is your second project, a To Do Application. It's a single page app with to do functionalities.
It will include creating, mapping, editing, reordering and deleting.

Store your TODO's in a useState array.

You will be using https://styled-components.com/

Take some time to go over the docs and how it works. You don't have to use typescript in styled components but its nice to have
(code like this `<{ $primary?: boolean; }>` is just declaring the props the styled can take). It works the same as SCSS inside the css block of code for it
(&: ... ).
Instead of creating style.scss file in the component folder, create a Styles.tsx folder from where you export your styled components (try not to re-use names as imports can get complicated). Styled components names must start with an Uppercase letter.

This is how Material UI / Chakra etc work behind the scenes, they are basically pre-made styled components that support many props. You can try to add some props in your own components.

More info https://styled-components.com/docs/basics#getting-started

You can store your types and interfaces (multiple files is fine for different components, in `index.d.ts` global stuff) inside the `@types` folder.

# Design

https://www.figma.com/file/xc9b0k731seKu09ujmFXyf/To-Do-Application-(Community)?type=design&node-id=0%3A1&mode=design&t=gmaxletb50OB4lDR-1

Create your account with ATIS email so you can see the style details.
You must use the exact same style (colors, height, width, gradient, positions) as in the figma project (pixel perfect design)

## Installation

Run `npm install` in the terminal from the root folder. After its done run `npm start` and go to `localhost:3000` to find your project.

## Folder Structure

Inside the **src** folder you will create your **components** folder. Each component must be put in its own folder. Example: components/komponenta-folder/index.tsx.

For global style (variables, color variables, breakpoints etc) you can put them in **src/styles/config.ts** (preferably Enums) with exports and import them in your styled components files. For component styles you can put it in the same folder as the component (components/komponenta-folder/Styles.tsx)

Absolute importing is configured for imports. (https://plainenglish.io/blog/why-and-how-to-use-absolute-imports-in-react)

## Tasks + Logic

Jira board is here: https://milena-internships-projects.atlassian.net/jira/software/projects/MK02/boards/1

Your tasks are in the TO DO column, you can work on them in any order you want (recommended in the order they are but as you wish).

When you start working on a task, you move it to **IN PROGRESS** column and create the branch in git like this: `feature/MK02-tasknumber_description`. (JIRA and bitbucket are linked and we can track progress from both).

When you commit, your commit must start with `MK-02-tasknumber` and then your description, so commits are linked too.

When you're done with the task, you move it to **TESTING** and assign it to me, and create the pull request.
If everything is OK i will move it to **DONE** and merge the request.
If its not OK i will comment what is wrong on the JIRA task and return it to **IN PROGRESS**

When you are done with the task you create a pull request from that branch to **master**, I will explain more in details and do code-review and what to change/improve if necessary.

When the feature branch code is ready it will be merged to master. You will fetch and pull on master again then create your new branch for the new task.

Multiple commits (if available/needed) are encouraged as a practice. In bigger projects you must make a lot of commits sometimes in a branch, and that is better in case you need to revert back, cherry-pick and rebase,

easier to solve conflicts etc.

If you notice a bug/issue after a branch has been merged, you can create a new branch for the fix as `bugfix/name` that is created from master and not any other branch, then create another pull request.

Never commit and push code directly in master branch!

## Notes

Follow the DRY Logic (Don't Repeat Yourself) - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

Create as many components as possible, re-use functions, re-use css.

The project is pre-configured which means that eslint code styling rules are enforced, prettier is configured and set to automatically format your code to be more readable (you can disable it by deleting the .vscode folder, but its recommended to format on save as most clients projects work like that).

You can take a look in the configuration files (eslint, prettier, editorconfig, git, (its a simple config but a popular one that most clients and projects use. Sometimes there are even more strict rules applied but we'll get to that))

Readable code is a must. If something is getting complicated (function/component) you should add some comments to explain it. Its just practice for now but necessary for the future.

And always ask if something isn't clear. Juniors(any level even Seniors) are always encouraged to ask as many questions about any doubts they have, never assume how things work because clients 99% of the time don't think as developers. If something isn't clear to you regarding design, functionalities its always better to ask.

If you have any doubts about how things are planned and designed, if you think that "this will not work like this" or "it doesn't make any sense" make a polite comment to who ever is in charge regarding what you think. Sometimes they agree with you and you can improve the logic, sometimes they force you to do it.

**Good luck and have fun :)**
