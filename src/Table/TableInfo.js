import React from 'react'
import styles from  './TableInfo.module.css'
function TableInfo(props) {
    return (
<div className={styles.tablewrapper}>
   
<table className={styles.fltable}>
        <thead>
        <tr>
            <th>Name </th>
            <th>Last Name
                <button onClick={()=>props.sortBy('username')}>Sort</button>
            </th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>
            {
                props.data.map(user =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))
               
            }
    
    
        </tbody>
    </table>
</div>

    );
}

export default TableInfo
