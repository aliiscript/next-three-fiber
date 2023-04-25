import Layout from "@/components/dom/Layout";
import StyledComponentsRegistry from "./lib/registry";
import "@/global.css";

export const metadata = {
    title: "Starter",
    description: "Welcome to Next.js with r3f",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <StyledComponentsRegistry>
                    <Layout>{children}</Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
