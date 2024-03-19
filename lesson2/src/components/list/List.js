import React from 'react';

const List = ({list}) => {
    console.log(list)
    return (
        <div>
            {
                list.map(item=> <p>{item.title}</p>)
            }

        </div>

    )

}



export default List;