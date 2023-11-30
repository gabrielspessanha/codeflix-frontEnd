import { NextResponse } from "next/server";

export async function GET(request: Request){
  const token = request.body
  console.log(token)

  try{
    const res = await fetch(process.env.NEXT_PUBLIC_BASEURL +'/courses/featured',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).catch(error => NextResponse.json({error: error}))
    return NextResponse.json(res)
  }catch(error){
    return NextResponse.json({status: 400, error: error})
  }
}