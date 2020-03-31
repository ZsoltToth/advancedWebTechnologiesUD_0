import React from "react";

function NewsItem(props) {
    return <div class="card"><h1 class="card-title">{props.title}</h1><p class="card-body">{props.content}</p></div>
}
export default NewsItem
