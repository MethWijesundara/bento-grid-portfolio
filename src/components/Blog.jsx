const blogPosts = [];

function Blog() {
    return (
        <section className="blog">
            <h2>Blog</h2>
            <p>Thoughts, notes, and things I’ve been learning.</p>

            {blogPosts.length > 0 ? (
                <div className="blog-posts">
                    {blogPosts.map((post) => (
                        <article className="blog-post" key={post.id}>
                            <h3>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.title}
                                </a>
                            </h3>
                            {post.date && <p>{post.date}</p>}
                            <p>{post.excerpt}</p>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="blog-empty">Blog posts coming soon.</p>
            )}
        </section>
    );
}

export default Blog;