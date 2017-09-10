import React from 'react'

const Control = ({filterLike, filterGender, showFilter, showGender}) => {
    const filter = document.querySelector('input[name="filer"]')

    return (
            <div className='user-list__filter'>
                <div className='user-list__filter-wrapper'>
                    <span className='user-list__filter-wrapper__item'>Show</span>
                    <label>
                        <input 
                            type="radio" 
                            name="filer" 
                            value='all'
                            checked={showFilter === 'all'}
                            onChange = {e=>filterLike(e.target.value)}
                        /> 
                        all
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="filer" 
                            value='likeList'
                            checked={showFilter === 'likeList'}
                            onChange = {e=>filterLike(e.target.value)}
                        /> 
                        like list
                    </label>
                </div>
                <div className='user-list__filter-wrapper'>
                    <span className='user-list__filter-wrapper__item'>Gender</span>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value='both'
                            checked={showGender === 'both'}
                            onChange = {e=>filterGender(e.target.value)}
                        /> both
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value='male'
                            checked={showGender === 'male'}
                            onChange = {e=>filterGender(e.target.value)}
                        /> male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value='female'
                            checked={showGender === 'female'}
                            onChange = {e=>filterGender(e.target.value)}
                        /> female
                    </label>
                </div>
        </div>
    )
}

export default Control