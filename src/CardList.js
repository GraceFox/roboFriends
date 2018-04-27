import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    //in loops in react, items need a unique key, here we can use the index as the key={i}, also want it to not change so id would be best as 
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;