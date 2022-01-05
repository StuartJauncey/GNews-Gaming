import "../css/Articles.css"

const Articles = () => {

  const response = {
    "totalArticles": 4,
    "articles": [
        {
            "title": "Nick Leeder appointed as latest head of Google Ireland",
            "description": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.",
            "content": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]",
            "url": "https://www.siliconrepublic.com/companies/nick-leeder-google-ireland",
            "image": "https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg",
            "publishedAt": "2020-03-23T13:58:53Z",
            "source": {
                "name": "Silicon Republic",
                "url": "https://www.siliconrepublic.com/"
            }
        },
        {
          "title": "Nick Leeder appointed as latest head of Google Ireland",
          "description": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.",
          "content": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]",
          "url": "https://www.siliconrepublic.com/companies/nick-leeder-google-ireland",
          "image": "https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg",
          "publishedAt": "2020-03-23T13:58:53Z",
          "source": {
              "name": "Silicon Republic",
              "url": "https://www.siliconrepublic.com/"
          }
      }
    ]
    
  }

  return (
    <ul className="article-container">
      {response.articles.map(article => {
        return (
          <li className="article-card">
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <p>{article.content}</p>
            <h4>{article.url}</h4>
            <img className="article-image" src={article.image} />
            <p>{article.publishedAt}</p>
            <p>{article.source.name}</p>
            <p>{article.source.url}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Articles;