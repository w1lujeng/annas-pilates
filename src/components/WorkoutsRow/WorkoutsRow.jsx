import React from 'react'

const WorkoutsRow = ({date,
                      gym,                       reformer, 
                      mat}) => (
  <tr>
    <td>
      {date.getMonth()+1}/
       {date.getDate()}/
       {date.getFullYear()}
    </td>
    <td>
      {gym}
    </td>
    <td>
      {(reformer) ? <p>Reformer</p> : null}
    </td>
    <td>
      {(mat) ? <p>Mat</p> : null}
    </td>
  </tr>
  )

export default WorkoutsRow