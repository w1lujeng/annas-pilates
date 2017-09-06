import tokenService from '../utils/tokenService'

const API = {
    fetchAddWorkout: function(workout) {
        return (
            fetch('/api/workouts', {
                method: 'post',
                headers: new Headers(
                  {
                    'Authorization': 'Bearer ' + tokenService.getToken(),
                    'Content-Type': 'application/json'
                  }),
                body: JSON.stringify(workout)
            })
            .then(response => response.json())
            .then(workout => workout)
        )
    
    }
};

export default API;  