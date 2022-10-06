import Figure from 'react-bootstrap/Figure';

function Image() {
  return (
    <Figure>
      <Figure.Image
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            width:"50vw",
            marginTop:"10%"
           
          }}
        alt="171x180"
        src="https://th.bing.com/th/id/OIP.gKHlHYp3ipH49g3YU_M3awHaG0?pid=ImgDet&rs=1"
      />
      
    </Figure>
  );
}

export default Image;