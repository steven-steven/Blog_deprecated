import Time from "../../components/time";
import Post from "../../components/postPage";

export const meta = {
    date: "2020-08-26",
    title: "Creating an Invoice App with Electron and Go"
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

# Creating an Invoice App with Electron and Go

<Time>{meta.date}</Time>

A long long time ago (2 years ago -ish), my dad asked me if I could make an invoice app for his company because his old software was very outdated. The old legacy software was a custom-made software still currently running on a Windows XP in his office. He had even forgotten who made it for him in the first place.

I said I'd give it a shot, and that summer vacation I remember trying to create a web-app to generate pdf documents which I wasn't very successful. Somehow at that time I couldn't wrap my head around how I could generate a PDF file, and downloading files from the internet. As soon as that vacation ends life got busy and I ditched the entire project and never really came back to it (neither did my dad try to force me into it).

Fast forward 2 years, covid came and I have so much time at hand this summer vacation being stuck alone at home. I deviced a 1-2 week timeline to complete the first prototype. If I gave myself too much time I know I'll slack off and never will burn-out before completing the project. So here is a working prototype after about 2 weeks.

## Table of Contents

-   [Inspiration and Credits](#inspiration-and-credits)
-   [Web Tech](#web-tech)
    -   [Next.js](#next.js)
    -   [Yarn](#yarn)
    -   [Styled-components](#styled-components)
    -   [NavBar](#navbar)
    -   [Avatar](#avatar)
    -   [MDX](#mdx)
    -   [Syntax Highlighting](#syntax-highlighting)
-   [Development Tools](#development-tools)
    -   [Eslint and Prettifier](#eslint-and-prettifier)
    -   [VSCode Extentions](#vscode-extentions)
-   [Todo](#todo)

## Architecture and Stack

I will be honest, my choice of stack are mostly based on what interests me the most. I used Golang's GoKit API, and Electron Framework for the UI, both of which I'm inexperienced at and this will be my first project with both tools.

I learned and played around with Golang and GoKit 4 months ago so it's not entirely new. However, I never touched electron or build a desktop app before so I decided to go with [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate). Overall, it was an easy transition. Developing in electron is exactly like developing web-app (renderer process) but with an extra 'main process' which deals with native I/O operations, creating windows and dialog boxes, and other interactions with the OS. Renderer process (the React component) can easily call main process through the electron API's IPC.

I also used Firebase Realtime as the database since it's the most flexible and cheapest (and fastest to get running) option I could think of. My dad wouldn't mind if the data was stored locally just like the old system, but I think storing it in the cloud could add additional scalability so people could now work off that old ancient office computer.

Finally, here's a rough sketch of a simple design of the services:
![design](/static/blogAssets/creating-an-invoice-app-with-electron-and-go/architecture.png)

And the DB Models for 'Item' and 'Invoice' documents: (my name convention: those in suffix '_db' are the schema stored in the database)
![invoiceSchema](/static/blogAssets/creating-an-invoice-app-with-electron-and-go/invoiceSchema.png)
![itemSchema](/static/blogAssets/creating-an-invoice-app-with-electron-and-go/itemSchema.png)

## Go API

I chose Go Kit mainly as it proposes a good design priciples. I read up ways to structure a microservice [API with gokit](https://medium.com/@shijuvar/go-microservices-with-go-kit-introduction-43a757398183) and it seems pretty neat. There are multiple layers of the API, and once I set it up the first time it's really easy to add/change features after.

![Go Kit](/static/blogAssets/creating-an-invoice-app-with-electron-and-go/gokit.png)

Go also has a default testing package. The challenging part was mocking the Firebase DB for unit testing which I couldn't figure and ended up using a third-party github.com/jeremyschlatter/firebase. It was easy to use since it provides clean interface to change between a fake and real DB and instance.

There are also wierd marshalling bugs (or features) in Go that I didn't really like.
- when marshalling an empty slice [] it outputs a nil in JSON. Seems like its a [common issue](https://medium.com/swlh/arrays-and-json-in-go-98540f2fa74e) and there's a pending proposal to change this behavior. But for now my workaround is simply manually checking for nil slice and initializing an empty slice. For simple models this works.
- There's another bug ([with a proposal on hold](https://github.com/golang/go/issues/3117)), where it throws an error when assigning a field element when looping in a range (which shouldn't happen).

## Firebase

One problem with firebase was the limited features of using Admin SDK in Go. The event listeners are only supported for Node.js and Java SDK. So in the end I still add a client SDK component that listens to changes in the DB.

Another issue with using the Firebase mocking third-party library was that it wasn't well-maintained and only allow simple operations like Set, Get, and Delete. This restricts me when I couldn't use 'push()' to auto-generate keys. So I end up autoincrement the ID's which is ptobably not a good practice. If I just have an object with integers as keys, Firebase sometimes [treat them as an array automatically](https://stackoverflow.com/questions/17777112/single-integer-as-key-in-firebase-firebase-array-behavior) (which is kind of a wierd unexpected behavior if I have to say)

## Electron

### Generating PDF

My first attempt was to use 

### UI and Tailwind

### Table

### Form

