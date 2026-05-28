create table public.blogs (
  id text primary key,
  title text not null,
  excerpt text,
  description text,
  category text,
  published_date date,
  read_time integer default 0,
  image text,
  image_alt text,
  published boolean default false,
  created_at timestamp with time zone default now()
);


insert into public.blogs (
  id,
  title,
  excerpt,
  description,
  category,
  published_date,
  read_time,
  image,
  image_alt,
  published
)
select
  id,
  title,
  excerpt,
  description,
  category,
  to_date(date, 'Mon DD, YYYY') as published_date,
  coalesce(nullif(read_time, '')::integer, 0) as read_time,
  image,
  image_alt,
  published
from jsonb_to_recordset(
$json$
[
  {
    "id": "getting-started",
    "title": "Getting Started",
    "excerpt": "You can choose to set up different types of input fields depending on your content.",
    "description": "<h3 class=\"framer-text framer-styles-preset-b136f3\" style=\"-webkit-font-smoothing: inherit; margin: 0px; font-family: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; font-weight: 600; font-size: 40px; text-decoration-skip-ink: auto; text-underline-offset: auto; line-height: 48px; -webkit-text-stroke: 0px rgb(38, 45, 48); font-feature-settings: &quot;blwf&quot;, &quot;cv01&quot;, &quot;cv02&quot;, &quot;cv03&quot;, &quot;cv04&quot;, &quot;cv09&quot;, &quot;cv11&quot;, &quot;liga&quot; 0, &quot;ss01&quot;, &quot;zero&quot;; font-variation-settings: normal; text-wrap: wrap; border-radius: 0px; corner-shape: round; --framer-font-family: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; --framer-font-family-bold: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; --framer-font-family-bold-italic: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; --framer-font-family-italic: &quot;Inter Display&quot;, &quot;Inter Display Placeholder&quot;, sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on, 'liga' off, 'ss01' on, 'cv01' on, 'cv02' on, 'zero' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #262d30; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; white-space-collapse: preserve;\">Editing Content</h3><p>You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.</p><h3>Adding Content to the Canvas</h3><p>After setting up the content, go back to the canvas. Your collections are accessible from the Insert menu. Open the Insert menu, navigate to the CMS Content section, and drag and drop your collection onto the canvas.</p><h3>Add a Page with Content</h3><p>If you wish to add a page instead that will automatically be populated with data from the CMS, navigate to the left panel. Once you are in the Pages tab, click on the + button next to the CMS section.</p>",
    "category": "Design",
    "date": "May 28, 2026",
    "readTime": "0",
    "image": "/buzzinga-assets/images/blog/green-fern.jpg",
    "imageAlt": "Green Fern",
    "published": true
  },
  {
    "id": "whats-new",
    "title": "What’s New",
    "excerpt": "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    "description": "<h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Reference Fields</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">To add Pagination, select your Collection List, click on Pagination, select one of the two options, then pick how many items to load. Pagination also works with existing Limits and Start Offsets. Both the Spinner and Button are completely customizable, and you can pick any Variant for their Loading states. The Spinner itself is just a layer with a conic gradient and a Loop Effect, so you get full control. Adding Pagination helps make your blogs and changelogs much faster to load, especially when they contain dozens of items.</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Infinite Scrolling with custom Spinner component</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Load More Button with custom Button component</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Enjoy freeform positioning of both components</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Design your own Loading and Hidden states</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Make your CMS Pages much faster to load</span></li></ol><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Filtering</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">We've added the ability to filter your collection lists in the CMS. This allows you to keep your content in a single collection, yet customize how that collection is presented on each of your web pages. For example, if you're creating docs for your app, you might want to filter articles per topic on your homepage. Or when creating a blog, you might want to filter your blog posts per category.</span></p><p><br></p>",
    "category": "Design",
    "date": "May 28, 2026",
    "readTime": "0",
    "image": "/buzzinga-assets/images/blog/yellow-flower.jpg",
    "imageAlt": "Yellow Flower",
    "published": true
  },
  {
    "id": "styling-elements",
    "title": "Styling Elements",
    "excerpt": "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    "description": "<h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">New This Month</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">This quality update brings canvas and layer panel improvements. We've updated the Component symbol throughout the app to differentiate it from Grids. Plus, we've made Primary Breakpoints and Variants more distinct in the left panel, making it easier to see if you're editing the primary or an instance. Breakpoints will now also show the ranges in the layer panel. See more updates below.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">From January</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Last month, we added support for automatic tinting and new layout options for components, plus a whole lot of fixes and improvements.</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We automatically set the body background, based on your Page's fill color</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">You can now override the body background and customize per breakpoint</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We now support Min Max sizing for all Smart and Code Component</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We now consistently show the Min Max hint within the property panel</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">You can now use all alignment options for layers with Position set to Fixed</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We now inform you if a parent layer height changes due to layout edits</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We improved the Radius and Padding controls, no longer resetting values</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Number inputs split in four no longer show steppers, so longer values fit</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">We improved Appear Effects using Scale with Spring transitions</span></li></ol><p><br></p>",
    "category": "Design",
    "date": "May 28, 2026",
    "readTime": "0",
    "image": "/buzzinga-assets/images/blog/orange-flower.jpg",
    "imageAlt": "Orange Flower",
    "published": true
  },
  {
    "id": "importing-content",
    "title": "Importing Content",
    "excerpt": "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    "description": "<h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Prepare your CSV file</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Make sure your file is exported as a \"CSV\" file, also known as a \"Comma Separated Values\" file. If you encounter any issues you'll want to verify your file is UTF-8 encoded and less than 5mb. If your file is larger than that, try removing columns you may not need. See below for additional information on specific fields.</span></p><p><em style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Tip: You do not have to import every column from your CSV. Only fields set up in your CMS collection in the next step will be imported.</em></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Rich Text Fields</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Formatted text content needs to be formatted as HTML. Many tags are supported, such as paragraphs and headers &lt;p&gt;,&lt;h1&gt;, &lt;h2&gt;), formatting (&lt;em&gt;, &lt;i&gt;, &lt;strong&gt;), links (&lt;a&gt;), lists (&lt;ol&gt;, &lt;ul&gt;, &lt;li&gt;) and images (&lt;img&gt;). Images from URLs will be automatically downloaded from their original source and imported into Framer.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Image Fields</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Images in your CSV content must be URLs to an image. They will be downloaded and imported into Framer. Relative paths are not supported.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Date Fields</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Recommended format is ISO8601 compliant, for example: 2023-12-17T14:42:00. The shorthand value of year-month-day is also supported, for example: 1982-12-01.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Color Fields</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">A color formatted as CSS hexadecimal RGB code, rgb, hls or hlv expression, or a named color. All variants with an alpha value are also supported.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Toggle Fields</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">A boolean value. Y, yes, TRUE, 1 will be interpreted as the toggle being \"Yes\", all other values will be \"No\".</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Prepare your CMS Collection</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Here is a checklist to prepare your CMS collection for importing.</span></p><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Verify each field/column in your CSV has a matching field in your CMS collection with the same name.</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Include a unique field for each item, often named \"Slug\"</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgba(0, 0, 0, 0); color: rgb(38, 45, 48);\">Verify that your data types match</span></li></ol><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Import your CSV file</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">You can find the Import feature by going to the CMS in your project, and clicking \"Import\" in the toolbar.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Updating or Re-Importing</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">To update your content, you can import into the same collection again.</span></p><p><br></p>",
    "category": "Design",
    "date": "May 28, 2026",
    "readTime": "0",
    "image": "/buzzinga-assets/images/blog/purple-flower.jpg",
    "imageAlt": "Purple Flower",
    "published": true
  },
  {
    "id": "best-practices",
    "title": "Best Practices",
    "excerpt": "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    "description": "<h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Choose Compelling Topics</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Use analytics tools to understand demographic data and user behavior. Tailor your content to address audience needs and interests, solving their specific problems. Conduct keyword research with tools like Google Keyword Planner or SEMrush. Analyze industry trends and competitors to select relevant and trending topics that improve SEO. Utilize headline analyzers like CoSchedule's Headline Analyzer. Craft titles that are clear, specific, and contain high-ranking keywords. Use power words to increase click-through rates.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Organize Your Content</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Implement a clear structure using HTML tags for headings (H1, H2, H3) and lists (&lt;ul&gt;, &lt;ol&gt;). This enhances readability and SEO. Leverage CSS for formatting to improve UX. Embed high-quality images, infographics, charts, and graphs. Use Framer for creating visuals and optimize them with alt text for SEO. Ensure they are mobile-responsive.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Pagination and SEO</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Consider adding pagination for extensive content lists, enhancing performance by reducing load times and improving user experience by making large amounts of content more readable and navigable. Additionally, pagination benefits SEO by facilitating easier search engine crawling and reducing bounce rates.</span></p><h3><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Monitor Performance</span></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(38, 45, 48);\">Utilize the built-in Framer analytics to track performance metrics and adjust content strategy based on data insights. By combining these best practices with technical best techniques, you can create a blog that not only engages and informs but also performs well in search rankings and user engagement. Happy blogging!</span></p><p><br></p>",
    "category": "Design",
    "date": "May 28, 2026",
    "readTime": "0",
    "image": "/buzzinga-assets/images/blog/lilac-flower.jpg",
    "imageAlt": "Lilac Flower",
    "published": true
  }
]
$json$::jsonb
) as blog_data (
  id text,
  title text,
  excerpt text,
  description text,
  category text,
  date text,
  read_time text,
  image text,
  image_alt text,
  published boolean
)
on conflict (id) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  description = excluded.description,
  category = excluded.category,
  published_date = excluded.published_date,
  read_time = excluded.read_time,
  image = excluded.image,
  image_alt = excluded.image_alt,
  published = excluded.published;




select * from public.blogs order by published_date desc;