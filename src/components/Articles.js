import "../css/Articles.css"

const Articles = () => {

  const response = {
    "totalArticles": 14,
    "articles": [
        {
            "title": "The Binding of Isaac: Repentance PS5, Xbox Series X release date set for November 4",
            "description": "It's also coming to PS4, and the Xbox One version will arrive \"not long after\"",
            "content": "The Binding of Isaac: Repentance will come to PS5, PS4, Xbox Series X, and Nintendo Switch this Thursday, November 4.\nCreator Edmund McMillen announced the impending console release of the updated rogue-like on Twitter . He also clarified that the Xb... [1184 chars]",
            "url": "https://www.gamesradar.com/the-binding-of-isaac-repentance-coming-to-ps5-xbox-series-x-and-switch-this-week/",
            "image": "https://cdn.mos.cms.futurecdn.net/5naCfwg65VvSwWLjn6ozRF-1200-80.jpg",
            "publishedAt": "2021-11-03T15:51:28Z",
            "source": {
                "name": "GamesRadar+",
                "url": "https://www.gamesradar.com"
            }
        },
        {
            "title": "With Its Final Ending, The Binding Of Isaac Crawls Out Of The Poop At Last",
            "description": "The Binding Of Isaac is the most successful video game ever made about a small child committing suicide by asphyxiating in a box.Neither part of the",
            "content": "With Its Final Ending, The Binding Of Isaac Crawls Out Of The Poop At Last\nThe Binding Of Isaac is the most successful video game ever made about a small child committing suicide by asphyxiating in a box.\nNeither part of the above statement is hyperb... [8789 chars]",
            "url": "https://www.kotaku.com.au/2021/07/with-its-final-ending-the-binding-of-isaac-crawls-out-of-the-poop-at-last/",
            "image": "https://imgix.kotaku.com.au/content/uploads/sites/3/2021/07/14/binding-of-isaac-1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280",
            "publishedAt": "2021-07-14T02:00:48Z",
            "source": {
                "name": "Kotaku Australia",
                "url": "https://www.kotaku.com.au"
            }
        },
        {
            "title": "Binding of Isaac Kickstarter Offers Edmund McMillen's Bathwater",
            "description": "The Binding of Isaac: Four Souls tabletop game is back on Kickstarter raising millions more dollars for a new expansion called Requiem. The latest",
            "content": "Binding of Isaac Kickstarter Offers Edmund McMillen’s Bathwater\nThe Binding of Isaac: Four Souls tabletop game is back on Kickstarter raising millions more dollars for a new expansion called Requiem. The latest crowdfunding campaign has become a meta... [3720 chars]",
            "url": "https://www.kotaku.com.au/2021/06/binding-of-isaac-kickstarter-offers-edmund-mcmillens-bathwater/",
            "image": "https://imgix.kotaku.com.au/content/uploads/sites/3/2021/06/30/fea446c81a270cda794db66a0ab309f4.png?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nr=20",
            "publishedAt": "2021-06-30T13:00:00Z",
            "source": {
                "name": "Kotaku Australia",
                "url": "https://www.kotaku.com.au"
            }
        }
    ]
  }

  return (
    <ul className="article-container">
      {response.articles.map(article => {
        return (
          <li className="article-card" key={article.title}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <p>{article.content}</p>
            <h4><a href={article.url}>Read more</a></h4>
            <img className="article-image" src={article.image} alt={article.title}/>
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