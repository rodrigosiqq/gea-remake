
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password:{label: 'password', type:'text'}
            },

            async authorize(credentials, req){
                const response = await fetch('http://10.40.0.15:8080/users/login', {
                    method: 'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                const user = await response.json()

                if (user && response.ok){
                    return user
                }
                return null

            }
        })
    ],
    pages:{
        signIn: '/'
    }
}

const handler = NextAuth(nextAuthOptions)

export {handler as GET, handler as POST, nextAuthOptions}