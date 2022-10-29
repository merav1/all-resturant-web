import BlogList from "./BlogList";
import IBlog from "./services/interfaces";
import { BlogData } from "./services/BlogData";
export default function Blog() {
  return (
    <div className="container">
      <div className="content">
        <ul>
          {BlogData.map((data: IBlog) => (
            <BlogList key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
}