import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import "./category.css";

const Category = () => {
    const { category } = useParams();

    useEffect(() => {
      window.scrollTo(0,0);
    }, []);

    return ( 
    <div className="category">
        <h1 className="category-title">Posts based on {category}</h1>
        <PostList posts={posts} />
    </div> );
}
 
export default Category;