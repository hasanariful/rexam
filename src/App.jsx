import Flex from "./Components/Flex"
import Heading from "./Components/Heading"
import Image from "./Components/Image"
import Paragraph from "./Components/Paragraph"
import Estate from "./assets/estate.png"
import Play from "./assets/play.png"
import Button from "./Components/Button"
import Container from "./Components/Container"
import { useRef } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSlider } from "react-icons/bi";


function App() {

  let dropRef1 = useRef(null)
  let dropRef2 = useRef(null)
  let dropRef3 = useRef(null)


  let handleClick1 =()=>{
    if (dropRef1.current.style.display == "block") {
      dropRef1.current.style.display = "none"
    }
    else{
      dropRef1.current.style.display = "block"
    }
  }

  let handleClick2 =()=>{
    if (dropRef2.current.style.display == "block") {
      dropRef2.current.style.display = "none"
    }
    else{
      dropRef2.current.style.display = "block"
    }
  }

  let handleClick3 =()=>{
    if (dropRef3.current.style.display == "block") {
      dropRef3.current.style.display = "none"
    }
    else{
      dropRef3.current.style.display = "block"
    }
  }
  
 
  return (
    <>
    <section>
      <Container>

        <div className="w-[1200px] h-auto bg-bannerBg py-[100px] relative">
          <Flex className="w-[180px] justify-between">
            <Image src={Estate}/>
            <Paragraph text="Real Estate Agency"/>
          </Flex>
          <Heading className="font-pop font-bold text-[60px] text-black w-[700px]" text="Find #Your Dream# House By Us" as="h1"/>
          <Heading className="font-pop font-regular text-[16px] text-black " text="Lorem ipsum dolor sit amet, consectetur adipisicing" as="h2"/>
          <Flex>
            <Button className="bg-buttonBg py-[10px] px-[20px] my-[20px] font-pop font-regular text-[14px] text-white " text="View Properties"/>
            <Image src={Play}/>
          </Flex>

          <div className="w-[90%] ml-[60px] mt-[50px] absolute bg-white rounded-lg drop-shadow-lg">

              <Flex className="justify-evenly items-center gap-4 py-[20px]">

                  <div className="h-[50px] w-[270px] py-[10px] px-[20px] bg-white text-center rounded-lg border border-borderColor cursor-pointer" onClick={handleClick1}>
                    <Flex className="justify-between items-center">
                      <Paragraph text="Choose Area" className="font-nun font-bold text-[15px] text-phText"/>
                      <RiArrowDropDownLine className="h-[30px] w-[30px]"/>
                    </Flex>
                    <div className=" hidden" ref={dropRef1}>
                      <ul className="bg-gray-500 rounded-lg">
                        <li>BD</li>
                        <li>USA</li>
                        <li>UAE</li>
                        <li>UK</li>
                      </ul>
                    </div>
                  </div>

                  <div className="h-[50px] w-[270px] py-[10px] px-[20px] bg-white text-center rounded-lg border border-borderColor cursor-pointer" onClick={handleClick2}>
                  <Flex className="justify-between items-center">
                      <Paragraph text="Property Satus" className="font-nun font-bold text-[15px] text-phText"/>
                      <RiArrowDropDownLine className="h-[30px] w-[30px]"/>
                  </Flex>
                    <div className=" hidden" ref={dropRef2}>
                      <ul className="bg-gray-500 rounded-lg">
                        <li>Active</li>
                        <li>Pending</li>
                        <li>Sold</li>
                        <li>Coming Soon</li>
                      </ul>
                    </div>
                  </div>

                  <div className="h-[50px] w-[270px] py-[10px] px-[20px] bg-white text-center rounded-lg border border-borderColor cursor-pointer" onClick={handleClick3}>
                  <Flex className="justify-between items-center">
                      <Paragraph text="Property Type" className="font-nun font-bold text-[15px] text-phText"/>
                      <RiArrowDropDownLine className="h-[30px] w-[30px]"/>
                  </Flex>
                    <div className=" hidden" ref={dropRef3}>
                      <ul className="bg-gray-500 rounded-lg">
                        <li>Residential</li>
                        <li>Commercial</li>
                        <li>Duplex</li>
                        <li>Bungalow</li>
                      </ul>
                    </div>
                  </div>

                  <BiSlider/>

                  <Button className="bg-buttonBg py-[10px] px-[30px] font-pop font-regular text-[14px] text-white text-center uppercase " text="Find Now"/>

              </Flex>

          </div>

          

        </div>
     </Container>    
    </section>

    </>
  )
}

export default App

