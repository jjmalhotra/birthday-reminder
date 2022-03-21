import React from "react";


const PresentDay = ({friend}) =>{
    let count=0;  
    return(
        <>
            {friend.map((person)=>{
                const {id, name, dob, image} = person;
                let today = new Date();
                let birthDate = new Date(dob);
                let bdate = birthDate.getDate();
                let bmonth = birthDate.getMonth();

                if ((bdate === today.getDate() && bmonth === today.getMonth())){
                    count+=1;
                    let age = today.getFullYear() - birthDate.getFullYear();

                    return (
                        <>
                        <article key={id} className='person'>
                            <img src={image} alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <h4>{age} years</h4>
                            </div>
                        </article>
                        </>
                    );
                }                    
            })   
        }        
        <h5>{count} Birthday's today</h5>        
        </>
    );
}

export default PresentDay;