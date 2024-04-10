import React, { useState } from "react";

export function Nested(){

    // const [form, setForm]=useState({
    //     firstName:"Dimple",
    //     lastName:"Naik",
    //     email:"sdsd@sd",
    // })
    // return(
    //     <>
    //     <label>
    //         First Name: 
    //         <input value={form.firstName}
    //         onChange={e =>{
    //             setForm({
    //                 ...form,
    //                 firstName:e.target.value
    //             })
    //             }}  
    //         />
    //     </label>

    //     <label>
    //         Last Name:
    //         <input
    //             value={form.lastName}
    //             onChange={e=>{
    //                 setForm({...form, lastName:e.target.value})
    //             }}
    //         />
    //     </label>

    //     <label>
    //         Email:
    //         <input value={form.email} onChange={e=>{
    //             setForm({...form, email:e.target.value})
    //         }}
    //         />
    //     </label>

    //     <p>
    //         {form.firstName}{''}
    //         {form.lastName}{''}
    //         ({form.email})
    //     </p>

    //     </>
    // )

    const [form, setForm] = useState({
        firstName:"Dimple",
        lastName:"Naik",
        education:{
            school:"bps",
            college:"vit",
            skills:{
                one:"HTML",
                two:"CSS",
                three:"Javascript"
            }
        }
        
    })

    function changeName(e){
        setForm({...form, firstName:e.target.value})
    }

    function changeSchool(e){
        setForm({...form, education:{
            ...form.education, school:e.target.value
        }})
    }

    function skillAppend(e){
        setForm({...form, education:{
            ...form.education, skills:{
                ...form.education.skills, three:e.target.value
            }
        }})
    }

    return(
        <>
        
        <label>
            First Name:
            <input value={form.firstName} onChange={changeName}/>
        </label>

        <label>
            School Name:
            <input value={form.education.school} onChange={changeSchool}/>
        </label>

        <label>
            Skills:
            <input value={form.education.skills.three} onChange={skillAppend}/>
        </label>

        <p>
            Display:{' '}
            {form.firstName}{' from '}
            {form.education.school}{' learnt '}
            {form.education.skills.three}
            
        </p>
        </>
    )
}

