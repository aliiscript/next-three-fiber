const title = "Next Three Fiber Minimal Starter";
const url = " ";
const description =
    "Easy way to get up and creating with react three fiber in nextjs";
const author = "Author";
const twitter = "@aliiscript";

export default function Head() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="language" content="english" />
            <meta httpEquiv="content-type" content="text/html" />
            <meta name="author" content={author} />
            <meta name="designer" content={author} />
            <meta name="publisher" content={author} />

            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
            />
            <meta name="robots" content="index,follow" />
            <meta name="distribution" content="web" />

            <meta property="og:title" content={title} />
            <meta property="og:type" content="site" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={"/icons/share.png"} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />

            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            <link
                rel="apple-touch-icon"
                sizes="16x16"
                href="/icons/favicon-16x16.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="32x32"
                href="/icons/favicon-32x32.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icons/apple-touch-icon.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="mask-icon"
                color="#000000"
                href="/icons/safari-pinned-tab.svg"
            />
            <link rel="apple-touch-startup-image" href="/startup.png" />

            <meta
                name="viewport"
                content="width=device-width, minimum-scale=1, initial-scale=1.0"
            />
            <meta name="theme-color" content="#000" />
            <link rel="shortcut icon" href="/icons/apple-touch-icon.png" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
        </>
    );
}
