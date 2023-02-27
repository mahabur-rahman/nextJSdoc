const News = ({ articles }) => {
  return (
    <div>
      <h2>List page of news article</h2>
      <br />
      <br />
      {articles.map((art) => {
        return (
          <div>
            <h2>
              {art.id} - {art.title} | {art.category}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/news`);
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
