import Sidebar from "@/components/shared/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
