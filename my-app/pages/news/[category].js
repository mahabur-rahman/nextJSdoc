const Category = ({ articles }) => {
  return (
    <div>
      <h2>Category list of news</h2>
      <br />
      {articles.map((article) => {
        return (
          <div>
            <h2>
              {article.id} - {article.title} - {article.category}
            </h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { params } = context;

  const { category } = params;
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
