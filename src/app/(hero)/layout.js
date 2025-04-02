import Header from "/src/components/header";

export default function RootLayout({
  children,
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
