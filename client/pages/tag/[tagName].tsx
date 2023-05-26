import { getPostsByTagName } from '@services/index'
import { message, List } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

const index = () => {
    const router = useRouter()
    const {tagName} = router.query
    const {data, refetch} = useQuery('getPostsByTagName', () => getPostsByTagName(tagName as string), {
        enabled : false,
        onError : (error:any) => message.error(error.response.data)
    })
    useEffect(() =>{ 
        tagName && refetch()
    },[router.isReady, tagName])

    return (
        <div>
            {data?.length ? 
                <List 
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => ( 
                        <Link href ={`/post/${item._id}`}>
                            <List.Item style={{background : 'white'}}>
                                <List.Item.Meta 
                                    style={{marginLeft : '10px', fontWeight : 'bold'}}
                                    //title={item.postTitle}
                                    description={item.title}
                                />
                            </List.Item>
                        </Link>
                    )}
                />
            :null
            }
        </div>
    )
}

export default index