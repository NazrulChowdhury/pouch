import { message, List } from 'antd'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { getPostsByName } from '../../functions/api'

const TagHome = () => {
    const {tagName} = useParams()
    const {data, refetch} = useQuery('getPostsByName', () => getPostsByName(tagName), {
        enabled : false,
        onError : (error) => message.error(error.response.data)
    })
    useEffect(() => refetch(),[tagName])
    return (
    <div>
        {data && 
        <List 
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <Link to ={`/post/${item._id}`}>
                    <List.Item style={{background : 'white'}}>
                        <List.Item.Meta 
                            style={{marginLeft : '10px', fontWeight : 'bold'}}
                            //title={item.postTitle}
                            description={item.postTitle}
                        />
                    </List.Item>
                </Link>
            )}
        />}
    </div>
    )
}

export default TagHome