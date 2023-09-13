import { useEffect } from "react"

type Props = {
  name: string,
  allusers: {
    name: string,
    id: string,
    city: string,
    age: number,
    gender: "male" | "female",
    phone: string,
    email: string
  }[]
  }
  const Users = (props:Props) => {
    return (
      <>
          <div>Welcome {props.name}</div>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {props.allusers ? props.allusers.map((item)=> (<li className="border p-4 px-10 text-ellipsis overflow-hidden" key={item.id}>
              <h1>{item.name}</h1>
  
            </li>)) : ''}
  
          </ul>


          <div className="flex flex-row gap-5 mt-20 mb-20">
            {/* <div className="basis-1/6 h-[100px] border">test</div>
            <div className="basis-2/6 h-[100px] border">test</div> */}
            <div className="basis-3/6 h-[100px] border">Testttt 4</div>
            {/* <div className="basis-1/6 h-[100px] border">test</div>
            <div className="basis-1/6 h-[100px] border">test</div> */}
            <div className="basis-2/6 h-[100px] border">test</div>
            <div className="basis-full h-[100px] border">test</div>
            <div className="basis-3/6 h-[100px] border">Testttt 4</div>
           
          </div>

          <div className="flex flex-row">
            <div className="border p-5 basis-[59%]">Test</div>
            <div className="border p-5 basis-[200px] shrink-0 grow-[2]">Test Mansour Shrink</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
          </div>

          <div className="flex flex-row">
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
            <div className="border p-5 grow">Test</div>
          </div>

          <div className="grid grid-cols-4">
            <div className="border p-5 row-span-2">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5">Test</div>
            <div className="border p-5 col-span-2">Test</div>
            <div className="border p-5">Test</div>
          </div>

          <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-3 mt-20">
            <div className="border p-5 col-span-2"> tesst </div>
            <div className="border p-5 row-span-3"> tesst </div>
            <div className="border p-5">Test</div>
            <div className="border p-5 col-span-2">Test</div>
            <div className="border p-5">Test</div>
          </div>

          <div className="flex justify-between">
          <div className="order-last">01</div>
          <div>02</div>
          <div>03</div>
        </div>

        <div className="grid grid-flow-col auto-cols-max hover:auto-cols-min">
          <div className="border p-5">01</div>
          <div className="border p-5">02</div>
          <div className="border p-5">03</div>
          <div className="border p-5">04</div>

        </div>

        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-20">
          <div className="border p-5 h-[200px] col-span-3">01</div>
          <div className="border p-5 h-[300px]">02</div>
          <div className="border p-5 h-[300px]">03</div>
          <div className="border p-5 h-[300px] col-span-3">04</div>
        </div>
        <div className="grid grid-cols-5 grid-rows-5 mt-20">
          <div className="border p-5 h-[50px]">01</div>
          <div className="border p-5 h-[50px]">02</div>
          <div className="border p-5 h-[50px]">03</div>
          <div className="border p-5 h-[50px]">04</div>
          <div className="border p-5 h-[50px]">01</div>
          <div className="border p-5 h-[50px]">02</div>
          <div className="border p-5 h-[50px] col-span-3 row-span-3 border-0">03</div>
          <div className="border p-5 h-[50px]">04</div>
          <div className="border p-5 h-[50px]">01</div>
          <div className="border p-5 h-[50px]">02</div>
          <div className="border p-5 h-[50px]">03</div>
          <div className="border p-5 h-[50px]">04</div>
          <div className="border p-5 h-[50px]">03</div>
          <div className="border p-5 h-[50px]">04</div>
          <div className="border p-5 h-[50px]">04</div>
          <div className="border p-5 h-[50px]">03</div>
          <div className="border p-5 h-[50px]">04</div>
        </div>


        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 border p-5">01</div>
          <div className="col-span-2 border p-5">02</div>
          <div className="row-span-2 col-span-2 border p-5">03</div>
        </div>

        <div className="grid grid-rows-3 grid-flow-col grid-flow-row mt-20 gap-4">
        <div className="border p-5 col-span-3">01</div>
        <div className="border p-5 row-span-2">02</div>
        <div className="border p-5 col-span-3">03</div>
        <div className="border p-5 col-span-4">04</div>
        <div className="border p-5 col-span-2">05</div>
        <div className="border p-5">06</div>
        <div className="border p-5 row-span-2">07</div>
        <div className="border p-5">08</div>
        </div>


        <div className="grid grid-rows-3 grid-flow-col grid-flow-row mt-20 gap-4">
        <div className="border p-5 col-span-3">01</div>
        <div className="border p-5 row-span-2">02</div>
        <div className="border p-5 col-span-2">03</div>
        <div className="border p-5 col-span-2">03</div>
        <div className="border p-5 row-span-2">04</div>
        <div className="border p-5 col-span-5">05</div>
        <div className="border p-5">08</div>

        <div className="border p-5">08</div>

        <div className="border p-5">08</div>

        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>
        <div className="border p-5">08</div>

        </div>


        <div className="flex flex-row mt-20">
          <div className="border p-5 basis-1/12">Test</div>
          <div className="border p-5 basis-2/12 shrink-0 grow">Test</div>
          <div className="border p-5 basis-4/12">Test</div>
          <div className="border p-5 basis-5/12">Test</div>
        </div>

        <div className="grid grid-rows-4 grid-flow-col grid-cols-4 mt-20 mb-20">
          <div className="border p-5">1</div>
          <div className="border p-5">2</div>
          <div className="border p-5 row-span-2">3</div>
          <div className="border p-5">5</div>
          <div className="border p-5 col-span-3 row-span-2">6</div>
          <div className="border p-5">7</div>
          <div className="border p-5 col-span-3">8</div>
          <div className="border p-5">9</div>
          <div className="border p-5">11</div>
          <div className="border p-5">13</div>
          <div className="border p-5">14</div>
          <div className="border p-5">15</div>
        </div>


        <div className="grid grid-flow-col grid-cols-4 grid-rows-2 auto-cols-max mt-20 mb-20">
          <div className="border p-5">01</div>
          <div className="border p-5">02</div>
          <div className="border p-5">03</div>
          <div className="border p-5">01</div>
          <div className="border p-5">02</div>
          <div className="border p-5">03</div>
          <div className="border p-5">01</div>
          <div className="border p-5">02</div>
          <div className="border p-5">03</div>
        </div>


        <div className="grid grid-cols-3 gap-4 mt-20 mb-2 place-items-center">
          <div className="border p-5">01</div>
          <div className="border p-5 place-self-end">02</div>
          <div className="border p-5">03</div>
          <div className="border p-5">04</div>
          <div className="border p-5">05</div>
          <div className="border p-5">06</div>
        </div>



      </>
  
    )
  }
  export default Users