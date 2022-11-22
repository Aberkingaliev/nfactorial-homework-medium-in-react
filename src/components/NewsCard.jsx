const NewsCard = () => {
    return (
        <>
        <div className="news-container">
            <div className="item-card">
                <div className="content-right">
                    <div className="news-info">
                    <img src="./Assets/Avatar.png" className="img-avatar" alt="Author Avatar" />
                    <p id="author" className="body-r-14">Authors name</p>
                    <p className="body-r-14 black-05">in</p>
                    <p id="topic-name" className="body-r-14">Topics Name  · </p>
                    <p id="date" className="body-r-14 black-05">7 july</p>
                    </div>
                    <div className="news-content">
                    <h5><a href="../Post.jsx">7 Practical CSS Tips</a></h5>
                    <p className="body-r-16">
                        You not only learn more Python by implementing what you already know but, in the
                        end, you can see how all your hard work pays off.
                    </p>
                    </div>
                    <div className="news-bottom">
                    <button className="btn-elevated-medium">Java Script</button>
                    <p className="body-r-14 black-05">12 min read</p>
                    <p>·</p>
                    <p className="body-r-14 black-05">Selected for you</p>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(./Assets/Cover.png)'}} className="img-left">
                </div>
            </div>
      </div>
        </>
    )
}

export default NewsCard