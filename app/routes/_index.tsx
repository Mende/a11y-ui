import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div role="tablist" aria-label="Sample Tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex={0}>Tab 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex={-1}>Tab 2</button>
</div>
<div id="panel-1" role="tabpanel" tabIndex={0} aria-labelledby="tab-1">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, quae ratione amet iure vitae reprehenderit, aliquid odit quam eum sapiente qui, hic nemo animi! Distinctio veniam sint error dolore praesentium.
</div>
<div id="panel-2" role="tabpanel" tabIndex={0} aria-labelledby="tab-2" hidden>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio consequatur inventore amet sed possimus, dicta architecto corrupti, quasi placeat recusandae veritatis. Quia neque assumenda eum tempora, necessitatibus error voluptatibus?
</div>
    </div>
  );
}
