import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
        {
          id: 'm1',
          title: 'DAZY',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/21/161899385959ef49fbf8b616fa3bc9e7d0a6fc62fb_thumbnail_900x.webp',
          address: ' เสื้อเบลาส์ ปุ่มด้านหน้า ผ้าฝ้ายลายตาราง ไม่เป็นทางการ',
          description: 'This is a first meetup!',
        },
        {
          id: 'm2',
          title: 'DAZY',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/22/16190795053de2aab4785aa99e60fdd101d062cf5b_thumbnail_900x.webp',
          address: 'เสื้อครอป ผ้ายืด ลายผลไม้',
          description: 'This is a second meetup!',
        },
        {
          id: 'm3',
          title: 'DAZY',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/26/161941909487d72def7117306823c18fa75dc1ef47_thumbnail_900x.webp',
          address: 'กระโปรงยีนส์ กระเป๋าเสื้อ เรียบง่าย',
          description: 'This is a second meetup!',
        },
        {
          id: 'm4',
          title: 'DAZY',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/06/1617698818b1743d74ae559fe928afeea896bd4e0d_thumbnail_900x.webp',
          address: ' เสื้อยืดสโลแกน',
          description: 'This is a second meetup!',
        },
        {
          id: 'm5',
          title: 'skirt',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/22/16190796137f1fc6beada9f09ce5f48b382926d328_thumbnail_900x.webp',
          address: 'กระโปรง แยก เรียบง่าย',
          description: 'This is a second meetup!',
        },
        {
          id: 'm6',
          title: 'Dazy',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/15/16184852932c9c7bcca2d69ac63c7c2b71daf9ff51_thumbnail_900x.webp',
          address: 'เสื้อยืดสโลแกนเท่ๆ',
          description: 'This is a second meetup!',
        },
        {
          id: 'm7',
          title: 'Suit',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/20/16189006228f89e0f25063b780d48c23ba9456fa41_thumbnail_900x.webp',
          address: 'เสื้อสูทเรียบง่าย',
          description: 'This is a second meetup!',
        },
        {
          id: 'm8',
          title: 'DAZY',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/22/16190636364675f0ccb2c3c82599637a948cea8f2f_thumbnail_900x.webp',
          address: 'เสื้อเบลาสมีกระเป๋าเสื้อ เนื้อผ้าลายหมากรุก',
          description: 'This is a second meetup!',
        },
        {
          id: 'm9',
          title: 'เสื้อแขนยาว',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/22/1619089187021cd23c9cdc71a50d8737dea07fbb4a_thumbnail_900x.webp',
          address: 'เสื้อยืดแขนยาว พิมพ์ตัวอักษร',
          description: 'This is a second meetup!',
        },
        {
          id: 'm10',
          title: 'Dress',
          image:
            'https://img.ltwebstatic.com/images3_pi/2021/04/22/16190777933cf443172b3cfda4c2af2117f278d14a_thumbnail_900x.webp',
          address: 'เดรสลายผักกาดหอมดอกไม้',
          description: 'This is a second meetup!',
        },

];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

export default HomePage;
