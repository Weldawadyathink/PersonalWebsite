import { NavBar } from "@/components/NavBar";

export default function MainPage() {
  return (
    <>
      <NavBar />

      <div className="container max-w-2xl mx-auto p-6">
        <section className="profile mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        </section>

        <section className="experience mb-8"></section>
      </div>
    </>
  );
}
