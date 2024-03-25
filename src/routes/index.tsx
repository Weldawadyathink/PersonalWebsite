import { NavBar } from "@/components/NavBar";

export default function MainPage() {
  return (
    <>
      <NavBar />

      <div className="container max-w-2xl mx-auto p-6">
        <section className="profile mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <p className="text-gray-700">{/* Your profile text */}</p>
        </section>

        <section className="experience mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="experience-item">
            <h3 className="text-xl font-medium mb-2">
              Revenue Analyst{" "}
              <span className="text-gray-500">
                Landmark & Justin Winery (2021 - Present)
              </span>
            </h3>
            <ul className="list-disc list-inside ml-6">
              <li>
                Designed and implemented a comprehensive data analysis system...
              </li>
              {/* Add more achievements */}
            </ul>
          </div>
          {/* Add more experience items if needed */}
        </section>

        {/* Sections for Education, Skills, References, etc. - Use similar patterns */}
      </div>
    </>
  );
}
