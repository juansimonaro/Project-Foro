import JsonWebToken from "jsonwebtoken";

const Sing = (payload, isAccessToken) => {
    return JsonWebToken.Sing(
        payload, 
        isAccessToken
            ? process.env.TOKEN_SECRET 
            : process.env.REFRESH_TOTKEM,
        {
            algorithm: "HS256",
            expiresIn: 3600,
        })
}

// Crear token
export const AccessToken = (usuario) => {
    return Sing({usuario}, true);
}

// Refrescar token
export const RefreshToken = (usuario) => {
    return Sing({usuario}, false)
}