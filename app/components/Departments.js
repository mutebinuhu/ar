import React from 'react';
const Department = ({icon, name, description}) =>{
return(
    <div>
       <div>{icon}</div>
       <div>{name}</div>
       <div>{description}</div> 
    </div>
)
}

const Departments = () => {
    return (
        <div>
            <h2>List of Departments</h2>
            <div>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>
                <Department icon={"icon"} name={"x-ray"} description={"short Description"}/>

            </div>
        </div>
    );
}

export default Departments;
