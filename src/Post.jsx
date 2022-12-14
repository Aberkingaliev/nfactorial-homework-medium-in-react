import './index.css';
import Header from './components/Header'

function Post() {
  return (
    <>
        <Header />
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Kanit:wght@500&display=swap" rel="stylesheet" />
        <header>
          <p className="logo">medium alike</p>
        </header>
        <div className="nav-back">
          <a href="index.html"><img src="./Assets/Left.png" style={{width: '24px', height: '24px', cursor: 'pointer'}} /></a>
        </div>
        <div className="topic-info">
          <div className="author-info">
            <img src="./Assets/Avatar-64.png" style={{width: '64px', height: '64px', cursor: 'pointer'}} />
            <div className="author-data">
              <p className="body-r-18">Authors Name</p>
              <p className="body-r-14 black-05">
                7 july · 12 min read · Member-only
              </p>
            </div>
          </div>
          <div className="social-icons">
            <img src="./Assets/LinkedIn.png" style={{width: '18px', height: '18px', cursor: 'pointer'}} />
            <img src="./Assets/Facebook Circled.png" style={{width: '18px', height: '18px', cursor: 'pointer'}} />
            <img src="./Assets/Twitter.png" style={{width: '18px', height: '18px', cursor: 'pointer'}} />
          </div>
        </div>
        <div className="topic-content">
          <div className="content-head">
            <h4>7 Practical CSS Tips</h4>
            <p className="subtitle-r-24">
              How product designers can break from the status quo and help our planet
            </p>
          </div>
          <img className="cover-img" src="./Assets/content-cover.png" />
          <div className="content-body">
            <p className="subtitle-m-24">
              Subheader
            </p>
            <p className="subtitle-r-24">
              How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news 
              feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device 
              until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.
              <br /><br />And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete 
              entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection 
              now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.
              <br /><br />But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves 
              and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes 
              connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents 
              a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, 
              and services that we build will place an even greater strain on our already-overloaded power grids.
            </p>
          </div>
        </div>
        </div>
    </>
    
  )
};

export default Post