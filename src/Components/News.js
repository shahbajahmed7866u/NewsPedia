import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  articles = [
      {
        "source": { "id": "info-money", "name": "InfoMoney" },
        "author": "Bloomberg",
        "title": "McCarthy acredita que o Congresso dos EUA pode aprovar acordo sobre teto da dívida até 5 de junho",
        "description": "Segundo dados publicados na sexta, caixa do Tesouro americano está em US$ 38,8 bilhões seu menor valor desde 2017.",
        "url": "https://www.infomoney.com.br/economia/mccarthy-acredita-que-o-congresso-dos-eua-pode-aprovar-acordo-sobre-teto-da-divida-ate-5-de-junho/",
        "urlToImage": "https://www.infomoney.com.br/wp-content/uploads/2023/05/398756169.jpg?quality=70",
        "publishedAt": "2023-05-27T17:48:22Z",
        "content": null
      },
      {
        "source": { "id": "news-com-au", "name": "News.com.au" },
        "author": "Belinda Palmada",
        "title": "TV channel slammed for broadcasting orgy",
        "description": "<p>A UK channel has been slammed over broadcasting an X-rated show that filmed contestants  taking part in a group sex session. </p>",
        "url": "https://www.news.com.au/entertainment/tv/uk-tv-channel-slammed-for-broadcasting-a-15person-orgy/news-story/72cf45ae22bb8f2a99d87df0ee903b3a",
        "urlToImage": "https://content.api.news/v3/images/bin/1935af0a5fd524ea5946d1fed72b9d70",
        "publishedAt": "2023-05-27T03:29:00Z",
        "content": "A UK channel has been slammed over broadcasting an X-rated show that filmed contestants taking part in a group sex session. \r\nChannel 4’s Open House: The Great Sex Experiment involves couples staying… [+2067 chars]"
      },
      {
        "source": { "id": "national-review", "name": "National Review" },
        "author": "Caroline Downey",
        "title": "DeSantis Admin Revokes Liquor License of Orlando Venue That Hosted Sexual Drag Show for Children",
        "description": "Performers allegedly wore sexually suggestive clothing and prosthetic female breasts and genitalia.",
        "url": "https://www.nationalreview.com/news/desantis-admin-revokes-liquor-license-of-orlando-venue-that-hosted-sexual-drag-show-for-children/",
        "urlToImage": "https://www.nationalreview.com/wp-content/uploads/2022/08/ron-desantis-florida02.jpg?fit=2057%2C1200",
        "publishedAt": "2023-02-03T22:04:21Z",
        "content": null
      },
      {
        "source": { "id": "fortune", "name": "Fortune" },
        "author": "Renate Nyborg",
        "title": "Why Tinder wants to end the FDA’s discriminatory blood donor policy",
        "description": "Tinder and Match Group are urging the FDA to lift restrictions on gay and bisexual men donating blood.",
        "url": "https://fortune.com/2022/06/01/tinder-fda-discrimination-blood-donor-policy-renate-nybor/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1227710498-e1653669254280.jpg?resize=1200,600",
        "publishedAt": "2022-06-01T09:30:00Z",
        "content": "Skip to Content"
      },
      {
        "source": { "id": "crypto-coins-news", "name": "Crypto Coins News" },
        "author": "Aaron Weaver",
        "title": "Why Has the Media Been So Reluctant to Unmask Andrew Cuomo? - CCN.com",
        "description": "Andrew Cuomo has been accused of sexual assault by one of his former aides.\r\n \tThis accusation comes on the heels of allegations that he threatened a journalist.\r\n \tThose allegations stem from what appears to be a massive coverup that caused thousands of Covi…",
        "url": "https://www.ccn.com/media-unmask-andrew-cuomo/",
        "urlToImage": "https://cdn.ccn.com/wp-content/uploads/2021/02/andrew-cuomo-shutterstock_1767748784-e1614196667263.jpg",
        "publishedAt": "2021-02-24T20:02:04Z",
        "content": "Facebook TwitterLinkedInRedditMessenger\r\n<ul><li>Andrew Cuomo has been accused of sexual assault by one of his former aides.</li><li>This accusation comes on the heels of allegations that he threaten… [+4763 chars]"
      },
      {
        "source": { "id": "vice-news", "name": "Vice News" },
        "author": "Cameron Joseph",
        "title": "Tara Reade Is Now Being Investigated For Allegedly Lying on the Witness Stand",
        "description": "Reade has accused Biden of sexually assaulting her when she was an employee of his Senate office in 1993.",
        "url": "https://www.vice.com/en_us/article/m7je3b/tara-reade-is-now-being-investigated-for-allegedly-lying-on-the-witness-stand",
        "urlToImage": "https://video-images.vice.com/test-uploads/articles/5ece95b99054e1009b3e58f4/lede/1590597812648-Tara-Reade.jpeg?crop=1xw:0.84375xh;center,center&resize=1200:*",
        "publishedAt": "2020-05-27T16:45:33Z",
        "content": "The Monterey County, California District Attorneys office has begun investigating whether Tara Reade lied under oath, an official told Politico.\r\n Reade, who at the time went by Alexandra McCabe, spe… [+2033 chars]"
      }
    
  ]
constructor(){
  super();
  console.log("Hello")
  this.state={
articles:this.articles,
loading:false
  }
}

async componentDidMount(){
console.log("cmp")
let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f9db77eef4174b9b8af7ca428ca9c97f"

let data = await fetch(url);
let paredData = await data.json()
console.log(paredData)
this.setState({articles:paredData.articles})
}

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2>NewsPedia - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((elem)=>{
          return  <div className="col-md-4" key={elem.url}>
            
          <Newsitem  title={elem.title?elem.title:""} description={elem.description?elem.description:""} imageUrl={elem.urlToImage} newsUrl={elem.url}/>
              </div>
        })}
          
         
        </div>
        
      </div>
    )
  }
}

export default News