import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        .then(({data}) => setPosts(data.posts));
    }, [])
    
console.log(posts);


    return ( <div> {posts.map(
        post => <div><h2>{post.title}</h2>
        <h3>{post.description}</h3>
        <h3>Price: {post.price}</h3>
        <h3>Seller: {post.seller}</h3>
        <h3>Location: {post.location}</h3>
        <button>Send Message</button>
        </div>
    )}</div>

)}

export default Posts;