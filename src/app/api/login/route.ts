import { NextResponse } from "next/server"

export async function POST (request: Request){
  const body = await request.json()

  try{
    const res = await fetch(process.env.NEXT_PUBLIC_BASEURL+'/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(body)
    })
    if(!res.ok){
      return NextResponse.json({login:  false, error: 'Senha incorreta'})
    }
    const responseData = await res.json()
    
    return NextResponse.json({login: true, token: responseData.token})
  }catch(error) {
    return NextResponse.json({login: false, error: "Error na requisição"})
  }
}