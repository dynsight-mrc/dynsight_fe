import { NextRequest, NextResponse } from "next/server";


interface CoilBody {
  value: 1 | 0;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let res;
  try {
    res = await fetch(`http://38.242.254.49:5000/api/modbus/coil/${params.id}`);
  } catch (error) {
    console.log(error);
  }
  const data: {value:boolean} = await res!.json();

  return NextResponse.json(data);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data: CoilBody = await request.json();
 
 
  
  
  const value = data.value;

  try {
    let res: Response = await fetch(
      `http://38.242.254.49:5000/api/modbus/coil/${params.id}`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // You may include other headers as needed
        },
        body: JSON.stringify({value}),
      }
    );

    return NextResponse.json(await res.json());
  } catch (error) {
    console.log(error);
  }
}
