const fetchStatus = {
    error: bool => ({type: 'error', hasError: bool}),
    loading: bool => ({type: 'loading', isLoading: bool}),
    fetchUser: users => ({type: 'get_user_data', users})
}

export default function fetchData(url){
    return dispatch => {
        dispatch(fetchStatus.loading(true))
        fetch(url)
        .then(data=>data.json())
        .then(users=>dispatch(fetchStatus.fetchUser(users.results)))
        .catch(()=>dispatch(fetchStatus.error(true)))
    }
}