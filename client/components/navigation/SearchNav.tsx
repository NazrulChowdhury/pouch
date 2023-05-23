import React, { useState } from 'react'
import {  Input } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons'

interface SearchNavProps {
    allTags : string[]
}

const SearchNav = ({ allTags }: SearchNavProps) => {

    const [searchedTag, setSearchedTag] = useState<string[]>([]) 
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value
        const matchingTags = allTags.filter(tag =>
          tag.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchedTag(matchingTags)
    }

    return (
        <>
            <Input 
                addonAfter={<CloseSquareOutlined />}
                onChange = {handleSearch}
            />
        </>
    )
}

export default SearchNav