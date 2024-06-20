import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeatureInfo {  
  header: string;  
  description: string;  
  imageSource: string;  
}  
interface SingleFeatureProps {  
  info: FeatureInfo;  
}  

export default function Features() {
  const featureInfo = [
    {
      header: "No more switching\nbetween files",
      description: "To add missing context: directly reference code by including other files in the chat by adding '@filename'. \n\n This also works for folders, docs, terminal content, codebase, and more 😈 ",
      imageSource: "https://s3-alpha-sig.figma.com/img/7f2c/7849/66cefeccfdadce253b814003bc6eb932?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lm~eIoDLovJFFV4BgGBdGGR2q62yBvTV0Bj7locbGT1ai5TrxHEl35ulH6~lnAEZi5im81i8z37vujv1W45ZU8iRAZKDBtdM8OkgMmeA4XZNKUMsy0aozeOQ84FhiylATOBGMfGtwJUxFbomtA4FZV7jTCc1v2NdvmoxAfTWHrMD8G-CMcB0i3sW-VassT7b~U6XIch12NzYEEoZ5y2OQJQmR4l3o3XumaYeOm7KuXhvujflKr-1G4ZcZMyx6B9~QjI0C2OLiSl8LQQilwE60lc2T6KLkgPptl27Gp2WG2ArT-8hCmk4E-vrwXT7RA~1bjNQtQz3eTukoNPIMifdEA__"
    },


    {
      header: "No more tedious changes,\nor forgetting language\nsyntax",
      description: "Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep. \n\n Here, we ask Pear to help us handle edge cases 😏",
      imageSource: "https://s3-alpha-sig.figma.com/img/9229/8c19/f69e8c788124e01751223a500df85aea?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBte2jUC56Kr11M1WApQo-LQyYWAIYyxrmSVNyOgOZKMPAfN0Wem7dACcXkpI8T-ytGA~pA-CHwyZ9fxKAlD88kBI1ZAgFmDEDCsIhuBBOVYtc0XyPkC2S0R~yQAqgUUMUqG8Si34HvSDfq4N9x1vcZi3osCfpbPY7vFKJCze-E538Hw-7aA4wWAC1h-MLnPM0XvMZoFwPwBXB95ogiKaG8qGfFlSegAnupb2sqR2TmfLse6dG5jqk-dOpzUF3zbnH-9Q-nkJK9Fmdw~LHvj4z3wcpN75bWpNSgzyuXR3GXwJPxamvxs9Af9VNj8l2DCS~p4YLe-C1iouGrkV-h-yw__"
    },

    {
      header: "No more tiresome\ncopy pasting.",
      description:"Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows).\n\n Prompt it right away 😎",
      imageSource: "https://s3-alpha-sig.figma.com/img/84e7/f5f7/d4fd2d4731a8b34bba6ea49aaa93fc2e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTnsx4tuu8Abf3fDOvjyhZmriONDkCKc0FjEzJn~dJC48cXCi2n6oqXzWOjGCr20CQRbTH6S9yIn7Afgm7Sq~zvSGXLR6h7ZmD-ogBAX5HkO9XBANOefSWiRBCn~IvC5JlKFwMBiPvtw8abggElNFwfS4LdvSxA~k-QgEWhgrxg5irFkcQKGR-dUrehhTU-WDoKusPIjmyD09V4UBWcJ83c9FyllMi03ul-bpxnQYK2L-KPRavLpdWERCNfOaqbH-TjvdlrqR62-hOJ2dQIPMGQTDWDuYa9xEzny0muRItEIjO-xOA-2~d458wBaDlP6zp8azsGchmtEoqpSvZSwig__"

    }
  ]



  return (
    <section className="flex flex-col justify-evenly">
      {featureInfo.map((info, index) => (
        <SingleFeature key={index} info={info}/>
      ))}
    </section>
  )
}

function SingleFeature(props: SingleFeatureProps) {

  return (
      <div className="flex flex-col m-24 items-center lg:flex-row lg:max-w-full lg:justify-around">
          <div className="flex flex-col justify-center content-evenly text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-xl lg:text-4xl" style={{ color:"#4CC9A7", fontWeight:"500", whiteSpace: "pre-line" }} data-aos="fade-up" data-aos-delay="600">{props.info.header}</h1>
              <br/>
              <div className="text-base" style={{ whiteSpace: "pre-line" }} data-aos="fade-up" data-aos-delay="600"> {props.info.description} </div>
          </div>
          <div className=" lg:w-[870px] md:w-[600px] :w-[325px]">
              <AspectRatio ratio={3 / 2}>
                  <Image src={props.info.imageSource} alt="Image" className="rounded-lg object-cover" fill data-aos="fade-up" data-aos-delay="600" unoptimized/>
              </AspectRatio>
          </div>
      </div>
  )
}
