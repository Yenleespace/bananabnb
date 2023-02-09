
export function userInfo(){
    const user = sessionStorage.getItem("currentUser")
    return user
}

export function userLoader(){
    return userInfo();
}

