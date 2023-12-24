import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    
    let res = await fetch(
      `http://38.242.254.49:5000/api/modbus/holdingRegister/${params.id}`
    );
    const data: { value: string } = await res!.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data: { value: string } = await request.json();

  const value = parseInt(data.value);
  
  
  try {
    let res: Response = await fetch(
      `http://38.242.254.49:5000/api/modbus/holdingRegister/${params.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You may include other headers as needed
        },
        body: JSON.stringify({ value }),
      }
    );

    return NextResponse.json(await res.json());
  } catch (error) {
    console.log(error);
  }
}
