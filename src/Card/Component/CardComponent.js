import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PlaceHolder from '../../Library/Component/Placeholder';
import ImageComponent from '../../Library/Component/ImageComponent';
import imagePlaceholder from '../../assets/placeholder1.jpg';

import "../Styles/index.scss";

function CardComponent(props) {
  const { image, comments, tags } = props;
  return (
    <Card className="card">
      <CardContent className="card-container">
          <ImageComponent className="image" image={image || imagePlaceholder} width={400} height={500} />
          <PlaceHolder className="comments" content="comentarios" />
          <PlaceHolder className="tags selected" content="tags" />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {};

export default CardComponent;
/*
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)
*/