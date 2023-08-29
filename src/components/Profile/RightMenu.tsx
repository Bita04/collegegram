import { List, ListItem, Image } from "@chakra-ui/react"
import overview from "/assets/images/overview.svg";
import people from "/assets/images/people.svg";
import myCollegegram from "/assets/images/myCollegegram.svg";

interface Props {
    className: string
}

function RightMenu({className} : Props) {
  return (
    <List className={className} spacing={3}>
  <ListItem>
    <Image display={'inline-block'} src={overview} />
    <a className="color-primary mr-3 font-normal" href="#">خانه</a>
  </ListItem>
  <ListItem marginTop={'28px!important'}>
    <Image display={'inline-block'} src={people} />
    <a className="color-primary mr-3 font-normal" href="#">کالج گرامی‌ها</a>
  </ListItem>
  <ListItem marginTop={'28px!important'}>
    <Image display={'inline-block'} src={myCollegegram} />
    <a className="color-secondary mr-3 font-normal" href="#">کالج گرام من</a>
  </ListItem>
</List>
  )
}

export default RightMenu