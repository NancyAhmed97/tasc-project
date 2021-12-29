import React from 'react'
import RelatedPostsContainer from '../PostDetails/Components/Related posts/RelatedPostsContainer'
import ContentWithoutBackwardContainer from "../PostDetails/Components/Contentwithoutbackward/ContentWithoutBackwardContainer"
import LandingPost from './Components/LandingPost/LandingPost'
function PostDetails() {
    return (
        <div className='PostDetails'>
            <LandingPost />
            <ContentWithoutBackwardContainer />
            <RelatedPostsContainer />
        </div>
    )
}

export default PostDetails
