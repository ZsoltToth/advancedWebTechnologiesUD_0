import React from 'react'

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
                return (<div><h3>{newsItem.title}</h3><p>{newsItem.content}</p></div>)
            })}
        </div>
        )
    }
}
export default NewsFeed;
