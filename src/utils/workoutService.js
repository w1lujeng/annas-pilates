import tokenService from './tokenService'

function getWorkoutsForUser() {
  return (
            fetch('/api/workouts', {
                method: 'get',
                headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
                //don't need the other part of the header
            })
            .then(response => response.json())
            .then(workouts => workouts)
        )
}


export default {
  getWorkoutsForUser,
}