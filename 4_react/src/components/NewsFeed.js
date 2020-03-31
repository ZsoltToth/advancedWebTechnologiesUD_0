import React from 'react'
import NewsItem from "./NewsItem";

class NewsFeed extends React.Component{

    news = [
        {
            title: "News #1",
            content: "lorem ipsum .."
        },
        {
            title: "News #2",
            content: "lorem ipsum .."
        },
        {
            title: "News #3",
            content: "lorem ipsum .."
        },
        {
            title: "News #4",
            content: "lorem ipsum .."
        },
        {
            title: "News #5",
            content: "lorem ipsum .."
        },
    ];

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            News Feed
            {this.news.map((newsItem)=>{
                return (<NewsItem title={newsItem.title} content={newsItem.content}/>)
            })}
        </div>
        )
    }
}
export default NewsFeed;
