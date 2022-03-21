import React from "react";

const List = ({friend}) =>{

    return(
        <>
            {friend.map((person)=>{
                const {id, name, dob, image} = person;
                let today = new Date();
                let birthDate = new Date(dob);
                console.log({image});
                let age = today.getFullYear() - birthDate.getFullYear();
                return (
                    <>
                    <article key={id} className='person'>
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <h4>{birthDate.toDateString()}</h4>
                            <h4>{age} years</h4>
                        </div>
                    </article>
                    </>
                );                               
            })   
        }                
        </>
    );
}

export default List;