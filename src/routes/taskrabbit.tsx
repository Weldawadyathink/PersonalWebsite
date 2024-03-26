import { NavBar } from "@/components/NavBar";
import { Heading, P, A } from "@/components/General";
import { Separator } from "@/components/ui/separator";

export default function AudiobookCovers() {
  return (
    <>
      <NavBar />

      <div className="container max-w-2xl mx-auto p-6">
        <Heading className="text-center">TaskRabbit</Heading>
        <Separator className="my-6" />
        <Heading level={3}>The Problem</Heading>
        <P>
          <A href="https://commerce7.com/">Commerce7</A> is a powerful commerce
          platform for wineries. Within my role as a Revenue Analyst with Justin
          and Landmark Wineries, I helped transition to Commerce7 from eWinery.
          I found Commerce7 to be fast, powerful, and flexible. Compared to
          eWinery, Commerce7 is a joy to use. However it is not perfect.
          Anticipating the need for extensibility, the Commerce7 team created a
          powerful set of APIs and an app store platform. Using this platform,
          developers can address and improve the shortcomings of the platform.
        </P>
        <P>
          Let me tell you a little bit about the wine industry. Alcohol shipping
          laws are complicated. Every US state has different laws. For example,
          one state may limit purchases of more than 12 bottles from one winery
          each month. Another may limit customers to 6 cases every 6 months.
          Then you get into the complexities of dry counties. There are some
          address that we cannot ship wine to no matter what. If it sounds
          difficult to keep track of all of these rules, that's because it is.
          Luckily, a company called Sovos creates a product called ShipCompliant
          that does the hard work for us. eWinery and Commerce7 both use
          ShipCompliant to ensure legality of alcohol deliveries.
        </P>
        <P>
          If an order may have legal issues, Commerce7 will mark the order as
          "Quarantined". That order will not be sent to the warehouse until a
          human at the winery looks at the order and fixes any issues. Most
          often, the sales associate did not put the customer's birthdate in all
          the correct places. Sometimes there is an issue with the address, such
          as a missing suite number. All in all, these are usually pretty simple
          to fix. However, Commerce7 does not tell you that the order is
          quarantined. You have to manually filter your order list for
          quarantined orders.
        </P>
        <P>
          I am a firm believer in automation. If something can happen
          automatically, it should. If something needs to happen manually, it
          should at least notify that human until the task is complete. This is
          the gap I sought to fill with TaskRabbit.
        </P>

        <Separator className="my-6" />
        <Heading level={3}>The Solution</Heading>
        <P>
          Commerce7 supports webhooks, allowing my server to get a notification
          every time an order, customer, account, product, coupon code, or other
          entity is created or modified. So the first step is a server that can
          process these webhooks to identify quarantined orders. That is a
          relatively simple task. But I am a programmer! Why make a task simple
          when I can make it complicated! Kidding aside, I wanted to build a
          system that was very flexible. Where I could add new features to
          TaskRabbit without a complete rewrite. I designed a custom json-based
          query language to analyze data in the webhook payloads. I have a
          series of queries that compare a given value with the webhook data
          using{" "}
          <A href="https://www.npmjs.com/package/json-query">Json-Query</A> to
          extract data from the payload. I designed the query language to be
          recursive, so many different aspects of the payload can be analyzed at
          once. With this infrastructure, I can analyze extremely complex
          queries to determine if an action should be taken.
        </P>
        <P>
          Now we know if an action should be taken or not, but we don't have any
          action to take. Here is where another Commerce7 feature comes in:
          Tasks. You can assign a task to a person. They get an immediate email,
          and daily follow up emails until they mark the task complete. This is
          perfect to make sure quarantined orders are not missed. Now we have a
          server that can analyze complex queries on webhook data and assign
          tasks in Commerce7. We just need a frontend.
        </P>
        <P>
          I tried a few different libraries for the frontend, but settled on
          React. Now that I have built a relatively complex site in React, I
          understand why it is one of the most used libraries on the web. I
          allow the user to select from a list of pre-made queries, modify a
          handful of options, and save that to the server. Allowing
          non-technical people to use Taskrabbit was a primary goal, and my
          frontend bridges the gap between the user and my query language.
        </P>

        <Separator className="my-6" />
        <Heading level={3}>Technology Used</Heading>
        <ul className="list-disc mx-8 my-2">
          <li>Cloudflare Pages and Functions</li>
          <li>Cloudflare D1 Database</li>
          <li>
            <A href="https://www.npmjs.com/package/json-query">Json-Query</A>
          </li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>Tailwind</li>
          <li>Commerce7 API</li>
        </ul>
      </div>
    </>
  );
}
