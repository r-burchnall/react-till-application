import React from "react";

const Card = ({children}: any) => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: 8,
                boxShadow: '#ccc 3px 6px 6px 0px',
                margin: 10,
            }
        }>
            {
                children
            }
        </div>
    )
}

export default Card;