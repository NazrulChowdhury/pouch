import React, { useState } from 'react'
import {  Input } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons'
import { useGlobalContext } from '@contexts/globalContext';

interface SearchNavProps {
    navs : string[]
}

const SearchNav = ({ navs }: SearchNavProps) => {

    const { setSearchedTags } = useGlobalContext()
    const [inputValue, setInputValue] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        const searchValue = e.target.value
        const matchingTags = navs.filter(tag =>
          tag.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchedTags(matchingTags)
    }
    const clearTags = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => { 
        setInputValue('')
        setSearchedTags([])
    }

    return (
        <>
            <Input 
                addonAfter={<CloseSquareOutlined onClick={clearTags}/>}
                onChange = {handleSearch}
                value={inputValue}
            />
        </>
    )
}

export default SearchNav