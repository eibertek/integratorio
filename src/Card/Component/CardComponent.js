import React from "react";
import { connect } from 'react-redux'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PlaceHolder from '../../Library/Component/Placeholder';
import ImageComponent from '../../Library/Component/ImageComponent';
import imagePlaceholder from '../../assets/placeholder1.jpg';

import "../Styles/index.scss";

function CardComponent(props) {
  const { image, userInfo } = props;
  console.log(props.match.params);
  return (
    <Card className="card">
      <CardContent className="card-container">
          <ImageComponent className="image" image={image || imagePlaceholder} width={400} height={500} />
          {userInfo ? <PlaceHolder className="comments" content="comentarios" />: null}
          <PlaceHolder className="tags selected" content="tags" />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {};

const mapStateToProps = (state) => ({
    file: state.card.fileUploaded,
    userInfo: state.user.userInfo,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)

//export default CardComponent;
/*


*/