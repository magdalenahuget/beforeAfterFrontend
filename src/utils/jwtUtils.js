export const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export const getUserIdFromToken = () => {
    const jwtToken = sessionStorage.getItem('jwt');
    const decodedToken = parseJwt(jwtToken);
    return decodedToken ? decodedToken.userId : null;
};