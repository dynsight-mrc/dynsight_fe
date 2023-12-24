import { NextRequest, NextResponse } from "next/server";



export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {    
    let res = await fetch(`http://38.242.254.49:5000/api/modbus/discreteinput/${params.id}`);
    const data: {value:boolean} = await res!.json();
   
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
  
}